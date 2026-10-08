import { ArrowRight, Mail } from 'lucide-react';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';

type InformationPageKind = 'news' | 'privacy' | 'cookies' | 'terms';

const pageContent: Record<InformationPageKind, {
  eyebrow: string;
  title: string;
  description: string;
  heading: string;
  body: string;
  linkHref: string;
  linkLabel: string;
}> = {
  news: {
    eyebrow: 'News & stories',
    title: 'Updates from the field',
    description: 'Follow stories, learning, and community moments from B4P CODEFOUND’s work.',
    heading: 'Explore the latest field stories',
    body: 'Visit the stories section to learn how communities, partners, women, and young people are advancing peacebuilding and economic development.',
    linkHref: '/#field-stories',
    linkLabel: 'View stories from the field',
  },
  privacy: {
    eyebrow: 'Policies & accountability',
    title: 'Privacy Policy',
    description: 'Information and contact guidance for privacy questions related to B4P CODEFOUND.',
    heading: 'Questions about privacy?',
    body: 'For questions about privacy or how information shared with B4P CODEFOUND is handled, contact the management team directly.',
    linkHref: 'mailto:management@b4pcodefound.org?subject=B4P%20CODEFOUND%20privacy%20question',
    linkLabel: 'Email the management team',
  },
  cookies: {
    eyebrow: 'Policies & accountability',
    title: 'Cookie Policy',
    description: 'Information and contact guidance for cookie-related questions about this website.',
    heading: 'Questions about cookies?',
    body: 'For questions about cookies or browser storage used by this website, contact the management team directly.',
    linkHref: 'mailto:management@b4pcodefound.org?subject=B4P%20CODEFOUND%20cookie%20question',
    linkLabel: 'Email the management team',
  },
  terms: {
    eyebrow: 'Policies & accountability',
    title: 'Terms & Conditions',
    description: 'Information and contact guidance for questions about using the B4P CODEFOUND website.',
    heading: 'Questions about website terms?',
    body: 'For questions about the terms that apply to use of this website, contact the management team directly.',
    linkHref: 'mailto:management@b4pcodefound.org?subject=B4P%20CODEFOUND%20terms%20question',
    linkLabel: 'Email the management team',
  },
};

export default function InformationPage({ kind }: { kind: InformationPageKind }) {
  const content = pageContent[kind];
  const isEmailLink = content.linkHref.startsWith('mailto:');

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans">
      <Header />
      <main className="legacy-page flex-1">
        <section className="polished-page__hero">
          <img
            className="polished-page__hero-image"
            src="/images/conference/day-1-audience-stage.jpg"
            alt=""
          />
          <div className="polished-page__hero-overlay" />
          <div className="page-container polished-page__hero-inner">
            <span className="page-kicker">{content.eyebrow}</span>
            <h1>{content.title}</h1>
            <p>{content.description}</p>
          </div>
        </section>

        <section className="legacy-page__content">
          <div className="page-container">
            <article className="legacy-article">
              <span className="section-heading__eyebrow">B4P CODEFOUND</span>
              <h2>{content.heading}</h2>
              <p>{content.body}</p>
              <a className="primary-link" href={content.linkHref}>
                {isEmailLink && <Mail size={18} aria-hidden="true" />}
                {content.linkLabel}
                {!isEmailLink && <ArrowRight size={18} aria-hidden="true" />}
              </a>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}