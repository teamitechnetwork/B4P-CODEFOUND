import { ArrowRight, Globe } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-community.jpg" 
          alt="Liberian community women gathering" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="max-w-3xl text-white">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/90 text-white rounded-full text-xs font-bold uppercase tracking-widest mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Globe className="h-4 w-4" />
            <span>Since 2015</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">
            Driving Impact, <br/>
            <span className="text-secondary">Protecting Futures.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl font-medium leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            Global-Local Peacebuilding and Economic Development through African-led leadership and collective action. We believe empowered women are the foundation of a productive nation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500">
            <a 
              href="#donate" 
              className="bg-secondary text-white px-8 py-4 rounded font-bold uppercase tracking-wider hover:bg-white hover:text-secondary transition-colors text-center flex items-center justify-center gap-2 group"
            >
              Support Our Mission
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#what-we-do" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded font-bold uppercase tracking-wider hover:bg-white/10 transition-colors text-center"
            >
              Discover Our Work
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}
