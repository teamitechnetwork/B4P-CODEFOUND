import { HeartHandshake, Users, ShieldCheck, TrendingUp } from 'lucide-react';

const pillars = [
  {
    title: 'Driving Social Change',
    subtitle: 'Global-local peacebuilding and economic development',
    icon: TrendingUp,
    color: 'text-secondary',
    bg: 'bg-secondary/10'
  },
  {
    title: 'Capacity Building Support',
    subtitle: 'Capacity development & collective action',
    icon: Users,
    color: 'text-primary',
    bg: 'bg-primary/10'
  },
  {
    title: 'Her — The Girl Child',
    subtitle: 'Women & girls leadership development',
    icon: HeartHandshake,
    color: 'text-secondary',
    bg: 'bg-secondary/10'
  },
  {
    title: 'SRHR',
    subtitle: 'Health, rights & dignity',
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
