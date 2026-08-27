import { ArrowUpRight, BookOpen, Loader2 } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

type PageMeta = {
  id: number;
  slug: string;
  path: string;
  title: string;
};

const baseUrl = import.meta.env.BASE_URL;

export default function SiteDirectoryPage() {
  const [pages, setPages] = useState<PageMeta[]>([]);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');

  useEffect(() => {
    let cancelled = false;
    fetch(`${baseUrl}content/legacy-page-index.json`)
      .then((response) => {
        if (!response.ok) throw new Error('Unable to load directory');
        return response.json() as Promise<PageMeta[]>;
      })
      .then((index) => {
        if (!cancelled) {
          setPages(index);
          setStatus('ready');
        }
      })
      .catch(() => {
        if (!cancelled) setStatus('error');
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const visiblePages = useMemo(
    () =>
      pages
        .filter((page) => page.path !== '/' && page.title.trim())
        .filter((page, index, all) => all.findIndex((candidate) => candidate.path === page.path) === index)
        .sort((a, b) => a.title.localeCompare(b.title)),
    [pages],
  );

  return (
    <div className="directory-page flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="directory-page__hero">
          <div className="page-container">
            <span className="page-kicker"><BookOpen size={16} aria-hidden="true" /> Site directory</span>
            <h1>Everything B4P CODEFOUND, in one place.</h1>
            <p>Explore our organization, programs, services, opportunities, resources, and published pages.</p>
          </div>
        </section>
        <section className="directory-page__content">
          <div className="page-container">
            {status === 'loading' && (
              <div className="directory-page__status"><Loader2 size={28} className="animate-spin" /> Loading the directory…</div>
            )}
            {status === 'error' && (
              <div className="directory-page__status">The directory could not be loaded right now. Please try again.</div>
            )}
            {status === 'ready' && (
              <div className="directory-page__grid">
                {visiblePages.map((page) => (
                  <a className="directory-page__item" href={page.path} key={page.path} data-testid={`link-directory-${page.slug}`}>
                    <span>{page.title.replace(/&#8217;|&#039;/g, "'").replace(/&#038;/g, '&')}</span>
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </a>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}