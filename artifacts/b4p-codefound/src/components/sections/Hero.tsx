import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

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
  const [previousSlideIndex, setPreviousSlideIndex] = useState<number | null>(null);
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
    if (reduceMotion) return;
    const timer = window.setTimeout(() => {
      setPreviousSlideIndex(activeSlide);
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 6400);
    return () => window.clearTimeout(timer);
  }, [activeSlide, reduceMotion]);

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
    }, isDeletingText ? 105 : isPhraseComplete ? 3400 : 165);

    return () => window.clearTimeout(timer);
  }, [isDeletingText, reduceMotion, typingPhraseIndex, typingText]);

  const slide = heroSlides[activeSlide];
  const previousSlide =
    previousSlideIndex === null ? null : heroSlides[previousSlideIndex];

  return (
    <section
      id="home"
      className="hero-section"
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
          {previousSlide && (
            <img
              key={`previous-${previousSlide.src}`}
              src={previousSlide.src}
              alt=""
              className="hero-section__photo hero-section__photo--previous"
              aria-hidden="true"
            />
          )}
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            className="hero-section__photo hero-section__photo--active"
          />
          <div className="hero-section__welcome-group">
            <span className="hero-section__welcome" aria-hidden="true">
              Welcome
            </span>
            <div className="hero-section__media-caption">
              <div>
                <span>Conference field notes</span>
                <strong>{slide.detail}</strong>
              </div>
              <span className="hero-section__media-day">{slide.label}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
