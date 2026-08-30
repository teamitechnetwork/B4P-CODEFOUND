import { useState, type FormEvent } from 'react';
import { ArrowRight } from 'lucide-react';
import { SocialLinks } from '@/components/layout/SocialLinks';

function FooterLinkGroup({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <section className="site-footer__link-group">
      <h2>{title}</h2>
      <nav aria-label={title}>
        {links.map((link) => (
          <a href={link.href} key={`${link.href}-${link.label}`}>
            {link.label}
          </a>
        ))}
      </nav>
    </section>
  );
}

function FooterNewsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;
    setIsSubmitted(true);
  }

  return (
    <section className="site-footer__newsletter" aria-labelledby="footer-newsletter-title">
      <h2 id="footer-newsletter-title">Get Our Newsletter</h2>
      {isSubmitted ? (
        <p className="site-footer__newsletter-success" role="status">
          Thank you for staying connected with B4P CODEFOUND.
        </p>
      ) : (
        <form className="site-footer__newsletter-form-wrapper" onSubmit={handleSubmit}>
          <div className="site-footer__newsletter-form">
            <label className="sr-only" htmlFor="footer-newsletter-email">Email address</label>
            <input
              id="footer-newsletter-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email Address"
              required
            />
            <button type="submit" aria-label="Subscribe to the B4P CODEFOUND newsletter">
              <ArrowRight size={26} aria-hidden="true" />
            </button>
          </div>
          <label className="site-footer__consent">
            <input type="checkbox" required />
            <span>I agree to B4P CODEFOUND’s <a href="/terms-and-conditions">Terms &amp; Conditions</a>.</span>
          </label>
        </form>
      )}
    </section>
  );
}

function FooterAccountabilityMark() {
  return (
    <div className="site-footer__accountability" aria-label="B4P CODEFOUND accountability">
      <span className="site-footer__accountability-mark">B4P</span>
      <span>
        <strong>Accountable</strong>
        <small>with care</small>
      </span>
    </div>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="site-footer reference-footer">
      <div className="container px-4 md:px-6 reference-footer__content">
        <div className="site-footer__brand-block">
          <a href="/" className="site-footer__brand" aria-label="B4P CODEFOUND home">
            <img src="/brand/b4p-logo-clean.png" alt="B4P CODEFOUND" />
          </a>
          <p className="site-footer__tagline">Connecting communities.<br />Building peace.</p>
        </div>

        <div className="site-footer__link-groups">
          <FooterLinkGroup
            title="About Us"
            links={[
              { label: 'About B4P CODEFOUND', href: '/about-us' },
              { label: 'Our Vision & Values', href: '/our-core-values' },
              { label: 'Our Leadership', href: '/the-management-team' },
              { label: 'Our Board', href: '/the-board' },
              { label: 'Our Partners', href: '/#partner' },
              { label: 'Accountability', href: '/contact' },
              { label: 'FAQ', href: '/site-directory' },
            ]}
          />
          <FooterLinkGroup
            title="Our Approaches to Change"
            links={[
              { label: 'Peacebuilding', href: '/programs/global' },
              { label: 'Economic Development', href: '/programs/liberia' },
              { label: 'Women’s Leadership', href: '/programs/global' },
              { label: 'Youth & Civic Engagement', href: '/programs/usa' },
              { label: 'Our Global Strategy', href: '/theory-of-change' },
              { label: 'Our Core Values', href: '/our-core-values' },
            ]}
          />
          <FooterLinkGroup
            title="Work with Us"
            links={[
              { label: 'Volunteer With Us', href: '/become-a-volunteer' },
              { label: 'Careers & Internships', href: '/internship' },
              { label: 'Explore Open Positions', href: '/jobs' },
              { label: 'Open Tenders', href: '/contact' },
              { label: 'Become a Partner', href: 'mailto:management@b4pcodefound.org?subject=Become%20a%20B4P%20partner' },
            ]}
          />
          <section className="site-footer__link-group site-footer__connect">
            <h2>Connect With Us</h2>
            <SocialLinks className="site-footer__social-links" />
            <nav aria-label="Connect with B4P CODEFOUND">
              <a href="/contact">Contact Us</a>
              <a href="/where-we-work">Where We Work</a>
              <a href="mailto:management@b4pcodefound.org">Email Our Team</a>
              <a href="mailto:management@b4pcodefound.org?subject=Report%20a%20Concern">Report a Concern</a>
            </nav>
          </section>
        </div>

        <FooterNewsletter />

        <div className="site-footer__bottom">
          <nav className="site-footer__legal" aria-label="Legal">
            <a href="/privacy-policy">B4P CODEFOUND Privacy</a>
            <a href="/terms-and-conditions">Terms &amp; Conditions</a>
            <a href="/cookie-policy">Cookies Policy</a>
          </nav>
          <p>© 2015 - {currentYear} Business for Peace Community Development Foundation. All rights reserved.</p>
          <div className="site-footer__bottom-meta">
            <p>B4P CODEFOUND is a 501(c)(3) nonprofit and social enterprise established in 2015.</p>
            <FooterAccountabilityMark />
          </div>
          <p className="site-footer__developer">
            Developed by:{' '}
            <a href="https://www.itechnetworkafrica.com" target="_blank" rel="noreferrer">
              <strong>iTech Network Africa</strong>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}