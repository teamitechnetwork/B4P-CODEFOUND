export function FounderMessage() {
  return (
    <section id="about" aria-labelledby="founder-message" className="bg-white px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 overflow-hidden bg-white shadow-[0_18px_50px_-32px_rgba(8,40,58,0.28)] ring-1 ring-[#123f47]/10 lg:grid-cols-[0.94fr_1.06fr] lg:items-stretch">
          <div className="relative aspect-[4/3] bg-[#eaf2f5] lg:aspect-auto lg:min-h-[560px]">
            <img
              src="/images/founder-lindora-kolu-howard-diawara.png"
              alt="Lindora Kolu Howard-Diawara, Founder and Executive Director of B4P CODEFOUND"
              className="absolute inset-0 h-full w-full object-cover object-top"
              loading="lazy"
              decoding="async"
            />
          </div>

          <article className="flex flex-col justify-center px-6 py-8 sm:px-9 sm:py-10 lg:px-12 lg:py-12">
            <span className="mb-4 block h-[3px] w-10 bg-primary" aria-hidden="true" />
            <h2 id="founder-message" className="max-w-xl text-[1.7rem] font-extrabold uppercase leading-[1.12] tracking-[-0.035em] text-primary sm:text-3xl lg:text-[2.1rem]">
              Message from our founder
            </h2>
            <p className="mt-3 text-xs font-bold uppercase leading-relaxed tracking-[0.09em] text-secondary sm:text-sm">
              Lindora Kolu Howard-Diawara · Founder &amp; Executive Director
            </p>

            <div className="mt-6 space-y-4 text-[0.94rem] leading-[1.72] text-[#42545c] sm:text-base">
              <p className="font-semibold text-[#123f47]">
                Dear friends, partners, and fellow advocates,
              </p>
              <p>
                Since founding B4P CODEFOUND in 2015, I have believed that lasting peace is built
                with communities, not simply for them. Our work begins with the leadership,
                knowledge, and resilience already present across Liberia.
              </p>
              <p>
                We connect grassroots action with wider advocacy, championing women’s rights and
                helping girls and young people access the mentorship and opportunities to shape
                their futures.
              </p>
              <p>
                Through peacebuilding and community development, we continue to work toward a
                more inclusive, peaceful future in Liberia and beyond.
              </p>
              <p>
                Thank you for being part of this journey. Together, we can build lasting progress
                for generations to come.
              </p>
            </div>

            <div className="mt-6 border-l-[3px] border-accent pl-4">
              <p className="font-serif text-base italic leading-relaxed text-[#123f47] sm:text-lg">
                “Empowered women are the foundation of a productive nation.”
              </p>
              <p className="mt-2 text-xs font-extrabold uppercase tracking-[0.1em] text-primary">
                Lindora Kolu Howard-Diawara
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
