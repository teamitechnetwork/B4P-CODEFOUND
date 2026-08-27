import { ArrowUpRight, BriefcaseBusiness, Globe2, HeartHandshake, ShieldCheck, Sprout } from 'lucide-react';

const programs = [
  {
    title: 'Peacebuilding',
    desc: 'Dialogue, capacity building, small grants, and advocacy that strengthen trust, leadership, and sustainable peace initiatives.',
    icon: ShieldCheck,
    href: '/what-we-do#pillars',
  },
  {
    title: 'Economic Development & Empowerment',
    desc: 'Agribusiness, entrepreneurship, mentorship, and financial and digital literacy that expand economic opportunity.',
    icon: Sprout,
    href: '/what-we-do#pillars',
  },
  {
    title: 'Global, USA & Liberia Programs',
    desc: 'Regionally focused pathways that connect people with leadership, civic participation, livelihoods, health, and education opportunities.',
    icon: Globe2,
    href: '/programs/global',
  },
  {
    title: 'Organizational Services',
    desc: 'Fiscal sponsorship, nonprofit capacity building, and business development support for organizations and enterprises.',
    icon: BriefcaseBusiness,
    href: '/services',
  },
  {
    title: 'Columbus Women Connect',
    desc: 'A B4P CODEFOUND subsidiary empowering women through leadership, advocacy, and community across cultures and generations.',
    icon: HeartHandshake,
    href: '/columbus-women-connect',
  },
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
            Our Work in Action
          </h2>
          <p className="text-xl text-muted-foreground font-medium">
            Two operational pillars connect peacebuilding, economic opportunity, and community-led progress.
          </p>
          <a href="/what-we-do" className="inline-flex items-center gap-2 mt-7 text-sm font-extrabold uppercase tracking-wider text-primary hover:text-secondary transition-colors">
            Explore What We Do <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, i) => (
            <a
              key={program.title}
              href={program.href}
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
              <span className="mt-6 inline-flex items-center gap-2 text-primary text-xs font-extrabold uppercase tracking-wider">
                Explore <ArrowUpRight size={15} aria-hidden="true" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
