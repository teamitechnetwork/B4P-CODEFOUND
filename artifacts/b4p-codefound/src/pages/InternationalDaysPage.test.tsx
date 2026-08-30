import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import InternationalDayDetailPage from './InternationalDayDetailPage';
import InternationalDaysPage from './InternationalDaysPage';

vi.mock('@/components/layout/Header', () => ({
  Header: () => <header data-testid="site-header" />,
}));

vi.mock('@/components/layout/Footer', () => ({
  Footer: () => <footer data-testid="site-footer" />,
}));

const storageKey = 'b4p-international-days-planning-list';

function savedTitles() {
  return JSON.parse(window.localStorage.getItem(storageKey) ?? '[]') as string[];
}

function openPlanningList() {
  fireEvent.click(screen.getByRole('button', { name: /my planning list/i }));
}

function readBlob(blob: Blob) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(reader.error);
    reader.readAsText(blob);
  });
}

describe('international days planning list', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('saves a curated moment from the directory and restores it after remount', async () => {
    const directory = render(<InternationalDaysPage />);

    fireEvent.click(screen.getAllByRole('button', { name: 'Save for planning' })[0]);
    await waitFor(() => {
      expect(savedTitles()).toEqual(['International Day of Education']);
    });

    directory.unmount();
    render(<InternationalDaysPage />);

    expect(screen.getByRole('button', { name: /my planning list 01/i })).toBeInTheDocument();
    openPlanningList();
    expect(screen.getByRole('heading', { name: 'Keep these moments close.' })).toBeInTheDocument();
  });

  it('carries detail-page saves and removals back to the directory after navigation', async () => {
    const detail = render(
      <InternationalDayDetailPage slug="international-day-of-women-in-multilateralism" />,
    );

    fireEvent.click(screen.getByRole('button', { name: 'Save for planning' }));
    await waitFor(() => {
      expect(savedTitles()).toEqual(['International Day of Women in Multilateralism']);
    });

    detail.unmount();
    const directory = render(<InternationalDaysPage />);
    expect(screen.getByRole('button', { name: /my planning list 01/i })).toBeInTheDocument();

    directory.unmount();
    render(
      <InternationalDayDetailPage slug="international-day-of-women-in-multilateralism" />,
    );
    fireEvent.click(screen.getByRole('button', { name: 'Saved to planning list' }));
    await waitFor(() => {
      expect(savedTitles()).toEqual([]);
    });

    render(<InternationalDaysPage />);
    expect(screen.getByRole('button', { name: /my planning list 00/i })).toBeInTheDocument();
  });

  it('uses a saved full-calendar observance when creating the planning brief', async () => {
    const detail = render(
      <InternationalDayDetailPage slug="international-day-of-women-in-multilateralism" />,
    );
    fireEvent.click(screen.getByRole('button', { name: 'Save for planning' }));
    await waitFor(() => expect(savedTitles()).toHaveLength(1));
    detail.unmount();

    const createObjectURL = vi.fn<(blob: Blob) => string>(() => 'blob:planning-brief');
    const revokeObjectURL = vi.fn<(url: string) => void>();
    Object.defineProperty(URL, 'createObjectURL', {
      configurable: true,
      value: createObjectURL,
    });
    Object.defineProperty(URL, 'revokeObjectURL', {
      configurable: true,
      value: revokeObjectURL,
    });
    vi.spyOn(HTMLAnchorElement.prototype, 'click').mockImplementation(() => {});

    render(<InternationalDaysPage />);
    openPlanningList();
    fireEvent.click(screen.getByRole('button', { name: /download planning brief/i }));

    expect(createObjectURL).toHaveBeenCalledTimes(1);
    const brief = createObjectURL.mock.calls[0][0] as Blob;
    const briefText = await readBlob(brief);
    expect(briefText).toContain('25 Jan — International Day of Women in Multilateralism');
    expect(briefText).toContain(
      'Ask women and girls closest to this theme what would make opportunity, safety, or leadership more real in your community.',
    );
    expect(revokeObjectURL).toHaveBeenCalledWith('blob:planning-brief');
  });

  it('renders normally when the saved-list storage contains malformed data', () => {
    window.localStorage.setItem(storageKey, '{not valid json');

    render(<InternationalDaysPage />);

    expect(screen.getByRole('heading', { name: /make a day\s*matter/i })).toBeInTheDocument();
  });

  it('renders normally when browser storage is unavailable', () => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('storage blocked');
    });
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('storage blocked');
    });

    render(<InternationalDaysPage />);

    expect(screen.getByRole('heading', { name: /make a day\s*matter/i })).toBeInTheDocument();
  });
});