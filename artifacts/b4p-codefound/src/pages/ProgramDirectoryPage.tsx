import { ArrowLeft, ArrowUpRight, BriefcaseBusiness, Globe2, LandPlot, UsersRound } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

type DirectoryKind = 'global' | 'usa' | 'liberia' | 'services';

const directoryData: Record<DirectoryKind, {
  eyebrow: string;
  title: string;
  intro: string;
  icon: typeof Globe2;
  items: { title: string; description: string }[];
}> = {
  global: {
    eyebrow: 'Program region',
    title: 'Global Programs',
    intro: 'Building exchange, leadership, enterprise, governance, and cultural connection across borders.',
    icon: Globe2,
    items: [
      { title: 'Global Youth Exchange Forum (GYEF)', description: 'A platform for young people to learn, connect, and exchange ideas across communities.' },
      { title: 'LDDWYF/CSW', description: 'Global engagement and advocacy connected to women’s leadership and civic participation.' },
      { title: 'Leadership Development', description: 'Growing the skills, confidence, and relationships that help people lead change.' },
      { title: 'Business Development & Entrepreneurship', description: 'Supporting enterprise thinking, practical growth, and entrepreneurial opportunity.' },
      { title: 'Peacebuilding & Governance', description: 'Strengthening dialogue, participation, accountability, and trust.' },
      { title: 'Research & Policy Advocacy', description: 'Connecting evidence and lived experience to conversations that shape better policy.' },
      { title: 'Arts & Culture', description: 'Using culture, creativity, and shared expression to build understanding.' },
      { title: 'Events', description: 'Gathering people around ideas, learning, and collective action.' },
    ],
  },
  usa: {
    eyebrow: 'Program region',
    title: 'USA Programs',
    intro: 'Community-centered programs that help people navigate opportunity, build relationships, and lead.',
    icon: UsersRound,
    items: [
      { title: 'Community Navigation & Dialogues', description: 'Creating spaces for shared understanding, conversation, and practical connection.' },
      { title: 'Networking & Professional Development', description: 'Building relationships and skills that open doors for individuals and communities.' },
      { title: 'Mentorship and Leadership development', description: 'Supporting people as they grow into confident, connected leaders.' },
      { title: 'Events', description: 'Workshops, gatherings, and other opportunities to learn and connect.' },
    ],
  },
  liberia: {
    eyebrow: 'Program region',
    title: 'Liberia Programs',
    intro: 'Locally rooted work supporting livelihoods, health education, youth, and civic participation.',
    icon: LandPlot,
    items: [
      { title: 'Business Development Services (Agriculture, etc)', description: 'Practical support for agriculture, enterprise development, and sustainable livelihoods.' },
      { title: 'Health Education & Sensitization', description: 'Sharing accessible information and strengthening community awareness around health.' },
      { title: 'Youth & Education', description: 'Civic, vocational, skills training, financial literacy, and digital literacy opportunities for youth.' },
      { title: 'Events & Conference', description: 'Convening people around learning, dialogue, and community-led action.' },
    ],
  },
  services: {
    eyebrow: 'Organizational support',
    title: 'Services',
    intro: 'Practical support for nonprofits, community initiatives, and businesses building a more equitable future.',
    icon: BriefcaseBusiness,
    items: [
      { title: 'Fiscal Sponsorship', description: 'A pathway for aligned initiatives to strengthen their work with the right organizational support.' },
      { title: 'Nonprofit Capacity Building', description: 'Practical support to help nonprofit organizations grow their systems, leadership, and impact.' },
      { title: 'Business Development', description: 'Business-focused support that helps enterprises build capacity and connect with opportunity.' },
    ],
  },
};

export default function ProgramDirectoryPage({ kind }: { kind: DirectoryKind }) {
  const data = directoryData[kind];
  const Icon = data.icon;
  const isServices = kind === 'services';

  return (
    <div className="program-directory-page flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="directory-hero">
          <div className="container mx-auto px-6">
            <a className="directory-hero__back" href="/what-we-do"><ArrowLeft size={15} aria-hidden="true" /> Back to What We Do</a>
            <div className="directory-hero__icon"><Icon size={28} aria-hidden="true" /></div>
            <span className="page-kicker">{data.eyebrow}</span>
            <h1>{data.title}</h1>
            <p>{data.intro}</p>
          </div>
        </section>

        <section className="directory-content">
          <div className="container mx-auto px-6">
            <div className="directory-content__intro">
              <span className="section-heading__eyebrow">{isServices ? 'How we help' : 'Explore the work'}</span>
              <h2>{isServices ? 'Support that meets the work where it is.' : 'Programs shaped with community partners.'}</h2>
              <p>{isServices ? 'Each service is a starting point for a conversation about what your organization or enterprise needs to grow.' : 'Explore the areas of work represented in this region.'}</p>
            </div>
            <div className={`directory-list ${isServices ? 'directory-list--services' : ''}`}>
              {data.items.map((item, index) => (
                <article className="directory-item" key={item.title}>
                  <span className="directory-item__number">{String(index + 1).padStart(2, '0')}</span>
                  <div><h3>{item.title}</h3><p>{item.description}</p></div>
                  <ArrowUpRight size={19} aria-hidden="true" />
                </article>
              ))}
            </div>
            {isServices && (
              <a className="directory-contact" href="mailto:management@b4pcodefound.org?subject=Talk%20to%20B4P%20about%20services">Talk to B4P CODEFOUND about your needs <ArrowUpRight size={17} aria-hidden="true" /></a>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}