import { ArrowLeft, ArrowUpRight, Globe2, LandPlot, UsersRound } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { getProgram, programRegions, type ProgramRegion } from '@/data/programs';

const regionIcons = {
  global: Globe2,
  usa: UsersRound,
  liberia: LandPlot,
} satisfies Record<ProgramRegion, typeof Globe2>;

export default function ProgramDetailPage({ region, slug }: { region: ProgramRegion; slug: string }) {
  const program = getProgram(region, slug);
  const regionData = programRegions[region];
  const Icon = regionIcons[region];

  if (!program) {
    return (
      <div className="program-detail-page flex min-h-screen flex-col">
        <Header />
        <main className="program-detail-missing flex-1">
          <div className="container mx-auto px-6">
            <span className="page-kicker">Program</span>
            <h1>Program not found</h1>
            <p>We could not find that program. Explore the regional program directory to continue.</p>
            <a href={`/programs/${region}`}>Back to {regionData.title} <ArrowUpRight size={17} aria-hidden="true" /></a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="program-detail-page flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="program-detail-hero">
          <div className="container mx-auto px-6">
            <a className="program-detail-hero__back" href={`/programs/${region}`}>
              <ArrowLeft size={15} aria-hidden="true" /> Back to {regionData.title}
            </a>
            <div className="program-detail-hero__icon"><Icon size={27} aria-hidden="true" /></div>
            <span className="page-kicker">{regionData.title}</span>
            <h1>{program.title}</h1>
            <p>{program.description}</p>
          </div>
        </section>

        <section className="program-detail-content">
          <div className="container mx-auto px-6">
            <div className="program-detail-content__grid">
              <div>
                <span className="section-heading__eyebrow">Program focus</span>
                <h2>Work shaped with communities.</h2>
                <p className="program-detail-content__lead">{program.description}</p>
              </div>
              <aside className="program-detail-content__card">
                <span>Continue exploring</span>
                <strong>{regionData.title}</strong>
                <p>See the other areas of work in this program region.</p>
                <a href={`/programs/${region}`}>View all {regionData.title.toLowerCase()} <ArrowUpRight size={17} aria-hidden="true" /></a>
              </aside>
            </div>
          </div>
        </section>

        <section className="program-detail-next">
          <div className="container mx-auto px-6">
            <div>
              <span className="section-heading__eyebrow">Stay connected</span>
              <h2>Talk with B4P CODEFOUND about this work.</h2>
            </div>
            <a href="mailto:management@b4pcodefound.org?subject=Program%20inquiry">Contact the team <ArrowUpRight size={17} aria-hidden="true" /></a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}