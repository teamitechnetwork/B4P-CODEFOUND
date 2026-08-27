import { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

type PageMeta = {
  id: number;
  slug: string;
  path: string;
  title: string;
  parent: number;
  menuOrder: number;
  chunk: number;
};

type LegacyPageRecord = PageMeta & {
  content: string;
  excerpt: string;
};

const baseUrl = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

function normalizePath(value: string) {
  const withoutQuery = value.split('?')[0].split('#')[0];
  const normalized = withoutQuery.replace(/\/+$/, '');
  return normalized || '/';
}

function sanitizeContent(html: string) {
  if (typeof DOMParser === 'undefined') return html;

  const document = new DOMParser().parseFromString(html, 'text/html');
  document
    .querySelectorAll('script, style, iframe, object, embed, link, meta, noscript')
    .forEach((element) => element.remove());

  document.querySelectorAll('*').forEach((element) => {
    Array.from(element.attributes).forEach((attribute) => {
      const name = attribute.name.toLowerCase();
      if (
        name.startsWith('on') ||
        name === 'style' ||
        name === 'class' ||
        name.startsWith('data-') ||
        name.startsWith('aria-')
      ) {
        element.removeAttribute(attribute.name);
      }
    });

    if (element.tagName === 'A') {
      const link = element.getAttribute('href');
      if (!link) return;

      try {
        const parsed = new URL(link, window.location.origin);
        if (parsed.hostname === 'b4pcodefound.org') {
          element.setAttribute(
            'href',
            `${parsed.pathname}${parsed.search}${parsed.hash}`,
          );
        } else if (parsed.origin !== window.location.origin) {
          element.setAttribute('target', '_blank');
          element.setAttribute('rel', 'noreferrer');
        }
      } catch {
        element.removeAttribute('href');
      }
    }
  });

  document.querySelectorAll('img').forEach((image) => {
    const source = image.getAttribute('src');
    if (source?.startsWith('http://b4pcodefound.org/')) {
      image.setAttribute('src', source.replace('http://', 'https://'));
    }
    image.setAttribute('loading', 'lazy');
    image.removeAttribute('srcset');
    image.removeAttribute('sizes');
  });

  return document.body.innerHTML;
}

export default function PolishedPage({ path }: { path: string }) {
  const [page, setPage] = useState<LegacyPageRecord | null>(null);
  const [status, setStatus] = useState<'loading' | 'ready' | 'missing' | 'error'>('loading');

  const targetPath = normalizePath(path);

  useEffect(() => {
    let cancelled = false;

    async function loadPage() {
      try {
        setStatus('loading');
        const indexResponse = await fetch(`${baseUrl}content/legacy-page-index.json`);
        if (!indexResponse.ok) throw new Error('Unable to load page index');
        const index = (await indexResponse.json()) as PageMeta[];
        if (cancelled) return;

        const match = index.find(
          (entry) =>
            normalizePath(entry.path) === targetPath ||
            normalizePath(`/${entry.slug}`) === targetPath,
        );
        
        if (!match) {
          setStatus('missing');
          return;
        }

        const contentResponse = await fetch(`${baseUrl}content/legacy-pages-${match.chunk}.json`);
        if (!contentResponse.ok) throw new Error('Unable to load page content');
        const chunk = (await contentResponse.json()) as LegacyPageRecord[];
        const record = chunk.find((entry) => entry.id === match.id) ?? null;
        
        if (cancelled) return;
        setPage(record);
        setStatus(record ? 'ready' : 'missing');
        window.scrollTo(0, 0);
      } catch {
        if (!cancelled) setStatus('error');
      }
    }

    void loadPage();
    return () => { cancelled = true; };
  }, [targetPath]);

  const title = page?.title
    .replace(/&#8217;|&#039;/g, "'")
    .replace(/&#038;/g, '&') ?? 'B4P CODEFOUND';

  return (
    <div className="flex flex-col min-h-screen bg-background font-sans">
      <Header />
      <main className="legacy-page flex-1">
        {/* Polished Hero */}
        <section className="polished-page__hero bg-gradient-to-br from-primary to-secondary text-white px-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 opacity-70 pointer-events-none"></div>
          <div className="page-container relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              B4P CODEFOUND
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight max-w-4xl leading-tight animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
              {status === 'ready' ? title : (status === 'loading' ? 'Loading...' : 'Page Not Found')}
            </h1>
            {status === 'ready' && (
              <p className="text-xl md:text-2xl font-medium text-white/80 max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
                Learn more about our initiatives, history, and the impact we create together.
              </p>
            )}
          </div>
        </section>

        {/* Content Layout */}
        <section className="legacy-page__content">
          <div className="page-container">
            <div className="legacy-page__article-layout">
              {status === 'loading' && (
                <div className="flex flex-col items-center justify-center py-32 bg-white rounded-2xl border border-border shadow-sm">
                  <Loader2 size={40} className="text-primary animate-spin mb-4" />
                  <p className="text-lg font-bold text-foreground">Loading content...</p>
                </div>
              )}

              {status === 'error' && (
                <div className="py-20 px-8 bg-red-50 text-red-900 rounded-2xl border border-red-100 text-center font-bold text-lg">
                  This page could not be loaded right now. Please try again.
                </div>
              )}

              {status === 'missing' && (
                <div className="py-24 px-8 bg-white rounded-2xl border border-border text-center shadow-sm">
                  <h2 className="text-3xl font-extrabold text-foreground mb-4">Page not found</h2>
                  <p className="text-lg text-muted-foreground font-medium max-w-md mx-auto mb-8">
                    We couldn't find the page you're looking for. Please select an option from the site directory to continue exploring.
                  </p>
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold">
                    <Link href="/">Return Home</Link>
                  </Button>
                </div>
              )}

              {status === 'ready' && page && (
                <article className="legacy-article prose prose-lg text-foreground/90 prose-headings:text-foreground prose-headings:font-extrabold prose-headings:tracking-tight prose-a:text-primary prose-a:font-bold prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-img:shadow-md max-w-none bg-white rounded-3xl border border-border shadow-sm">
                  <div dangerouslySetInnerHTML={{ __html: sanitizeContent(page.content) }} />
                </article>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
