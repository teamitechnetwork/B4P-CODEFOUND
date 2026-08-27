import { HeartHandshake, Users, ShieldCheck, TrendingUp } from 'lucide-react';

const pillars = [
  {
    title: 'Social Change',
    subtitle: 'Driving Impact',
    icon: TrendingUp,
    color: 'text-secondary',
    bg: 'bg-secondary/10'
  },
  {
    title: 'Capacity Development',
    subtitle: 'Collective Action',
    icon: Users,
    color: 'text-primary',
    bg: 'bg-primary/10'
  },
  {
    title: 'Empowerment',
    subtitle: 'Capacity Building',
    icon: HeartHandshake,
    color: 'text-secondary',
    bg: 'bg-secondary/10'
  },
  {
    title: 'Rights & Dignity',
    subtitle: 'Protecting Futures',
    icon: ShieldCheck,
    color: 'text-primary',
    bg: 'bg-primary/10'
  }
];

export function Pillars() {
  return (
    <section className="py-20 bg-background relative z-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, i) => (
            <div 
              key={pillar.title}
              className="bg-white p-8 rounded-xl shadow-xl shadow-foreground/5 border border-border/50 hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className={`w-16 h-16 ${pillar.bg} ${pillar.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <pillar.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{pillar.title}</h3>
              <p className="text-muted-foreground font-semibold uppercase tracking-wider text-sm">
                {pillar.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
