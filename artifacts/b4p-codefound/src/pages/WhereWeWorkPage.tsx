import { ArrowUpRight, Globe2, HeartHandshake, MapPin, UsersRound } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { DrivePhotoGallery } from '@/components/sections/DrivePhotoGallery';

const locations = [
  {
    number: '01',
    label: 'Rooted in Liberia',
    title: 'Community-led work at home.',
    description: 'Our work is grounded in Liberian communities, supporting women, girls, youth, livelihoods, health education, and civic participation.',
    icon: MapPin,
    href: '/programs/liberia',
    linkLabel: 'Explore Liberia programs',
  },
  {
    number: '02',
    label: 'Connected through the diaspora',
    title: 'The United States as a bridge.',
    description: 'We connect Liberian and African diaspora communities with dialogue, professional networks, leadership development, and opportunities to participate.',
    icon: UsersRound,
    href: '/programs/usa',
    linkLabel: 'Explore USA programs',
  },
  {
    number: '03',
    label: 'Open to wider exchange',
    title: 'Learning that travels.',
    description: 'Our global relationships make space for cross-cultural exchange, shared learning, advocacy, and partnerships that strengthen peace and development.',
    icon: Globe2,
    href: '/programs/global',
    linkLabel: 'Explore global programs',
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
        <section className="where-hero">
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
            <div className="where-hero__visual">
              <img
                src="/images/conference/day-3-community-01.jpg"
                alt="Two community leaders exchanging materials at a B4P CODEFOUND gathering"
                data-testid="img-where-hero"
              />
              <div className="where-hero__caption">
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
                  <span><MapPin size={16} aria-hidden="true" /> Liberia</span>
                  <i aria-hidden="true" />
                  <span><UsersRound size={16} aria-hidden="true" /> Diaspora</span>
                  <i aria-hidden="true" />
                  <span><Globe2 size={16} aria-hidden="true" /> Global</span>
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

        <DrivePhotoGallery
          eyebrow="Connected communities"
          title="Local relationships give global work its meaning."
          description="B4P CODEFOUND’s conference and community moments create space for people to exchange experience and move forward together."
          variant="editorial"
          linkHref="/contact"
          linkLabel="Connect with B4P"
        />

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