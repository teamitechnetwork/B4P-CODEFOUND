import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ArrowUpRight, Linkedin } from 'lucide-react';

type TeamMember = {
  name: string;
  role: string;
  image?: string;
  bio?: string;
  linkedin?: string;
};

const MANAGEMENT_TEAM: TeamMember[] = [
  {
    name: 'Lindora Kolu Howard-Diawara',
    role: 'Founder & Executive Director / Acting Country Director',
    image: '/images/team/team-lindora-management.png',
    linkedin: 'https://www.linkedin.com/in/lindora-diawara?utm_source=share_via&utm_content=profile&utm_medium=member_android'
  },
  {
    name: 'Awanah F. Shatamon',
    role: 'Program Associate',
    image: '/images/team/team-awanah.jpg',
    linkedin: 'https://www.linkedin.com/in/lewanah-flee?utm_source=share_via&utm_content=profile&utm_medium=member_android'
  },
  {
    name: 'Albert F. Wilson',
    role: 'Program Associate',
    image: '/images/team/team-albert.jpg',
    linkedin: 'https://www.linkedin.com/in/albert-wilson-9806a829?utm_source=share_via&utm_content=profile&utm_medium=member_android'
  },
  {
    name: 'Wilmot Kerkulah',
    role: 'Social Media, Marketing & Operations Associate',
    image: '/images/team/team-wilmot.png',
    linkedin: 'https://www.linkedin.com/in/cto-wilmot-kerkulah-984531337?utm_source=share_via&utm_content=profile&utm_medium=member_android'
  },
  {
    name: 'Darlington W. Vangehn',
    role: 'Director of Monitoring, Evaluation & Learning',
    image: '/images/team/team-darlington.png',
    linkedin: 'https://www.linkedin.com/in/darlington-w-vangehn-3b952310?utm_source=share_via&utm_content=profile&utm_medium=member_android'
  },
  {
    name: 'Fatumata Sheriffa Diawara',
    role: 'Administrative Intern',
    image: '/images/team/team-fatumata.png'
  },
  {
    name: 'Thomas Mulbah',
    role: 'Communications Consultant',
    image: '/images/team/team-thomas.png'
  }
];

const BOARD_TEAM: TeamMember[] = [
  {
    name: 'David Kudel',
    role: 'Chairperson',
  },
  {
    name: 'Cecelia Danuweli',
    role: 'Vice Chair Person',
  },
  {
    name: 'Patrick Flomo',
    role: 'Financial Secretary',
  },
  {
    name: 'Dr. Ahjah Marie Johnson',
    role: 'Member',
  },
  {
    name: 'Deddeh Kwekwe',
    role: 'Member',
  },
  {
    name: 'Lindora Kolu Howard-Diawara',
    role: 'Secretary & Member',
  },
  {
    name: 'Joyce Myers',
    role: 'Member',
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
    <div className={`team-page team-page--${type} flex flex-col min-h-screen font-sans`}>
      <Header />
      <main className="flex-1 pt-[72px] md:pt-[108px]">
        <div className="team-page__hero">
          <div className="team-page__hero-inner container mx-auto px-6 relative z-10 text-center text-white">
            <span className="team-page__eyebrow">
              Our People
            </span>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </div>

        <section className="team-page__content container mx-auto px-6">
          <div className="team-page__heading">
            <span>{type === 'board' ? 'Governance' : type === 'advisory' ? 'Global expertise' : 'Meet the team'}</span>
            <div />
          </div>
          <div className="team-grid">
            {team.map((member) => (
              <article
                key={member.name}
                className={`team-card team-card--${type} group`}
              >
                {type === 'management' && (
                  <div className="team-card__portrait">
                    <div className="team-card__photo-frame">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="team-card__image"
                          loading="lazy"
                        />
                      ) : (
                        <div className="team-card__monogram" aria-label={`${member.name} portrait unavailable`}>
                          <span>
                            {member.name.split(' ').map(n => n[0]).join('').substring(0,2)}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="team-card__role-band">
                      <span>{member.role}</span>
                    </div>
                  </div>
                )}
                <div className="team-card__content">
                  <div className="team-card__title-row">
                    <h3>{member.name}</h3>
                    {type === 'management' && (
                      member.linkedin ? (
                        <a
                          className="team-card__linkedin"
                          href={member.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Open LinkedIn profile for ${member.name}`}
                        >
                          <Linkedin size={16} strokeWidth={2.3} aria-hidden="true" />
                        </a>
                      ) : (
                        <span
                          className="team-card__linkedin team-card__linkedin--pending"
                          role="img"
                          aria-label={`LinkedIn profile for ${member.name} coming soon`}
                        >
                          <Linkedin size={16} strokeWidth={2.3} aria-hidden="true" />
                        </span>
                      )
                    )}
                  </div>
                  {type === 'management' ? (
                    member.linkedin ? (
                      <a className="team-card__meet" href={member.linkedin} target="_blank" rel="noreferrer">
                        Meet {member.name.split(' ')[0]} <ArrowUpRight size={16} strokeWidth={2.2} aria-hidden="true" />
                      </a>
                    ) : (
                      <span className="team-card__meet">Meet {member.name.split(' ')[0]}</span>
                    )
                  ) : (
                    <p>{member.role}</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
