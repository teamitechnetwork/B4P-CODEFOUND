import { type FormEvent, useState } from 'react';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Handshake,
  Lightbulb,
  Mail,
  RefreshCcw,
  UsersRound,
} from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const partnershipTypes = [
  'Program co-design',
  'Funding or sponsorship',
  'In-kind support',
  'Research or knowledge exchange',
  'Events and convenings',
  'Media or advocacy',
  'Something else',
];

const supportTypes = [
  'Financial support',
  'In-kind goods or services',
  'Technical expertise',
  'Space, logistics, or equipment',
  'Networks and introductions',
  'I am still exploring',
];

const timelineOptions = [
  'Exploring a future collaboration',
  'In the next 1–3 months',
  'In the next 3–6 months',
  'Ready to begin a conversation now',
];

export default function PartnershipPage() {
  const [status, setStatus] = useState<'idle' | 'ready' | 'error'>('idle');
  const [selectedPartnership, setSelectedPartnership] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('error');

    const data = new FormData(event.currentTarget);
    const requiredFields = ['name', 'email', 'organization', 'partnership', 'location', 'timeline', 'message', 'consent'];
    const hasMissingField = requiredFields.some((field) => {
      const value = data.get(field);
      return field === 'consent' ? value !== 'on' : !String(value ?? '').trim();
    });

    if (hasMissingField) return;

    const values = [
      ['Name', data.get('name')],
      ['Email', data.get('email')],
      ['Phone', data.get('phone')],
      ['Organization', data.get('organization')],
      ['Role or title', data.get('role')],
      ['Partnership interest', data.get('partnership')],
      ['Location', data.get('location')],
      ['Preferred timeline', data.get('timeline')],
      ['Support context', data.get('support')],
      ['Estimated budget or resources', data.get('budget')],
      ['Message', data.get('message')],
    ].filter(([, value]) => String(value ?? '').trim());

    const body = [
      'Thank you for reaching out to B4P CODEFOUND about a partnership.',
      '',
      ...values.map(([label, value]) => `${label}: ${value}`),
    ].join('\n\n');

    setStatus('ready');
    window.location.href = `mailto:management@b4pcodefound.org?subject=${encodeURIComponent(`Partnership inquiry: ${selectedPartnership || 'B4P CODEFOUND'}`)}&body=${encodeURIComponent(body)}`;
  }

  function resetForm() {
    setStatus('idle');
    setSelectedPartnership('');
  }

  return (
    <div className="partnership-page flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="partnership-hero">
          <div className="page-container partnership-hero__inner">
            <div className="partnership-hero__copy">
              <span className="page-kicker">Partner with B4P CODEFOUND</span>
              <h1>Build the kind of change that <em>travels.</em></h1>
              <p>
                Bring your institution, network, resources, or ideas to African-led
                work that connects peacebuilding, economic opportunity, and community power.
              </p>
              <a className="partnership-hero__link" href="#partnership-form">
                Start a partnership conversation <ArrowRight size={17} aria-hidden="true" />
              </a>
            </div>
            <div className="partnership-hero__visual">
              <img
                src="/images/conference/day-1-group-02.jpg"
                alt="B4P CODEFOUND participants gathered together during a community event"
              />
              <div className="partnership-hero__visual-caption">
                <Handshake size={20} aria-hidden="true" />
                <span>Local roots. Shared responsibility. Wider reach.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="partnership-intro">
          <div className="page-container">
            <div className="partnership-intro__heading">
              <span className="section-heading__eyebrow">Why partner with us</span>
              <h2>Good partnerships make room for <em>every voice.</em></h2>
              <p>
                B4P CODEFOUND works with organizations and people who believe sustainable
                progress is built with communities, not around them.
              </p>
            </div>
            <div className="partnership-principles">
              <article>
                <span><UsersRound size={23} aria-hidden="true" /></span>
                <h3>Community-led</h3>
                <p>Center local knowledge and leadership in the decisions that shape the work.</p>
              </article>
              <article>
                <span><Lightbulb size={23} aria-hidden="true" /></span>
                <h3>Practical and creative</h3>
                <p>Turn shared ideas into thoughtful programs, convenings, and useful tools.</p>
              </article>
              <article>
                <span><Building2 size={23} aria-hidden="true" /></span>
                <h3>Built to last</h3>
                <p>Grow trust, capacity, and connections that can keep creating value over time.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="partnership-form" className="partnership-section">
          <div className="page-container partnership-layout">
            <aside className="partnership-aside">
              <span className="section-heading__eyebrow">Let’s explore what’s possible</span>
              <h2>Bring the first idea.</h2>
              <p>
                Whether you are a funder, business, nonprofit, community network, or
                individual with a useful connection, we would like to understand what
                you are trying to make possible.
              </p>
              <a href="mailto:management@b4pcodefound.org">
                <Mail size={17} aria-hidden="true" />
                management@b4pcodefound.org
              </a>
              <div className="partnership-aside__note">
                <strong>What happens next</strong>
                <span>Your email app will open a draft so you can review the details before sending.</span>
              </div>
            </aside>

            <form className="partnership-form" onSubmit={handleSubmit}>
              <div className="partnership-form__header">
                <span className="section-heading__eyebrow">Partnership inquiry</span>
                <h2>Tell us where you see a shared opportunity.</h2>
                <p>Required fields are marked with an asterisk. You stay in control of the message before it reaches our team.</p>
              </div>

              <div className="partnership-form__grid">
                <label>
                  Full name <span aria-hidden="true">*</span>
                  <input name="name" required autoComplete="name" />
                </label>
                <label>
                  Email address <span aria-hidden="true">*</span>
                  <input name="email" type="email" required autoComplete="email" />
                </label>
                <label>
                  Organization <span aria-hidden="true">*</span>
                  <input name="organization" required autoComplete="organization" />
                </label>
                <label>
                  Role or title <small>(optional)</small>
                  <input name="role" autoComplete="organization-title" />
                </label>
                <label>
                  Phone number <small>(optional)</small>
                  <input name="phone" type="tel" autoComplete="tel" />
                </label>
                <label>
                  City and country <span aria-hidden="true">*</span>
                  <input name="location" required autoComplete="address-level2" />
                </label>
              </div>

              <div className="partnership-form__grid partnership-form__grid--triple">
                <label>
                  Partnership interest <span aria-hidden="true">*</span>
                  <select
                    name="partnership"
                    required
                    value={selectedPartnership}
                    onChange={(event) => {
                      setSelectedPartnership(event.target.value);
                      setStatus('idle');
                    }}
                  >
                    <option value="" disabled>Select an option</option>
                    {partnershipTypes.map((option) => <option key={option}>{option}</option>)}
                  </select>
                </label>
                <label>
                  Preferred timeline <span aria-hidden="true">*</span>
                  <select name="timeline" required defaultValue="">
                    <option value="" disabled>Select an option</option>
                    {timelineOptions.map((option) => <option key={option}>{option}</option>)}
                  </select>
                </label>
                <label>
                  Support context <small>(optional)</small>
                  <select name="support" defaultValue="">
                    <option value="">Select an option</option>
                    {supportTypes.map((option) => <option key={option}>{option}</option>)}
                  </select>
                </label>
              </div>

              <label>
                Estimated budget or resources <small>(optional)</small>
                <input name="budget" placeholder="For example, funding range, staff time, or in-kind support" />
              </label>

              <label>
                Tell us more <span aria-hidden="true">*</span>
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="What would you like to explore together?"
                />
              </label>

              <label className="partnership-form__consent">
                <input type="checkbox" name="consent" required />
                <span>I agree that B4P CODEFOUND may use these details to respond to my partnership inquiry. <span aria-hidden="true">*</span></span>
              </label>

              {status === 'error' && (
                <p className="partnership-form__status partnership-form__status--error" role="alert">
                  Please complete each required field before opening the email draft.
                </p>
              )}
              {status === 'ready' && (
                <div className="partnership-form__status" role="status">
                  <CheckCircle2 size={19} aria-hidden="true" />
                  <span>Your email draft is ready. Review it, then press send in your email app.</span>
                  <button type="button" onClick={resetForm}>
                    <RefreshCcw size={15} aria-hidden="true" /> Start over
                  </button>
                </div>
              )}

              <button className="partnership-form__submit" type="submit">
                Open partnership email draft
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