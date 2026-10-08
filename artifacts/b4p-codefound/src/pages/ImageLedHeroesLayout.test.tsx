import { readFileSync } from 'node:fs';
import path from 'node:path';
import { render, within } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import CoreValuesPage from './CoreValuesPage';
import ImpactPage from './ImpactPage';
import StorePage from './StorePage';
import TheoryOfChangePage from './TheoryOfChangePage';
import WhereWeWorkPage from './WhereWeWorkPage';

const stylesheet = readFileSync(path.resolve(process.cwd(), 'src/index.css'), 'utf8');

vi.mock('@/components/layout/Header', () => ({
  Header: () => <header data-testid="site-header" />,
}));

vi.mock('@/components/layout/Footer', () => ({
  Footer: () => <footer data-testid="site-footer" />,
}));

const heroCases = [
  {
    name: 'Impact',
    route: 'impact',
    render: () => <ImpactPage />,
    visualTestId: 'hero-impact-visual',
    imageTestId: 'img-impact-hero',
    overlay: 'badge',
  },
  {
    name: 'Core values',
    route: 'core-values',
    render: () => <CoreValuesPage />,
    visualTestId: 'hero-core-values-visual',
    imageTestId: 'img-values-hero',
    overlay: undefined,
  },
  {
    name: 'Store',
    route: 'store',
    render: () => <StorePage />,
    visualTestId: 'hero-store-visual',
    imageTestId: 'img-store-hero',
    overlay: 'caption',
  },
  {
    name: 'Where we work',
    route: 'where-we-work',
    render: () => <WhereWeWorkPage />,
    visualTestId: 'hero-where-we-work-visual',
    imageTestId: 'img-where-hero',
    overlay: 'caption',
  },
  {
    name: 'Theory of change',
    route: 'theory-of-change',
    render: () => <TheoryOfChangePage />,
    visualTestId: 'hero-theory-of-change-visual',
    imageTestId: 'img-theory-hero',
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

describe.each(viewports)('image-led hero layout at $name width', ({ width }) => {
  beforeEach(() => {
    setViewport(width);
  });

  afterEach(() => {
    setViewport(1024);
  });

  it.each(heroCases)('$name stays contained and readable', (heroCase) => {
    const { container, unmount } = render(heroCase.render());
    const hero = container.querySelector<HTMLElement>(
      `[data-hero-route="${heroCase.route}"]`,
    );

    expect(hero, `${heroCase.name} hero route`).not.toBeNull();
    if (!hero) {
      unmount();
      return;
    }

    expect(
      stylesheet,
      `${heroCase.name} hero at ${width}px must clip offset layers horizontally`,
    ).toMatch(/\.image-led-hero\s*\{[^}]*overflow:\s*clip\s*;/s);
    expect(
      stylesheet,
      `${heroCase.name} hero at ${width}px must size its visual box before applying offsets`,
    ).toMatch(/\.image-led-hero__visual\s*\{[^}]*box-sizing:\s*border-box\s*;/s);
    expect(
      stylesheet,
      `${heroCase.name} hero at ${width}px overlays must stay readable above the image`,
    ).toMatch(/\.image-led-hero \[data-hero-overlay\]\s*\{[^}]*z-index:\s*2\s*;/s);

    const visual = within(hero).getByTestId(heroCase.visualTestId);
    expect(visual).toHaveClass('image-led-hero__visual');

    const image = within(visual).getByTestId(heroCase.imageTestId);
    expect(image).toBeVisible();
    expect(image).toHaveAttribute('alt');
    expect(image).toHaveAttribute('src');

    if (heroCase.overlay) {
      const overlay = visual.querySelector<HTMLElement>(
        `[data-hero-overlay="${heroCase.overlay}"]`,
      );
      expect(
        overlay,
        `${heroCase.name} hero at ${width}px overlay`,
      ).not.toBeNull();
      expect(overlay).toBeVisible();
      expect(overlay).not.toBeEmptyDOMElement();
    }

    unmount();
  });
});