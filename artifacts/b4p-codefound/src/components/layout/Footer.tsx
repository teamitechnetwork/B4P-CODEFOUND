import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';

const socialLinks = [
  { name: 'Facebook', href: 'https://www.facebook.com/b4pcodefound.cause' },
  { name: 'Instagram', href: 'https://www.instagram.com/b4pcodefound' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/b4pcodefound' },
  { name: 'YouTube', href: 'https://www.youtube.com/channel/UCag6wU4HaGZlBqbcG6kWThg' },
  { name: 'WhatsApp', href: 'https://whatsapp.com/channel/0029VbBYo7T7dmeaJIfdBT1b' },
];

export function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <div className="container px-4 md:px-6">
        <section className="site-footer__callout">
          <div>
            <span>Build with B4P CODEFOUND</span>
            <h2>Peace takes root when communities lead.</h2>
          </div>
          <a href="/make-a-donation">
            Support our work
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </section>

        <div className="site-footer__grid">
          <div className="site-footer__about">
            <img src="/brand/b4p-favicon.png" alt="B4P CODEFOUND" />
            <p>Business for Peace Community Development Foundation is a 501(c)(3) nonprofit and social enterprise established in 2015.</p>
            <p className="site-footer__motto">Happy Families = United &amp; Prosperous Communities = A Stronger Nation.</p>
            <div className="site-footer__socials" aria-label="Follow B4P CODEFOUND">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.href} target="_blank" rel="noreferrer">{social.name}</a>
              ))}
            </div>
          </div>

          <nav aria-label="Explore B4P CODEFOUND">
            <h3>Quick Links</h3>
            <a href="/about-us">About Us</a>
            <a href="/become-a-volunteer">Volunteer With Us</a>
            <a href="/make-a-donation">Donate</a>
            <a href="/news-blogs">News &amp; Blogs</a>
            <a href="/faq">FAQ</a>
            <a href="/resources">Resources</a>
            <a href="/blogs-discussion-forum">Blogs / Discussion Forum</a>
          </nav>

          <nav aria-label="B4P CODEFOUND programs">
            <h3>Our Work</h3>
            <a href="/programs/global">Global Programs</a>
            <a href="/programs/usa">USA Programs</a>
            <a href="/programs/liberia">Liberia Programs</a>
            <a href="/services">Services</a>
          </nav>

          <address className="site-footer__contact">
            <h3>Connect</h3>
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
        </div>

        <div className="site-footer__bottom">
          <p>© {new Date().getFullYear()} B4P CODEFOUND. All rights reserved.</p>
          <a href="/contact">Contact us</a>
        </div>
      </div>
    </footer>
  );
}