import { ArrowDown, ArrowRight } from 'lucide-react';

const values = [
  {
    title: 'Respect for Human Rights & Dignity',
    desc: 'Equality, justice, and inclusion for all.'
  },
  {
    title: 'People & Communities',
    desc: 'Collaboration, partnerships, innovation, participation.'
  },
  {
    title: 'Passion & Teamwork',
    desc: 'Dedication, leadership, empowering young people.'
  },
  {
    title: 'Diversity & Inclusion',
    desc: 'Trust-building and ensuring equal opportunities.'
  },
  {
    title: 'Integrity & Commitment',
    desc: 'Transparent, dependable, sustainable systems for peace.'
  }
];

export function TheoryOfChange() {
  return (
    <section className="py-24 md:py-32 bg-[#062e37] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 opacity-50 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          <div className="lg:col-span-7">
            <span className="text-sm font-bold tracking-[0.2em] text-secondary uppercase mb-6 block">
              Our Philosophy
            </span>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-10 leading-[1.05] tracking-tight text-balance text-white">
              Theory of Change
            </h2>
            
            <p className="text-2xl md:text-[1.75rem] font-medium leading-relaxed text-white/90 mb-16 text-balance">
              "The more empowered women and girls become, and the more moral, technical, and financial support they receive, the better the conditions for them and their families. As the conditions of families improve, the more productive and proactive their communities will become. As the conditions of their communities improve, the more productive and proactive the country will become."
            </p>

            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 md:gap-6 bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
              <div className="flex-1 text-left md:text-center">
                <span className="block text-secondary text-sm font-bold tracking-widest uppercase mb-2">Step 1</span>
                <span className="font-bold text-white text-lg">Empowered<br className="hidden md:block" /> Individuals</span>
              </div>
              <ArrowRight className="hidden md:block w-6 h-6 text-white/30 shrink-0" />
              <ArrowDown className="md:hidden w-6 h-6 text-white/30 shrink-0 mx-auto" />

              <div className="flex-1 text-left md:text-center">
                <span className="block text-secondary text-sm font-bold tracking-widest uppercase mb-2">Step 2</span>
                <span className="font-bold text-white text-lg">Stronger<br className="hidden md:block" /> Families</span>
              </div>
              <ArrowRight className="hidden md:block w-6 h-6 text-white/30 shrink-0" />
              <ArrowDown className="md:hidden w-6 h-6 text-white/30 shrink-0 mx-auto" />

              <div className="flex-1 text-left md:text-center">
                <span className="block text-secondary text-sm font-bold tracking-widest uppercase mb-2">Step 3</span>
                <span className="font-bold text-white text-lg">Proactive<br className="hidden md:block" /> Communities</span>
              </div>
              <ArrowRight className="hidden md:block w-6 h-6 text-white/30 shrink-0" />
              <ArrowDown className="md:hidden w-6 h-6 text-white/30 shrink-0 mx-auto" />

              <div className="flex-1 text-left md:text-center">
                <span className="block text-accent text-sm font-bold tracking-widest uppercase mb-2">Goal</span>
                <span className="font-bold text-white text-lg">A Productive<br className="hidden md:block" /> Nation</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white text-foreground p-10 md:p-12 rounded-3xl shadow-2xl">
              <h3 className="text-2xl font-extrabold mb-8 pb-4 border-b border-border">Core Values</h3>
              
              <ul className="space-y-8">
                {values.map((value, i) => (
                  <li key={value.title} className="relative group">
                    <h4 className="font-bold text-xl mb-2 text-foreground group-hover:text-primary transition-colors">{value.title}</h4>
                    <p className="text-muted-foreground text-lg leading-relaxed">{value.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
