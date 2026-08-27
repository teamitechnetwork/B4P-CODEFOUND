import { ArrowUpRight, Mail, MapPin } from 'lucide-react';

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
          </div>

          <nav aria-label="Explore B4P CODEFOUND">
            <h3>Explore</h3>
            <a href="/about-us">About Us</a>
            <a href="/the-management-team">Our Team</a>
            <a href="/theory-of-change">Theory of Change</a>
            <a href="/our-events">Events &amp; Programs</a>
          </nav>

          <nav aria-label="B4P CODEFOUND programs">
            <h3>Our Work</h3>
            <a href="/peacebuilding-program">Peacebuilding</a>
            <a href="/economic-development-program">Economic Development</a>
            <a href="/youth-and-civic-engagement">Youth &amp; Civic Engagement</a>
            <a href="/resources">Resources</a>
          </nav>

          <address className="site-footer__contact">
            <h3>Connect</h3>
            <a href="mailto:management@b4pcodefound.org">
              <Mail size={16} aria-hidden="true" />
              management@b4pcodefound.org
            </a>
            <p>
              <MapPin size={16} aria-hidden="true" />
              <span>1108 Chaser Street<br />Blacklick, Ohio 43004</span>
            </p>
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