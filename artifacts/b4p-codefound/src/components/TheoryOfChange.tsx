import { UserPlus, Heart, Users, Flag } from 'lucide-react';

export function TheoryOfChange() {
  const steps = [
    {
      icon: UserPlus,
      title: 'Empowered Individuals',
      desc: 'The more empowered women and girls become, and the more moral, technical, and financial support they receive, the better the conditions for them.'
    },
    {
      icon: Heart,
      title: 'Stronger Families',
      desc: 'As the conditions of individuals improve, they create stronger, more resilient families equipped to thrive.'
    },
    {
      icon: Users,
      title: 'Proactive Communities',
      desc: 'As the conditions of families improve, the more productive and proactive their communities will become.'
    },
    {
      icon: Flag,
      title: 'A Productive Nation',
      desc: 'As the conditions of communities improve, the more productive and proactive the country will become.'
    }
  ];

  return (
    <section className="py-24 bg-muted relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-secondary uppercase tracking-widest mb-2">Our Framework</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-primary mb-6">Theory of Change</h3>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We believe in a cascading impact model. Sustainable change starts with the individual and reverberates outward to transform the nation.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-12 left-1/8 right-1/8 h-0.5 bg-gradient-to-r from-secondary/20 via-secondary to-primary/20 z-0" />
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-2xl bg-white shadow-xl flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-300">
                <step.icon className="h-10 w-10 text-primary group-hover:text-secondary transition-colors duration-300" />
              </div>
              <h4 className="text-xl font-bold text-primary mb-3">{step.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
