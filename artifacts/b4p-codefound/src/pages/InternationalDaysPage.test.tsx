import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
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
let analyticsTrack: ReturnType<typeof vi.fn>;

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
    analyticsTrack = vi.fn();
    window.umami = {
      track: analyticsTrack as unknown as (name: string, data?: Record<string, string | number | boolean>) => void,
    };
  });

  afterEach(() => {
    delete window.umami;
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
    expect(analyticsTrack).toHaveBeenCalledWith('planning_observance_saved', {
      observance_slug: 'international-day-of-education',
      source_surface: 'directory',
    });
  });

  it('shows saved moments with dates and links, including full-calendar observances', async () => {
    window.localStorage.setItem(storageKey, JSON.stringify([
      'International Day of Education',
      'International Day of Women in Multilateralism',
    ]));

    render(<InternationalDaysPage />);
    openPlanningList();

    const savedList = screen.getByRole('list', { name: 'Saved observances' });
    expect(within(savedList).getByText('24 January')).toBeInTheDocument();
    expect(within(savedList).getByRole('link', { name: /International Day of Education/i }))
      .toHaveAttribute('href', '/international-days/international-day-of-education');
    expect(within(savedList).getByText('25 January')).toBeInTheDocument();
    expect(within(savedList).getByRole('link', { name: /International Day of Women in Multilateralism/i }))
      .toHaveAttribute('href', '/international-days/international-day-of-women-in-multilateralism');
  });

  it('removes one saved moment from the planning list without removing the others', async () => {
    window.localStorage.setItem(storageKey, JSON.stringify([
      'International Day of Education',
      'International Day of Women in Multilateralism',
    ]));

    render(<InternationalDaysPage />);
    openPlanningList();
    fireEvent.click(screen.getByRole('button', {
      name: 'Remove International Day of Education from planning list',
    }));

    await waitFor(() => {
      expect(savedTitles()).toEqual(['International Day of Women in Multilateralism']);
    });
    const savedList = screen.getByRole('list', { name: 'Saved observances' });
    expect(within(savedList).queryByRole('link', { name: /International Day of Education/i })).not.toBeInTheDocument();
    expect(within(savedList).getByRole('link', { name: /International Day of Women in Multilateralism/i })).toBeInTheDocument();
    expect(analyticsTrack).toHaveBeenLastCalledWith('planning_observance_removed', {
      observance_slug: 'international-day-of-education',
      source_surface: 'planning_list',
    });
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
    expect(analyticsTrack).toHaveBeenLastCalledWith('planning_observance_removed', {
      observance_slug: 'international-day-of-women-in-multilateralism',
      source_surface: 'detail_page',
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

    expect(analyticsTrack).toHaveBeenCalledWith('planning_brief_downloaded', {
      saved_count: 1,
      brief_scope: 'saved_list',
    });
    expect(createObjectURL).toHaveBeenCalledTimes(1);
    const brief = createObjectURL.mock.calls[0][0] as Blob;
    const briefText = await readBlob(brief);
    expect(briefText).toContain('25 Jan — International Day of Women in Multilateralism');
    expect(briefText).toContain(
      'Ask women and girls closest to this theme what would make opportunity, safety, or leadership more real in your community.',
    );
    expect(revokeObjectURL).toHaveBeenCalledWith('blob:planning-brief');
  });

  it('tracks clearing the planning list without changing the saved-list behavior', async () => {
    render(<InternationalDaysPage />);
    fireEvent.click(screen.getAllByRole('button', { name: 'Save for planning' })[0]);
    await waitFor(() => expect(savedTitles()).toHaveLength(1));

    openPlanningList();
    fireEvent.click(screen.getByRole('button', { name: 'Clear list' }));

    await waitFor(() => expect(savedTitles()).toEqual([]));
    expect(analyticsTrack).toHaveBeenLastCalledWith('planning_list_cleared', {
      saved_count: 1,
    });
  });

  it('tracks a full-calendar brief download when no moments are saved', () => {
    const createObjectURL = vi.fn<(blob: Blob) => string>(() => 'blob:planning-brief');
    Object.defineProperty(URL, 'createObjectURL', {
      configurable: true,
      value: createObjectURL,
    });
    Object.defineProperty(URL, 'revokeObjectURL', {
      configurable: true,
      value: vi.fn(),
    });
    vi.spyOn(HTMLAnchorElement.prototype, 'click').mockImplementation(() => {});

    render(<InternationalDaysPage />);
    openPlanningList();
    fireEvent.click(screen.getByRole('button', { name: /download planning brief/i }));

    expect(analyticsTrack).toHaveBeenCalledWith('planning_brief_downloaded', {
      saved_count: 0,
      brief_scope: 'full_calendar',
    });
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