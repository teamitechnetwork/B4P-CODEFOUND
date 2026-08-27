import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

type TeamMember = {
  name: string;
  role: string;
  image?: string;
  bio?: string;
};

const MANAGEMENT_TEAM: TeamMember[] = [
  {
    name: 'Lindora Howard-Diawara',
    role: 'Founder & Executive Director / Acting Country Director',
    image: 'https://b4pcodefound.org/wp-content/uploads/2026/05/Screenshot-2026-05-11-034640.png'
  },
  {
    name: 'Awanah F. Shatamon',
    role: 'Program Associate',
    image: 'http://b4pcodefound.org/wp-content/uploads/2025/08/Awanah-F.-Shatamon-Program-Associate-Massachusetts-200x200-1.jpg'
  },
  {
    name: 'Albert F. Wilson',
    role: 'Program Associate',
    image: 'http://b4pcodefound.org/wp-content/uploads/2025/08/Albert-Freeman-Wilson-Program-Associate-New-York-200x200-1.jpg'
  },
  {
    name: 'Wilmot Kerkulah',
    role: 'Social Media, Marketing & Operations Associate',
  },
  {
    name: 'Darlington W. Vangehn',
    role: 'Director of Monitoring, Evaluation & Learning',
    image: 'http://b4pcodefound.org/wp-content/uploads/2025/08/direct1-1-200x200-1.png'
  },
  {
    name: 'Fatumata Sheriffa Diawara',
    role: 'Administrative Intern',
    image: 'http://b4pcodefound.org/wp-content/uploads/2025/08/direct2-1-200x200-1.png'
  },
  {
    name: 'Thomas Mulbah',
    role: 'Communications Consultant',
    image: 'http://b4pcodefound.org/wp-content/uploads/2025/08/direct4-1-200x200-1.png'
  }
];

const BOARD_TEAM: TeamMember[] = [
  {
    name: 'David Kudel',
    role: 'Chairperson',
    image: 'https://b4pcodefound.org/wp-content/uploads/2025/08/Photo2-DKudel-1-200x200-1.jpg'
  },
  {
    name: 'Cecelia Danuweli',
    role: 'Vice Chair Person',
    image: 'https://b4pcodefound.org/wp-content/uploads/2025/08/p2-Cecelia-Danuweli-2-768x1024-1-200x200-1.jpg'
  },
  {
    name: 'Patrick Flomo',
    role: 'Financial Secretary',
    image: 'https://b4pcodefound.org/wp-content/uploads/2026/05/Screenshot-2026-05-11-084713.png'
  },
  {
    name: 'Dr. Ahjah Marie Johnson',
    role: 'Member',
    image: 'https://b4pcodefound.org/wp-content/uploads/2026/05/Screenshot-2026-05-11-084732.png'
  },
  {
    name: 'Deddeh Kwekwe',
    role: 'Member',
    image: 'https://b4pcodefound.org/wp-content/uploads/2026/05/Screenshot-2026-05-11-084721.png'
  },
  {
    name: 'Lindora Howard-Diawara',
    role: 'Secretary & Member',
    image: 'http://b4pcodefound.org/wp-content/uploads/2025/08/1516874995713.jpg'
  }
];

const ADVISORY_TEAM: TeamMember[] = [
  { name: 'Professor John Paul Lederach', role: 'Strategic Peacebuilding and Community Relations' },
  { name: 'Malick NIANG', role: 'Business Development & Catalytic Investments' },
  { name: 'Elizabeth Jordan', role: 'Philanthropy and Community Relations' },
  { name: 'Stephanie Russell', role: 'Nonprofit Management, Arts & Culture' },
  { name: 'Leymah R. Gbowee', role: 'Gender Equality and Women Empowerment' },
  { name: 'Abibatu K. Turay', role: 'Women Empowerment and Agribusiness Development' },
  { name: 'Juliet Were', role: 'Research and Documentation' },
  { name: 'Atty. Samuel Kofi Woods, II', role: 'Human Rights / NGO Legal Compliance' },
  { name: 'Paul Takow', role: 'Communication, Visibility and Branding' },
  { name: 'Emmanuel Wettee', role: 'Diaspora Affairs and Liberia-Diaspora Relations' },
  { name: 'Sidi M. Diawara', role: 'Programming, Capacity Development and Donor Relations' },
  { name: 'Jenean Smith Hughes, CPA', role: 'Accountant' }
];

export function TeamPage({ type }: { type: 'management' | 'board' | 'advisory' }) {
  let title = '';
  let description = '';
  let team: TeamMember[] = [];

  switch (type) {
    case 'management':
      title = 'Management Team';
      description = 'Our dedicated leadership driving global-local peacebuilding and sustainable development daily.';
      team = MANAGEMENT_TEAM;
      break;
    case 'board':
      title = 'Board of Directors';
      description = 'Guiding our strategic vision and ensuring accountability, transparency, and impact across all programs.';
      team = BOARD_TEAM;
      break;
    case 'advisory':
      title = 'Advisory Council';
      description = 'Global experts providing strategic insight in peacebuilding, development, and community engagement.';
      team = ADVISORY_TEAM;
      break;
  }

  return (
    <div className="flex flex-col min-h-screen bg-background font-sans">
      <Header />
      <main className="flex-1 pt-[78px]">
        {/* Page Header */}
        <div className="bg-gradient-to-br from-secondary/90 to-primary/80 py-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/conference/day-1-community.jpg')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
          <div className="container mx-auto relative z-10 text-center text-white">
            <span className="inline-block py-1 px-3 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider mb-4 border border-white/20">
              Our People
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">{title}</h1>
            <p className="text-lg md:text-xl font-medium max-w-2xl mx-auto opacity-90">{description}</p>
          </div>
        </div>

        {/* Team Grid */}
        <section className="py-24 container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div 
                key={member.name}
                className="group bg-white rounded-xl shadow-sm border border-border overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="aspect-square bg-muted relative overflow-hidden flex items-center justify-center">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-muted/80 text-muted-foreground/30">
                      <span className="text-6xl font-bold uppercase">
                        {member.name.split(' ').map(n => n[0]).join('').substring(0,2)}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-1 leading-tight group-hover:text-primary transition-colors">{member.name}</h3>
                  <p className="text-sm font-semibold text-secondary leading-snug">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
