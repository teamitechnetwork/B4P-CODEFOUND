import { useId, useState, type ReactNode } from 'react';
import { ArrowUpRight, ChevronDown, Globe2, Mail, MapPin, Phone, Search } from 'lucide-react';
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

export function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <div className="container px-4 md:px-6">
        <div className="site-footer__brand-block">
          <a href="/" className="site-footer__brand" aria-label="B4P CODEFOUND home">
            <img src="/brand/b4p-logo-clean.png" alt="B4P CODEFOUND" />
            <span>
              <strong>B4P CODEFOUND</strong>
              <small>African-led peacebuilding &amp; development</small>
            </span>
          </a>
          <p className="site-footer__tagline">Connecting communities. Building peace.</p>
        </div>

        <div className="site-footer__accordions">
          <FooterAccordion title="WHO WE ARE">
            <nav aria-label="Explore B4P CODEFOUND">
              <a href="/about-us">About Us</a>
              <a href="/the-directors-corner">The Director’s Corner</a>
              <a href="/the-management-team">Management Team</a>
              <a href="/the-board">Board of Directors</a>
              <a href="/advisory-council">Advisory Council</a>
            </nav>
          </FooterAccordion>

          <FooterAccordion title="WHAT WE DO">
            <nav aria-label="B4P CODEFOUND programs">
              <a href="/what-we-do">What We Do</a>
              <a href="/programs/global">Global Programs</a>
              <a href="/programs/usa">USA Programs</a>
              <a href="/programs/liberia">Liberia Programs</a>
              <a href="/services">Services</a>
            </nav>
          </FooterAccordion>

          <FooterAccordion title="OUR IMPACT">
            <nav aria-label="B4P CODEFOUND impact">
              <a href="/about">Our Impact</a>
              <a href="/our-core-values">Our Core Values</a>
              <a href="/where-we-work">Where We Work</a>
              <a href="/theory-of-change">Theory of Change</a>
              <a href="/#field-stories">Stories From the Field</a>
            </nav>
          </FooterAccordion>

          <FooterAccordion title="GET INVOLVED">
            <div className="site-footer__involved-panel">
              <nav aria-label="Get involved with B4P CODEFOUND">
                <a href="/become-a-volunteer">Volunteer With Us</a>
                <a href="/internship">Internships</a>
                <a href="/jobs">Jobs</a>
                <a href="/make-a-donation">Make a Donation</a>
                <a href="/news-blogs">News &amp; Blogs</a>
                <a href="/events">Events &amp; Gatherings</a>
                <a className="site-footer__partner" href="mailto:management@b4pcodefound.org?subject=Become%20a%20B4P%20partner">
                  Become a Partner <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </nav>
              <address className="site-footer__contact">
                <a href="mailto:management@b4pcodefound.org">
                  <Mail size={16} aria-hidden="true" />
                  management@b4pcodefound.org
                </a>
                <a href="mailto:support@b4pcodefound.org">
                  <Mail size={16} aria-hidden="true" />
                  support@b4pcodefound.org
                </a>
                <p>
                  <MapPin size={16} aria-hidden="true" />
                  <span><strong>United States</strong><br />1108 Chaser Street<br />Blacklick, Ohio 43004</span>
                </p>
                <p>
                  <MapPin size={16} aria-hidden="true" />
                  <span><strong>Liberia</strong><br />Far East Community<br />Gbarnga, Bong County</span>
                </p>
                <div className="site-footer__phones">
                  <Phone size={16} aria-hidden="true" />
                  <div>
                    <a href="tel:+13802061631">Ohio: +1 380-206-1631</a>
                    <a href="tel:+16144051088">Ohio: +1 614-405-1088</a>
                    <a href="tel:+13476175935">New York: +1 347-617-5935</a>
                    <a href="tel:+231886472746">Liberia: +231 886-472-746</a>
                    <span>Fax (Ohio): +1 380-206-1630</span>
                  </div>
                </div>
              </address>
            </div>
          </FooterAccordion>
        </div>

        <div className="site-footer__social-row">
          <div className="site-footer__tools" aria-label="Site tools">
            <a href="/where-we-work" className="site-footer__tool-link" aria-label="Where we work">
              <Globe2 size={27} aria-hidden="true" />
            </a>
            <a href="/site-directory" className="site-footer__tool-link" aria-label="Search the site">
              <Search size={27} aria-hidden="true" />
            </a>
          </div>
          <SocialLinks className="site-footer__social-links" />
        </div>

        <nav className="site-footer__legal" aria-label="Legal">
          <a href="/site-directory">Site Directory</a>
          <a href="/terms-and-conditions">Terms &amp; Conditions</a>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/cookie-policy">Cookies Policy</a>
          <a href="/contact">Contact Us</a>
        </nav>

        <div className="site-footer__bottom">
          <p>© {new Date().getFullYear()} Business for Peace Community Development Foundation. All rights reserved.</p>
          <p>B4P CODEFOUND is a 501(c)(3) nonprofit and social enterprise established in 2015.</p>
          <p className="site-footer__developer">Developed by: <strong>iTech Network Africa</strong></p>
        </div>
      </div>
    </footer>
  );
}