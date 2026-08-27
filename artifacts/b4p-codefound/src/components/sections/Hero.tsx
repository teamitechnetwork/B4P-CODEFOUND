import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Image with Heavy Overlay for Text Legibility */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/conference/day-2-community-01.jpg" 
          alt="B4P Community Gathering" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-primary/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold tracking-wide mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            ESTABLISHED 2015
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
            African-Led Leadership for <span className="text-secondary">Peace</span> & <span className="text-primary-foreground">Development</span>.
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 font-medium leading-relaxed max-w-2xl mb-10 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            Global-Local Peacebuilding and Economic Development through collective action and grassroots empowerment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold h-14 px-8 text-lg rounded-sm shadow-[0_0_40px_rgba(223,83,17,0.3)] hover:shadow-[0_0_60px_rgba(223,83,17,0.5)] transition-all hover:-translate-y-1">
              <a href="#donate">
                Donate Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-8 text-lg font-bold rounded-sm border-white text-white hover:bg-white hover:text-foreground backdrop-blur-sm transition-all hover:-translate-y-1">
              <a href="#programs">Discover Our Work</a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative shapes */}
      <div className="absolute -bottom-px left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
