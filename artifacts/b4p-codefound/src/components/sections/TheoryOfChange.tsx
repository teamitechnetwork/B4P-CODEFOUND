import { ArrowDown } from 'lucide-react';

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
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 opacity-50 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-secondary font-bold uppercase tracking-wider text-sm mb-4">
              <span className="w-8 h-[2px] bg-secondary"></span>
              Our Philosophy
            </div>
            
            <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">
              Theory of Change
            </h2>
            
            <p className="text-xl md:text-2xl font-medium leading-relaxed text-white/90 mb-12">
              "The more empowered women and girls become, and the more moral, technical, and financial support they receive, the better the conditions for them and their families. As the conditions of families improve, the more productive and proactive their communities will become. As the conditions of their communities improve, the more productive and proactive the country will become."
            </p>

            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 bg-black/20 p-6 md:p-8 rounded-2xl border border-white/10">
              <div className="text-center w-full">
                <span className="block text-secondary font-extrabold text-lg mb-1">Step 1</span>
                <span className="font-bold text-white">Empowered<br/>Individuals</span>
              </div>
              <ArrowDown className="w-6 h-6 text-white/30 shrink-0 md:-rotate-90" />
              <div className="text-center w-full">
                <span className="block text-secondary font-extrabold text-lg mb-1">Step 2</span>
                <span className="font-bold text-white">Stronger<br/>Families</span>
              </div>
              <ArrowDown className="w-6 h-6 text-white/30 shrink-0 md:-rotate-90" />
              <div className="text-center w-full">
                <span className="block text-secondary font-extrabold text-lg mb-1">Step 3</span>
                <span className="font-bold text-white">Proactive<br/>Communities</span>
              </div>
              <ArrowDown className="w-6 h-6 text-white/30 shrink-0 md:-rotate-90" />
              <div className="text-center w-full">
                <span className="block text-secondary font-extrabold text-lg mb-1">Goal</span>
                <span className="font-bold text-white">A Productive<br/>Nation</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white text-foreground p-8 md:p-12 rounded-3xl shadow-2xl relative">
              <div className="absolute -top-5 -right-5 w-24 h-24 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-lg leading-tight transform rotate-12 shadow-lg">
                Core<br/>Values
              </div>
              
              <ul className="space-y-8 mt-4">
                {values.map((value, i) => (
                  <li key={value.title} className="relative pl-8">
                    <span className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-secondary"></span>
                    <h4 className="font-bold text-xl mb-1">{value.title}</h4>
                    <p className="text-muted-foreground font-medium">{value.desc}</p>
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
