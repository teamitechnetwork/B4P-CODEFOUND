import { Quote } from 'lucide-react';

export function Founder() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-5/12 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl z-10 aspect-[4/5]">
              <img 
                src="/brand/b4p-og-source.png" 
                alt="Lindora Kolu Howard-Diawara, Founder & Executive Director" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative block behind image */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-primary/10 rounded-2xl z-0" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full z-0 blur-3xl" />
          </div>

          <div className="w-full lg:w-7/12">
            <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-[0.15em] text-xs mb-4">
              <span className="w-8 h-[2px] bg-primary"></span>
              Meet Our Founder
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-4 leading-[1.05] tracking-tight text-balance">
              Lindora Kolu <br />Howard-Diawara
            </h2>
            <p className="text-xl text-secondary font-bold mb-8">
              Founder & Executive Director
            </p>

            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed mb-10 max-w-2xl">
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

            <div className="bg-background/80 border-l-4 border-secondary p-8 rounded-r-2xl relative shadow-sm max-w-2xl">
              <Quote className="absolute top-4 right-6 w-16 h-16 text-secondary/5 rotate-180" />
              <p className="text-xl md:text-2xl font-bold italic text-foreground leading-snug relative z-10 pr-8">
                "Empowered women are the foundation of a productive nation."
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
