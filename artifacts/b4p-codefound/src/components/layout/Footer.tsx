import { useId, useState, type ReactNode } from 'react';
import { ArrowUpRight, Globe2, Mail, MapPin, Minus, Phone, Plus } from 'lucide-react';
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
        {isOpen ? <Minus size={16} aria-hidden="true" /> : <Plus size={16} aria-hidden="true" />}
      </button>
      <div id={panelId} className="site-footer__accordion-panel" hidden={!isOpen}>
        {children}
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <div className="container px-4 md:px-6">
        <div className="site-footer__accordions">
          <FooterAccordion title="About B4P CODEFOUND">
            <nav aria-label="Explore B4P CODEFOUND">
              <a href="/about-us">About Us</a>
              <a href="/the-directors-corner">The Director’s Corner</a>
              <a href="/the-management-team">Management Team</a>
              <a href="/the-board">Board of Directors</a>
              <a href="/advisory-council">Advisory Council</a>
            </nav>
          </FooterAccordion>

          <FooterAccordion title="Our Work">
            <nav aria-label="B4P CODEFOUND programs">
              <a href="/programs/global">Global Programs</a>
              <a href="/programs/usa">USA Programs</a>
              <a href="/programs/liberia">Liberia Programs</a>
              <a href="/services">Services</a>
            </nav>
          </FooterAccordion>

          <FooterAccordion title="Get Involved">
            <nav aria-label="Get involved with B4P CODEFOUND">
              <a href="/become-a-volunteer">Volunteer With Us</a>
              <a href="/internship">Internships</a>
              <a href="/jobs">Jobs</a>
              <a href="/make-a-donation">Make a Donation</a>
              <a href="/news-blogs">News &amp; Blogs</a>
            </nav>
          </FooterAccordion>

          <FooterAccordion title="Contact & Offices">
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
              <a className="site-footer__partner" href="mailto:management@b4pcodefound.org?subject=Become%20a%20B4P%20partner">
                Become a Partner <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </address>
          </FooterAccordion>
        </div>

        <a href="/" className="site-footer__brand" aria-label="B4P CODEFOUND home">
          <img src="/brand/b4p-favicon.png" alt="" />
          <span>
            <strong>B4P CODEFOUND</strong>
            <small>Peacebuilding · Community Development</small>
          </span>
        </a>

        <div className="site-footer__social-row">
          <p>
            <Globe2 size={17} aria-hidden="true" />
            Liberia · United States · Global
          </p>
          <SocialLinks className="site-footer__social-links" />
        </div>

        <nav className="site-footer__legal" aria-label="Legal">
          <a href="/terms-and-conditions">Terms &amp; Conditions</a>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/cookie-policy">Cookies Policy</a>
          <a href="/contact">Contact Us</a>
        </nav>

        <div className="site-footer__bottom">
          <p>© {new Date().getFullYear()} Business for Peace Community Development Foundation. All rights reserved.</p>
          <p>B4P CODEFOUND is a 501(c)(3) nonprofit and social enterprise established in 2015.</p>
        </div>
      </div>
    </footer>
  );
}