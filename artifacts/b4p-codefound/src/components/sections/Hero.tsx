import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Pause, Play } from 'lucide-react';

const heroSlides = [
  {
    src: '/images/conference/day-1-audience-stage.jpg',
    alt: 'Day One conference audience gathered in front of the main stage',
    label: 'Day One',
    detail: 'A full room listening, learning, and moving forward together',
  },
  {
    src: '/images/conference/day-1-community-gathering.jpg',
    alt: 'Day One B4P CODEFOUND conference participants gathered in a community hall',
    label: 'Day One',
    detail: 'Community voices at the center of action',
  },
  {
    src: '/images/conference/day-1-participants.jpg',
    alt: 'Day One B4P CODEFOUND conference participants seated together',
    label: 'Day One',
    detail: 'Building practical pathways together',
  },
];

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = () => setReduceMotion(mediaQuery.matches);
    updateMotionPreference();
    mediaQuery.addEventListener('change', updateMotionPreference);
    return () => mediaQuery.removeEventListener('change', updateMotionPreference);
  }, []);

  useEffect(() => {
    if (isPaused || reduceMotion) return;
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5600);
    return () => window.clearInterval(timer);
  }, [isPaused, reduceMotion]);

  const slide = heroSlides[activeSlide];

  return (
    <section
      id="home"
      className="hero-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setIsPaused(false);
        }
      }}
    >
      <div className="hero-section__layout">
        <div className="hero-section__copy">
          <div className="hero-section__copy-inner">
            <div className="hero-section__kicker">
              <span />
              Established 2015
            </div>

            <h1>
              African-led leadership for <em>peace</em> and <strong>development.</strong>
            </h1>

            <p>
              Global-Local Peacebuilding and Economic Development through collective action and grassroots empowerment.
            </p>

            <div className="hero-section__actions">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold h-14 px-8 text-base rounded-sm">
                <a href="/make-a-donation">
                  Donate Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-8 text-base font-bold rounded-sm border-white text-white hover:bg-white hover:text-foreground">
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

        <div className="hero-section__media" aria-live="polite">
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            className="hero-section__photo"
          />
          <div className="hero-section__media-caption">
            <div>
              <span>Conference field notes</span>
              <strong>{slide.detail}</strong>
            </div>
            <span className="hero-section__media-day">{slide.label}</span>
          </div>
          <div className="hero-section__controls" aria-label="Conference image controls">
            <button
              type="button"
              className="hero-section__play"
              onClick={() => setIsPaused((paused) => !paused)}
              aria-label={isPaused ? 'Play conference image slideshow' : 'Pause conference image slideshow'}
            >
              {isPaused ? <Play size={15} aria-hidden="true" /> : <Pause size={15} aria-hidden="true" />}
            </button>
            <div className="hero-section__indicators">
              {heroSlides.map((item, index) => (
                <button
                  key={item.src}
                  type="button"
                  className={`hero-section__indicator ${index === activeSlide ? 'is-active' : ''}`}
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Show ${item.label} conference image`}
                  aria-current={index === activeSlide ? 'true' : undefined}
                />
              ))}
            </div>
            <span className="hero-section__count">
              {String(activeSlide + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
