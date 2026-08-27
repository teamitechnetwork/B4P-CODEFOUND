import { ArrowUpRight, Building, Briefcase, HandCoins, Map, Globe2 } from 'lucide-react';

const programs = [
  {
    title: 'Capacity Building Fund',
    desc: 'Institutional support, accountability, transparency, and community participation.',
    icon: Building
  },
  {
    title: 'Community Business Investment',
    desc: 'Community-led peace and economic development initiatives driving local growth.',
    icon: Briefcase
  },
  {
    title: 'Donor Advised Funds',
    desc: 'Structured funds deployed strictly according to donor guidelines to maximize targeted impact.',
    icon: HandCoins
  },
  {
    title: 'Liberian Organizations and Community Assessment (LOCA)',
    desc: 'Community building and grassroots development mapping across Liberia.',
    icon: Map
  },
  {
    title: 'Liberia-Diaspora Dialogues',
    desc: 'Fostering self-reliance through meaningful and actionable diaspora engagement.',
    icon: Globe2
  }
];

export function Programs() {
  return (
    <section id="programs" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-2 text-secondary font-bold uppercase tracking-wider text-sm mb-4">
            <span className="w-8 h-[2px] bg-secondary"></span>
            What We Do
            <span className="w-8 h-[2px] bg-secondary"></span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6">
            Strategic Programs
          </h2>
          <p className="text-xl text-muted-foreground font-medium">
            Through targeted initiatives, we build the institutional capacity of grassroots organizations and connect local needs with global resources.
          </p>
          <a href="/what-we-do" className="inline-flex items-center gap-2 mt-7 text-sm font-extrabold uppercase tracking-wider text-primary hover:text-secondary transition-colors">
            Explore What We Do <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, i) => (
            <div 
              key={program.title}
              className={`bg-white p-8 rounded-2xl shadow-sm border border-border hover:shadow-xl hover:border-primary/30 transition-all duration-300 group ${
                i === programs.length - 1 && programs.length % 2 !== 0 && programs.length % 3 !== 0
                  ? 'md:col-span-2 lg:col-span-1' 
                  : ''
              }`}
            >
              <div className="w-14 h-14 bg-background group-hover:bg-primary/10 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                <program.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors">
                {program.title}
              </h3>
              <p className="text-muted-foreground font-medium leading-relaxed">
                {program.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
