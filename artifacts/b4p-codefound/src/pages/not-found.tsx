import { ArrowLeft, ArrowUpRight, Compass, MapPin } from 'lucide-react';
import { Link } from 'wouter';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function NotFound() {
  return (
    <div className="not-found-page flex min-h-screen flex-col">
      <Header />
      <main className="not-found-page__main flex-1">
        <div className="not-found-page__wash" aria-hidden="true" />
        <div className="page-container not-found-page__layout">
          <section className="not-found-page__copy" aria-labelledby="not-found-title">
            <div className="not-found-page__kicker">
              <span className="not-found-page__kicker-dot" aria-hidden="true" />
              Navigation signal lost
            </div>
            <h1 id="not-found-title">
              Let’s find your way
              <em>back to community.</em>
            </h1>
            <p>
              This page has wandered off the map, but the work continues. The link you followed
              does not point to a live B4P CODEFOUND page.
            </p>
            <div className="not-found-page__actions">
              <Link
                href="/"
                className="not-found-page__primary-link"
                data-testid="link-404-home"
              >
                <ArrowLeft size={18} aria-hidden="true" />
                Return home
              </Link>
              <Link
                href="/site-directory"
                className="not-found-page__secondary-link"
                data-testid="link-404-directory"
              >
                Explore the site
                <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            </div>
            <nav className="not-found-page__quick-links" aria-label="Popular B4P CODEFOUND pages">
              <span>Or continue to</span>
              <Link href="/what-we-do" data-testid="link-404-work">
                Our work <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
              <Link href="/about-us" data-testid="link-404-about">
                About B4P <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
              <Link href="/contact" data-testid="link-404-contact">
                Contact <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            </nav>
          </section>

          <div className="not-found-page__visual" aria-hidden="true">
            <div className="not-found-page__orbit not-found-page__orbit--outer" />
            <div className="not-found-page__orbit not-found-page__orbit--inner" />
            <div className="not-found-page__visual-core">
              <span className="not-found-page__number">404</span>
              <span className="not-found-page__visual-label">route not found</span>
            </div>
            <span className="not-found-page__coordinate not-found-page__coordinate--north">N 06° 18′</span>
            <span className="not-found-page__coordinate not-found-page__coordinate--east">E 10° 37′</span>
            <div className="not-found-page__status">
              <Compass size={21} strokeWidth={1.6} />
              <span>
                <strong>Keep exploring</strong>
                <small>B4P CODEFOUND</small>
              </span>
            </div>
            <div className="not-found-page__pin">
              <MapPin size={17} fill="currentColor" strokeWidth={1.5} />
              <span>Find the next path</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
