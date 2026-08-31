import { useEffect, useState } from 'react';

const LOADER_FADE_START_MS = 4650;
const LOADER_REMOVE_MS = 5000;
const LOADER_SESSION_KEY = 'b4p_codefound_loader_seen';

let hasShownLoaderInMemory = false;

function shouldShowLoader() {
  if (hasShownLoaderInMemory) return false;

  try {
    if (window.sessionStorage.getItem(LOADER_SESSION_KEY) === 'true') {
      hasShownLoaderInMemory = true;
      return false;
    }

    window.sessionStorage.setItem(LOADER_SESSION_KEY, 'true');
  } catch {
    // Keep the first-entry behavior even when browser storage is unavailable.
  }

  hasShownLoaderInMemory = true;
  return true;
}

export function LoadingScreen() {
  const [showLoader] = useState(shouldShowLoader);
  const [phase, setPhase] = useState<'visible' | 'leaving' | 'hidden'>(
    showLoader ? 'visible' : 'hidden',
  );

  useEffect(() => {
    if (!showLoader) return;

    setPhase('visible');
    const fadeTimer = window.setTimeout(() => setPhase('leaving'), LOADER_FADE_START_MS);
    const removeTimer = window.setTimeout(() => setPhase('hidden'), LOADER_REMOVE_MS);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(removeTimer);
    };
  }, [showLoader]);

  if (phase === 'hidden') return null;

  return (
    <div
      className={`site-loader ${phase === 'leaving' ? 'site-loader--leaving' : ''}`}
      role="status"
      aria-live="polite"
      aria-label="Loading B4P CODEFOUND"
    >
      <div className="site-loader__content">
        <div className="site-loader__wordmark" aria-hidden="true">
          <span>B4P</span>
          <strong>CODEFOUND</strong>
        </div>
        <div className="site-loader__art" aria-hidden="true">
          <span className="site-loader__halo" />
          <span className="site-loader__core" />
          <span className="site-loader__dot" />
        </div>
        <p className="site-loader__developed-by">Developed by: iTech Network Africa</p>
        <span className="sr-only">Loading the B4P CODEFOUND website</span>
      </div>
    </div>
  );
}