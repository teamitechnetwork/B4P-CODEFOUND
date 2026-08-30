import { readFileSync } from 'node:fs';
import path from 'node:path';
import { render, within } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import EconomicDevelopmentProgramPage from './EconomicDevelopmentProgramPage';
import PeacebuildingProgramPage from './PeacebuildingProgramPage';
import ProgramDetailPage from './ProgramDetailPage';
import ProgramDirectoryPage from './ProgramDirectoryPage';
import WhatWeDoPage from './WhatWeDoPage';

const stylesheet = readFileSync(path.resolve(process.cwd(), 'src/index.css'), 'utf8');

vi.mock('@/components/layout/Header', () => ({
  Header: () => <header data-testid="site-header" />,
}));

vi.mock('@/components/layout/Footer', () => ({
  Footer: () => <footer data-testid="site-footer" />,
}));

const heroCases = [
  {
    name: 'program landing',
    variant: 'landing',
    eyebrow: 'What we do',
    title: 'From shared purpose to practical progress.',
    imageAlt: 'B4P CODEFOUND participants gathered outside a community venue',
    backLink: undefined,
    primaryAction: {
      label: 'Explore program regions',
      href: '/programs/global',
    },
    render: () => <WhatWeDoPage />,
  },
  {
    name: 'peacebuilding pillar',
    variant: 'pillar',
    eyebrow: 'Operational pillar 01',
    title: 'Peacebuilding',
    imageAlt: 'Community gathering for peacebuilding in Liberia',
    backLink: {
      label: 'Back to What We Do',
      href: '/what-we-do',
    },
    primaryAction: {
      label: 'See related programs',
      href: '/programs/global',
    },
    render: () => <PeacebuildingProgramPage />,
  },
  {
    name: 'economic development pillar',
    variant: 'pillar',
    eyebrow: 'Operational pillar 02',
    title: 'Economic Development & Empowerment',
    imageAlt: 'Women leaders gathered during a B4P CODEFOUND event',
    backLink: {
      label: 'Back to What We Do',
      href: '/what-we-do',
    },
    primaryAction: {
      label: 'See related programs',
      href: '/programs/liberia',
    },
    render: () => <EconomicDevelopmentProgramPage />,
  },
  {
    name: 'USA regional directory',
    variant: 'regional',
    eyebrow: 'Program region',
    title: 'USA Programs',
    imageAlt: 'Women gathered through Columbus Women Connect in Ohio',
    backLink: {
      label: 'Back to What We Do',
      href: '/what-we-do',
    },
    primaryAction: {
      label: 'Browse programs',
      href: '#regional-programs',
    },
    render: () => <ProgramDirectoryPage kind="usa" />,
  },
  {
    name: 'global program detail',
    variant: 'detail',
    eyebrow: 'Global Programs',
    title: 'Global Youth Exchange Forum (GYEF)',
    imageAlt: 'Young people and community leaders gathered through B4P CODEFOUND',
    backLink: {
      label: 'Back to Global Programs',
      href: '/programs/global',
    },
    primaryAction: {
      label: 'View all Global Programs',
      href: '/programs/global',
    },
    render: () => (
      <ProgramDetailPage region="global" slug="global-youth-exchange-forum" />
    ),
  },
] as const;

const viewports = [
  { name: 'mobile', width: 375 },
  { name: 'tablet below breakpoint', width: 859 },
  { name: 'tablet at breakpoint', width: 860 },
  { name: 'wide tablet', width: 1024 },
  { name: 'desktop', width: 1440 },
] as const;

function setViewport(width: number) {
  Object.defineProperty(window, 'innerWidth', {
    configurable: true,
    value: width,
  });
  window.dispatchEvent(new Event('resize'));
}

function getProgramHero(container: HTMLElement, name: string) {
  const hero = container.querySelector<HTMLElement>('.program-hero');
  expect(hero, `${name} hero`).not.toBeNull();
  if (!hero) {
    throw new Error(`${name} hero was not rendered`);
  }
  return hero;
}

describe.each(viewports)('program hero at $name width', ({ width }) => {
  beforeEach(() => {
    setViewport(width);
  });

  afterEach(() => {
    setViewport(1024);
  });

  it.each(heroCases)(
    '$name preserves its title, image, navigation, and primary next step',
    (heroCase) => {
      const { container, unmount } = render(heroCase.render());
      const hero = getProgramHero(container, heroCase.name);

      expect(hero).toHaveClass(`program-hero--${heroCase.variant}`);
      expect(hero).toHaveAccessibleName(`${heroCase.eyebrow} hero`);
      expect(within(hero).getByRole('heading', { level: 1 })).toHaveTextContent(
        heroCase.title,
      );

      const image = within(hero).getByRole('img', { name: heroCase.imageAlt });
      expect(image).toBeVisible();
      expect(image).toHaveAttribute('alt', heroCase.imageAlt);
      expect(image).toHaveAttribute('src');

      const visual = hero.querySelector<HTMLElement>('.program-hero__visual');
      expect(visual).not.toBeNull();
      expect(visual).toBeVisible();
      expect(visual?.querySelector('.program-hero__badge')).not.toBeNull();

      if (heroCase.backLink) {
        const backLink = within(hero).getByRole('link', {
          name: heroCase.backLink.label,
        });
        expect(backLink).toHaveAttribute('href', heroCase.backLink.href);
        expect(backLink).toHaveClass('program-hero__back');
        expect(backLink).toBeVisible();
      } else {
        expect(hero.querySelector('.program-hero__back')).toBeNull();
      }

      const primaryAction = within(hero).getByRole('link', {
        name: heroCase.primaryAction.label,
      });
      expect(primaryAction).toHaveAttribute('href', heroCase.primaryAction.href);
      expect(primaryAction).toHaveClass('program-hero__action');
      expect(primaryAction).not.toHaveClass('program-hero__action--quiet');
      expect(primaryAction).toBeVisible();

      unmount();
    },
  );
});

describe('program hero responsive layout safeguards', () => {
  it('clips offset visual layers and keeps the hero in the B4P blue system', () => {
    expect(stylesheet).toMatch(
      /\.program-hero\s*\{[^}]*overflow:\s*hidden\s*;/s,
    );
    expect(stylesheet).toMatch(
      /\.program-hero__grid\s*\{[^}]*width:\s*min\(100% - 3rem, 90rem\)\s*;/s,
    );
    expect(stylesheet).toMatch(
      /--hero-blue:\s*#016eb4;[\s\S]*?--hero-deep:\s*#016eb4;/s,
    );
    expect(stylesheet).toMatch(
      /min-height:\s*clamp\(20rem,\s*45svh,\s*34rem\);/,
    );
    expect(stylesheet).toMatch(
      /\.program-hero__visual\s*\{[^}]*width:\s*100%\s*;[^}]*max-width:\s*36rem\s*;[^}]*min-height:\s*25rem\s*;/s,
    );
    expect(stylesheet).toMatch(
      /\.program-hero__badge\s*\{[^}]*z-index:\s*2\s*;/s,
    );
  });

  it('uses a single contained column below the breakpoint and two bounded columns above it', () => {
    expect(stylesheet).toMatch(
      /\.program-hero__grid\s*\{[^}]*grid-template-columns:\s*minmax\(0, 1fr\)\s*;/s,
    );
    expect(stylesheet).toMatch(
      /@media\s*\(min-width:\s*860px\)\s*\{[\s\S]*?\.program-hero__grid\s*\{[^}]*grid-template-columns:\s*minmax\(0, 1\.03fr\) minmax\(23rem, 0\.77fr\)\s*;/s,
    );
    expect(stylesheet).toMatch(
      /@media\s*\(max-width:\s*859px\)\s*\{[\s\S]*?\.program-hero__visual\s*\{[^}]*max-width:\s*33rem\s*;[^}]*min-height:\s*20rem\s*;/s,
    );
    expect(stylesheet).toMatch(
      /@media\s*\(max-width:\s*859px\)\s*\{[\s\S]*?\.program-hero__visual-card,\s*\.program-hero__visual-card img\s*\{[^}]*min-height:\s*20rem\s*;/s,
    );
  });

  it('keeps the two-column tablet layout compact around the breakpoint', () => {
    expect(stylesheet).toMatch(
      /@media\s*\(min-width:\s*860px\)\s*and\s*\(max-width:\s*1199px\)\s*\{[\s\S]*?\.program-hero__grid\s*\{[^}]*grid-template-columns:\s*minmax\(0, 1fr\) minmax\(20rem, 0\.9fr\)\s*;[^}]*gap:\s*clamp\(1\.75rem, 4vw, 3\.5rem\)\s*;/s,
    );
    expect(stylesheet).toMatch(
      /@media\s*\(min-width:\s*860px\)\s*and\s*\(max-width:\s*1199px\)\s*\{[\s\S]*?\.program-hero__visual,\s*\.program-hero--detail \.program-hero__visual\s*\{[^}]*max-width:\s*30rem\s*;[^}]*min-height:\s*22rem\s*;/s,
    );
    expect(stylesheet).toMatch(
      /@media\s*\(min-width:\s*860px\)\s*and\s*\(max-width:\s*1199px\)\s*\{[\s\S]*?\.program-hero__badge\s*\{[^}]*top:\s*-0\.7rem\s*;[^}]*right:\s*-0\.35rem\s*;/s,
    );
  });
});
