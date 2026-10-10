import { Link } from 'wouter';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FounderMessage } from '@/components/sections/FounderMessage';
import { TheoryOfChange } from '@/components/sections/TheoryOfChange';
import { Button } from '@/components/ui/button';
import { goal, mission, vision } from '@/data/mission';

export default function AboutPage() {
  return (
    <div className="about-page flex flex-col min-h-screen bg-background font-sans">
      <Header />
      <main className="flex-1">
        {/* Image-led introduction */}
        <section className="about-hero" aria-labelledby="text-about-title">
          <img
            className="about-hero__image"
            src="/images/conference/day-1-community-gathering.jpg"
            alt="B4P CODEFOUND participants gathered for a community programme in Liberia."
            fetchPriority="high"
          />
          <div className="about-hero__overlay" aria-hidden="true" />
          <div className="about-hero__content container px-4 md:px-6 mx-auto">
            <p className="about-hero__eyebrow">Who we are · Established 2015</p>
            <h1 id="text-about-title" data-testid="text-about-title">
              Re-imagining <span>empowerment.</span>
            </h1>
            <p className="about-hero__summary" data-testid="text-about-subtitle">
              The Business for Peace Community Development Foundation advances political, social,
              and economic justice by working with women and girls to strengthen equality, peace,
              and opportunity.
            </p>
            <p className="about-hero__meta">501(c)(3) nonprofit · Liberia and the United States</p>
          </div>
        </section>

        <section className="about-approach-section" aria-labelledby="about-approach-title">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="about-section-heading">
              <p className="about-section-heading__eyebrow">Our approach</p>
              <h2 id="about-approach-title">Progress, built together.</h2>
              <p>
                We partner with women, girls, and communities to turn shared purpose into lasting
                change.
              </p>
            </div>
            <div className="about-approach-grid">
              {[
                {
                  number: '01',
                  title: 'Build',
                  description:
                    'Build women and girls’ confidence to act as agents of change at local, national, and international levels.',
                },
                {
                  number: '02',
                  title: 'Invest',
                  description:
                    'Invest resources in women, girls, and communities to strengthen self-reliance and development.',
                },
                {
                  number: '03',
                  title: 'Connect',
                  description:
                    'Connect people and groups to share learning and take collective action for stronger community impact.',
                },
              ].map((item) => (
                <article className="about-approach-card" key={item.number}>
                  <span className="about-approach-card__number">{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="about-purpose-section bg-white py-24 md:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
              <span className="mb-4 block text-xs font-extrabold uppercase tracking-[0.2em] text-primary">What guides us</span>
              <h2 className="mb-5 text-3xl font-extrabold text-foreground md:text-5xl" data-testid="text-mission-title">
                Our Purpose
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
                Two commitments shape how B4P CODEFOUND works with communities and partners around the world.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <article className="about-purpose-card about-purpose-card--mission">
                <div className="about-purpose-card__topline">
                  <span className="about-purpose-card__number">01</span>
                  <span className="about-purpose-card__label">The Mission</span>
                </div>
                <p className="about-purpose-card__statement">{mission}</p>
              </article>

              <article className="about-purpose-card about-purpose-card--vision">
                <div className="about-purpose-card__topline">
                  <span className="about-purpose-card__number">02</span>
                  <span className="about-purpose-card__label">The Vision</span>
                </div>
                <p className="about-purpose-card__statement">{vision}</p>
              </article>
            </div>

            <div className="about-purpose-goal mt-6">
              <div>
                <span className="about-purpose-card__label">The Goal</span>
                <h3 className="mt-3 text-2xl font-extrabold text-foreground md:text-3xl">From shared purpose to shared prosperity.</h3>
              </div>
              <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
                {goal}
              </p>
            </div>
          </div>
        </section>

        {/* Our History */}
        <section className="py-24 md:py-32 bg-muted/30 border-y border-border/50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="about-section-heading mb-16 md:mb-24">
              <p className="about-section-heading__eyebrow">Our story</p>
              <h2>A Journey of Impact</h2>
              <p>
                From a foundational idea to a global network of women leading change in their communities.
              </p>
            </div>

            <div className="space-y-16 md:space-y-24 max-w-5xl mx-auto">
              {/* 2015 */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start group">
                <div className="md:col-span-3">
                  <div className="text-5xl md:text-6xl font-extrabold text-primary/20 group-hover:text-primary transition-colors duration-500">
                    2015
                  </div>
                </div>
                <div className="md:col-span-9 md:pt-4 border-t-2 border-border group-hover:border-primary transition-colors duration-500 pt-6">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Foundation Established</h3>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    B4P CODEFOUND was founded by Lindora Kolu Howard-Diawara to connect peacebuilding initiatives with concrete economic development and community empowerment.
                  </p>
                </div>
              </div>

              {/* Liberia Expansion */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start group">
                <div className="md:col-span-3">
                  <div className="text-5xl md:text-6xl font-extrabold text-primary/20 group-hover:text-primary transition-colors duration-500">
                    Growth
                  </div>
                </div>
                <div className="md:col-span-9 md:pt-4 border-t-2 border-border group-hover:border-primary transition-colors duration-500 pt-6">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Liberia Operations</h3>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Expanded grassroots operations in Gbarnga, Bong County, launching critical programs focused on women's leadership and youth engagement.
                  </p>
                </div>
              </div>

              {/* CWC */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start group">
                <div className="md:col-span-3">
                  <div className="text-5xl md:text-6xl font-extrabold text-accent/30 group-hover:text-accent transition-colors duration-500">
                    CWC
                  </div>
                </div>
                <div className="md:col-span-9 md:pt-4 border-t-2 border-border group-hover:border-accent transition-colors duration-500 pt-6">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Columbus Women Connect</h3>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Launched our diaspora-facing initiative in Ohio to create a multicultural network where women connect, learn, and lead.
                  </p>
                </div>
              </div>

              {/* Today */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start group">
                <div className="md:col-span-3">
                  <div className="text-5xl md:text-6xl font-extrabold text-primary/20 group-hover:text-primary transition-colors duration-500">
                    Today
                  </div>
                </div>
                <div className="md:col-span-9 md:pt-4 border-t-2 border-border group-hover:border-primary transition-colors duration-500 pt-6">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Global Impact</h3>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Operating globally, driving systemic change through fiscal sponsorship, advocacy at the UN Commission on the Status of Women, and continuous local empowerment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Existing Components Refined */}
        <FounderMessage />
        <TheoryOfChange />

        {/* CTA Section */}
        <section className="py-24 md:py-32 bg-white text-center">
          <div className="container max-w-4xl px-4 md:px-6 mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-foreground">
              Take the next step
            </h2>
            <p className="text-xl text-muted-foreground font-medium mb-12 max-w-2xl mx-auto">
              Explore our programs, meet the team driving the change, or contribute to building a more peaceful and productive world.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-bold px-10 h-14 text-base" data-testid="link-donate-cta">
                <a href="/make-a-donation">Donate Now</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto border-border text-foreground hover:bg-muted font-bold px-10 h-14 text-base" data-testid="link-team-cta">
                <Link href="/the-management-team">Meet the Team</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
