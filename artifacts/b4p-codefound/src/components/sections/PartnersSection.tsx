import { useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const partnerLogos = [
  { name: 'Global Network of Women Peacebuilders', src: '/brand/partners/gnwp.png' },
  { name: 'NDLC', src: '/brand/partners/ndlc.png' },
  { name: 'Lisle — Building Global Citizens', src: '/brand/partners/lisle.png' },
  { name: 'Women’s NGO Secretariat of Liberia', src: '/brand/partners/womens-ngo-secretariat-liberia.png' },
  { name: 'Platform for Dialogue and Peace', src: '/brand/partners/p4d.png' },
  { name: 'aCIO Hatch', src: '/brand/partners/acio-hatch.png' },
  { name: 'WANEP', src: '/brand/partners/wanep.png' },
];

const pageCount = Math.ceil(partnerLogos.length / 3);

export function PartnersSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activePage, setActivePage] = useState(0);

  const updateActivePage = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    const nextPage = maxScroll > 0
      ? Math.round((carousel.scrollLeft / maxScroll) * (pageCount - 1))
      : 0;

    setActivePage((currentPage) => currentPage === nextPage ? currentPage : nextPage);
  };

  const showPage = (page: number) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    carousel.scrollTo({
      left: maxScroll * (page / (pageCount - 1)),
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    });
    setActivePage(page);
  };

  return (
    <section id="partner" className="home-partners" aria-labelledby="home-partners-title">
      <div className="home-partners__inner">
        <h2 id="home-partners-title">THANKS TO OUR PARTNERS</h2>

        <div
          ref={carouselRef}
          className="home-partners__carousel"
          role="region"
          aria-label="Our partners"
          aria-roledescription="carousel"
          tabIndex={0}
          onScroll={updateActivePage}
        >
          <div className="home-partners__track">
            {partnerLogos.map((partner, index) => (
              <div
                className="home-partners__card"
                key={partner.name}
                role="group"
                aria-roledescription="slide"
                aria-label={`${partner.name}, ${index + 1} of ${partnerLogos.length}`}
              >
                <img src={partner.src} alt={partner.name} loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        <div className="home-partners__pages" role="group" aria-label="Partner carousel pages">
          {Array.from({ length: pageCount }, (_, index) => (
            <button
              className={`home-partners__dot${activePage === index ? ' is-active' : ''}`}
              key={index}
              type="button"
              aria-label={`Show partner logos, page ${index + 1} of ${pageCount}`}
              aria-current={activePage === index ? 'true' : undefined}
              onClick={() => showPage(index)}
            />
          ))}
        </div>

        <a className="home-partners__cta" href="/partner-with-us">
          <span>Partner with us</span>
          <span className="home-partners__cta-icon">
            <ArrowUpRight size={17} aria-hidden="true" />
          </span>
        </a>
      </div>
    </section>
  );
}
