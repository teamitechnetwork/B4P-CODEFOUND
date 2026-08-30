import { useEffect, useState } from 'react';
import { Check, Cookie, Settings2, X } from 'lucide-react';

const CONSENT_COOKIE_NAME = 'b4p_cookie_consent';
const CONSENT_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;
const OPEN_SETTINGS_EVENT = 'b4p:open-cookie-settings';

type CookiePreferences = {
  version: 1;
  necessary: true;
  analytics: boolean;
  preferences: boolean;
};

const defaultPreferences: CookiePreferences = {
  version: 1,
  necessary: true,
  analytics: false,
  preferences: false,
};

function readConsentCookie(): CookiePreferences | null {
  const cookie = document.cookie
    .split('; ')
    .find((entry) => entry.startsWith(`${CONSENT_COOKIE_NAME}=`));

  if (!cookie) return null;

  try {
    const value = cookie.slice(`${CONSENT_COOKIE_NAME}=`.length);
    const parsed = JSON.parse(decodeURIComponent(value)) as Partial<CookiePreferences>;

    if (
      parsed.version !== 1 ||
      parsed.necessary !== true ||
      typeof parsed.analytics !== 'boolean' ||
      typeof parsed.preferences !== 'boolean'
    ) {
      return null;
    }

    return {
      version: 1,
      necessary: true,
      analytics: parsed.analytics,
      preferences: parsed.preferences,
    };
  } catch {
    return null;
  }
}

function saveConsentCookie(preferences: CookiePreferences) {
  document.cookie = [
    `${CONSENT_COOKIE_NAME}=${encodeURIComponent(JSON.stringify(preferences))}`,
    'Path=/',
    `Max-Age=${CONSENT_COOKIE_MAX_AGE}`,
    'SameSite=Lax',
  ].join('; ');
}

export function openCookieSettings() {
  window.dispatchEvent(new CustomEvent(OPEN_SETTINGS_EVENT));
}

export function CookieConsent() {
  const [view, setView] = useState<'hidden' | 'banner' | 'settings'>('hidden');
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);
  const [settingsOrigin, setSettingsOrigin] = useState<'banner' | 'hidden'>('hidden');

  useEffect(() => {
    const existingPreferences = readConsentCookie();
    setPreferences(existingPreferences ?? defaultPreferences);
    setView(existingPreferences ? 'hidden' : 'banner');

    const handleOpenSettings = () => {
      setPreferences(readConsentCookie() ?? defaultPreferences);
      setSettingsOrigin('hidden');
      setView('settings');
    };

    window.addEventListener(OPEN_SETTINGS_EVENT, handleOpenSettings);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, handleOpenSettings);
  }, []);

  useEffect(() => {
    if (view !== 'settings') return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [view]);

  useEffect(() => {
    if (view !== 'settings') return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setView(settingsOrigin === 'banner' ? 'banner' : 'hidden');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [settingsOrigin, view]);

  function closeWithPreferences(nextPreferences: CookiePreferences) {
    saveConsentCookie(nextPreferences);
    setPreferences(nextPreferences);
    setView('hidden');
  }

  function acceptAll() {
    closeWithPreferences({
      version: 1,
      necessary: true,
      analytics: true,
      preferences: true,
    });
  }

  function rejectOptional() {
    closeWithPreferences(defaultPreferences);
  }

  function savePreferences() {
    closeWithPreferences(preferences);
  }

  function closeSettings() {
    setView(settingsOrigin === 'banner' ? 'banner' : 'hidden');
  }

  if (view === 'hidden') return null;

  if (view === 'settings') {
    return (
      <div className="cookie-consent" aria-label="Cookie preferences">
        <div className="cookie-consent__backdrop" aria-hidden="true" onMouseDown={closeSettings} />
        <section
          className="cookie-consent__dialog"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-settings-title"
          aria-describedby="cookie-settings-description"
        >
          <div className="cookie-consent__dialog-header">
            <div className="cookie-consent__icon" aria-hidden="true">
              <Settings2 size={20} />
            </div>
            <div>
              <p className="cookie-consent__eyebrow">Privacy controls</p>
              <h2 id="cookie-settings-title">Cookie preferences</h2>
            </div>
            <button
              type="button"
              className="cookie-consent__close"
              onClick={closeSettings}
              aria-label="Close cookie preferences"
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>

          <p id="cookie-settings-description" className="cookie-consent__dialog-copy">
            Choose which optional cookies you’re comfortable with. Essential cookies are always on because they help the website work safely.
          </p>

          <div className="cookie-consent__options">
            <div className="cookie-consent__option">
              <div>
                <strong>Essential</strong>
                <p>Needed for navigation, security, and remembering this choice.</p>
              </div>
              <span className="cookie-consent__status">
                <Check size={16} aria-hidden="true" />
                Always on
              </span>
            </div>

            <label className="cookie-consent__option cookie-consent__option--interactive">
              <div>
                <strong>Analytics</strong>
                <p>Helps us understand which pages are useful to visitors.</p>
              </div>
              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={(event) => setPreferences((current) => ({ ...current, analytics: event.target.checked }))}
              />
              <span className="cookie-consent__switch" aria-hidden="true" />
            </label>

            <label className="cookie-consent__option cookie-consent__option--interactive">
              <div>
                <strong>Preferences</strong>
                <p>Remembers optional choices that make future visits more comfortable.</p>
              </div>
              <input
                type="checkbox"
                checked={preferences.preferences}
                onChange={(event) => setPreferences((current) => ({ ...current, preferences: event.target.checked }))}
              />
              <span className="cookie-consent__switch" aria-hidden="true" />
            </label>
          </div>

          <div className="cookie-consent__dialog-footer">
            <a href="/cookie-policy">Read our Cookie Policy</a>
            <button type="button" className="cookie-consent__primary" onClick={savePreferences}>
              Save choices
            </button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <section className="cookie-consent cookie-consent--banner" aria-label="Cookie consent" aria-live="polite">
      <div className="cookie-consent__banner-icon" aria-hidden="true">
        <Cookie size={23} />
      </div>
      <div className="cookie-consent__banner-copy">
        <p className="cookie-consent__eyebrow">Your privacy, your choice</p>
        <h2>Help us make this site better.</h2>
        <p>
          We use essential cookies to keep B4P CODEFOUND working and optional cookies to improve the experience. You choose what to allow.
        </p>
        <a className="cookie-consent__banner-link" href="/cookie-policy">Learn more in our Cookie Policy</a>
      </div>
      <div className="cookie-consent__actions">
        <button
          type="button"
          className="cookie-consent__text-button"
          onClick={() => {
            setSettingsOrigin('banner');
            setView('settings');
          }}
        >
          Manage choices
        </button>
        <button type="button" className="cookie-consent__secondary" onClick={rejectOptional}>
          Reject optional
        </button>
        <button type="button" className="cookie-consent__primary" onClick={acceptAll}>
          Accept all
        </button>
      </div>
    </section>
  );
}