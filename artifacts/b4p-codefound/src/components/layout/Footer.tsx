import { useId, useState, type FormEvent, type ReactNode } from 'react';
import { ArrowRight, ArrowUpRight, ChevronDown, Mail, MapPin, Phone } from 'lucide-react';
import { SocialLinks } from '@/components/layout/SocialLinks';

function FooterAccordion({ title, children }: { title: string; children: ReactNode }) {
  const panelId = useId();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="site-footer__accordion">
      <button
        type="button"
        className="site-footer__accordion-trigger"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span>{title}</span>
        <ChevronDown className={isOpen ? 'is-open' : ''} size={24} aria-hidden="true" />
      </button>
      <div
        id={panelId}
        className={`site-footer__accordion-panel ${isOpen ? 'is-open' : ''}`}
        data-section-title={title}
      >
        {children}
      </div>
    </section>
  );
}

function FooterNestedAccordion({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  const panelId = useId();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="site-footer__nested">
      <button
        type="button"
        className="site-footer__nested-trigger"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span>{title}</span>
        <ChevronDown className={isOpen ? 'is-open' : ''} size={18} aria-hidden="true" />
      </button>
      <div id={panelId} className={`site-footer__nested-panel ${isOpen ? 'is-open' : ''}`}>
        <div className="site-footer__nested-links">
          {links.map((link) => (
            <a href={link.href} key={`${link.href}-${link.label}`}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
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
      <span className="site-footer__accountability-mark">
        <img src="/brand/b4p-logo-clean.png" alt="" />
      </span>
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
          <div className="site-footer__brand-copy">
            <strong>B4P CODEFOUND</strong>
            <p>Global-local peacebuilding and economic development through collective action.</p>
            <small>Established 2015 · Liberia · United States</small>
          </div>
        </div>

        <div className="site-footer__social-row">
          <div className="site-footer__social-intro">
            <strong>Connect with B4P CODEFOUND</strong>
            <span>Follow the work and stay connected to our community.</span>
          </div>
          <SocialLinks className="site-footer__social-links" />
        </div>

        <div className="site-footer__accordions">
          <FooterAccordion title="ABOUT B4P CODEFOUND">
            <p className="site-footer__accordion-description">
              B4P CODEFOUND promotes political, social, and economic justice globally. We work with women and girls to foster gender equality and challenge violence.
            </p>
            <nav aria-label="About B4P CODEFOUND">
              <a href="/about-us">Our mission &amp; vision</a>
              <a href="/about-us">Our history</a>
              <a href="/the-management-team">Our leadership</a>
              <a href="/the-board">Our board</a>
              <a href="/#partner">Our partners</a>
              <a href="/where-we-work">Where we work</a>
            </nav>
          </FooterAccordion>

          <FooterAccordion title="WHAT WE DO">
            <p className="site-footer__accordion-description">
              Through evidence- and rights-based approaches, we co-create programs that connect peace, participation, economic opportunity, and community power.
            </p>
            <nav aria-label="B4P CODEFOUND approaches">
              <a href="/peacebuilding-program">Peacebuilding</a>
              <a href="/economic-development-program">Economic development</a>
              <a href="/programs/global">Women &amp; girls leadership</a>
              <a href="/programs/global/global-youth-exchange-forum">Youth &amp; civic engagement</a>
              <a href="/programs/global/peacebuilding-governance">Governance &amp; democracy</a>
              <FooterNestedAccordion
                title="Services"
                links={[
                  { label: 'Fiscal sponsorship', href: '/services/fiscal-sponsorship' },
                  { label: 'Nonprofit capacity building', href: '/services/nonprofit-capacity-building' },
                  { label: 'Business development', href: '/services/business-development' },
                ]}
              />
            </nav>
          </FooterAccordion>

          <FooterAccordion title="WORK WITH US">
            <p className="site-footer__accordion-description">
              Join locally led work that builds confidence, strengthens livelihoods, and connects communities across Liberia and the diaspora.
            </p>
            <nav aria-label="Work with B4P CODEFOUND">
              <a href="/become-a-volunteer">Volunteer with us</a>
              <a href="/internship">Internships</a>
              <a href="/jobs">Jobs &amp; open positions</a>
              <a href="/make-a-donation">Make a donation</a>
              <a href="mailto:management@b4pcodefound.org?subject=Become%20a%20B4P%20partner">Become a partner</a>
            </nav>
          </FooterAccordion>

          <FooterAccordion title="CONNECT WITH US">
            <p className="site-footer__accordion-description">
              Our relationships begin in community and grow through exchange between Liberia, Ohio, New York, and the wider world.
            </p>
            <address className="site-footer__contact">
              <a href="/contact">Contact B4P CODEFOUND</a>
              <a href="mailto:management@b4pcodefound.org">
                <Mail size={16} aria-hidden="true" />
                management@b4pcodefound.org
              </a>
              <a href="tel:+13802061631">
                <Phone size={16} aria-hidden="true" />
                Ohio: +1 380-206-1631
              </a>
              <p>
                <MapPin size={16} aria-hidden="true" />
                <span>Gbarnga, Bong County · Ohio · New York</span>
              </p>
              <a href="mailto:management@b4pcodefound.org?subject=Report%20a%20Concern">
                <ArrowUpRight size={16} aria-hidden="true" />
                Report a concern
              </a>
            </address>
          </FooterAccordion>
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