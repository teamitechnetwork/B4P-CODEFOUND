import { ArrowUpRight, HeartHandshake, Scale, Sparkles, UsersRound } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const values = [
  {
    number: '01',
    title: 'Human rights & dignity',
    description: 'We show respect for human rights and uphold the dignity of every person, irrespective of race, ethnicity, age, or culture.',
    icon: Scale,
  },
  {
    number: '02',
    title: 'People & communities',
    description: 'We connect people, encourage alliance building and community cooperation, and work collaboratively to reach impact and scale.',
    icon: UsersRound,
  },
  {
    number: '03',
    title: 'Passion & teamwork',
    description: 'We emphasize local ownership and long-term sustainability while building diversified and inclusive teams globally.',
    icon: Sparkles,
  },
  {
    number: '04',
    title: 'Diversity & inclusion',
    description: 'We recognize the beauty of diversity and create spaces for learning, participation, trust building, and cooperation.',
    icon: HeartHandshake,
  },
  {
    number: '05',
    title: 'Integrity & commitment',
    description: 'We remain honest and dependable, building social capital for inclusive development and human security.',
    icon: Scale,
  },
];

export default function CoreValuesPage() {
  return (
    <div className="values-page flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="values-hero image-led-hero" data-hero-route="core-values">
          <div className="page-container values-hero__inner">
            <div>
              <span className="page-kicker">What guides us</span>
              <h1>Values are how we turn good intentions into trusted action.</h1>
              <p>
                Innovation, inspirational learning, stakeholder engagement, shared vision, strategic alignment, focus, and iteration guide our work.
              </p>
            </div>
            <div className="image-led-hero__visual values-hero__image" data-testid="hero-core-values-visual">
              <img
                src="/images/conference/day-2-community-03.jpg"
                alt="A community leader reviewing materials at a B4P CODEFOUND gathering"
                data-testid="img-values-hero"
              />
              <div className="values-hero__overlay">
                <span>Our commitments</span>
                <strong>Five principles behind the work.</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="values-intro">
          <div className="page-container values-intro__inner">
          <div className="values-intro__mark">B4P CODEFOUND</div>
            <div>
              <span className="section-heading__eyebrow">Our promise</span>
              <h2>Respect the person. Strengthen the community.</h2>
              <p>
                We show respect for every person, whether young or old. We promote networking, community cooperation, and collaboration for peace and development because lasting progress is built with people, not around them.
              </p>
            </div>
          </div>
        </section>

        <section className="values-list">
          <div className="page-container">
            <div className="section-heading section-heading--left values-list__heading">
              <span className="section-heading__eyebrow">The principles behind the work</span>
              <h2>Five commitments we bring to every partnership.</h2>
            </div>
            <div className="values-grid">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <article className={`value-card ${value.number === '05' ? 'value-card--wide' : ''}`} key={value.number} data-testid={`card-value-${value.number}`}>
                    <div className="value-card__number">{value.number}</div>
                    <div className="value-card__icon"><Icon size={24} aria-hidden="true" /></div>
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="values-practice">
          <div className="page-container values-practice__inner">
            <div className="values-practice__copy">
              <span className="section-heading__eyebrow">Values in practice</span>
              <h2>Listen deeply. Work honestly. Leave people stronger.</h2>
              <p>
                Our values shape the way we design programs, steward partnerships, and make decisions. They keep our work accountable to the people and communities at the center of it.
              </p>
              <a className="text-link" href="/what-we-do">
                Explore our work <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
              <div className="values-practice__steps" aria-label="How B4P CODEFOUND applies its values">
              <div><strong>Listen</strong><span>Start with lived experience.</span></div>
              <div><strong>Build</strong><span>Share skills, resources, and power.</span></div>
              <div><strong>Grow</strong><span>Measure progress and keep learning.</span></div>
            </div>
          </div>
        </section>

        <section className="values-cta">
          <div className="page-container">
              <span className="section-heading__eyebrow">Stand with B4P CODEFOUND</span>
            <h2>Peace grows when people choose to participate.</h2>
            <p>Bring your time, resources, or partnership to work that is rooted in dignity and collective action.</p>
            <div className="values-cta__links">
              <a href="/make-a-donation">Support the mission <ArrowUpRight size={17} aria-hidden="true" /></a>
              <a href="/contact">Start a conversation <ArrowUpRight size={17} aria-hidden="true" /></a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
