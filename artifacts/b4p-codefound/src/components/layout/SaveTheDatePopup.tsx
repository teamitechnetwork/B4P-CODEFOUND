import { useEffect, useRef, useState } from 'react';
import { ArrowRight, X } from 'lucide-react';

const SAVE_THE_DATE_SEEN_KEY = 'b4p-save-the-date-popup-seen';
const POPUP_DURATION_MS = 6500;

export function SaveTheDatePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const hasInitializedRef = useRef(false);
  const shouldShowRef = useRef(false);

  useEffect(() => {
    if (!hasInitializedRef.current) {
      hasInitializedRef.current = true;
      let hasBeenSeen = false;

      try {
        hasBeenSeen = window.sessionStorage.getItem(SAVE_THE_DATE_SEEN_KEY) === 'true';
        if (!hasBeenSeen) {
          window.sessionStorage.setItem(SAVE_THE_DATE_SEEN_KEY, 'true');
        }
      } catch {
        // If storage is unavailable, still show the announcement for this visit.
      }

      shouldShowRef.current = !hasBeenSeen;
    }

    if (!shouldShowRef.current) return;

    setIsOpen(true);
    timeoutRef.current = window.setTimeout(() => setIsOpen(false), POPUP_DURATION_MS);

    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const closePopup = () => {
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <aside
      className="save-the-date-popup"
      role="dialog"
      aria-labelledby="save-the-date-popup-title"
    >
      <button
        type="button"
        className="save-the-date-popup__close"
        onClick={closePopup}
        aria-label="Close Save the Date announcement"
      >
        <X size={18} aria-hidden="true" />
      </button>
      <div className="save-the-date-popup__content">
        <p className="save-the-date-popup__eyebrow">Save the date</p>
        <p className="save-the-date-popup__date">November 2026</p>
        <h2 id="save-the-date-popup-title">Get ready for an unforgettable conference</h2>
        <a href="/events" onClick={closePopup}>
          <span>Learn more</span>
          <ArrowRight size={16} aria-hidden="true" />
        </a>
      </div>
    </aside>
  );
}