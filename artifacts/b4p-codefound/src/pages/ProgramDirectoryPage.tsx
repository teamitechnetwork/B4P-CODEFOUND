import { ArrowLeft, ArrowUpRight, BriefcaseBusiness, Globe2, LandPlot, UsersRound } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { programRegions, type ProgramRegion } from '@/data/programs';

type DirectoryKind = ProgramRegion | 'services';
type DirectoryItem = { title: string; description: string; href: string };

const regionIcons = {
  global: Globe2,
  usa: UsersRound,
  liberia: LandPlot,
} satisfies Record<ProgramRegion, typeof Globe2>;

const services = [
  { title: 'Fiscal Sponsorship', description: 'A pathway for aligned initiatives to strengthen their work with the right organizational support.' },
  { title: 'Nonprofit Capacity Building', description: 'Practical support to help nonprofit organizations grow their systems, leadership, and impact.' },
  { title: 'Business Development', description: 'Business-focused support that helps enterprises build capacity and connect with opportunity.' },
];

export default function ProgramDirectoryPage({ kind }: { kind: DirectoryKind }) {
  const isServices = kind === 'services';
  const directory: { title: string; intro: string; eyebrow: string; items: DirectoryItem[] } = isServices
    ? {
      eyebrow: 'Organizational support',
      title: 'Services',
      intro: 'Practical support for nonprofits, community initiatives, and businesses building a more equitable future.',
      items: services.map((service) => ({ ...service, href: '/services' })),
    }
    : {
      eyebrow: 'Program region',
      title: programRegions[kind].title,
      intro: programRegions[kind].intro,
      items: programRegions[kind].programs.map((program) => ({ ...program, href: `/programs/${kind}/${program.slug}` })),
    };
  const Icon = isServices ? BriefcaseBusiness : regionIcons[kind];

  return (
    <div className="program-directory-page flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="directory-hero">
          <div className="container mx-auto px-6">
            <a className="directory-hero__back" href="/what-we-do"><ArrowLeft size={15} aria-hidden="true" /> Back to What We Do</a>
            <div className="directory-hero__icon"><Icon size={28} aria-hidden="true" /></div>
            <span className="page-kicker">{directory.eyebrow}</span>
            <h1>{directory.title}</h1>
            <p>{directory.intro}</p>
          </div>
        </section>

        <section className="directory-content">
          <div className="container mx-auto px-6">
            {!isServices && (
              <nav className="directory-region-nav" aria-label="Program regions">
                {(Object.keys(programRegions) as ProgramRegion[]).map((regionKey) => (
                  <a className={regionKey === kind ? 'is-active' : ''} href={`/programs/${regionKey}`} key={regionKey}>
                    {programRegions[regionKey].title}
                  </a>
                ))}
              </nav>
            )}
            <div className="directory-content__intro">
              <span className="section-heading__eyebrow">{isServices ? 'How we help' : 'Explore the work'}</span>
              <h2>{isServices ? 'Support that meets the work where it is.' : 'Programs shaped with community partners.'}</h2>
              <p>{isServices ? 'Each service is a starting point for a conversation about what your organization or enterprise needs to grow.' : 'Choose a program to learn more, or move between regions to explore the wider B4P CODEFOUND network.'}</p>
            </div>
            <div className={`directory-list ${isServices ? 'directory-list--services' : ''}`}>
              {directory.items.map((item, index) => {
                return (
                  <a className="directory-item" href={item.href} key={item.title}>
                    <span className="directory-item__number">{String(index + 1).padStart(2, '0')}</span>
                    <div><h3>{item.title}</h3><p>{item.description}</p></div>
                    <div className="directory-item__action">
                      <span>View {isServices ? 'service' : 'program'}</span>
                      <ArrowUpRight size={19} aria-hidden="true" />
                    </div>
                  </a>
                );
              })}
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