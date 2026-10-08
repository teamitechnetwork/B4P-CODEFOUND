import { ArrowUpRight, Check, Globe2, LandPlot, UsersRound } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Link } from 'wouter';
import { DrivePhotoGallery } from '@/components/sections/DrivePhotoGallery';
import { ProgramHero } from '@/components/programs/ProgramHero';

const pillars = [
  {
    id: 'peacebuilding',
    slug: '/peacebuilding-program',
    eyebrow: 'Operational pillar 01',
    title: 'Peacebuilding',
    image: '/images/conference/day-1-community-gathering.jpg',
    goal: 'Cultivating harmony, reducing conflict, and building lasting trust across diverse, conflict and post-conflict communities.',
    objectives: [
      'Facilitate processes and promote tolerance',
      'Build capacities for Conflict Resolution',
      'Equip community members with practical tools',
    ],
    outcome: 'Enhanced community cohesion, trust, and sustainable peace initiatives.',
  },
  {
    id: 'economic-development',
    slug: '/economic-development-program',
    eyebrow: 'Operational pillar 02',
    title: 'Economic Development',
    image: '/images/story-bwydc.jpg',
    goal: 'Driving prosperity, expanding opportunity, and building economic independence for women and girls through sustainable livelihoods.',
    objectives: [
      'Agribusiness development that strengthens farmers, value chains, economic inclusion, and community resilience',
      'Entrepreneurship training, resources, and mentorship for women-owned businesses',
      'Digital and financial literacy for stronger decision-making and participation in the modern economy',
      'Market linkages connecting businesses to credit, adaptable services, networks, and development resources',
    ],
    outcome: 'Greater economic independence for women and stronger local livelihoods.',
  },
  {
    id: 'youth-civic-engagement',
    slug: '/programs/global/global-youth-exchange-forum',
    eyebrow: 'Operational pillar 03',
    title: 'Youth & Civic Engagement',
    image: '/images/conference/day-3-community-01.jpg',
    goal: 'Empowering youth to become active, engaged citizens who drive change from within their communities.',
    objectives: [
      'Education and mentorship that unlock youth potential',
      'Problem-solving projects and exchanges that build practical skills',
      'Civic participation that strengthens young people’s voices',
    ],
    outcome: 'Informed young leaders with a stronger voice in community decision-making.',
  },
  {
    id: 'governance-democracy',
    slug: '/programs/global/peacebuilding-governance',
    eyebrow: 'Operational pillar 04',
    title: 'Governance & Democracy',
    image: '/images/conference/day-1-audience-stage.jpg',
    goal: 'Promoting effective, accountable, and inclusive governance structures that serve community members equitably.',
    objectives: [
      'Community building and advocacy for participatory, open governance',
      'Capacity building that strengthens knowledge, skills, and local institutions',
      'Leadership development that advances women and youth in decision-making roles',
    ],
    outcome: 'More responsive public services and stronger public trust in governance.',
  },
  {
    id: 'diaspora-engagement',
    slug: '/programs/global',
    eyebrow: 'Operational pillar 05',
    title: 'Diaspora Engagement & Exchange',
    image: '/images/conference/day-1-group-02.jpg',
    goal: 'Uniting diaspora communities and local changemakers to drive sustainable development and lasting peace.',
    objectives: [
      'Build communities through dialogue, knowledge transfer, and resource mobilization',
      'Connect diaspora members with communities across the globe',
      'Create opportunities for arts, culture, and exchange that increase individual and group agency',
    ],
    outcome: 'Locally led and globally connected partnerships for peace, prosperity, and sustainable development.',
  },
];

const regions = [
  {
    name: 'Global',
    href: '/programs/global',
    icon: Globe2,
    image: '/images/conference/day-3-community-01.jpg',
    description: 'Cross-border exchange, leadership, enterprise, peacebuilding, and cultural work.',
  },
  {
    name: 'USA',
    href: '/programs/usa',
    icon: UsersRound,
    image: '/images/conference/day-1-group-02.jpg',
    description: 'Community-centered pathways for connection, learning, mentorship, and growth.',
  },
  {
    name: 'Liberia',
    href: '/programs/liberia',
    icon: LandPlot,
    image: '/images/conference/day-2-community-01.jpg',
    description: 'Locally rooted work supporting agriculture, health, education, and civic participation.',
  },
];

export default function WhatWeDoPage() {
  return (
    <div className="what-we-do-page flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <ProgramHero
          variant="landing"
          eyebrow="What we do"
          title={<>From shared purpose to <em>practical progress.</em></>}
          description="Through evidence and rights-based approaches, we co-create programs, projects, and activities with subsidiaries and community partners."
          image="/images/uploaded/programs-community-exterior.webp"
          imageAlt="B4P CODEFOUND participants gathered outside a community venue"
          actions={[
            { href: '/programs/global', label: 'Explore program regions' },
          { href: '/partner-with-us', label: 'Work with B4P CODEFOUND', quiet: true },
          ]}
          signals={[
            { value: '05', label: 'operational pillars' },
            { value: '03', label: 'connected regions' },
          ]}
        />

        {/* PILLARS */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            <div className="mb-20">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#062e37] tracking-tight mb-6">
                Our operational pillars
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                We build the conditions for people and communities to thrive, connecting peace, participation, and economic opportunity.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {pillars.map((pillar) => (
                <Link key={pillar.id} href={pillar.slug} className="group block outline-none lg:last:col-span-2">
                  <article className="h-full flex flex-col relative bg-[#f8fbfe] border border-border rounded-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#1b9ed9]/10 hover:border-[#1b9ed9]/30">
                    <div className="aspect-[4/3] w-full relative overflow-hidden">
                      <img
                        src={pillar.image}
                        alt={pillar.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <span className="text-white/90 text-sm font-bold tracking-widest uppercase mb-2 block drop-shadow-md">
                          {pillar.eyebrow}
                        </span>
                        <h3 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg">
                          {pillar.title}
                        </h3>
                      </div>
                    </div>
                    <div className="p-8 flex flex-col flex-1">
                      <p className="text-[#062e37] font-medium text-lg leading-relaxed mb-8">
                        {pillar.goal}
                      </p>
                      <ul className="space-y-4 mb-8 flex-1">
                        {pillar.objectives.map((obj, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground">
                            <Check className="w-5 h-5 text-[#1b9ed9] shrink-0 mt-0.5" />
                            <span className="leading-snug">{obj}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mb-8 border-t border-[#062e37]/10 pt-5">
                        <span className="mb-2 block text-xs font-extrabold uppercase tracking-[0.16em] text-[#118f9b]">Outcome</span>
                        <p className="text-sm font-semibold leading-relaxed text-[#42636a]">{pillar.outcome}</p>
                      </div>
                      <div className="inline-flex items-center gap-2 text-[#df5311] font-bold text-sm tracking-wide uppercase group-hover:text-[#bd4007] transition-colors mt-auto">
                        Explore Program <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* PROGRAM PATHWAYS */}
        <section className="py-24 md:py-32 bg-[#062e37] text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#1b9ed9]/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
            <div className="mb-20">
              <span className="inline-flex items-center gap-3 text-sm font-bold tracking-[0.2em] text-[#8bd9fb] uppercase mb-6">
                <span className="w-8 h-[2px] bg-[#df5311]" />
                Program Pathways
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                Local knowledge, global connection.
              </h2>
              <p className="text-xl text-white/70 max-w-2xl leading-relaxed">
                Explore the work through the communities and networks where B4P CODEFOUND is building relationships and opportunity.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {regions.map((region) => {
                const Icon = region.icon;
                return (
                  <Link key={region.name} href={region.href} className="group block outline-none">
                    <article className="relative h-[480px] rounded-xl overflow-hidden">
                      <img src={region.image} alt={`${region.name} Programs`} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 mix-blend-overlay" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#051c22] via-[#062e37]/80 to-[#062e37]/40" />
                      <div className="absolute inset-0 p-8 flex flex-col justify-end">
                        <div className="w-12 h-12 rounded-full bg-[#1b9ed9] flex items-center justify-center mb-6 text-white shrink-0">
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-3xl font-bold mb-4">{region.name}</h3>
                        <p className="text-white/80 leading-relaxed mb-8">
                          {region.description}
                        </p>
                        <div className="inline-flex items-center gap-2 text-[#8bd9fb] font-bold text-sm tracking-wide uppercase transition-colors">
                          View Programs <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </div>
                      </div>
                    </article>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-24 md:py-32 bg-[#eaf7fb]">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            <div className="grid lg:grid-cols-5 gap-16 items-center">
              <div className="lg:col-span-2">
                <span className="inline-flex items-center gap-3 text-sm font-bold tracking-[0.2em] text-[#df5311] uppercase mb-6">
                  <span className="w-8 h-[2px] bg-[#1b9ed9]" />
                  Organizational Support
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#062e37] tracking-tight mb-6">
                  Services for mission-driven work.
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  We help nonprofits and businesses build the practical capacity to move their ideas forward.
                </p>
                <Link href="/services" className="inline-flex items-center gap-2 bg-[#1b9ed9] text-white px-6 py-4 font-bold text-sm tracking-widest uppercase hover:bg-[#1580b0] transition-colors rounded-sm">
                  Explore Services <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="lg:col-span-3 grid gap-6">
                {[
                  { name: 'Fiscal Sponsorship', slug: 'fiscal-sponsorship', desc: 'Strengthen initiatives with robust organizational backing.' },
                  { name: 'Nonprofit Capacity Building', slug: 'nonprofit-capacity-building', desc: 'Practical systems and leadership development for nonprofits.' },
                  { name: 'Business Development', slug: 'business-development', desc: 'Enterprise-focused support to build capacity and find opportunity.' },
                ].map((s, i) => (
                  <Link href={`/services/${s.slug}`} key={s.name} className="group block bg-white p-8 rounded-xl border border-border hover:border-[#1b9ed9]/40 hover:shadow-xl transition-all">
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <span className="text-sm font-bold text-[#1b9ed9] mb-2 block tracking-widest">0{i + 1}</span>
                        <h3 className="text-2xl font-bold text-[#062e37] mb-3">{s.name}</h3>
                        <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-[#1b9ed9] group-hover:text-white transition-colors">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <DrivePhotoGallery
          eyebrow="In the room"
          title="Progress begins with people showing up."
          description="Across our programs, shared learning and conversation turn local knowledge into practical action."
          variant="editorial"
          linkHref="/programs/global"
          linkLabel="Explore program regions"
        />

        {/* SUBSIDIARY */}
        <section className="py-24 bg-white border-t border-border">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            <div className="bg-[#062e37] rounded-2xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative">
              <img src="/images/story-cwc.jpg" alt="Columbus Women Connect" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" />
              <div className="relative z-10 max-w-2xl">
                <span className="inline-flex items-center gap-3 text-sm font-bold tracking-[0.2em] text-[#8bd9fb] uppercase mb-4">
                  A B4P CODEFOUND Subsidiary
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
                  Columbus Women Connect
                </h2>
                <p className="text-xl text-white/80 leading-relaxed mb-8">
                  A multicultural network helping women connect, lead, advocate, and thrive across cultures and generations in Columbus, Ohio.
                </p>
                <Link href="/columbus-women-connect" className="inline-flex items-center gap-2 bg-white text-[#062e37] px-6 py-4 font-bold text-sm tracking-widest uppercase hover:bg-slate-100 transition-colors rounded-sm">
                  Visit CWC <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="relative z-10 shrink-0 w-32 h-32 md:w-48 md:h-48 rounded-full bg-white/10 backdrop-blur flex items-center justify-center border border-white/20">
                <UsersRound className="w-16 h-16 md:w-20 md:h-20 text-[#8bd9fb]" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
