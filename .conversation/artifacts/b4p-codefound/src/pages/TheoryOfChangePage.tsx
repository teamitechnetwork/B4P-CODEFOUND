import { ArrowRight, ArrowUpRight, HeartHandshake, Home, Sparkles, UsersRound } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const journey = [
  {
    step: '01',
    title: 'Empowered individuals',
    description: 'People have the confidence, knowledge, relationships, and resources to shape their own future.',
    icon: Sparkles,
  },
  {
    step: '02',
    title: 'Stronger families',
    description: 'When people are supported, families become more secure, productive, and able to plan for what is next.',
    icon: Home,
  },
  {
    step: '03',
    title: 'Proactive communities',
    description: 'Connected communities can identify shared priorities, solve problems together, and participate in decisions.',
    icon: UsersRound,
  },
  {
    step: '04',
    title: 'A productive nation',
    description: 'Stronger communities contribute to a more peaceful, inclusive, and sustainable future for everyone.',
    icon: HeartHandshake,
  },
];

const commitments = [
  ['Listen first', 'We begin with lived experience and local knowledge.'],
  ['Build together', 'We share skills, resources, and responsibility with partners.'],
  ['Keep learning', 'We reflect on what is working and adapt with humility.'],
];

export default function TheoryOfChangePage() {
  return (
    <div className="theory-page flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="theory-hero image-led-hero" data-hero-route="theory-of-change">
          <div className="page-container theory-hero__inner">
            <div>
              <span className="page-kicker">Our philosophy</span>
              <h1>Change grows from the person outward.</h1>
              <p>
                Our theory of change connects individual empowerment to stronger families, proactive communities, and a more productive nation.
              </p>
              <a className="theory-button" href="#journey">
                Follow the journey <ArrowRight size={17} aria-hidden="true" />
              </a>
            </div>
            <div className="image-led-hero__visual theory-hero__visual" data-testid="hero-theory-of-change-visual">
              <img
                src="/images/conference/day-1-community-gathering.jpg"
                alt="Community members gathered together at a B4P CODEFOUND event"
                data-testid="img-theory-hero"
              />
              <div className="theory-hero__overlay" data-hero-overlay="caption">
                <span>Our approach</span>
                <strong>People at the center.</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="theory-statement">
          <div className="page-container theory-statement__inner">
            <span className="section-heading__eyebrow">The belief behind the work</span>
            <blockquote>
              “The more empowered women and girls become, and the more moral, technical, and financial support they receive, the better the conditions for them and their families.”
            </blockquote>
            <p>
              As conditions improve, families and communities become more productive and proactive. Our role is to help create the conditions, connections, and capacity for that progression to continue.
            </p>
          </div>
        </section>

        <section id="journey" className="theory-section">
          <div className="page-container">
            <div className="section-heading section-heading--left theory-section__heading">
              <span className="section-heading__eyebrow">The change pathway</span>
              <h2>Progress is connected.</h2>
              <p>Each step strengthens the next. We work alongside people and communities so progress can be owned, practiced, and carried forward.</p>
            </div>
            <div className="theory-journey">
              {journey.map((item, index) => {
                const Icon = item.icon;
                return (
                  <article className="theory-step" key={item.step} data-testid={`card-theory-step-${index + 1}`}>
                    <div className="theory-step__top">
                      <span>{item.step}</span>
                      <Icon size={26} aria-hidden="true" />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    {index < journey.length - 1 && <ArrowRight className="theory-step__arrow" size={20} aria-hidden="true" />}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="theory-practice">
          <div className="page-container theory-practice__inner">
            <div>
              <span className="section-heading__eyebrow">How we put it into practice</span>
              <h2>Programs are a bridge between possibility and participation.</h2>
              <p>
                Peacebuilding, economic development, leadership, and civic engagement are connected in real life. Our programs make room for people to build skills, strengthen relationships, and take action in ways that fit their context.
              </p>
              <a className="theory-light-link" href="/what-we-do">
                Explore our programs <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
            <div className="theory-commitments">
              {commitments.map(([title, description], index) => (
                <div key={title}>
                  <span>0{index + 1}</span>
                  <p><strong>{title}</strong>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="theory-cta">
          <div className="page-container">
            <span className="section-heading__eyebrow">Be part of the change</span>
            <h2>Lasting change is something we build together.</h2>
            <p>Bring your time, ideas, partnership, or support to the next part of the journey.</p>
            <div className="theory-cta__links">
              <a href="/become-a-volunteer">Work with us <ArrowUpRight size={17} aria-hidden="true" /></a>
              <a href="/contact">Start a conversation <ArrowUpRight size={17} aria-hidden="true" /></a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}