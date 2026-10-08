import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const heroSlides = [
  {
    src: '/images/uploaded/hero-induction-stage.webp',
    alt: 'B4P CODEFOUND participants gathered for an induction event in Liberia',
  },
  {
    src: '/images/uploaded/hero-community-outdoors.webp',
    alt: 'B4P CODEFOUND participants gathered outside a community venue in Liberia',
  },
  {
    src: '/images/uploaded/hero-women-leadership.webp',
    alt: 'Women leaders participating in a B4P CODEFOUND event in Liberia',
  },
];

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = () => setReduceMotion(mediaQuery.matches);
    updateMotionPreference();
    mediaQuery.addEventListener('change', updateMotionPreference);
    return () => mediaQuery.removeEventListener('change', updateMotionPreference);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5600);
    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  const slide = heroSlides[activeSlide];

  return (
    <section
      id="home"
      className="hero-section"
      aria-labelledby="home-hero-title"
    >
      <div className="hero-section__layout">
        <div className="hero-section__media" aria-hidden="true">
          <img
            key={slide.src}
            src={slide.src}
            alt=""
            className="hero-section__photo"
          />
        </div>
        <div className="hero-section__copy">
          <div className="hero-section__copy-inner">
            <div className="hero-section__kicker">
              <span />
              Established 2015
            </div>

            <h1 id="home-hero-title">
              African-led leadership for <em>peace</em> and <strong>development.</strong>
            </h1>

            <p>
              Global-Local Peacebuilding and Economic Development through collective action and grassroots empowerment.
            </p>

            <div className="hero-section__actions">
              <Button asChild size="lg" className="bg-[#D6A53A] hover:bg-[#c5962e] text-[#062e37] font-bold h-14 px-8 text-base rounded-sm group transition-all">
                <a href="/make-a-donation">
                  Donate Now
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-8 text-base font-bold rounded-sm border-white text-white hover:bg-white hover:text-foreground transition-all">
                <a href="/what-we-do">Discover Our Work</a>
              </Button>
            </div>

            <div className="hero-section__focus" aria-label="B4P CODEFOUND focus areas">
              <span>Peacebuilding</span>
              <span>Economic Development</span>
              <span>Youth &amp; Civic Engagement</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
