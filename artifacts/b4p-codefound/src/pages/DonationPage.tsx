import { ArrowUpRight, Building2, Landmark, Mail, ShieldCheck } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function DonationPage() {
  return (
    <div className="donation-page flex min-h-screen flex-col bg-[#f7fafb]">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative flex min-h-[50vh] items-end overflow-hidden bg-[#062e37] pt-[104px]">
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/conference/day-1-community-gathering.jpg" 
              alt="Community members gathered during a B4P CODEFOUND program"
              className="h-full w-full object-cover opacity-40 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#031d24]/95 via-[#031d24]/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#031d24] via-transparent to-transparent opacity-80" />
          </div>
          
          <div className="container relative z-10 mx-auto px-4 py-20 md:py-28 lg:py-32">
            <div className="max-w-3xl">
              <div className="mb-6 flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.18em] text-white/80">
                <span className="h-[2px] w-10 bg-[#1b9ed9]" />
                Support the Mission
              </div>
              <h1 className="mb-6 text-4xl font-extrabold leading-[0.96] tracking-tight text-white md:text-6xl lg:text-[5.5rem]" data-testid="text-donation-title">
                Invest in African-led <br/>
                <em className="font-serif italic text-[#df5311]">change.</em>
              </h1>
              <p className="max-w-xl text-lg font-medium leading-relaxed text-white/80 md:text-xl">
                When you partner with B4P CODEFOUND, you're investing in local leaders, resilient communities, and the future of peacebuilding in Liberia and beyond.
              </p>
            </div>
          </div>
        </section>

        {/* Content Layout */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-24">
            
            {/* Left Column: Narrative */}
            <div className="lg:col-span-7 xl:col-span-6">
              <div className="prose prose-lg prose-slate max-w-none text-[#3d5c63]">
                <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-[#062e37] md:text-[2.5rem] md:leading-[1.1]">
                  A different kind of impact.
                </h2>
                <p className="text-lg leading-relaxed">
                  We believe that the most effective solutions come from within the communities we serve. 
                  Our work is grounded in the conviction that local leaders—especially women and youth—are 
                  the most powerful drivers of lasting peace and economic development.
                </p>
                <p className="text-lg leading-relaxed">
                  Your contribution directly supports our core programs: creating safe spaces for dialogue, 
                  facilitating mentorship and skills training, and equipping the next generation with the 
                  tools they need to lead.
                </p>
                
                <div className="my-12 rounded-[1.25rem] border border-[#062e37]/10 bg-white p-8 shadow-[0_1.5rem_4rem_rgba(6,46,55,0.05)] md:p-10">
                  <h3 className="mb-5 flex items-center gap-3 text-xl font-bold tracking-tight text-[#062e37]">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#118f9b]/10 text-[#118f9b]">
                      <ShieldCheck size={20} strokeWidth={2.5} />
                    </div>
                    Commitment to Transparency
                  </h3>
                  <p className="mb-6 text-[1.05rem] leading-relaxed text-[#3d5c63]">
                    B4P CODEFOUND is a registered 501(c)(3) nonprofit organization in the United States
                    and a recognized NGO in Liberia. We are committed to responsible stewardship and
                    transparent communication with our partners and the communities we serve.
                  </p>
                  <div className="rounded-xl bg-[#f7fafb] p-5 text-[0.95rem] font-bold text-[#062e37]">
                    EIN: 81-3170921. Contributions are tax-deductible to the extent allowed by law.
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Ways to Give */}
            <div className="lg:col-span-5 xl:col-span-5 xl:col-start-8">
              <div className="sticky top-28 rounded-[1.5rem] border border-[#062e37]/10 bg-white p-8 shadow-[0_2rem_5rem_rgba(6,46,55,0.08)] md:p-10">
                <h2 className="mb-3 text-2xl font-extrabold tracking-tight text-[#062e37]">Ways to Give</h2>
                <p className="mb-8 text-[0.95rem] font-medium leading-relaxed text-[#3d5c63]">
                  Secure online giving is being prepared. In the meantime, use one of the verified methods below or contact our team for help.
                </p>

                <div className="space-y-5">
                  {/* Direct Deposit */}
                  <div className="group relative overflow-hidden rounded-[1.15rem] border border-[#118f9b]/20 bg-[#f4fbfc] p-6 transition-all hover:border-[#118f9b]/40 hover:bg-[#edf7f9]">
                    <div className="mb-4 flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#118f9b]/15 text-[#118f9b]">
                        <Landmark size={22} strokeWidth={2.5} />
                      </div>
                      <div>
                        <h3 className="text-[1.1rem] font-extrabold text-[#062e37]">Bank Transfer / ACH</h3>
                        <span className="text-[0.75rem] font-bold uppercase tracking-wider text-[#118f9b]">Preferred method</span>
                      </div>
                    </div>
                    <p className="mb-6 text-[0.9rem] leading-relaxed text-[#3d5c63]">
                      Secure, direct, and zero processing fees. Please contact our finance team to receive our secure routing and account details for domestic or international wire transfers.
                    </p>
                    <a 
                      href="mailto:management@b4pcodefound.org?subject=Inquiry:%20Bank%20Transfer%20Donation" 
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#062e37] px-6 py-4 text-[0.95rem] font-bold tracking-wide text-white transition-colors hover:bg-[#118f9b]"
                      data-testid="link-donation-bank-details"
                    >
                      Request Transfer Details
                    </a>
                  </div>

                  {/* Mail a Check */}
                  <div className="rounded-[1.15rem] border border-[#e1eaed] p-6">
                    <div className="mb-4 flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f0f4f5] text-[#42636a]">
                        <Mail size={22} strokeWidth={2.5} />
                      </div>
                      <h3 className="text-[1.1rem] font-extrabold text-[#062e37]">Check by Mail</h3>
                    </div>
                    <p className="mb-5 text-[0.9rem] leading-relaxed text-[#3d5c63]">
                      Please make checks payable to <strong className="text-[#062e37]">B4P CODEFOUND</strong> and mail to our US headquarters:
                    </p>
                    <div className="rounded-xl bg-[#f7fafb] p-5 text-[0.95rem] font-bold leading-relaxed text-[#062e37]">
                      B4P CODEFOUND<br />
                      1108 Chaser Street<br />
                      Blacklick, Ohio 43004<br />
                      United States
                    </div>
                  </div>

                  {/* Corporate Partnerships */}
                  <div className="rounded-[1.15rem] border border-[#e1eaed] p-6">
                    <div className="mb-4 flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#df5311]/10 text-[#df5311]">
                        <Building2 size={22} strokeWidth={2.5} />
                      </div>
                      <h3 className="text-[1.1rem] font-extrabold text-[#062e37]">Corporate Partnerships</h3>
                    </div>
                    <p className="mb-5 text-[0.9rem] leading-relaxed text-[#3d5c63]">
                      Does your company match charitable contributions? We can help you set up a matching gift or discuss larger sponsorships.
                    </p>
                    <a 
                      href="mailto:management@b4pcodefound.org?subject=Corporate%20Partnership%20Inquiry"
                      className="inline-flex items-center gap-2 text-[0.95rem] font-bold text-[#df5311] transition-colors hover:text-[#bd4007]"
                      data-testid="link-donation-corporate"
                    >
                      Discuss a partnership <ArrowUpRight size={18} aria-hidden="true" />
                    </a>
                  </div>
                </div>

                <div className="mt-6 rounded-xl border border-[#062e37]/10 bg-[#f7fafb] p-5 text-sm leading-relaxed text-[#3d5c63]">
                  Planning an in-kind gift or need a donation receipt? Email{' '}
                  <a
                    href="mailto:management@b4pcodefound.org?subject=Donation%20Support"
                    className="font-bold text-[#016eb4] hover:underline"
                    data-testid="link-donation-support"
                  >
                    management@b4pcodefound.org
                  </a>.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Visuals */}
        <section className="border-t border-[#062e37]/5 bg-white py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="mb-16 md:text-center">
              <span className="mb-4 block text-[0.75rem] font-extrabold uppercase tracking-[0.15em] text-[#118f9b]">Your Impact</span>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#062e37] md:text-5xl">What we can achieve together</h2>
            </div>
            
            <div className="grid gap-6 md:grid-cols-3 md:gap-8">
              {[
                {
                  title: 'Women’s Leadership',
                  desc: 'Funding safe spaces, mentorship programs, and practical learning that help women build confidence and take on leadership roles.',
                  img: '/images/stories/day-two-0017.jpg'
                },
                {
                  title: 'Youth Opportunity',
                  desc: 'Supporting civic participation, entrepreneurship training, and skills development for the next generation of leaders.',
                  img: '/images/conference/day-1-community-gathering.jpg'
                },
                {
                  title: 'Community Action',
                  desc: 'Empowering local dialogue and collective action around equality, education, health, and community responsibility.',
                  img: '/images/stories/day-two-0017.jpg'
                }
              ].map((item, i) => (
                <div key={item.title} className="group relative overflow-hidden rounded-[1.25rem] bg-[#062e37]" data-testid={`card-donation-impact-${i + 1}`}>
                  <div className="aspect-[4/3] w-full md:aspect-[3/4]">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="h-full w-full object-cover opacity-60 mix-blend-overlay transition-transform duration-1000 group-hover:scale-105 group-hover:opacity-80"
                    />
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#031d24] via-[#031d24]/40 to-transparent p-8">
                    <h3 className="mb-3 text-xl font-extrabold text-white">{item.title}</h3>
                    <p className="text-[0.95rem] font-medium leading-relaxed text-white/80">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
