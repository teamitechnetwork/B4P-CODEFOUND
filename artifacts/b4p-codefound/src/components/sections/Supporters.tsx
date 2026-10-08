import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const supporterLogos = [
  { name: 'Global Network of Women Peacebuilders', src: '/brand/partners/gnwp.png' },
  { name: 'NDLC', src: '/brand/partners/ndlc.png' },
  { name: 'Lisle — Building Global Citizens', src: '/brand/partners/lisle.png' },
  { name: 'Women’s NGO Secretariat of Liberia', src: '/brand/partners/womens-ngo-secretariat-liberia.png' },
  { name: 'Platform for Dialogue and Peace', src: '/brand/partners/p4d.png' },
  { name: 'aCIO Hatch', src: '/brand/partners/acio-hatch.png' },
  { name: 'WANEP', src: '/brand/partners/wanep.png' },
];

const logosPerPage = 3;
const pageCount = Math.ceil(supporterLogos.length / logosPerPage);

export function Supporters() {
  const [page, setPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const visibleLogos = Array.from({ length: logosPerPage }, (_, index) =>
    supporterLogos[(page * logosPerPage + index) % supporterLogos.length],
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setReduceMotion(mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener('change', updatePreference);
    return () => mediaQuery.removeEventListener('change', updatePreference);
  }, []);

  useEffect(() => {
    if (reduceMotion || isPaused) return;
    const timer = window.setInterval(() => {
      setPage((current) => (current + 1) % pageCount);
    }, 6200);
    return () => window.clearInterval(timer);
  }, [isPaused, reduceMotion]);

  return (
    <section className="home-supporters" aria-labelledby="home-supporters-title">
      <div className="home-supporters__inner">
        <h2 id="home-supporters-title">THANKS TO OUR SUPPORTERS</h2>
        <div
          className="home-supporters__carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
              setIsPaused(false);
            }
          }}
        >
          <div className="home-supporters__logos" aria-live="off" data-testid="list-home-supporters">
            {visibleLogos.map((partner, index) => (
              <div className="home-supporters__tile" key={`${page}-${index}-${partner.name}`}>
                <img src={partner.src} alt={partner.name} loading="lazy" />
              </div>
            ))}
          </div>
          <div className="home-supporters__dots" role="group" aria-label="Supporter logo slides">
            {Array.from({ length: pageCount }, (_, index) => (
              <button
                type="button"
                key={index}
                className={page === index ? 'is-active' : ''}
                onClick={() => setPage(index)}
                aria-label={`Show supporter logos, slide ${index + 1}`}
                aria-pressed={page === index}
                data-testid={`button-supporter-page-${index + 1}`}
              />
            ))}
          </div>
        </div>
        <a className="home-supporters__cta" href="#footer-newsletter" data-testid="link-home-support-newsletter">
          Join Our Growing Supporter List
          <span aria-hidden="true"><ArrowUpRight size={17} strokeWidth={2.5} /></span>
        </a>
      </div>
    </section>
  );
}
