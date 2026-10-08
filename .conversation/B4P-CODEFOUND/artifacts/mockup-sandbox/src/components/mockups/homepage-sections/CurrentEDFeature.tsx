import { ArrowRight } from 'lucide-react';
import './_group.css';

export function CurrentEDFeature() {
  return (
    <section className="min-h-screen py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-[0.15em] text-xs mb-4">
              <span className="w-8 h-[2px] bg-primary" />
              Our Impact
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.05] tracking-tight text-balance">Stories from the Field</h2>
          </div>
          <a href="/about" className="inline-flex items-center border border-primary text-primary px-4 py-2 rounded-md font-bold tracking-wide hover:bg-primary hover:text-white transition-all group">
            View All Impact
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] md:aspect-[16/9] shadow-lg">
            <img src="/__mockup/images/stories/day-two-0017.jpg" alt="Building Young Women, Driving Change (BWYDC)" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-8">
              <span className="inline-block bg-secondary text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm mb-4 w-max">Youth Leadership</span>
              <h3 className="text-2xl font-bold text-white mb-2 leading-tight">Building Young Women, Driving Change (BWYDC)</h3>
              <p className="text-white/80 font-medium leading-relaxed max-w-lg">Empowering the next generation with essential leadership skills and mentorship.</p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] md:aspect-[16/9] shadow-lg">
            <img src="/__mockup/images/stories/day-three-0114.jpg" alt="ED’s Visit: B4P CODEFOUND to ensure women’s participation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-8">
              <span className="inline-block bg-secondary text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm mb-4 w-max">Local Impact</span>
              <h3 className="text-2xl font-bold text-white mb-2 leading-tight">ED’s Visit: B4P CODEFOUND to ensure women’s participation</h3>
              <p className="text-white/80 font-medium leading-relaxed max-w-lg">Advocating for women’s participation in Liberia’s social, economic, and political space.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}