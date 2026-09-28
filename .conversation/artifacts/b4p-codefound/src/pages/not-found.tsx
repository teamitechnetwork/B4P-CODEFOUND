import { ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function NotFound() {
  return (
    <div className="not-found-page flex min-h-screen flex-col">
      <Header />
      <main className="not-found-page__main flex-1">
        <div className="page-container not-found-page__layout">
          <section className="not-found-page__copy" aria-labelledby="not-found-title">
            <div className="not-found-page__code" role="img" aria-label="404">
              <span className="not-found-page__digit">4</span>
              <span className="not-found-page__zero">
                <span className="sr-only">0</span>
                <img src="/brand/b4p-favicon.png" alt="" />
              </span>
              <span className="not-found-page__digit">4</span>
            </div>
            <h1 id="not-found-title">
              Page not found
            </h1>
            <p>
              The page you’re looking for doesn’t exist or has moved.
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
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
