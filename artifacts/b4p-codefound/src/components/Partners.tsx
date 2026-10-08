import { Globe2, Users2, MapPin } from 'lucide-react';

export function Partners() {
  const sources = [
    {
      category: 'International Frameworks',
      icon: Globe2,
      items: [
        'UN Women: Latest Global Updates on Gender Equality',
        'Ending Violence Against Women — UN Women Programs',
        'Women and the Sustainable Development Goals (SDGs)'
      ]
    },
    {
      category: 'Diaspora Networks',
      icon: Users2,
      items: [
        'ULAA Press — Union of Liberian Associations in the Americas',
        'Liberian Women Advocacy to End Violence in Liberia',
        'Liberians in Columbus Incorporated, Inc.'
      ]
    },
    {
      category: 'Local Impact & Policy',
      icon: MapPin,
      items: [
        'CSW 2022: WONGOSOL, B4P CODEFOUND hosts 2nd CSW Side-Event',
        'ED\'s Visit: B4P CODEFOUND ensuring women\'s participation',
        'Passage of Dual Citizenship in Liberia'
      ]
    }
  ];

  return (
    <section id="partner" className="py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-secondary uppercase tracking-widest mb-2">Connected & Supported</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-primary mb-6">Our Networks & Sources</h3>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Our work is deeply embedded in and informed by global frameworks, strong diaspora engagement, and critical local legislation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {sources.map((group, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-border">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                <group.icon className="h-6 w-6 text-secondary" />
              </div>
              <h4 className="text-xl font-bold text-primary mb-6 pb-4 border-b">{group.category}</h4>
              <ul className="flex flex-col gap-4">
                {group.items.map((item, i) => (
                  <li key={i} className="text-muted-foreground leading-relaxed flex items-start gap-3">
                    <span className="text-secondary mt-1">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
