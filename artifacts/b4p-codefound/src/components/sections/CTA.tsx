import { Button } from '@/components/ui/button';
import { ArrowRight, Heart } from 'lucide-react';

export function CTA() {
  return (
    <section id="donate" className="py-24 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20 mix-blend-multiply">
        <img 
          src="/images/conference/day-3-community-02.jpg" 
          alt="Community Gathering" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/90 to-primary/80 z-0" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <div className="w-20 h-20 bg-secondary/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
          <Heart className="w-10 h-10 text-secondary fill-secondary" />
        </div>
        
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight max-w-3xl mx-auto">
          Help Us Build a More Peaceful, Inclusive Future.
        </h2>
        
        <p className="text-xl md:text-2xl text-white/90 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
          Your support enables African-led peacebuilding, empowers women, and drives sustainable economic development.
        </p>
        
        <div id="partner" className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold h-16 px-10 text-xl rounded-sm shadow-xl hover:-translate-y-1 transition-all w-full sm:w-auto">
            <a href="mailto:management@b4pcodefound.org">
              Donate Now
              <ArrowRight className="ml-2 w-6 h-6" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-16 px-10 text-xl font-bold rounded-sm border-white text-white hover:bg-white hover:text-primary transition-all w-full sm:w-auto">
            <a href="mailto:management@b4pcodefound.org">
              Become A Partner
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
