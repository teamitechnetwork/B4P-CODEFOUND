import { CheckCircle2, ShieldCheck, HeartHandshake, BookOpenCheck, Handshake } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ProgramHero } from '@/components/programs/ProgramHero';

export default function PeacebuildingProgramPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 pt-[104px]">
        <ProgramHero
          variant="pillar"
          eyebrow="Operational pillar 01"
          title="Peacebuilding"
          description="Cultivating harmony, reducing conflict, and building lasting trust across diverse, conflict and post-conflict communities."
          image="/images/uploaded/hero-community-outdoors.webp"
          imageAlt="Community gathering for peacebuilding in Liberia"
          backHref="/what-we-do"
          backLabel="Back to What We Do"
          icon={Handshake}
          actions={[
            { href: '/programs/global', label: 'See related programs' },
            { href: '/partner-with-us', label: 'Partner for peace', quiet: true },
          ]}
          signals={[
            { value: '01', label: 'operational pillar' },
            { value: 'LOCAL', label: 'knowledge in action' },
          ]}
          visualLabel="Trust grows through dialogue and practice"
          badgeLabel="Peace in action"
        />

        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#062e37] tracking-tight mb-8">
                  Building the capacities for peace.
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                  Peace is not just the absence of conflict; it is the active presence of structures, skills, and relationships that allow communities to resolve differences and thrive together. We facilitate dialogue and provide practical tools for conflict transformation.
                </p>

                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#eaf7fb] flex items-center justify-center shrink-0">
                      <HeartHandshake className="w-6 h-6 text-[#1b9ed9]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#062e37] mb-2">Facilitate Dialogue</h3>
                      <p className="text-muted-foreground leading-relaxed">Promote tolerance and understanding among diverse cultural and social groups for collective action.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#eaf7fb] flex items-center justify-center shrink-0">
                      <BookOpenCheck className="w-6 h-6 text-[#1b9ed9]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#062e37] mb-2">Develop Skills</h3>
                      <p className="text-muted-foreground leading-relaxed">Build capacities for peace through focused conflict resolution and problem-solving skills training.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#eaf7fb] flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-6 h-6 text-[#1b9ed9]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#062e37] mb-2">Provide Resources</h3>
                      <p className="text-muted-foreground leading-relaxed">Equip community members with the resources and practical tools necessary to sustain peace initiatives.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#f8fbfe] border border-border p-10 rounded-2xl">
                <h3 className="text-2xl font-bold text-[#062e37] mb-8 pb-6 border-b border-border">Program Overview</h3>
                
                <div className="mb-10">
                  <span className="text-sm font-bold tracking-widest text-[#1b9ed9] uppercase block mb-3">Activities</span>
                  <p className="text-[#062e37] font-medium leading-relaxed">Dialogues, capacity building, small grants, and advocacy campaigns that empower local voices.</p>
                </div>

                <div>
                  <span className="text-sm font-bold tracking-widest text-[#1b9ed9] uppercase block mb-3">Target Outcomes</span>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#df5311] shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Enhanced community participation and local capacity</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#df5311] shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Improved social cohesion and understanding</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#df5311] shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Stronger leadership and trust within conflict-affected areas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#df5311] shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Sustainable, community-led peace initiatives</span>
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
