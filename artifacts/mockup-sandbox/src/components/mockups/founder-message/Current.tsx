import { Quote } from 'lucide-react';
import './_group.css';

export function Current() {
  return (
    <main className="min-h-screen bg-white">
      <section id="about" className="bg-white py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="relative lg:col-span-5">
              <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/__mockup/images/founder-portrait.png"
                  alt="Lindora Kolu Howard-Diawara, Founder & Executive Director"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 z-0 h-full w-full rounded-2xl bg-secondary/10" />
            </div>

            <div className="flex flex-col justify-center lg:col-span-7">
              <span className="mb-6 block text-sm font-bold uppercase tracking-[0.2em] text-secondary">
                Meet Our Founder
              </span>

              <h2 className="mb-4 text-4xl font-extrabold leading-tight text-foreground text-balance md:text-5xl lg:text-6xl">
                Lindora Kolu Howard-Diawara
              </h2>
              <p className="mb-10 text-xl font-bold text-primary">Executive Director</p>

              <div className="mb-12 max-w-2xl space-y-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
                <p>
                  Lindora Kolu Howard-Diawara is a Liberian peace activist and women’s rights advocate.
                  Since founding B4P CODEFOUND in 2015, her leadership has been instrumental in creating
                  sustainable pathways for the next generation of African leaders.
                </p>
                <p>
                  Her work bridges grassroots activism and global policy, ensuring the stories and needs
                  of local communities reach international stages like the Commission on the Status of Women.
                </p>
                <p>
                  She advocates for an inclusive, peaceful future across the continent through mentorship
                  and leadership skill-building.
                </p>
              </div>

              <div className="relative mt-4 max-w-2xl border-t border-border/60 pt-8">
                <Quote className="absolute right-0 top-0 h-24 w-24 -translate-y-6 rotate-180 text-secondary/5" />
                <p className="relative z-10 font-serif text-2xl italic leading-snug text-foreground text-balance md:text-3xl">
                  “Empowered women are the foundation of a productive nation.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
