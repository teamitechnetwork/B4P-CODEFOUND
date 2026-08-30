import { ArrowUpRight, Globe2, LandPlot, UsersRound } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { getProgram, programRegions, type ProgramRegion } from '@/data/programs';
import { Link } from 'wouter';
import { ProgramHero } from '@/components/programs/ProgramHero';

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
      <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <main className="flex-1 pt-[78px] flex items-center justify-center">
          <div className="text-center max-w-lg px-6">
            <h1 className="text-4xl font-extrabold text-[#062e37] mb-4">Program not found</h1>
            <p className="text-muted-foreground mb-8">We could not find that program. Explore the regional program directory to continue.</p>
            <Link href={`/programs/${region}`} className="inline-flex items-center gap-2 bg-[#1b9ed9] text-white px-6 py-4 font-bold text-sm tracking-widest uppercase hover:bg-[#1580b0] transition-colors rounded-sm">
              Back to {regionData.title} <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const inquirySubject = encodeURIComponent(`Inquiry about ${program.title}`);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 pt-[104px]">
        <ProgramHero
          variant="detail"
          eyebrow={regionData.title}
          title={program.title}
          description={program.description}
          image={program.image}
          imageAlt={program.imageAlt}
          backHref={`/programs/${region}`}
          backLabel={`Back to ${regionData.title}`}
          icon={Icon}
          actions={[
            { href: `/programs/${region}`, label: `View all ${regionData.title}` },
            { href: `mailto:management@b4pcodefound.org?subject=${inquirySubject}`, label: 'Contact the team', external: true, quiet: true },
          ]}
          signals={[
            { value: regionData.title.replace(' Programs', ''), label: 'program region' },
            { value: '01', label: 'community-led focus' },
          ]}
          visualLabel="A program shaped with local partners"
          badgeLabel="Program focus"
        />

        {/* CONTENT */}
        <section id="program-focus" className="py-24 bg-white">
          <div className="container max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-12 gap-16">
              <div className="lg:col-span-8">
                <span className="inline-flex items-center gap-3 text-sm font-bold tracking-[0.2em] text-[#1b9ed9] uppercase mb-6">
                  Program Focus
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#062e37] tracking-tight mb-8">
                  Work shaped with communities.
                </h2>
                <div className="prose prose-lg text-muted-foreground prose-p:leading-relaxed">
                  <p className="text-2xl text-[#062e37]/90 font-medium mb-8">
                    {program.description}
                  </p>
                  <p>B4P CODEFOUND approaches this work with local leaders, organizational partners, and community members. The program area is grounded in collaboration, practical learning, and the knowledge people bring from their own communities.</p>
                  <p>Activities are shaped around local context and the opportunities available within each region. The aim is to strengthen people’s ability to participate, connect, and carry progress forward.</p>
                </div>

                <div className="mt-16 bg-[#eaf7fb] p-8 md:p-12 rounded-2xl flex flex-col md:flex-row gap-8 items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-[#062e37] mb-3">Talk with B4P about this work.</h3>
                    <p className="text-muted-foreground">Interested in partnering or learning more about this specific program? Reach out to our team.</p>
                  </div>
                  <a href={`mailto:management@b4pcodefound.org?subject=${inquirySubject}`} className="shrink-0 inline-flex items-center gap-2 bg-[#062e37] text-white px-6 py-4 font-bold text-sm tracking-widest uppercase hover:bg-[#1b9ed9] transition-colors rounded-sm">
                    Contact Team <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <aside className="lg:col-span-4">
                <div className="sticky top-32">
                  <div className="bg-[#f8fbfe] border border-border p-8 rounded-2xl">
                    <span className="text-xs font-bold text-[#1b9ed9] tracking-widest uppercase mb-4 block">Program Region</span>
                    <div className="flex items-center gap-3 mb-6 pb-6 border-b border-border">
                      <Icon className="w-6 h-6 text-[#062e37]" />
                      <h4 className="text-xl font-bold text-[#062e37]">{regionData.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      See the other areas of work in this program region to understand the full scope of our regional impact.
                    </p>
                    <Link href={`/programs/${region}`} className="inline-flex items-center gap-2 text-[#062e37] font-bold text-sm tracking-widest uppercase hover:text-[#1b9ed9] transition-colors">
                      View all {regionData.title.toLowerCase()} <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </aside>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
