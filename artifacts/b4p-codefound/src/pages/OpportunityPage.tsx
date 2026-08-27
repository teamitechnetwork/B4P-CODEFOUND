import { type FormEvent, useState } from 'react';
import { ArrowRight, BriefcaseBusiness, CheckCircle2, GraduationCap, HandHeart, Mail } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

type OpportunityKind = 'volunteer' | 'internship' | 'jobs';

const opportunities: Record<OpportunityKind, {
  eyebrow: string;
  title: string;
  description: string;
  icon: typeof HandHeart;
  focusLabel: string;
  focusOptions: string[];
  note: string;
}> = {
  volunteer: {
    eyebrow: 'Work With Us',
    title: 'Volunteer with B4P CODEFOUND',
    description: 'Bring your time, skills, and care to a community that is building peace and opportunity together.',
    icon: HandHeart,
    focusLabel: 'How would you like to volunteer?',
    focusOptions: ['Community outreach', 'Events and logistics', 'Communications and storytelling', 'Fundraising and partnerships', 'Professional skills volunteering', 'Something else'],
    note: 'Tell us about the skills or experience you would like to share.',
  },
  internship: {
    eyebrow: 'Work With Us',
    title: 'Learn through an internship',
    description: 'Build practical experience while contributing to African-led peacebuilding and community development.',
    icon: GraduationCap,
    focusLabel: 'Internship area of interest',
    focusOptions: ['Program support', 'Research and policy', 'Communications', 'Community engagement', 'Operations', 'Other'],
    note: 'Include your course of study, preferred dates, and any placement requirements.',
  },
  jobs: {
    eyebrow: 'Work With Us',
    title: 'Explore jobs at B4P',
    description: 'Tell us about the kind of mission-led work you are looking for and the experience you bring.',
    icon: BriefcaseBusiness,
    focusLabel: 'Area of interest',
    focusOptions: ['Programs and community development', 'Operations and administration', 'Communications', 'Partnerships and fundraising', 'Leadership', 'Other'],
    note: 'Share the kind of role you are seeking, your experience, and a link to your résumé or portfolio if available.',
  },
};

export default function OpportunityPage({ kind }: { kind: OpportunityKind }) {
  const content = opportunities[kind];
  const Icon = content.icon;
  const [hasSubmitted, setHasSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = [
      ['Name', data.get('name')],
      ['Email', data.get('email')],
      ['Phone', data.get('phone')],
      ['Location', data.get('location')],
      [content.focusLabel, data.get('focus')],
      ['Availability', data.get('availability')],
      ['Message', data.get('message')],
    ].filter(([, value]) => String(value ?? '').trim());
    const body = values.map(([label, value]) => `${label}: ${value}`).join('\n\n');
    const subject = `${content.title} inquiry`;

    setHasSubmitted(true);
    window.location.href = `mailto:b4pcodefound@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 font-sans">
      <Header />
      <main className="flex-1 pt-[104px]">
        <section className="bg-[#062e37] px-4 py-16 text-white md:px-6 md:py-24">
          <div className="container mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.38fr] lg:items-end">
            <div>
              <span className="mb-5 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#83d6f5]">
                <span className="h-px w-8 bg-[#83d6f5]" />
                {content.eyebrow}
              </span>
              <h1 className="max-w-3xl text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] md:text-6xl">{content.title}</h1>
              <p className="mt-7 max-w-2xl text-lg font-medium leading-relaxed text-white/80 md:text-xl">{content.description}</p>
            </div>
            <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/20 bg-white/10 text-[#83d6f5] shadow-2xl">
              <Icon size={42} strokeWidth={1.6} aria-hidden="true" />
            </div>
          </div>
        </section>

        <section className="px-4 py-16 md:px-6 md:py-24">
          <div className="container mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.72fr_1.28fr]">
            <aside className="lg:pt-8">
              <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-primary">Start here</span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.045em] text-[#123f47]">A simple first conversation.</h2>
              <p className="mt-5 max-w-md text-base font-medium leading-relaxed text-slate-600">
                Complete the form and your usual email app will open with your answers addressed to our team. We will follow up from there.
              </p>
              <a className="mt-8 inline-flex items-center gap-2 font-bold text-primary hover:text-[#123f47]" href="mailto:b4pcodefound@gmail.com">
                <Mail size={18} aria-hidden="true" />
                b4pcodefound@gmail.com
              </a>
            </aside>

            <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 md:p-10">
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-bold text-[#123f47]">
                  Full name
                  <input name="name" required autoComplete="name" className="h-12 rounded-lg border border-slate-200 px-4 font-medium text-slate-800 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10" />
                </label>
                <label className="grid gap-2 text-sm font-bold text-[#123f47]">
                  Email address
                  <input name="email" type="email" required autoComplete="email" className="h-12 rounded-lg border border-slate-200 px-4 font-medium text-slate-800 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10" />
                </label>
                <label className="grid gap-2 text-sm font-bold text-[#123f47]">
                  Phone number <span className="font-medium text-slate-400">(optional)</span>
                  <input name="phone" type="tel" autoComplete="tel" className="h-12 rounded-lg border border-slate-200 px-4 font-medium text-slate-800 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10" />
                </label>
                <label className="grid gap-2 text-sm font-bold text-[#123f47]">
                  City and country
                  <input name="location" required autoComplete="address-level2" className="h-12 rounded-lg border border-slate-200 px-4 font-medium text-slate-800 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10" />
                </label>
              </div>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-bold text-[#123f47]">
                  {content.focusLabel}
                  <select name="focus" required defaultValue="" className="h-12 rounded-lg border border-slate-200 bg-white px-4 font-medium text-slate-800 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10">
                    <option value="" disabled>Select an option</option>
                    {content.focusOptions.map((option) => <option key={option}>{option}</option>)}
                  </select>
                </label>
                <label className="grid gap-2 text-sm font-bold text-[#123f47]">
                  Availability
                  <input name="availability" required placeholder="For example, weekday evenings" className="h-12 rounded-lg border border-slate-200 px-4 font-medium text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-4 focus:ring-primary/10" />
                </label>
              </div>

              <label className="mt-6 grid gap-2 text-sm font-bold text-[#123f47]">
                Tell us more
                <textarea name="message" required rows={6} placeholder={content.note} className="resize-y rounded-lg border border-slate-200 px-4 py-3 font-medium leading-relaxed text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-4 focus:ring-primary/10" />
              </label>

              {hasSubmitted && (
                <p className="mt-6 flex items-start gap-2 rounded-lg bg-primary/10 px-4 py-3 text-sm font-semibold leading-relaxed text-[#123f47]" role="status">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-primary" size={18} aria-hidden="true" />
                  Your email draft is ready. If it did not open automatically, please email b4pcodefound@gmail.com directly.
                </p>
              )}

              <button type="submit" className="mt-8 inline-flex min-h-12 items-center gap-3 bg-[#df5311] px-6 py-3 text-sm font-extrabold uppercase tracking-[0.1em] text-white transition hover:bg-[#b6410d] focus:outline-none focus:ring-4 focus:ring-[#df5311]/30">
                Prepare email to B4P
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}