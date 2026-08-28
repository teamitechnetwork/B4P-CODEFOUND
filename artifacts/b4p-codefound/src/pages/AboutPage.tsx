import { Link } from 'wouter';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Founder } from '@/components/sections/Founder';
import { TheoryOfChange } from '@/components/sections/TheoryOfChange';
import { Button } from '@/components/ui/button';
import { mission, vision } from '@/data/mission';

export default function AboutPage() {
  return (
    <div className="about-page flex flex-col min-h-screen bg-background font-sans">
      <Header />
      <main className="flex-1">
        {/* Editorial Hero Section */}
        <section className="pt-32 pb-16 md:pt-48 md:pb-24 bg-[#f7fafb] text-[#062e37]">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-700">
              <h1 
                className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-[1.05] text-balance text-foreground"
                data-testid="text-about-title"
              >
                We are an African-led movement for <span className="text-secondary">peace</span> and <span className="text-primary">productivity</span>.
              </h1>
              <p 
                className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed max-w-3xl mb-12"
                data-testid="text-about-subtitle"
              >
                B4P CODEFOUND connects peacebuilding initiatives with concrete economic development and community empowerment across Liberia, the United States, and beyond.
              </p>
            </div>
          </div>
          <div className="container px-4 md:px-6 mx-auto mt-4 md:mt-8 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-200">
            <div className="w-full h-[50vh] md:h-[65vh] rounded-2xl overflow-hidden relative shadow-2xl">
              <img
                src="/images/story-cwc.jpg"
                alt="B4P CODEFOUND community gathering"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Mission & Vision - Editorial layout */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
              <div className="lg:col-span-4 flex flex-col justify-start">
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6" data-testid="text-mission-title">
                  Our Purpose
                </h2>
                <div className="w-16 h-1 bg-secondary mb-8"></div>
              </div>
              <div className="lg:col-span-8 space-y-20">
                <div>
                  <h3 className="text-sm font-bold tracking-[0.2em] text-secondary uppercase mb-6">The Mission</h3>
                  <p className="text-2xl md:text-3xl lg:text-4xl font-medium leading-normal text-foreground text-balance">
                    {mission}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-bold tracking-[0.2em] text-secondary uppercase mb-6">The Vision</h3>
                  <p className="text-2xl md:text-3xl lg:text-4xl font-medium leading-normal text-foreground text-balance">
                    {vision}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our History */}
        <section className="py-24 md:py-32 bg-muted/30 border-y border-border/50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="mb-16 md:mb-24">
              <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6">A Journey of Impact</h2>
              <p className="text-xl text-muted-foreground max-w-2xl">
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
                  <div className="text-5xl md:text-6xl font-extrabold text-secondary/20 group-hover:text-secondary transition-colors duration-500">
                    Growth
                  </div>
                </div>
                <div className="md:col-span-9 md:pt-4 border-t-2 border-border group-hover:border-secondary transition-colors duration-500 pt-6">
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
        <Founder />
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
