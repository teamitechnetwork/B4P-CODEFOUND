import { Mail } from 'lucide-react';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';

type LegalPageKind = 'privacy' | 'cookies' | 'terms';

type LegalSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

type LegalPageContent = {
  title: string;
  description: string;
  introduction: string;
  sections: LegalSection[];
};

const legalPageContent: Record<LegalPageKind, LegalPageContent> = {
  privacy: {
    title: 'Privacy Policy',
    description: 'How B4P CODEFOUND handles information shared through this website.',
    introduction:
      'B4P CODEFOUND respects the people and communities connected to our work. This policy explains what information may be shared with us through this website, how we use it, and the choices available to you.',
    sections: [
      {
        heading: 'Information you choose to share',
        paragraphs: [
          'We may receive information you provide when you contact us, subscribe to updates, make an inquiry, volunteer, apply for an opportunity, or explore partnership and donation options.',
          'This may include your name, email address, phone number, organization, and the details you include in your message. Please only share information that is needed for your request.',
        ],
      },
      {
        heading: 'Information collected through the site',
        paragraphs: [
          'Our hosting, security, and site-support systems may process basic technical information such as browser type, device information, approximate location, pages visited, and access times. This helps us keep the site secure and improve its reliability.',
          'Some site features may use cookies or similar browser storage. See our Cookie Policy for more information and available controls.',
        ],
      },
      {
        heading: 'How we use information',
        paragraphs: [
          'We use information to respond to requests, provide updates you ask for, support programs and partnerships, maintain site security, and understand how to improve our communications and services.',
          'We do not sell personal information. We share information only when needed to provide a requested service, operate the website, meet a legal obligation, or protect the rights and safety of B4P CODEFOUND and others.',
        ],
      },
      {
        heading: 'Your choices and questions',
        paragraphs: [
          'You can ask us to update or remove information you have shared, or unsubscribe from communications at any time. Some records may need to be retained where required for safety, legal, accounting, or operational reasons.',
          'For privacy questions or requests, contact the B4P CODEFOUND management team at management@b4pcodefound.org.',
        ],
      },
    ],
  },
  cookies: {
    title: 'Cookie Policy',
    description: 'How cookies and similar browser technologies may be used on this website.',
    introduction:
      'This Cookie Policy explains the small files and browser storage technologies that may be used to make the B4P CODEFOUND website work well, protect it from misuse, and understand how visitors use it.',
    sections: [
      {
        heading: 'What cookies are',
        paragraphs: [
          'Cookies are small text files placed on your device by a website. Similar technologies can store limited information in your browser. They can help a site remember a preference, maintain a secure session, or recognize general usage patterns.',
        ],
      },
      {
        heading: 'How we use them',
        paragraphs: [
          'Strictly necessary cookies or browser storage may be used for core site functions, security, accessibility, and remembering an interaction while you browse.',
          'Where optional measurement or embedded services are enabled, those services may set their own cookies under their separate privacy policies. We aim to limit optional technologies to what supports the site and its mission.',
        ],
      },
      {
        heading: 'Managing cookies',
        paragraphs: [
          'Most browsers let you review, block, or delete cookies through their privacy settings. Blocking necessary cookies may affect some site features, forms, or navigation.',
          'Because browser controls vary, review the help documentation for your browser or device for the most accurate instructions.',
        ],
      },
      {
        heading: 'Changes and questions',
        paragraphs: [
          'We may update this policy when the website or its supporting services change. If you have a question about cookies or browser storage used on this site, contact management@b4pcodefound.org.',
        ],
      },
    ],
  },
  terms: {
    title: 'Terms & Conditions',
    description: 'The terms that apply when you use the B4P CODEFOUND website.',
    introduction:
      'These terms help keep the B4P CODEFOUND website useful, respectful, and safe. By using this website, you agree to use it lawfully and in a way that does not interfere with other visitors or our services.',
    sections: [
      {
        heading: 'Using this website',
        paragraphs: [
          'You may browse, read, and share links to public content for lawful, non-harmful purposes. Do not attempt to disrupt the site, bypass security, introduce malicious code, or access information that is not intended for you.',
          'You are responsible for ensuring that information you submit is accurate, appropriate, and yours to share.',
        ],
      },
      {
        heading: 'Our content',
        paragraphs: [
          'The text, images, branding, and other materials on this website belong to B4P CODEFOUND or are used with permission. You may not reproduce, alter, or commercially exploit them without written permission, except where applicable law allows.',
          'We work to keep information current, but program details, availability, and links may change. Website content is provided for general information and does not create a service contract unless we agree otherwise in writing.',
        ],
      },
      {
        heading: 'External services and links',
        paragraphs: [
          'The site may link to partner organizations, payment providers, social networks, or other external websites. Those services have their own terms and privacy practices, and B4P CODEFOUND is not responsible for content or activity outside our site.',
        ],
      },
      {
        heading: 'Updates and contact',
        paragraphs: [
          'We may update these terms as our website and services evolve. Continued use of the site after an update means you accept the revised terms. Questions about these terms can be sent to management@b4pcodefound.org.',
        ],
      },
    ],
  },
};

export default function LegalPage({ kind }: { kind: LegalPageKind }) {
  const content = legalPageContent[kind];

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans">
      <Header />
      <main className="legacy-page flex-1">
        <section className="polished-page__hero legal-page__hero">
          <img
            className="polished-page__hero-image"
            src="/images/conference/day-1-audience-stage.jpg"
            alt=""
          />
          <div className="polished-page__hero-overlay" />
          <div className="page-container polished-page__hero-inner">
            <span className="page-kicker">Policies &amp; accountability</span>
            <h1>{content.title}</h1>
            <p>{content.description}</p>
          </div>
        </section>

        <section className="legacy-page__content legal-page__content">
          <div className="page-container">
            <article className="legacy-article legal-article">
              <p className="legal-page__updated">Last updated: August 30, 2026</p>
              <p className="legal-page__introduction">{content.introduction}</p>
              {content.sections.map((section) => (
                <section key={section.heading} className="legal-article__section">
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.bullets && (
                    <ul>
                      {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                    </ul>
                  )}
                </section>
              ))}
              <section className="legal-article__contact">
                <h2>Contact B4P CODEFOUND</h2>
                <p>
                  If you have a question about this page or how it applies to you, we are happy to help.
                </p>
                <a className="primary-link" href="mailto:management@b4pcodefound.org">
                  <Mail size={18} aria-hidden="true" />
                  Email the management team
                </a>
              </section>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}