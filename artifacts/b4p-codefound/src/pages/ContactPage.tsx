import { type FormEvent, useState } from 'react';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inquiryOptions = [
  'General information',
  'Programs and partnerships',
  'Volunteer or internship',
  'Donation support',
  'B4P store',
  'Media and speaking',
];

export default function ContactPage() {
  const [hasSubmitted, setHasSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = [
      ['Name', data.get('name')],
      ['Email', data.get('email')],
      ['Inquiry', data.get('inquiry')],
      ['Message', data.get('message')],
    ].filter(([, value]) => String(value ?? '').trim());
    const body = values.map(([label, value]) => `${label}: ${value}`).join('\n\n');
    setHasSubmitted(true);
    window.location.href = `mailto:management@b4pcodefound.org?subject=${encodeURIComponent('B4P CODEFOUND inquiry')}&body=${encodeURIComponent(body)}`;
  }

  return (
    <div className="contact-page flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="contact-hero">
          <div className="page-container contact-hero__layout">
            <div className="contact-hero__copy">
              <span className="page-kicker">Contact B4P CODEFOUND</span>
              <h1>Bring your next conversation to the work.</h1>
              <p>
                Whether you are exploring a partnership, supporting the mission, or looking for a way to get involved, start with a conversation.
              </p>
            </div>
            <aside className="contact-hero__aside" aria-label="B4P CODEFOUND contact invitation">
              <span>We’re listening</span>
              <strong>Local insight. Global connection. Shared action.</strong>
              <a href="mailto:management@b4pcodefound.org">
                Email the team <ArrowRight size={17} aria-hidden="true" />
              </a>
            </aside>
          </div>
        </section>

        <section className="contact-section">
          <div className="page-container contact-layout">
            <div className="contact-details">
              <span className="section-heading__eyebrow">Start a conversation</span>
              <h2>Find the right way in.</h2>
              <p>
                Choose the channel that fits your question, or use the form to share what you have in mind with the B4P CODEFOUND team.
              </p>

              <div className="contact-detail-list">
                <a href="mailto:management@b4pcodefound.org" data-testid="link-contact-management">
                  <Mail size={19} aria-hidden="true" />
                  <span><strong>General enquiries</strong>management@b4pcodefound.org</span>
                </a>
                <a href="mailto:support@b4pcodefound.org" data-testid="link-contact-support">
                  <Mail size={19} aria-hidden="true" />
                  <span><strong>Support</strong>support@b4pcodefound.org</span>
                </a>
                <div>
                  <MapPin size={19} aria-hidden="true" />
                  <span><strong>United States</strong>1108 Chaser Street<br />Blacklick, Ohio 43004</span>
                </div>
                <div>
                  <MapPin size={19} aria-hidden="true" />
                  <span><strong>Liberia</strong>Far East Community<br />Gbarnga, Bong County</span>
                </div>
                <a href="tel:+13802061631" data-testid="link-contact-phone">
                  <Phone size={19} aria-hidden="true" />
                  <span><strong>Call us</strong>Ohio: +1 380-206-1631</span>
                </a>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit} data-testid="form-contact">
              <div className="contact-form__heading">
                <div>
                  <span className="section-heading__eyebrow">Write to us</span>
                  <h2>Tell us what you’re building.</h2>
                </div>
                <span className="contact-form__step">01 / 01</span>
              </div>
              <div className="contact-form__grid">
                <label>
                  Full name
                  <input name="name" required autoComplete="name" data-testid="input-contact-name" />
                </label>
                <label>
                  Email address
                  <input name="email" type="email" required autoComplete="email" data-testid="input-contact-email" />
                </label>
              </div>
              <label>
                What would you like to discuss?
                <select name="inquiry" required defaultValue="" data-testid="select-contact-inquiry">
                  <option value="" disabled>Select an option</option>
                  {inquiryOptions.map((option) => <option key={option}>{option}</option>)}
                </select>
              </label>
              <label>
                Your message
                <textarea name="message" required rows={7} placeholder="Tell us a little about what you have in mind." data-testid="textarea-contact-message" />
              </label>
              {hasSubmitted && (
                <p className="contact-form__status" role="status">
                  Your email draft is ready. If it did not open, email management@b4pcodefound.org directly.
                </p>
              )}
              <button type="submit" data-testid="button-contact-submit">
                Prepare email <ArrowRight size={18} aria-hidden="true" />
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}