import { type ChangeEvent, type FormEvent, useState } from 'react';
import { ArrowRight, BriefcaseBusiness, CheckCircle2, GraduationCap, HandHeart, Mail } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

type OpportunityKind = 'volunteer' | 'internship' | 'jobs';

const ACCEPTED_CV_EXTENSIONS = ['.pdf', '.doc', '.docx'];
const ACCEPTED_CV_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];
const MAX_CV_SIZE_BYTES = 5 * 1024 * 1024;

const opportunities: Record<OpportunityKind, {
  eyebrow: string;
  title: string;
  description: string;
  icon: typeof HandHeart;
  focusLabel: string;
  focusOptions: string[];
  note: string;
  image: string;
}> = {
  volunteer: {
    eyebrow: 'Work With Us',
    title: 'Volunteer with B4P CODEFOUND',
    description: 'Bring your time, skills, and care to a community that is building peace and opportunity together.',
    icon: HandHeart,
    focusLabel: 'How would you like to volunteer?',
    focusOptions: ['Community outreach', 'Events and logistics', 'Communications and storytelling', 'Fundraising and partnerships', 'Professional skills volunteering', 'Something else'],
    note: 'Tell us about the skills or experience you would like to share.',
    image: '/images/conference/day-1-group-02.jpg',
  },
  internship: {
    eyebrow: 'Work With Us',
    title: 'Learn through an internship',
    description: 'Build practical experience while contributing to African-led peacebuilding and community development.',
    icon: GraduationCap,
    focusLabel: 'Internship area of interest',
    focusOptions: ['Program support', 'Research and policy', 'Communications', 'Community engagement', 'Operations', 'Other'],
    note: 'Include your course of study, preferred dates, and any placement requirements.',
    image: '/images/conference/day-3-community-01.jpg',
  },
  jobs: {
    eyebrow: 'Work With Us',
    title: 'Explore jobs at B4P',
    description: 'Tell us about the kind of mission-led work you are looking for and the experience you bring.',
    icon: BriefcaseBusiness,
    focusLabel: 'Area of interest',
    focusOptions: ['Programs and community development', 'Operations and administration', 'Communications', 'Partnerships and fundraising', 'Leadership', 'Other'],
    note: 'Share the kind of role you are seeking, your experience, and a link to your résumé or portfolio if available.',
    image: '/images/conference/day-1-community-gathering.jpg',
  },
};

function formatFileSize(bytes: number) {
  if (bytes < 1024 * 1024) {
    return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  }
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function isAcceptedCv(file: File) {
  const extension = file.name.slice(file.name.lastIndexOf('.')).toLowerCase();
  return ACCEPTED_CV_EXTENSIONS.includes(extension) && (!file.type || ACCEPTED_CV_TYPES.includes(file.type));
}

function formatSelectedFile(file: File) {
  return `${file.name} · ${formatFileSize(file.size)}`;
}

export default function OpportunityPage({ kind }: { kind: OpportunityKind }) {
  const content = opportunities[kind];
  const Icon = content.icon;
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState('');

  function handleCvChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0] ?? null;
    setHasSubmitted(false);
    setFileError('');

    if (!file) {
      setCvFile(null);
      return;
    }

    if (!isAcceptedCv(file)) {
      setCvFile(null);
      setFileError('Please choose a PDF, DOC, or DOCX file.');
      event.target.value = '';
      return;
    }

    if (file.size > MAX_CV_SIZE_BYTES) {
      setCvFile(null);
      setFileError('Your CV must be 5 MB or smaller.');
      event.target.value = '';
      return;
    }

    setCvFile(file);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (fileError) return;

    const data = new FormData(event.currentTarget);
    const values = [
      ['Name', data.get('name')],
      ['Email', data.get('email')],
      ['Phone', data.get('phone')],
      ['Location', data.get('location')],
      [content.focusLabel, data.get('focus')],
      ['Availability', data.get('availability')],
      ['Message', data.get('message')],
      ['CV', cvFile ? `${cvFile.name} (${formatFileSize(cvFile.size)}) — attach this file before sending` : 'No CV selected'],
    ].filter(([, value]) => String(value ?? '').trim());
    const body = [
      cvFile
        ? `Please attach the selected CV file (${cvFile.name}) to this email before sending.`
        : 'No CV was selected. Please attach one before sending if you would like us to review it.',
      '',
      ...values.map(([label, value]) => `${label}: ${value}`),
    ].join('\n\n');
    const subject = `${content.title} inquiry`;

    setHasSubmitted(true);
    window.location.href = `mailto:b4pcodefound@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <div className="opportunity-page flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="opportunity-hero">
          <div className="page-container opportunity-hero__inner">
            <div className="opportunity-hero__copy">
              <span className="page-kicker">{content.eyebrow}</span>
              <h1>{content.title}</h1>
              <p>{content.description}</p>
            </div>
            <div className="opportunity-hero__visual">
              <img src={content.image} alt="" />
              <div><Icon size={30} strokeWidth={1.6} aria-hidden="true" /><span>Make your contribution count.</span></div>
            </div>
          </div>
        </section>

        <section className="opportunity-section">
          <div className="page-container opportunity-layout">
            <aside className="opportunity-aside">
              <span className="section-heading__eyebrow">Start here</span>
              <h2>A simple first conversation.</h2>
              <p>
                Complete the form and we’ll prepare an email draft addressed to our team. Add your CV in the email before sending so we can learn more about you.
              </p>
              <a href="mailto:b4pcodefound@gmail.com">
                <Mail size={18} aria-hidden="true" />
                b4pcodefound@gmail.com
              </a>
              <div className="opportunity-aside__note">
                <strong>What helps us most</strong>
                <span>Tell us what you care about, what you can offer, and how you would like to participate.</span>
              </div>
            </aside>

            <form onSubmit={handleSubmit} className="opportunity-form">
              <div className="opportunity-form__header">
                <span className="section-heading__eyebrow">Your details</span>
                <h2>Tell us how you’d like to contribute.</h2>
                <p className="opportunity-form__intro">Your answers will open in your email app so you can review them before sending.</p>
              </div>
              <div className="opportunity-form__grid">
                <label>
                  Full name
                  <input name="name" required autoComplete="name" />
                </label>
                <label>
                  Email address
                  <input name="email" type="email" required autoComplete="email" />
                </label>
                <label>
                  Phone number <small>(optional)</small>
                  <input name="phone" type="tel" autoComplete="tel" />
                </label>
                <label>
                  City and country
                  <input name="location" required autoComplete="address-level2" />
                </label>
              </div>

              <div className="opportunity-form__grid opportunity-form__grid--second">
                <label>
                  {content.focusLabel}
                  <select name="focus" required defaultValue="">
                    <option value="" disabled>Select an option</option>
                    {content.focusOptions.map((option) => <option key={option}>{option}</option>)}
                  </select>
                </label>
                <label>
                  Availability
                  <input name="availability" required placeholder="For example, weekday evenings" />
                </label>
              </div>

              <label className="opportunity-form__message">
                Tell us more
                <textarea name="message" required rows={6} placeholder={content.note} />
              </label>

              <label className="opportunity-form__file">
                CV or résumé <small>(optional, recommended)</small>
                <input
                  name="cv"
                  type="file"
                  accept={ACCEPTED_CV_EXTENSIONS.join(',')}
                  onChange={handleCvChange}
                  aria-describedby="cv-help cv-error"
                />
                <span id="cv-help" className="opportunity-form__file-help">
                  PDF, DOC, or DOCX · up to 5 MB. Your email app will ask you to attach the selected file before sending.
                </span>
                {cvFile && !fileError && (
                  <span className="opportunity-form__file-selected">
                    <CheckCircle2 size={16} aria-hidden="true" />
                    {formatSelectedFile(cvFile)}
                  </span>
                )}
                {fileError && (
                  <span id="cv-error" className="opportunity-form__file-error" role="alert">
                    {fileError}
                  </span>
                )}
              </label>

              {hasSubmitted && (
                <p className="opportunity-form__status" role="status">
                  <CheckCircle2 size={18} aria-hidden="true" />
                  Your email draft is ready. {cvFile ? `Attach ${cvFile.name} before sending.` : 'Attach your CV before sending if you have one.'}
                </p>
              )}

              <button type="submit" disabled={Boolean(fileError)}>
                Open email draft
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