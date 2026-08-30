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
    '$name preserves its title, background image, navigation, and primary next step',
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

      expect(hero.querySelector('.program-hero__visual')).toBeNull();

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
  it('keeps the hero compact and in the B4P blue system', () => {
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
    expect(stylesheet).not.toMatch(/\.program-hero__visual/);
  });

  it('uses a single contained column at every viewport size', () => {
    expect(stylesheet).toMatch(
      /\.program-hero__grid\s*\{[^}]*grid-template-columns:\s*minmax\(0, 1fr\)\s*;/s,
    );
  });

  it('gives regional and detail pages a shorter hero treatment', () => {
    expect(stylesheet).toMatch(
      /\.program-hero--regional \.program-hero__grid,\s*\.program-hero--detail \.program-hero__grid\s*\{[^}]*min-height:\s*clamp\(16rem,\s*31svh,\s*24rem\);/s,
    );
    expect(stylesheet).toMatch(
      /\.program-hero--regional \.program-hero__description,\s*\.program-hero--detail \.program-hero__description\s*\{[^}]*max-width:\s*52rem;[^}]*margin-top:\s*1rem;/s,
    );
  });
});

describe('regional program card imagery', () => {
  it('keeps regional program cards text-first below the hero', () => {
    const { container, unmount } = render(<ProgramDirectoryPage kind="usa" />);

    expect(container.querySelectorAll('#regional-programs img')).toHaveLength(0);
    expect(container.querySelectorAll('#regional-programs a').length).toBeGreaterThan(0);

    unmount();
  });
});
