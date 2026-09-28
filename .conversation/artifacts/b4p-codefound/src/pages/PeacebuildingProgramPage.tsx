import {
  ArrowDownRight,
  ArrowRight,
  Check,
  HandHeart,
  MessagesSquare,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from 'lucide-react';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';

const approachCards = [
  {
    number: '01',
    icon: MessagesSquare,
    title: 'Make space for dialogue',
    description:
      'We bring people together across difference so communities can name tensions, listen well, and make decisions with a shared understanding.',
  },
  {
    number: '02',
    icon: UsersRound,
    title: 'Back local leadership',
    description:
      'Women, girls, and young people are not an audience for peacebuilding. They are the people already carrying it forward.',
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Build practical capacity',
    description:
      'Training, mentoring, and community tools turn good intentions into repeatable skills for prevention, mediation, and recovery.',
  },
  {
    number: '04',
    icon: HandHeart,
    title: 'Grow trust over time',
    description:
      'Lasting peace is built through consistent relationships, locally owned action, and resources that communities can sustain.',
  },
];

const movementSteps = [
  {
    number: '01',
    title: 'Listen locally',
    description: 'Start with lived experience, local knowledge, and the relationships people already trust.',
  },
  {
    number: '02',
    title: 'Act together',
    description: 'Turn shared priorities into dialogue, learning, advocacy, and community-led initiatives.',
  },
  {
    number: '03',
    title: 'Carry it forward',
    description: 'Strengthen the leaders, systems, and partnerships that keep peace work moving after a project ends.',
  },
];

const priorities = [
  'Women’s meaningful participation in peace and security',
  'Youth leadership, prevention, and civic engagement',
  'Community dialogue, reconciliation, and social cohesion',
  'Learning, advocacy, and locally led peace infrastructure',
];

export default function PeacebuildingProgramPage() {
  return (
    <div className="peacebuilding-page flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="peacebuilding-hero">
          <div className="page-container peacebuilding-hero__inner">
            <div className="peacebuilding-hero__copy">
              <a className="peacebuilding-back" href="/what-we-do">
                <ArrowDownRight size={16} aria-hidden="true" />
                <span>Back to what we do</span>
              </a>
              <span className="peacebuilding-kicker">Operational pillar 01 · Peacebuilding</span>
              <h1>Peace is built by people who stay in the work.</h1>
              <p>
                B4P CODEFOUND supports women, girls, youth, and communities to prevent conflict,
                strengthen trust, and lead the decisions that shape a more peaceful future.
              </p>
              <div className="peacebuilding-hero__actions">
                <a className="peacebuilding-button" href="/partner-with-us">
                  Partner for peace <ArrowRight size={17} aria-hidden="true" />
                </a>
                <a className="peacebuilding-text-link" href="#our-approach">
                  Explore our approach <ArrowDownRight size={17} aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="peacebuilding-hero__visual">
              <div className="peacebuilding-hero__image">
                <img
                  src="/images/uploaded/hero-community-outdoors.webp"
                  alt="Community members gathered outdoors for a conversation"
                />
              </div>
              <div className="peacebuilding-hero__stamp" aria-label="Program focus">
                <span>01</span>
                <strong>Local<br />knowledge<br />in action.</strong>
              </div>
              <div className="peacebuilding-hero__note">
                <Sparkles size={15} aria-hidden="true" />
                <span>Prevention · dialogue · leadership</span>
              </div>
            </div>
          </div>
        </section>

        <section className="peacebuilding-intro">
          <div className="page-container peacebuilding-intro__grid">
            <div>
              <span className="peacebuilding-section-kicker">A living practice</span>
              <h2>Peace is more than the absence of conflict.</h2>
            </div>
            <div className="peacebuilding-intro__copy">
              <p>
                It is the presence of relationships, skills, and systems that help people navigate
                difference without losing one another. Our peacebuilding work connects community
                knowledge to practical action.
              </p>
              <p>
                We work across Liberia, the United States, and global networks to help people
                transform conflict, participate meaningfully, and build the conditions for shared
                wellbeing.
              </p>
            </div>
          </div>
          <div className="page-container peacebuilding-stats" aria-label="Peacebuilding commitments">
            <div><strong>01</strong><span>locally rooted<br />approach</span></div>
            <div><strong>03</strong><span>connected levels:<br />local, national, global</span></div>
            <div><strong>∞</strong><span>relationships that<br />keep the work moving</span></div>
          </div>
        </section>

        <section className="peacebuilding-approach" id="our-approach">
          <div className="page-container">
            <div className="peacebuilding-section-heading">
              <div>
                <span className="peacebuilding-section-kicker">How we work</span>
                <h2>From listening<br /><em>to lasting trust.</em></h2>
              </div>
              <p>
                Our approach is designed to be useful in the real world: grounded in people’s
                experience, shaped with communities, and strong enough to grow.
              </p>
            </div>
            <div className="peacebuilding-approach__grid">
              {approachCards.map(({ number, icon: Icon, title, description }) => (
                <article key={number} className="peacebuilding-approach-card">
                  <div className="peacebuilding-approach-card__top">
                    <span>{number}</span>
                    <Icon size={26} aria-hidden="true" />
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="peacebuilding-movement">
          <div className="page-container peacebuilding-movement__grid">
            <div className="peacebuilding-movement__lead">
              <span className="peacebuilding-section-kicker">The movement model</span>
              <h2>Small acts of trust can change the direction of a community.</h2>
              <p>
                We help turn local insight into collective capacity through a simple, repeatable
                rhythm. The work begins with listening and ends with people having more power to
                shape what happens next.
              </p>
              <a className="peacebuilding-text-link peacebuilding-text-link--light" href="/programs/global">
                See related programs <ArrowRight size={17} aria-hidden="true" />
              </a>
            </div>
            <div className="peacebuilding-movement__steps">
              {movementSteps.map((step, index) => (
                <div className="peacebuilding-step" key={step.number}>
                  <span className="peacebuilding-step__number">{step.number}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                  {index < movementSteps.length - 1 && <ArrowDownRight className="peacebuilding-step__arrow" size={22} aria-hidden="true" />}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="peacebuilding-priorities">
          <div className="page-container peacebuilding-priorities__grid">
            <div>
              <span className="peacebuilding-section-kicker">What we strengthen</span>
              <h2>Peacebuilding with a point of view.</h2>
              <p>
                We focus resources where participation, protection, and opportunity can reinforce
                one another.
              </p>
            </div>
            <ol>
              {priorities.map((priority) => (
                <li key={priority}>
                  <Check size={18} aria-hidden="true" />
                  <span>{priority}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="peacebuilding-cta">
          <div className="page-container peacebuilding-cta__inner">
            <div>
              <span className="peacebuilding-section-kicker">Build with us</span>
              <h2>Peace needs partners who are ready to stay.</h2>
            </div>
            <div>
              <p>
                Bring your time, ideas, resources, or relationships to work that starts with local
                leadership and reaches across borders.
              </p>
              <a className="peacebuilding-button peacebuilding-button--light" href="/partner-with-us">
                Start a conversation <ArrowRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}