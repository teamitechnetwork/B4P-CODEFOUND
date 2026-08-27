import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="hero-section relative min-h-[100svh] flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-community.jpg" 
          alt="B4P CODEFOUND community gathering" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#062e37]/95 via-[#062e37]/79 to-[#0b4e61]/38" />
        <div className="absolute inset-0 hero-section__grid" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 py-20">
        <div className="max-w-5xl">
          <div className="inline-flex items-center gap-3 text-white/90 text-xs font-extrabold uppercase tracking-[0.18em] mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="w-10 h-px bg-[#1b9ed9]" />
            Established 2015
          </div>
          
          <h1 className="hero-section__title text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.04] mb-7 tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
            African-led leadership for <span className="text-secondary">peace</span> and <span className="text-[#8bd9fb]">development.</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-white/85 font-medium leading-relaxed max-w-2xl mb-10 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            Global-Local Peacebuilding and Economic Development through collective action and grassroots empowerment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold h-14 px-8 text-lg rounded-sm shadow-[0_0_40px_rgba(223,83,17,0.3)] hover:shadow-[0_0_60px_rgba(223,83,17,0.5)] transition-all hover:-translate-y-1">
              <a href="/make-a-donation">
                Donate Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-8 text-lg font-bold rounded-sm border-white text-white hover:bg-white hover:text-foreground backdrop-blur-sm transition-all hover:-translate-y-1">
              <a href="/peacebuilding-program">Discover Our Work</a>
            </Button>
          </div>
        </div>
        <div className="hero-section__focus animate-in fade-in slide-in-from-bottom-8 duration-700 delay-700">
          <span>Peacebuilding</span>
          <span>Economic Development</span>
          <span>Youth &amp; Civic Engagement</span>
        </div>
      </div>
      <div className="absolute -bottom-px left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
