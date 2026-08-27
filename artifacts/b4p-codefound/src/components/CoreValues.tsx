export function CoreValues() {
  const values = [
    {
      title: 'Respect for Human Rights & Dignity',
      details: 'Equality, justice, and inclusion at the core of all interventions.'
    },
    {
      title: 'People & Communities',
      details: 'Collaboration, innovation, and active participation driven by local voices.'
    },
    {
      title: 'Passion & Teamwork',
      details: 'Dedication to leadership, specifically uplifting and empowering young people.'
    },
    {
      title: 'Diversity & Inclusion',
      details: 'Trust-building and ensuring equal opportunities for everyone we serve.'
    },
    {
      title: 'Integrity & Commitment',
      details: 'Transparency, sustainable systems, peace, development, and human security.'
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-sm font-bold text-secondary uppercase tracking-widest mb-2">What Drives Us</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-primary mb-8">Our Core Values</h3>
            
            <div className="flex flex-col gap-8">
              {values.map((val, idx) => (
                <div key={idx} className="flex items-start gap-6 group">
                  <div className="text-4xl font-black text-muted group-hover:text-secondary transition-colors shrink-0 leading-none">
                    0{idx + 1}
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-primary mb-2">{val.title}</h4>
                    <p className="text-muted-foreground text-lg leading-relaxed">{val.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Abstract / Graphic representation of values */}
          <div className="relative aspect-square lg:aspect-auto lg:h-[600px] flex items-center justify-center">
            {/* Circle 1 */}
            <div className="absolute w-[80%] h-[80%] rounded-full border border-primary/20 animate-[spin_40s_linear_infinite]" />
            {/* Circle 2 */}
            <div className="absolute w-[60%] h-[60%] rounded-full border border-secondary/30 animate-[spin_30s_linear_infinite_reverse]" />
            {/* Center Logo */}
            <div className="relative z-10 w-32 h-32 bg-white rounded-full shadow-2xl flex items-center justify-center p-6 border-4 border-primary">
              <img src="/brand/b4p-favicon.png" alt="B4P Logo" className="w-full h-full object-contain" />
            </div>
            
            {/* Floating Value Nodes */}
            <div className="absolute top-[10%] right-[20%] w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
              <span className="text-white font-bold">1</span>
            </div>
            <div className="absolute bottom-[20%] right-[10%] w-12 h-12 bg-secondary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
              <span className="text-white font-bold">2</span>
            </div>
            <div className="absolute bottom-[10%] left-[20%] w-20 h-20 bg-muted border-2 border-primary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
              <span className="text-primary font-bold">3</span>
            </div>
            <div className="absolute top-[30%] left-[10%] w-14 h-14 bg-white border-2 border-secondary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
              <span className="text-secondary font-bold">4</span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
