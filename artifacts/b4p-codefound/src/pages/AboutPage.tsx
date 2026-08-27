import { ArrowRight, Globe, Users, HeartHandshake, ShieldCheck } from 'lucide-react';
import { Link } from 'wouter';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Founder } from '@/components/sections/Founder';
import { TheoryOfChange } from '@/components/sections/TheoryOfChange';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans">
      <Header />
      <main className="flex-1 pt-[72px] md:pt-[108px]">
        {/* Hero Section */}
        <section className="relative bg-[#062e37] text-white overflow-hidden py-24 md:py-32 lg:py-40">
          <div className="absolute inset-0 z-0 opacity-20">
            <img 
              src="/images/story-cwc.jpg" 
              alt="Community gathering" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#062e37] via-[#062e37]/90 to-transparent"></div>
          </div>
          
          <div className="container relative z-10 px-4 md:px-6">
            <div className="max-w-3xl">
              <span 
                className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-sm mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700"
                data-testid="text-about-eyebrow"
              >
                <span className="w-8 h-[2px] bg-primary"></span>
                About B4P CODEFOUND
              </span>
              <h1 
                className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1] animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150"
                data-testid="text-about-title"
              >
                Connecting <span className="text-primary">communities</span>. <br />
                Building <span className="text-accent">peace</span>.
              </h1>
              <p 
                className="text-lg md:text-xl text-white/80 font-medium leading-relaxed max-w-2xl mb-10 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300"
                data-testid="text-about-subtitle"
              >
                We are an African-led nonprofit and social enterprise dedicated to peacebuilding, community development, and women's leadership across Liberia, the United States, and beyond.
              </p>
              <div 
                className="flex flex-wrap items-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500"
              >
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-8 h-14 text-base" data-testid="link-donate-hero">
                  <a href="/make-a-donation">Support Our Work</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white font-bold px-8 h-14 text-base" data-testid="link-contact-hero">
                  <a href="/contact">Contact Us</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-8 tracking-tight leading-tight" data-testid="text-mission-title">
                  Our Mission
                </h2>
                <div className="prose prose-lg text-muted-foreground font-medium leading-relaxed">
                  <p>
                    Business for Peace Community Development Foundation (B4P CODEFOUND) exists to empower local communities through peacebuilding, economic development, and inclusive leadership. 
                  </p>
                  <p>
                    We believe that true, lasting peace is only possible when all members of a society—especially women and youth—are equipped with the tools, resources, and platforms they need to thrive.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-muted/40 p-8 rounded-2xl border border-border/50">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                    <Globe size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Global Reach</h3>
                  <p className="text-muted-foreground">Operating across Liberia, the US, and partnering globally to amplify impact.</p>
                </div>
                <div className="bg-muted/40 p-8 rounded-2xl border border-border/50 sm:translate-y-8">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6 text-accent">
                    <Users size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">African-Led</h3>
                  <p className="text-muted-foreground">Solutions designed by and for the communities we serve, rooted in local context.</p>
                </div>
                <div className="bg-muted/40 p-8 rounded-2xl border border-border/50">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 text-secondary">
                    <ShieldCheck size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Lasting Peace</h3>
                  <p className="text-muted-foreground">Moving beyond conflict resolution to create sustainable community structures.</p>
                </div>
                <div className="bg-muted/40 p-8 rounded-2xl border border-border/50 sm:translate-y-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                    <HeartHandshake size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Collective Action</h3>
                  <p className="text-muted-foreground">Fostering partnerships that bridge grassroots activism and global policy.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline / History */}
        <section className="py-24 bg-muted/30 border-y border-border/50 overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 text-secondary font-bold uppercase tracking-wider text-sm mb-4">
                <span className="w-8 h-[2px] bg-secondary"></span>
                Our History
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight">
                A Journey of Impact
              </h2>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* Vertical line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2"></div>
              
              <div className="space-y-12">
                {/* 2015 */}
                <div className="relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-16 group">
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-background -translate-x-1/2 mt-1.5 md:mt-0 z-10 transition-transform group-hover:scale-125"></div>
                  <div className="md:w-1/2 pl-12 md:pl-0 md:text-right md:pr-12">
                    <h3 className="text-4xl font-extrabold text-primary mb-2">2015</h3>
                    <h4 className="text-xl font-bold text-foreground mb-3">Foundation Established</h4>
                  </div>
                  <div className="md:w-1/2 pl-12 md:pl-12">
                    <p className="text-muted-foreground font-medium leading-relaxed">
                      B4P CODEFOUND was founded by Lindora Kolu Howard-Diawara to connect peacebuilding initiatives with concrete economic development and community empowerment.
                    </p>
                  </div>
                </div>

                {/* Liberia Expansion */}
                <div className="relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-16 group">
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-secondary ring-4 ring-background -translate-x-1/2 mt-1.5 md:mt-0 z-10 transition-transform group-hover:scale-125"></div>
                  <div className="md:w-1/2 pl-12 md:pl-12 md:text-left order-1 md:order-2">
                    <h3 className="text-4xl font-extrabold text-secondary mb-2">Growth</h3>
                    <h4 className="text-xl font-bold text-foreground mb-3">Liberia Operations</h4>
                  </div>
                  <div className="md:w-1/2 pl-12 md:pl-0 md:pr-12 order-2 md:order-1 md:text-right">
                    <p className="text-muted-foreground font-medium leading-relaxed">
                      Expanded grassroots operations in Gbarnga, Bong County, launching critical programs focused on women's leadership and youth engagement.
                    </p>
                  </div>
                </div>

                {/* Columbus Women Connect */}
                <div className="relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-16 group">
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-accent ring-4 ring-background -translate-x-1/2 mt-1.5 md:mt-0 z-10 transition-transform group-hover:scale-125"></div>
                  <div className="md:w-1/2 pl-12 md:pl-0 md:text-right md:pr-12">
                    <h3 className="text-4xl font-extrabold text-accent mb-2">CWC</h3>
                    <h4 className="text-xl font-bold text-foreground mb-3">Columbus Women Connect</h4>
                  </div>
                  <div className="md:w-1/2 pl-12 md:pl-12">
                    <p className="text-muted-foreground font-medium leading-relaxed">
                      Launched our diaspora-facing initiative in Ohio to create a multicultural network where women connect, learn, and lead.
                    </p>
                  </div>
                </div>

                {/* Present */}
                <div className="relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-16 group">
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-background -translate-x-1/2 mt-1.5 md:mt-0 z-10 transition-transform group-hover:scale-125"></div>
                  <div className="md:w-1/2 pl-12 md:pl-12 md:text-left order-1 md:order-2">
                    <h3 className="text-4xl font-extrabold text-primary mb-2">Today</h3>
                    <h4 className="text-xl font-bold text-foreground mb-3">Global Impact</h4>
                  </div>
                  <div className="md:w-1/2 pl-12 md:pl-0 md:pr-12 order-2 md:order-1 md:text-right">
                    <p className="text-muted-foreground font-medium leading-relaxed">
                      Operating globally, driving systemic change through fiscal sponsorship, advocacy at the UN Commission on the Status of Women, and continuous local empowerment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Existing Components */}
        <Founder />
        <TheoryOfChange />

        {/* CTA Section */}
        <section className="py-24 bg-white text-center">
          <div className="container max-w-4xl px-4 md:px-6">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
              Ready to make a difference?
            </h2>
            <p className="text-xl text-muted-foreground font-medium mb-10 max-w-2xl mx-auto">
              Whether you want to volunteer your time, support our programs financially, or partner with us, your contribution helps build a more peaceful and productive world.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-bold px-8 h-14 text-base" data-testid="link-donate-cta">
                <a href="/make-a-donation">Donate Now</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto border-border text-foreground hover:bg-muted font-bold px-8 h-14 text-base" data-testid="link-volunteer-cta">
                <Link href="/become-a-volunteer">Become a Volunteer</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
