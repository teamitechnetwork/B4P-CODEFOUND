export function AboutUs() {
  const timeline = [
    { year: '2015', label: 'The Beginning' },
    { year: '2016', label: 'Building the Village' },
    { year: '2017', label: 'Reaching Out' },
    { year: '2018', label: 'Growing Stronger' },
    { year: '2019', label: 'First Spark of Impact' },
    { year: '2020', label: 'Momentum Builds' },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-secondary uppercase tracking-widest mb-2">About Us</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-primary mb-6">African-Led Leadership</h3>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Since 2015, Business for Peace Community Development Foundation (B4P CODEFOUND) has bridged grassroots activism with global policy to create sustainable pathways for the next generation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Founder Image & Bio */}
          <div className="relative">
            <div className="aspect-square md:aspect-[4/5] rounded-xl overflow-hidden shadow-2xl relative z-10">
              <img 
                src="/brand/b4p-og-source.png" 
                alt="Lindora Kolu Howard-Diawara, Founder & Executive Director" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h4 className="text-2xl font-bold text-white mb-1">Lindora Kolu Howard-Diawara</h4>
                <p className="text-secondary font-semibold uppercase tracking-wider text-sm">Founder & Executive Director</p>
              </div>
            </div>
            {/* Decorative block */}
            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-muted rounded-xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -z-10" />
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-3xl font-bold text-primary mb-4">A Vision for an Inclusive, Peaceful Future</h3>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Lindora Kolu Howard-Diawara is a Liberian peace activist and women's rights advocate. Her leadership has been instrumental in creating sustainable pathways for the next generation of African leaders.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Her work bridges grassroots activism and global policy, ensuring the stories and needs of local communities reach international stages like the Commission on the Status of Women.
            </p>
            <blockquote className="border-l-4 border-secondary pl-6 py-2 my-4 bg-muted/30 italic text-xl text-primary font-medium">
              "Empowered women are the foundation of a productive nation."
            </blockquote>
            <p className="text-lg text-foreground/80 leading-relaxed">
              She advocates for an inclusive, peaceful future across the continent through mentorship and leadership skill-building.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-32">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary">Our Journey</h3>
          </div>
          
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-muted -translate-y-1/2 z-0" />
            
            <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
              {timeline.map((item, index) => (
                <div key={item.year} className="relative z-10 flex flex-col items-center group">
                  <div className="w-12 h-12 rounded-full bg-white border-4 border-secondary flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-secondary transition-all duration-300">
                    <div className="w-3 h-3 rounded-full bg-primary group-hover:bg-white transition-colors" />
                  </div>
                  <div className="text-center">
                    <span className="block text-2xl font-black text-primary mb-1">{item.year}</span>
                    <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wide group-hover:text-secondary transition-colors">
                      {item.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
