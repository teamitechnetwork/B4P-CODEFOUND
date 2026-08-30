import { ArrowUpRight, HeartHandshake, Sprout, UsersRound } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const impactStats = [
  { value: '10', label: 'Communities reached' },
  { value: '10+', label: 'Women empowered' },
  { value: '10', label: 'Counties served' },
  { value: '10+', label: 'Programs delivered' },
];

const impactAreas = [
  {
    number: '01',
    title: 'Women lead with confidence',
    description:
      'Safe spaces, mentorship, and practical learning help women build confidence, strengthen their voices, and take on leadership in their families and communities.',
    icon: UsersRound,
  },
  {
    number: '02',
    title: 'Young people shape what comes next',
    description:
      'Youth engagement creates room for new skills, civic participation, entrepreneurship, and the kind of local leadership that keeps progress moving.',
    icon: Sprout,
  },
  {
    number: '03',
    title: 'Communities move together',
    description:
      'By working with families, local leaders, and partners, B4P helps turn dialogue into collective action around equality, education, health, and community responsibility.',
    icon: HeartHandshake,
  },
];

const voices = [
  {
    quote:
      'Our impact is measured in the confidence we build, the opportunities we create, and the lives we help transform.',
    name: 'Cerue Liyean',
    role: 'Program Associate',
  },
  {
    quote:
      'True impact goes beyond today—it is seen in stronger communities, uplifted families, and generations of women and youth who rise with purpose.',
    name: 'Wilmot Kerkulah',
    role: 'Marketing Associate',
  },
  {
    quote:
      'Our impact is not only seen in numbers, but in lives changed, hope restored, and futures renewed.',
    name: 'Thomas Mulbah',
    role: 'Communication Consultant',
  },
];

export default function ImpactPage() {
  return (
    <div className="impact-page flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="impact-hero">
          <div className="page-container impact-hero__inner">
            <div className="impact-hero__copy">
              <span className="page-kicker">Our impact</span>
              <h1>
                Change you can see.
                <em>Hope you can feel.</em>
              </h1>
              <p>
                B4P CODEFOUND measures progress in more than numbers. We look at the confidence people gain, the opportunities they create, and the stronger communities they build together.
              </p>
              <a className="impact-hero__link" href="#impact-at-a-glance">
                Explore our impact <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
            <div className="impact-hero__visual">
              <img
                src="/images/uploaded/impact-audience.webp"
                alt="Community members gathered during a B4P CODEFOUND event"
                data-testid="img-impact-hero"
              />
              <div className="impact-hero__badge">
                <small>Our story</small>
                <strong>2015</strong>
                <span>Founded with a commitment to local leadership</span>
              </div>
            </div>
          </div>
        </section>

        <section id="impact-at-a-glance" className="impact-section impact-section--light">
          <div className="page-container">
            <div className="impact-intro">
              <div>
                <span className="section-heading__eyebrow">Impact at a glance</span>
                <h2>Small shifts become lasting change.</h2>
              </div>
              <p>
                We are a 501(c)(3) registered NGO in the United States and Liberia. Our work creates safe spaces for learning, mentorship, and personal growth so women and youth can strengthen their voices and contribute to change.
              </p>
            </div>

            <div className="impact-stats" aria-label="B4P CODEFOUND impact highlights">
              {impactStats.map((stat) => (
                <div className="impact-stat" key={stat.label} data-testid={`stat-impact-${stat.label.toLowerCase().replaceAll(' ', '-')}`}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="impact-section impact-section--white">
          <div className="page-container">
            <div className="section-heading section-heading--left impact-section__heading">
              <span className="section-heading__eyebrow">What changes</span>
              <h2>Impact starts with people who are ready to lead.</h2>
              <p>
                Every training, mentorship opportunity, awareness campaign, and community project is designed to build agency and make participation possible.
              </p>
            </div>

            <div className="impact-areas">
              {impactAreas.map((area) => {
                const Icon = area.icon;
                return (
                  <article className="impact-area" key={area.number} data-testid={`card-impact-area-${area.number}`}>
                    <div className="impact-area__top">
                      <span>{area.number}</span>
                      <Icon size={26} aria-hidden="true" />
                    </div>
                    <h3>{area.title}</h3>
                    <p>{area.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="impact-section impact-section--image">
          <div className="page-container impact-story">
            <div className="impact-story__image">
              <img
                src="/images/stories/day-two-0017.jpg"
                alt="Women participating in a community conversation"
                data-testid="img-impact-story"
              />
            </div>
            <div className="impact-story__copy">
              <span className="section-heading__eyebrow">Beyond the numbers</span>
              <h2>Renewed hope is part of the result.</h2>
              <p>
                Through partnerships and collaboration, B4P continues to extend meaningful support to underserved communities. The true measure of this work is visible in transformed lives, renewed hope, and communities better prepared for a brighter future.
              </p>
              <a className="text-link text-link--dark" href="/what-we-do">
                See how we work <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section className="impact-section impact-section--teal">
          <div className="page-container">
            <div className="section-heading section-heading--light impact-section__heading">
              <span className="section-heading__eyebrow">Community voices</span>
              <h2>What lasting change sounds like.</h2>
            </div>
            <div className="impact-voices">
              {voices.map((voice) => (
                <figure className="impact-voice" key={voice.name} data-testid={`quote-impact-${voice.name.toLowerCase().replaceAll(' ', '-')}`}>
                  <blockquote>“{voice.quote}”</blockquote>
                  <figcaption>
                    <strong>{voice.name}</strong>
                    <span>{voice.role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="impact-cta">
          <div className="page-container">
            <span className="section-heading__eyebrow">Join the movement</span>
            <h2>Help make the next story possible.</h2>
            <p>
              Support African-led peacebuilding and community development with your time, partnership, or contribution.
            </p>
            <div className="impact-cta__links">
              <a href="/make-a-donation">Support the mission <ArrowUpRight size={17} aria-hidden="true" /></a>
              <a href="/become-a-volunteer">Become a volunteer <ArrowUpRight size={17} aria-hidden="true" /></a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}