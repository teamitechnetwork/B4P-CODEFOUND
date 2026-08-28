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
    <section className="py-16 md:pb-24 md:pt-12 lg:pt-0 lg:-mt-8 relative z-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {pillars.map((pillar, i) => (
            <div 
              key={pillar.title}
              className="bg-white p-8 rounded-2xl shadow-xl shadow-black/5 border border-border/40 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/10 transition-all duration-300 group flex flex-col h-full relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className={`w-16 h-16 ${pillar.bg} ${pillar.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                <pillar.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-extrabold text-foreground mb-3 leading-tight tracking-tight group-hover:text-primary transition-colors relative z-10">{pillar.title}</h3>
              <p className="text-muted-foreground font-bold uppercase tracking-[0.1em] text-[0.75rem] leading-snug relative z-10">
                {pillar.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
