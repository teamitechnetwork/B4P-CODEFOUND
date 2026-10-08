import { ArrowUp } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import { useEffect, useState } from 'react';

const whatsappHref = 'https://wa.me/231555770641?text=Hello%20B4P%20CODEFOUND';

export function SiteUtilities() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const updateScrollState = () => setShowScrollTop(window.scrollY > 360);
    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });

    return () => window.removeEventListener('scroll', updateScrollState);
  }, []);

  return (
    <div className="site-utilities" aria-label="Quick actions">
      <a
        className="site-utilities__whatsapp"
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with B4P CODEFOUND on WhatsApp, 1 unread message"
      >
        <FaWhatsapp size={25} aria-hidden="true" />
        <span className="site-utilities__whatsapp-label">Chat on WhatsApp</span>
        <span className="site-utilities__whatsapp-unread" aria-hidden="true" />
      </a>

      <button
        className={`site-utilities__top ${showScrollTop ? 'is-visible' : ''}`}
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
        aria-hidden={!showScrollTop}
        tabIndex={showScrollTop ? 0 : -1}
      >
        <ArrowUp size={21} strokeWidth={2.5} aria-hidden="true" />
      </button>
    </div>
  );
}