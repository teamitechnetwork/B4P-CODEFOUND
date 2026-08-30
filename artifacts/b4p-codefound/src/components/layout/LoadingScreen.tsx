import { useEffect, useState } from 'react';

const LOADER_FADE_START_MS = 280;
const LOADER_REMOVE_MS = 500;

export function LoadingScreen() {
  const [phase, setPhase] = useState<'visible' | 'leaving' | 'hidden'>('visible');

  useEffect(() => {
    const fadeTimer = window.setTimeout(() => setPhase('leaving'), LOADER_FADE_START_MS);
    const removeTimer = window.setTimeout(() => setPhase('hidden'), LOADER_REMOVE_MS);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

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
          <span>B</span>
          <strong>4</strong>
          <span>P</span>
        </div>
        <p className="site-loader__name">CODEFOUND</p>
        <div className="site-loader__orbit" aria-hidden="true">
          <span className="site-loader__orbit-ring" />
          <span className="site-loader__orbit-core" />
          <span className="site-loader__orbit-dot" />
        </div>
        <p className="site-loader__caption">Building peace together</p>
        <span className="sr-only">Loading the B4P CODEFOUND website</span>
      </div>
    </div>
  );
}