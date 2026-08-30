import { CheckCircle2, Sprout, HandCoins, MonitorSmartphone, GraduationCap } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ProgramHero } from '@/components/programs/ProgramHero';

export default function EconomicDevelopmentProgramPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 pt-[104px]">
        <ProgramHero
          variant="pillar"
          eyebrow="Operational pillar 02"
          title="Economic Development & Empowerment"
          description="Driving prosperity, expanding opportunity, and building economic independence for women and girls."
          image="/images/uploaded/economic-development-group.webp"
          imageAlt="Women leaders gathered during a B4P CODEFOUND event"
          backHref="/what-we-do"
          backLabel="Back to What We Do"
          actions={[
            { href: '/programs/liberia', label: 'See related programs' },
            { href: '/partner-with-us', label: 'Build opportunity', quiet: true },
          ]}
          signals={[
            { value: '02', label: 'operational pillar' },
            { value: 'WOMEN', label: 'and youth-led growth' },
          ]}
        />

        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#062e37] tracking-tight mb-8">
                  Stimulating growth and sustainable livelihoods.
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                  Economic empowerment is a cornerstone of sustainable community development. We focus on transforming local enterprise—especially for women-led households—by providing the tools, networks, and knowledge required to succeed in a modern economy.
                </p>

                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#eaf7fb] flex items-center justify-center shrink-0">
                      <Sprout className="w-6 h-6 text-[#1b9ed9]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#062e37] mb-2">Agricultural Transformation</h3>
                      <p className="text-muted-foreground leading-relaxed">Transform subsistence farming into commercialized, sustainable industry that strengthens value chains and resilience.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#eaf7fb] flex items-center justify-center shrink-0">
                      <GraduationCap className="w-6 h-6 text-[#1b9ed9]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#062e37] mb-2">Business Accompaniment</h3>
                      <p className="text-muted-foreground leading-relaxed">Build capacity and provide hands-on accompaniment support for women and youth-owned businesses.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#eaf7fb] flex items-center justify-center shrink-0">
                      <MonitorSmartphone className="w-6 h-6 text-[#1b9ed9]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#062e37] mb-2">Digital & Financial Literacy</h3>
                      <p className="text-muted-foreground leading-relaxed">Provide access to education and technology for better decision-making and participation in the modern economy.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#eaf7fb] flex items-center justify-center shrink-0">
                      <HandCoins className="w-6 h-6 text-[#1b9ed9]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#062e37] mb-2">Market & Resource Access</h3>
                      <p className="text-muted-foreground leading-relaxed">Provide access to credit, adaptable services, and connect growing businesses to development networks.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#f8fbfe] border border-border p-10 rounded-2xl">
                <h3 className="text-2xl font-bold text-[#062e37] mb-8 pb-6 border-b border-border">Program Overview</h3>
                
                <div className="mb-10">
                  <span className="text-sm font-bold tracking-widest text-[#1b9ed9] uppercase block mb-3">Activities</span>
                  <p className="text-[#062e37] font-medium leading-relaxed">Agribusiness Development, Entrepreneurship Training, Coaching & Mentorship, Digital and Financial Literacy, and Market Linkages.</p>
                </div>

                <div>
                  <span className="text-sm font-bold tracking-widest text-[#1b9ed9] uppercase block mb-3">Target Outcomes</span>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#df5311] shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Greater economic independence of women and youths</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#df5311] shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Increased social venturing and sustainable business models</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#df5311] shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Sustainable agricultural practices and improved return on investments</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#df5311] shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Expanded economic inclusion across communities</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
