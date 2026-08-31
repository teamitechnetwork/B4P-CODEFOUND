import { ArrowUpRight, Globe2, HeartHandshake, MapPin, UsersRound } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const locations = [
  {
    number: '01',
    label: 'Rooted in Liberia',
    title: 'Gbarnga, with Nimba coming soon.',
    description: 'Our work is grounded in Liberian communities, supporting women, girls, youth, livelihoods, health education, and civic participation from Gbarnga, Bong County.',
    icon: MapPin,
    href: '/programs/liberia',
    linkLabel: 'Explore Liberia programs',
  },
  {
    number: '02',
    label: 'Working in the United States',
    title: 'Ohio and New York.',
    description: 'Our US presence connects Liberian and African diaspora communities through dialogue, professional networks, leadership development, and opportunities to participate.',
    icon: UsersRound,
    href: '/programs/usa',
    linkLabel: 'Explore USA programs',
  },
];

const offices = [
  {
    number: 'US · 01',
    label: 'Columbus / Blacklick, Ohio',
    title: 'United States headquarters',
    description: '1108 Chaser Street, Blacklick, OH 43004',
  },
  {
    number: 'US · 02',
    label: 'Columbus, Ohio',
    title: 'Columbus office',
    description: '341 South 3rd Street, Suite 100-483, Columbus, OH 43004',
  },
  {
    number: 'US · 03',
    label: 'Staten Island, New York',
    title: 'New York presence',
    description: '145 Nicholas Avenue, Staten Island, New York, NY 10302',
  },
  {
    number: 'LR · 01',
    label: 'Gbarnga, Bong County',
    title: 'Liberia office',
    description: 'Far East Community, Gbarnga, Bong County, Liberia. Nimba location coming soon.',
  },
];

const modelSteps = [
  ['Listen locally', 'Start with the experience, insight, and priorities of the people closest to the work.'],
  ['Connect across borders', 'Create relationships between communities, leaders, and partners who can learn from one another.'],
  ['Build practical power', 'Share skills, resources, and opportunities that help people lead change in their own context.'],
  ['Carry learning forward', 'Use what we learn to improve programs, strengthen networks, and keep the work accountable.'],
];

export default function WhereWeWorkPage() {
  return (
    <div className="where-page flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="where-hero image-led-hero" data-hero-route="where-we-work">
          <div className="page-container where-hero__inner">
            <div className="where-hero__copy">
              <span className="page-kicker">Where we work</span>
              <h1>Local roots. Global connection.</h1>
              <p>
                B4P CODEFOUND works with Liberian communities in Liberia and the diaspora, creating pathways for people to connect, lead, and build a more peaceful future.
              </p>
              <a className="where-button" href="#locations">
                Explore our regions <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
            <div className="image-led-hero__visual where-hero__visual" data-testid="hero-where-we-work-visual">
              <img
                src="/images/conference/day-3-community-01.jpg"
                alt="Two community leaders exchanging materials at a B4P CODEFOUND gathering"
                data-testid="img-where-hero"
              />
              <div className="where-hero__caption" data-hero-overlay="caption">
                <span>Field note</span>
                <strong>Relationships are the infrastructure of lasting change.</strong>
              </div>
            </div>
          </div>
        </section>

        <section id="locations" className="where-section where-section--intro">
          <div className="page-container">
            <div className="where-intro">
              <div>
                <span className="section-heading__eyebrow">Our geography</span>
                <h2>We work across places, not above them.</h2>
              </div>
              <div>
                <p>
                  B4P CODEFOUND brings a global-local perspective to peacebuilding and economic development. Our relationships begin in community and grow through exchange.
                </p>
                <div className="where-route" aria-label="B4P CODEFOUND geographic connection">
                  <span><MapPin size={16} aria-hidden="true" /> USA</span>
                  <i aria-hidden="true" />
                  <span><UsersRound size={16} aria-hidden="true" /> Liberia</span>
                </div>
              </div>
            </div>

            <div className="where-location-grid">
              {locations.map((location) => {
                const Icon = location.icon;
                return (
                  <article className="where-location" key={location.number} data-testid={`card-where-${location.number}`}>
                    <div className="where-location__top">
                      <span>{location.number}</span>
                      <Icon size={25} aria-hidden="true" />
                    </div>
                    <span className="where-location__label">{location.label}</span>
                    <h3>{location.title}</h3>
                    <p>{location.description}</p>
                    <a href={location.href}>{location.linkLabel} <ArrowUpRight size={16} aria-hidden="true" /></a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="where-section where-section--light">
          <div className="page-container">
            <div className="section-heading section-heading--left impact-section__heading">
              <span className="section-heading__eyebrow">Office locations</span>
              <h2>Find B4P CODEFOUND in the United States and Liberia.</h2>
            </div>
            <div className="where-location-grid">
              {offices.map((office) => (
                <article className="where-location" key={office.number} data-testid={`card-office-${office.number.toLowerCase().replaceAll(' ', '-').replaceAll('·', '')}`}>
                  <div className="where-location__top">
                    <span>{office.number}</span>
                    <MapPin size={25} aria-hidden="true" />
                  </div>
                  <span className="where-location__label">{office.label}</span>
                  <h3>{office.title}</h3>
                  <p>{office.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="where-section where-section--dark">
          <div className="page-container where-model">
            <div className="where-model__intro">
              <span className="section-heading__eyebrow">Our global-local model</span>
              <h2>One way of working, adapted to each place.</h2>
              <p>
                Context matters. We build with local knowledge while creating the connections and shared capacity that let good ideas move further.
              </p>
            </div>
            <div className="where-model__steps">
              {modelSteps.map(([title, description], index) => (
                <div key={title}>
                  <span>0{index + 1}</span>
                  <div><strong>{title}</strong><p>{description}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="where-section where-section--light">
          <div className="page-container where-network">
            <div className="where-network__icon"><HeartHandshake size={30} aria-hidden="true" /></div>
            <div>
              <span className="section-heading__eyebrow">A connected network</span>
              <h2>Wherever you are, there is a place to participate.</h2>
              <p>Bring your experience, partnership, resources, or curiosity to a network that believes peace and development are shared work.</p>
              <div className="where-network__links">
                <a href="/contact">Start a conversation <ArrowUpRight size={17} aria-hidden="true" /></a>
                <a href="/become-a-volunteer">Work with us <ArrowUpRight size={17} aria-hidden="true" /></a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}