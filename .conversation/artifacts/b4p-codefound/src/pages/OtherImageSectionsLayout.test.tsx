import { readFileSync } from 'node:fs';
import path from 'node:path';
import { render } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import ColumbusWomenConnectPage from './ColumbusWomenConnectPage';
import OpportunityPage from './OpportunityPage';

const stylesheet = readFileSync(path.resolve(process.cwd(), 'src/index.css'), 'utf8');

vi.mock('@/components/layout/Header', () => ({
  Header: () => <header data-testid="site-header" />,
}));

vi.mock('@/components/layout/Footer', () => ({
  Footer: () => <footer data-testid="site-footer" />,
}));

const imageSectionCases = [
  {
    name: 'Columbus Women Connect',
    route: 'columbus-women-connect',
    render: () => <ColumbusWomenConnectPage />,
    imageSelector: '.cwc-hero__art img',
    overlay: 'badge',
  },
  {
    name: 'Volunteer opportunities',
    route: 'opportunity-volunteer',
    render: () => <OpportunityPage kind="volunteer" />,
    imageSelector: '.opportunity-hero__visual img',
    overlay: 'caption',
  },
  {
    name: 'Internship opportunities',
    route: 'opportunity-internship',
    render: () => <OpportunityPage kind="internship" />,
    imageSelector: '.opportunity-hero__visual img',
    overlay: 'caption',
  },
  {
    name: 'Jobs opportunities',
    route: 'opportunity-jobs',
    render: () => <OpportunityPage kind="jobs" />,
    imageSelector: '.opportunity-hero__visual img',
    overlay: 'caption',
  },
] as const;

const viewports = [
  { name: 'mobile', width: 375 },
  { name: 'desktop', width: 1440 },
] as const;

function setViewport(width: number) {
  Object.defineProperty(window, 'innerWidth', {
    configurable: true,
    value: width,
  });
  window.dispatchEvent(new Event('resize'));
}

describe.each(viewports)('offset image section layout at $name width', ({ width }) => {
  beforeEach(() => {
    setViewport(width);
  });

  afterEach(() => {
    setViewport(1024);
  });

  it.each(imageSectionCases)('$name stays contained and readable', (sectionCase) => {
    const { container, unmount } = render(sectionCase.render());
    const section = container.querySelector<HTMLElement>(
      `[data-overflow-route="${sectionCase.route}"]`,
    );

    expect(section, `${sectionCase.name} image section`).not.toBeNull();
    if (!section) {
      unmount();
      return;
    }

    expect(
      stylesheet,
      `${sectionCase.name} at ${width}px must clip offset layers horizontally`,
    ).toMatch(/\.offset-image-section\s*\{[^}]*overflow:\s*clip\s*;/s);
    expect(
      stylesheet,
      `${sectionCase.name} at ${width}px must size its visual box before applying offsets`,
    ).toMatch(/\.offset-image-section__visual\s*\{[^}]*box-sizing:\s*border-box\s*;/s);
    expect(
      stylesheet,
      `${sectionCase.name} at ${width}px overlays must stay readable above the image`,
    ).toMatch(/\.offset-image-section \[data-image-overlay\]\s*\{[^}]*z-index:\s*2\s*;/s);

    const visual = section.querySelector<HTMLElement>('.offset-image-section__visual');
    expect(visual, `${sectionCase.name} visual`).not.toBeNull();
    if (!visual) {
      unmount();
      return;
    }

    const image = visual.querySelector<HTMLImageElement>(sectionCase.imageSelector);
    expect(image, `${sectionCase.name} image`).not.toBeNull();
    expect(image).toBeVisible();
    expect(image).toHaveAttribute('alt');
    expect(image).toHaveAttribute('src');

    const overlay = visual.querySelector<HTMLElement>(
      `[data-image-overlay="${sectionCase.overlay}"]`,
    );
    expect(overlay, `${sectionCase.name} overlay`).not.toBeNull();
    expect(overlay).toBeVisible();
    expect(overlay).not.toBeEmptyDOMElement();

    unmount();
  });
});