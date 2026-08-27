import { ArrowLeft, ArrowUpRight, Globe2, LandPlot, UsersRound } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { programRegions, type ProgramRegion } from '@/data/programs';
import { Link } from 'wouter';

const regionIcons = {
  global: Globe2,
  usa: UsersRound,
  liberia: LandPlot,
} satisfies Record<ProgramRegion, typeof Globe2>;

const regionImages: Record<ProgramRegion, { src: string; alt: string }> = {
  global: { src: '/images/conference/day-3-community-01.jpg', alt: 'B4P CODEFOUND participants building global connections' },
  usa: { src: '/images/cwc/community-photo.png', alt: 'Women gathered through Columbus Women Connect in Ohio' },
  liberia: { src: '/images/conference/day-2-community-01.jpg', alt: 'Community participants gathered through B4P CODEFOUND in Liberia' },
};

export default function ProgramDirectoryPage({ kind }: { kind: ProgramRegion }) {
  const directory = {
    eyebrow: 'Program region',
    title: programRegions[kind].title,
    intro: programRegions[kind].intro,
    items: programRegions[kind].programs.map((program) => ({ ...program, href: `/programs/${kind}/${program.slug}` })),
  };
  const Icon = regionIcons[kind];
  const regionImage = regionImages[kind];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 pt-[104px]">
        {/* HERO */}
        <section className="relative bg-[#062e37] text-white py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img src={regionImage.src} alt="" className="h-full w-full object-cover opacity-20 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#062e37] via-[#062e37]/90 to-[#062e37]/45" />
          </div>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1b9ed9]/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
            <Link href="/what-we-do" className="inline-flex items-center gap-2 text-[#8bd9fb] hover:text-white font-bold text-sm uppercase tracking-wider mb-12 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to What We Do
            </Link>
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur flex items-center justify-center border border-white/20">
                  <Icon className="w-8 h-8 text-[#8bd9fb]" />
                </div>
                <span className="inline-flex items-center gap-3 text-sm font-bold tracking-[0.2em] text-[#df5311] uppercase">
                  {directory.eyebrow}
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] mb-8">
                {directory.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-medium">
                {directory.intro}
              </p>
            </div>
          </div>
        </section>

        {/* REGION NAV & CONTENT */}
        <section className="py-24 bg-[#f8fbfe] border-b border-border">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            <nav className="flex flex-wrap gap-4 mb-20" aria-label="Program regions">
              {(Object.keys(programRegions) as ProgramRegion[]).map((regionKey) => (
                <Link
                  key={regionKey}
                  href={`/programs/${regionKey}`}
                  className={`px-6 py-3 rounded-full text-sm font-bold tracking-wider uppercase transition-colors ${
                    regionKey === kind
                      ? 'bg-[#1b9ed9] text-white'
                      : 'bg-white text-[#062e37] border border-border hover:border-[#1b9ed9]/50'
                  }`}
                >
                  {programRegions[regionKey].title}
                </Link>
              ))}
            </nav>

            <div className="mb-16 max-w-2xl">
              <span className="inline-flex items-center gap-3 text-sm font-bold tracking-[0.2em] text-[#1b9ed9] uppercase mb-4">
                Explore the work
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#062e37] tracking-tight mb-6">
                Programs shaped with community partners.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Choose a program to learn more, or move between regions to explore the wider B4P CODEFOUND network.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {directory.items.map((item, index) => (
                <Link key={item.title} href={item.href} className="group block overflow-hidden bg-white border border-border rounded-xl hover:border-[#1b9ed9]/40 hover:shadow-xl transition-all">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img src={item.image} alt={item.imageAlt} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="flex flex-col p-8">
                    <span className="text-sm font-bold text-[#1b9ed9] mb-4 block tracking-widest">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-2xl font-bold text-[#062e37] mb-4 group-hover:text-[#1b9ed9] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-8 flex-1">
                      {item.description}
                    </p>
                    <div className="inline-flex items-center gap-2 text-[#062e37] font-bold text-sm tracking-widest uppercase transition-colors mt-auto">
                      View Program <ArrowUpRight className="w-5 h-5 text-[#1b9ed9] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
