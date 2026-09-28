import { Shield, Lightbulb, TrendingUp, HandHeart, CheckCircle2 } from 'lucide-react';

export function WhatWeDo() {
  const pillars = [
    {
      icon: TrendingUp,
      title: 'Social Change',
      subtitle: 'Driving Impact',
      desc: 'Fostering systemic shifts in communities to ensure long-term stability and equitable growth.'
    },
    {
      icon: HandHeart,
      title: 'Capacity Development',
      subtitle: 'Collective Action',
      desc: 'Equipping grassroots organizations and individuals with the tools needed to lead change.'
    },
    {
      icon: Lightbulb,
      title: 'Empowerment',
      subtitle: 'Capacity Building',
      desc: 'Creating opportunities for women and youth to step into leadership roles confidently.'
    },
    {
      icon: Shield,
      title: 'Rights & Dignity',
      subtitle: 'Protecting Futures',
      desc: 'Advocating for inclusive policies and safeguarding the fundamental human rights of all.'
    }
  ];

  const programs = [
    {
      title: 'Capacity Building Fund',
      desc: 'Providing institutional support, demanding accountability, ensuring transparency, and driving community participation.'
    },
    {
      title: 'Community Business Investment',
      desc: 'Resourcing community-led peace and development initiatives for sustainable economic growth.'
    },
    {
      title: 'Donor Advised Funds',
      desc: 'Managing targeted funds deployed strictly according to donor guidelines to maximize specific impacts.'
    },
    {
      title: 'Liberian Organizations and Community Assessment (LOCA)',
      desc: 'Fostering community building and grassroots development across Liberia through structured assessments.'
    },
    {
      title: 'Liberia-Diaspora Dialogues',
      desc: 'Promoting self-reliance through meaningful diaspora engagement and collaborative cross-border problem solving.'
    }
  ];

  return (
    <section id="what-we-do" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Pillars */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-secondary uppercase tracking-widest mb-2">Our Pillars</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-primary mb-6">The Foundation of Our Work</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="bg-muted/50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-border group">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <pillar.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-sm font-bold text-secondary uppercase tracking-wider mb-1">{pillar.subtitle}</h4>
                <h3 className="text-2xl font-bold text-primary mb-4">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Programs section with background image */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/programs-bg.jpg" 
              alt="Hands working together" 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-primary/95 mix-blend-multiply" />
          </div>

          <div className="relative z-10 p-8 md:p-16 lg:p-20 flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/3 text-white">
              <h2 className="text-sm font-bold text-secondary uppercase tracking-widest mb-2">Our Programs</h2>
              <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Catalyzing<br/>Change</h3>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                We implement structured initiatives designed to transfer power, resources, and capacity directly to the communities that need them most.
              </p>
              <a href="/partner-with-us" className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded font-bold uppercase tracking-wider hover:bg-white hover:text-secondary transition-colors">
                Partner With Us
              </a>
            </div>

            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
              {programs.map((prog, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-colors">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-secondary shrink-0 mt-1" />
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{prog.title}</h4>
                      <p className="text-white/80 leading-relaxed text-sm">
                        {prog.desc}
                      </p>
                    </div>
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
