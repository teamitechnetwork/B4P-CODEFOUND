import { useEffect } from 'react';
import { ArrowLeft, BriefcaseBusiness, Building2, Workflow } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Link, useLocation } from 'wouter';

const services = [
  {
    id: 'fiscal-sponsorship',
    title: 'Fiscal Sponsorship',
    icon: Building2,
    description: 'A pathway for aligned initiatives to strengthen their work with the right organizational support.',
    content: 'Fiscal sponsorship begins with a conversation about mission alignment, organizational fit, responsibilities, and the practical support an initiative needs. B4P CODEFOUND works with leaders to understand the structure behind the work and identify a responsible way forward.'
  },
  {
    id: 'nonprofit-capacity-building',
    title: 'Nonprofit Capacity Building',
    icon: Workflow,
    description: 'Practical support to help nonprofit organizations grow their systems, leadership, and impact.',
    content: 'Capacity-building support is shaped around the organization. Conversations can address leadership, planning, internal systems, and the practical questions that influence an organization’s ability to sustain its work and serve its community.'
  },
  {
    id: 'business-development',
    title: 'Business Development',
    icon: BriefcaseBusiness,
    description: 'Business-focused support that helps enterprises build capacity and connect with opportunity.',
    content: 'Our business development services bridge the gap between entrepreneurial ambition and market success. We provide coaching, mentorship, and practical training in areas such as financial literacy, digital transformation, and market linkage, particularly focusing on women- and youth-led enterprises.'
  }
];

export default function ServicesPage() {
  const [location] = useLocation();

  useEffect(() => {
    // If there's a specific service in the URL like /services/fiscal-sponsorship
    const parts = location.split('/');
    const slug = parts[parts.length - 1];
    
    if (slug && slug !== 'services') {
      const element = document.getElementById(slug);
      if (element) {
        // Small delay to ensure layout is ready
        setTimeout(() => {
          const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          element.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 pt-[104px]">
        {/* HERO */}
        <section className="relative bg-[#f8fbfe] border-b border-border py-24 md:py-32">
          <div className="container max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <Link href="/what-we-do" className="inline-flex items-center gap-2 text-[#1b9ed9] hover:text-[#062e37] font-bold text-sm uppercase tracking-wider mb-12 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to What We Do
            </Link>
            
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-3 text-sm font-bold tracking-[0.2em] text-[#df5311] uppercase mb-6">
                <span className="w-8 h-[2px] bg-[#1b9ed9]" />
                Organizational Support
              </span>
              <h1 className="text-5xl md:text-6xl font-extrabold text-[#062e37] tracking-tight leading-[1.05] mb-8">
                Services that meet the work where it is.
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed font-medium mb-12">
                Practical support for nonprofits, community initiatives, and businesses building a more equitable future.
              </p>
            </div>
          </div>
        </section>

        {/* SERVICES CONTENT */}
        <section className="py-24 bg-white">
          <div className="container max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-12 gap-16">
              
              {/* STICKY NAV */}
              <div className="lg:col-span-4 relative">
                <div className="sticky top-32">
                  <h3 className="text-lg font-bold text-[#062e37] mb-6 uppercase tracking-wider">Directory</h3>
                  <nav className="flex flex-col gap-2 border-l-2 border-border pl-4">
                    {services.map(s => (
                      <Link 
                        key={s.id} 
                        href={`/services/${s.id}`}
                        className={`text-left py-2 font-medium transition-colors ${
                          location.includes(s.id) 
                            ? 'text-[#1b9ed9] -ml-[18px] border-l-2 border-[#1b9ed9] pl-4' 
                            : 'text-muted-foreground hover:text-[#062e37]'
                        }`}
                      >
                        {s.title}
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>

              {/* LIST */}
              <div className="lg:col-span-8 space-y-24">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div id={service.id} key={service.id} className="scroll-mt-32">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="w-16 h-16 rounded-2xl bg-[#eaf7fb] flex items-center justify-center shrink-0">
                          <Icon className="w-8 h-8 text-[#1b9ed9]" />
                        </div>
                        <span className="text-[#1b9ed9] font-bold text-lg tracking-widest block">0{index + 1}</span>
                      </div>
                      
                      <h2 className="text-3xl md:text-4xl font-extrabold text-[#062e37] tracking-tight mb-6">
                        {service.title}
                      </h2>
                      
                      <p className="text-2xl text-[#062e37]/80 leading-relaxed font-medium mb-8">
                        {service.description}
                      </p>
                      
                      <div className="prose prose-lg text-muted-foreground prose-p:leading-relaxed">
                        <p>{service.content}</p>
                      </div>

                      <div className="mt-12">
                        <a href={`mailto:management@b4pcodefound.org?subject=${encodeURIComponent(`Inquiry about ${service.title}`)}`} className="inline-flex items-center gap-2 bg-[#062e37] text-white px-6 py-4 font-bold text-sm tracking-widest uppercase hover:bg-[#1b9ed9] transition-colors rounded-sm">
                          Inquire about {service.title}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
