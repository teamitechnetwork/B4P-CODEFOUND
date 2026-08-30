import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Pause, Play } from 'lucide-react';

const heroTypingPhrases = ['peaceful communities.', 'women leaders.', 'shared prosperity.'];

const heroSlides = [
  {
    src: '/images/uploaded/hero-induction-stage.webp',
    alt: 'B4P CODEFOUND participants gathered for an induction event in Liberia',
    label: 'In the room',
    detail: 'A full room listening, learning, and moving forward together',
  },
  {
    src: '/images/uploaded/hero-community-outdoors.webp',
    alt: 'B4P CODEFOUND participants gathered outside a community venue in Liberia',
    label: 'In community',
    detail: 'Community voices at the center of action',
  },
  {
    src: '/images/uploaded/hero-women-leadership.webp',
    alt: 'Women leaders participating in a B4P CODEFOUND event in Liberia',
    label: 'In dialogue',
    detail: 'Building practical pathways together',
  },
];

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [typingText, setTypingText] = useState('');
  const [typingPhraseIndex, setTypingPhraseIndex] = useState(0);
  const [isDeletingText, setIsDeletingText] = useState(false);

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

  useEffect(() => {
    if (reduceMotion) {
      setTypingText(heroTypingPhrases[0]);
      setTypingPhraseIndex(0);
      setIsDeletingText(false);
      return;
    }

    const phrase = heroTypingPhrases[typingPhraseIndex];
    const isPhraseComplete = typingText === phrase;
    const timer = window.setTimeout(() => {
      if (isDeletingText) {
        const nextText = typingText.slice(0, -1);
        setTypingText(nextText);
        if (!nextText) {
          setIsDeletingText(false);
          setTypingPhraseIndex((current) => (current + 1) % heroTypingPhrases.length);
        }
        return;
      }

      const nextText = phrase.slice(0, typingText.length + 1);
      setTypingText(nextText);
      if (nextText === phrase) setIsDeletingText(true);
    }, isDeletingText ? 42 : isPhraseComplete ? 1700 : 72);

    return () => window.clearTimeout(timer);
  }, [isDeletingText, reduceMotion, typingPhraseIndex, typingText]);

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

            <div className="hero-section__typing" aria-hidden="true">
              <span>Building </span>
              <strong>{typingText}</strong>
              <i className="hero-section__typing-cursor" />
            </div>
            <span className="sr-only">
              Building peaceful communities, supporting women leaders, and creating shared prosperity.
            </span>

            <h1>
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
