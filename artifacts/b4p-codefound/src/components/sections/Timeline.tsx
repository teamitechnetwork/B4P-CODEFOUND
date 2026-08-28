const timeline = [
  { year: '2015', title: 'The Beginning', desc: 'B4P CODEFOUND is established to drive grassroots change.' },
  { year: '2016', title: 'Building the Village', desc: 'First foundational partnerships formed with local leaders.' },
  { year: '2017', title: 'Reaching Out', desc: 'Expanded programs to engage the Liberian diaspora.' },
  { year: '2018', title: 'Growing Stronger', desc: 'Scaling operations and formalizing the Capacity Building Fund.' },
  { year: '2019', title: 'First Spark of Impact', desc: 'Major community milestones achieved across rural regions.' },
  { year: '2020', title: 'Momentum Builds', desc: 'Recognized on international platforms like CSW for global advocacy.' }
];

export function Timeline() {
  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-2 text-secondary font-bold uppercase tracking-[0.15em] text-xs mb-4">
            <span className="w-8 h-[2px] bg-secondary"></span>
            Our Journey
            <span className="w-8 h-[2px] bg-secondary"></span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.05] tracking-tight text-balance">
            A Legacy of Change
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 md:-translate-x-1/2"></div>
          
          <div className="space-y-12 relative z-10">
            {timeline.map((item, i) => (
              <div 
                key={item.year} 
                className={`flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 relative ${
                  i % 2 === 0 ? 'md:flex-row-reverse text-left md:text-right' : 'text-left'
                }`}
              >
                <div className="flex-1 w-full md:w-1/2" />
                
                {/* Center Node */}
                <div className="absolute left-4 md:left-1/2 top-10 md:top-1/2 w-4 h-4 bg-secondary rounded-full -translate-x-[7px] md:-translate-x-1/2 -translate-y-1/2 border-4 border-foreground shadow-[0_0_0_4px_rgba(255,255,255,0.1)]"></div>
                
                <div className="flex-1 w-full md:w-1/2 pl-12 md:pl-0">
                  <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors shadow-xl">
                    <span className="text-secondary text-2xl font-extrabold block mb-2">{item.year}</span>
                    <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{item.title}</h3>
                    <p className="text-white/70 font-medium text-lg leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
