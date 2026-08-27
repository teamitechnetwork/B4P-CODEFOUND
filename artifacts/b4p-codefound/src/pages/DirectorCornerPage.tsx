import { ArrowUpRight, Quote } from 'lucide-react';
import { Link } from 'wouter';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function DirectorCornerPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcfdfd] font-sans selection:bg-primary/20 selection:text-primary">
      <Header />
      
      <main className="flex-1 pt-[72px] md:pt-[108px]">
        {/* Intro/Hero Section */}
        <section className="bg-[#052228] text-white pt-20 pb-28 md:pt-32 md:pb-40 px-6 relative overflow-hidden">
          {/* Subtle background texture/pattern */}
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent blur-3xl"></div>

          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-3 text-secondary font-extrabold uppercase tracking-[0.15em] text-[0.7rem] mb-6">
                <span className="w-8 h-[2px] bg-secondary"></span>
                The Director’s Corner
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-[1.05]">
                A message from <br className="hidden md:block" />
                <span className="text-primary">our founder.</span>
              </h1>
              <p className="text-lg md:text-2xl text-white/80 font-medium leading-relaxed max-w-2xl">
                Bridging grassroots activism and global policy to build a more inclusive, peaceful future.
              </p>
            </div>
          </div>
        </section>

        {/* Editorial Content Section */}
        <section className="px-6 py-16 md:py-32 relative z-20 -mt-10 md:-mt-20">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
              
              {/* Left Column: Portrait (Sticky) */}
              <div className="lg:col-span-5 lg:sticky lg:top-32 order-2 lg:order-1">
                <div className="bg-white p-4 md:p-6 rounded-2xl shadow-[0_20px_40px_-15px_rgba(5,34,40,0.08)] border border-border/40">
                  <div className="relative rounded-xl overflow-hidden aspect-[4/4.5] mb-6 bg-[#eaf7fb]">
                    <img 
                      src="/images/team/team-lindora-management.png" 
                      alt="Lindora Kolu Howard-Diawara" 
                      className="w-full h-full object-cover object-top filter contrast-[1.02]"
                    />
                    <div className="absolute inset-0 border border-black/5 rounded-xl pointer-events-none"></div>
                  </div>
                  
                  <div className="text-center md:text-left px-2">
                    <h2 className="text-2xl font-extrabold text-foreground mb-1 tracking-tight">Lindora Kolu <br className="hidden md:block"/>Howard-Diawara</h2>
                    <p className="text-primary font-bold text-sm tracking-wide uppercase mb-4">Founder & Executive Director</p>
                    
                    <div className="h-px w-full bg-border/60 my-5"></div>
                    
                    <p className="text-sm text-muted-foreground font-medium mb-6 leading-relaxed">
                      Liberian peace activist and women’s rights advocate leading B4P CODEFOUND across Liberia, the US, and globally.
                    </p>
                    
                    <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-foreground hover:text-primary transition-colors group">
                      Get in touch
                      <span className="w-6 h-6 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                        <ArrowUpRight size={14} />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Column: The Letter */}
              <div className="lg:col-span-7 order-1 lg:order-2">
                <article className="prose prose-lg md:prose-xl prose-headings:font-extrabold prose-p:font-medium prose-p:leading-relaxed prose-p:text-foreground/80 prose-a:text-primary prose-a:no-underline hover:prose-a:underline max-w-none">
                  
                  <p className="text-2xl md:text-3xl text-foreground font-bold leading-snug mb-10">
                    Welcome to B4P CODEFOUND.
                  </p>

                  <p className="first-letter:text-7xl first-letter:font-extrabold first-letter:text-primary first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8] mb-8">
                    When I founded Business for Peace Community Development Foundation in 2015, the vision was clear: to connect peacebuilding initiatives with concrete economic development and community empowerment. 
                  </p>

                  <p className="mb-8">
                    I have always believed that true, lasting peace is only possible when all members of a society—especially women and youth—are equipped with the tools, resources, and platforms they need to thrive. 
                  </p>

                  <div className="my-14 relative bg-primary/5 border-l-4 border-primary p-8 md:p-10 rounded-r-2xl">
                    <Quote className="absolute top-6 right-6 w-16 h-16 text-primary/10" />
                    <p className="text-2xl md:text-3xl font-bold italic text-foreground leading-tight relative z-10 m-0 text-balance">
                      "Empowered women are the foundation of a productive nation."
                    </p>
                  </div>

                  <p className="mb-8">
                    Our work bridges grassroots activism and global policy. It is vital that the stories and needs of local communities do not remain local. We work to ensure those voices reach international stages, such as the Commission on the Status of Women, while simultaneously grounding our efforts in the real, daily lives of the people we serve.
                  </p>

                  <p className="mb-8">
                    Through mentorship, leadership skill-building, and collective action, we advocate for an inclusive, peaceful future across <Link href="/programs/liberia">Liberia</Link>, the <Link href="/programs/usa">United States</Link>, and beyond. This is an African-led movement, but it requires a global partnership.
                  </p>

                  <p className="mb-12">
                    Whether you are here to learn about our <Link href="/peacebuilding-program">peacebuilding programs</Link>, our focus on <Link href="/economic-development-program">economic development</Link>, or you are looking to become a <Link href="/become-a-volunteer">volunteer</Link> or <Link href="/make-a-donation">support our mission</Link>, I am grateful for your presence. True impact goes beyond today—it is seen in stronger communities, uplifted families, and generations of women and youth who rise with purpose.
                  </p>

                  <div className="pt-8 border-t border-border/60">
                    <p className="text-foreground font-bold m-0 mb-1">In peace and partnership,</p>
                    {/* A tasteful signature-like rendering of her name */}
                    <div className="font-serif italic text-3xl md:text-4xl text-primary mt-4 mb-2 tracking-tight">
                      Lindora Kolu Howard-Diawara
                    </div>
                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest m-0">
                      Founder & Executive Director
                    </p>
                  </div>

                </article>
              </div>

            </div>
          </div>
        </section>

        {/* Explore More Section */}
        <section className="bg-white py-24 border-t border-border/50">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
              <div>
                <span className="inline-flex items-center gap-2 text-secondary font-bold uppercase tracking-wider text-sm mb-3">
                  <span className="w-6 h-[2px] bg-secondary"></span>
                  Dive Deeper
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Explore B4P CODEFOUND</h2>
              </div>
              <Link href="/about-us" className="inline-flex items-center gap-2 font-bold text-primary hover:text-primary/80 transition-colors">
                Read our full history <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Our Impact',
                  desc: 'Discover how we measure progress in confidence, opportunities, and stronger communities.',
                  href: '/our-impact',
                  color: 'bg-primary/10 text-primary hover:bg-primary hover:text-white'
                },
                {
                  title: 'What We Do',
                  desc: 'Explore our peacebuilding, economic development, and capacity-building services.',
                  href: '/what-we-do',
                  color: 'bg-secondary/10 text-secondary hover:bg-secondary hover:text-white'
                },
                {
                  title: 'Management Team',
                  desc: 'Meet the dedicated leadership driving global-local peacebuilding daily.',
                  href: '/the-management-team',
                  color: 'bg-accent/10 text-accent hover:bg-accent hover:text-white'
                }
              ].map((card, idx) => (
                <Link key={idx} href={card.href} className="group block bg-[#f7fafb] p-8 rounded-2xl border border-border/50 transition-all hover:shadow-xl hover:border-transparent hover:-translate-y-1">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${card.color}`}>
                    <ArrowUpRight size={24} />
                  </div>
                  <h3 className="text-xl font-extrabold text-foreground mb-3">{card.title}</h3>
                  <p className="text-muted-foreground font-medium leading-relaxed">{card.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
