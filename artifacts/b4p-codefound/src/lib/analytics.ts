type AnalyticsData = Record<string, string | number | boolean>;

declare global {
  interface Window {
    umami?: {
      track(name: string, data?: AnalyticsData): void;
    };
  }
}

export const analyticsEvents = {
  partnershipInterestSelected: 'partnership_interest_selected',
  partnershipEmailDraftOpened: 'partnership_email_draft_opened',
  planningObservanceSaved: 'planning_observance_saved',
  planningObservanceRemoved: 'planning_observance_removed',
  planningListCleared: 'planning_list_cleared',
  planningBriefDownloaded: 'planning_brief_downloaded',
} as const;

export function trackEvent(name: string, data?: AnalyticsData): void {
  if (typeof window === 'undefined') return;

  try {
    window.umami?.track(name, data);
  } catch {
    // Analytics must never break the app.
  }
}