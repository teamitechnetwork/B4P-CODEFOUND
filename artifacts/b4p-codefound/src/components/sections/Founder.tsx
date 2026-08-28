import { Quote } from 'lucide-react';

export function Founder() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative z-10 shadow-2xl">
              <img 
                src="/brand/b4p-og-source.png" 
                alt="Lindora Kolu Howard-Diawara, Founder & Executive Director" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-secondary/10 rounded-2xl z-0" />
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-sm font-bold tracking-[0.2em] text-secondary uppercase mb-6 block">
              Meet Our Founder
            </span>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-4 leading-tight text-balance">
              Lindora Kolu Howard-Diawara
            </h2>
            <p className="text-xl text-primary font-bold mb-10">
              Executive Director
            </p>

            <div className="space-y-6 text-muted-foreground text-lg md:text-xl leading-relaxed mb-12 max-w-2xl">
              <p>
                Lindora Kolu Howard-Diawara is a Liberian peace activist and women’s rights advocate. Since founding B4P CODEFOUND in 2015, her leadership has been instrumental in creating sustainable pathways for the next generation of African leaders.
              </p>
              <p>
                Her work bridges grassroots activism and global policy, ensuring the stories and needs of local communities reach international stages like the Commission on the Status of Women.
              </p>
              <p>
                She advocates for an inclusive, peaceful future across the continent through mentorship and leadership skill-building.
              </p>
            </div>

            <div className="relative pt-8 mt-4 border-t border-border/60 max-w-2xl">
              <Quote className="absolute top-0 right-0 w-24 h-24 text-secondary/5 rotate-180 -translate-y-6" />
              <p className="text-2xl md:text-3xl font-serif italic text-foreground leading-snug relative z-10 text-balance">
                "Empowered women are the foundation of a productive nation."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
