import {
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Globe2,
  HeartHandshake,
  LandPlot,
  ShieldCheck,
  Sprout,
  UsersRound,
} from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const pillars = [
  {
    id: 'peacebuilding',
    eyebrow: 'Operational pillar 01',
    title: 'Peacebuilding',
    icon: ShieldCheck,
    goal: 'Cultivating harmony, reducing conflict, and building lasting trust across diverse, conflict and post conflict communities.',
    objectives: [
      'Facilitate processes, promote tolerance and understanding among diverse cultural and social groups for collective action and conflict transformation.',
      'Build capacities for peace-Conflict Resolution & Problem-Solving Skills.',
      'Equip community members with resources and practical tools.',
    ],
    activities: 'Dialogues · Capacity building · Small Grants · Advocacy, etc.',
    outcome: 'Enhanced community participation, local capacity and cohesion; enhanced leadership, trust, and sustainable peace initiatives, etc.',
    outcomeLabel: 'Outcome',
  },
  {
    id: 'economic-development',
    eyebrow: 'Operational pillar 02',
    title: 'Economic Development',
    icon: Sprout,
    goal: 'Driving prosperity, expanding opportunity, and building economic independence for women and girls. Stimulate economic growth and create sustainable livelihoods — especially for women-led households and enterprises.',
    objectives: [
      'Transform subsistence farming into a commercialized and sustainable industry that empowers small-scale farmers, strengthens value chains, promotes economic inclusion and community resilience.',
      'Build capacity and provide accompaniment support for women & youth-owned businesses.',
      'Provide access to financial education, technology and digital literacy for better decision making and participation the modern economy.',
      'Provide access to credits, affordable and adaptable services as well as connect businesses to growth networks and development resources.',
    ],
    activities: 'Agribusiness Development · Entrepreneurship · Coaching/Mentorship · Digital and Financial Literacy · Access to resources and market linkages, etc.',
    outcome: 'Greater economic independence of women and youth; increased social venturing and business models for sustainable development; sustainable agricultural practices and return on investments.',
    outcomeLabel: 'Outcomes',
  },
];

const regions = [
  {
    name: 'Global',
    href: '/programs/global',
    icon: Globe2,
    description: 'Cross-border exchange, leadership, enterprise, peacebuilding, and cultural work.',
    items: ['Global Youth Exchange Forum (GYEF)', 'LDDWYF/CSW', 'Leadership Development', 'Business Development & Entrepreneurship', 'Peacebuilding & Governance', 'Research & Policy Advocacy', 'Arts & Culture', 'Events'],
  },
  {
    name: 'USA',
    href: '/programs/usa',
    icon: UsersRound,
    description: 'Community-centered pathways for connection, learning, mentorship, and growth.',
    items: ['Community Navigation & Dialogues', 'Networking & Professional Development', 'Mentorship and Leadership development', 'Events'],
  },
  {
    name: 'Liberia',
    href: '/programs/liberia',
    icon: LandPlot,
    description: 'Locally rooted work supporting agriculture, health, education, and civic participation.',
    items: ['Business Development Services (Agriculture, etc)', 'Health Education & Sensitization', 'Youth & Education (Civic; Vocational & Skills Training, Financial & Digital Literacy)', 'Events & Conference'],
  },
];

const services = [
  { name: 'Fiscal Sponsorship', description: 'A pathway for aligned initiatives to strengthen their work with the right organizational support.' },
  { name: 'Nonprofit Capacity Building', description: 'Practical support to help nonprofit organizations grow their systems, leadership, and impact.' },
  { name: 'Business Development', description: 'Business-focused support that helps enterprises build capacity and connect with opportunity.' },
];

export default function WhatWeDoPage() {
  return (
    <div className="what-we-do-page flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="what-we-do-hero">
          <div className="container mx-auto px-6">
            <span className="page-kicker">What we do</span>
            <h1>From shared purpose to practical progress.</h1>
            <p>
              B4P CODEFOUND has two operational pillars — Peacebuilding and Economic Development &amp; Empowerment. Through evidence and rights-based approaches, we co-create programs, projects, and activities with subsidiaries and community partners.
            </p>
            <div className="what-we-do-hero__links">
              <a href="#pillars">Explore our pillars <ArrowUpRight size={17} aria-hidden="true" /></a>
              <a href="#program-pathways">See program pathways <ArrowUpRight size={17} aria-hidden="true" /></a>
            </div>
          </div>
        </section>

        <section id="pillars" className="what-we-do-section what-we-do-section--light">
          <div className="container mx-auto px-6">
            <div className="section-heading section-heading--left">
              <span className="section-heading__eyebrow">Our operational pillars</span>
              <h2>We build the conditions for people and communities to thrive.</h2>
              <p>Our work connects peace, participation, and economic opportunity so communities can shape durable change for themselves.</p>
            </div>

            <div className="pillar-grid">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <article className="pillar-card" key={pillar.id}>
                    <div className="pillar-card__top">
                      <span>{pillar.eyebrow}</span>
                      <Icon size={25} aria-hidden="true" />
                    </div>
                    <h3>{pillar.title}</h3>
                    <div className="pillar-card__block">
                      <span className="pillar-card__label">Goal</span>
                      <p>{pillar.goal}</p>
                    </div>
                    <div className="pillar-card__block">
                      <span className="pillar-card__label">Objectives</span>
                      <ul>
                        {pillar.objectives.map((objective) => (
                          <li key={objective}><Check size={15} aria-hidden="true" />{objective}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="pillar-card__details">
                      <div><span className="pillar-card__label">Activities</span><p>{pillar.activities}</p></div>
                      <div><span className="pillar-card__label">{pillar.outcomeLabel}</span><p>{pillar.outcome}</p></div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="program-pathways" className="what-we-do-section what-we-do-section--teal">
          <div className="container mx-auto px-6">
            <div className="section-heading section-heading--left section-heading--white">
              <span className="section-heading__eyebrow">Program pathways</span>
              <h2>Local knowledge, global connection.</h2>
              <p>Explore the work through the communities and networks where B4P CODEFOUND is building relationships and opportunity.</p>
            </div>
            <div className="region-grid">
              {regions.map((region) => {
                const Icon = region.icon;
                return (
                  <article className="region-card" key={region.name}>
                    <div className="region-card__icon"><Icon size={23} aria-hidden="true" /></div>
                    <span className="region-card__eyebrow">Program region</span>
                    <h3>{region.name}</h3>
                    <p>{region.description}</p>
                    <ul>
                      {region.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                    <a href={region.href}>View {region.name} programs <ArrowUpRight size={16} aria-hidden="true" /></a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="what-we-do-section what-we-do-section--cream">
          <div className="container mx-auto px-6">
            <div className="services-layout">
              <div className="section-heading section-heading--left">
                <span className="section-heading__eyebrow">Services</span>
                <h2>Support for organizations and enterprises doing important work.</h2>
                <p>We help mission-driven organizations and businesses build the practical capacity to move their ideas forward.</p>
                <a className="text-link" href="/services">Explore our services <ArrowUpRight size={16} aria-hidden="true" /></a>
              </div>
              <div className="services-list">
                {services.map((service, index) => (
                  <a href="/services" className="service-row" key={service.name}>
                    <span className="service-row__number">0{index + 1}</span>
                    <span><strong>{service.name}</strong><small>{service.description}</small></span>
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="what-we-do-section what-we-do-section--store">
          <div className="container mx-auto px-6">
            <div className="store-callout">
              <div className="store-callout__icon"><BriefcaseBusiness size={26} aria-hidden="true" /></div>
              <div>
                <span className="section-heading__eyebrow">The Store</span>
                <h2>Let’s have a conversation about activating this store.</h2>
                <p>The store is a future opportunity. If you are interested in helping us shape it, please start a conversation with the B4P CODEFOUND team.</p>
              </div>
              <a href="mailto:management@b4pcodefound.org?subject=Conversation%20about%20activating%20the%20B4P%20store">Start the conversation <ArrowUpRight size={17} aria-hidden="true" /></a>
            </div>
          </div>
        </section>

        <section className="what-we-do-section what-we-do-section--subsidiary">
          <div className="container mx-auto px-6">
            <div className="subsidiary-callout">
              <div className="subsidiary-callout__icon"><HeartHandshake size={26} aria-hidden="true" /></div>
              <div><span className="section-heading__eyebrow">A B4P CODEFOUND subsidiary</span><h2>Meet Columbus Women Connect.</h2><p>A multicultural network helping women connect, lead, advocate, and thrive across cultures and generations.</p></div>
              <a href="/columbus-women-connect">Visit CWC <ArrowUpRight size={17} aria-hidden="true" /></a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}