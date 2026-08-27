import { useEffect, useMemo, useState } from 'react';
import { BookOpen, Loader2, ArrowRight } from 'lucide-react';
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
    image.setAttribute('loading', 'lazy');
    image.removeAttribute('srcset');
    image.removeAttribute('sizes');
  });

  return document.body.innerHTML;
}

function PageSidebar({ pages, currentPath }: { pages: PageMeta[], currentPath: string }) {
  const visiblePages = useMemo(
    () =>
      [...pages]
        .filter((page) => page.path !== '/')
        .sort((a, b) => a.title.localeCompare(b.title)),
    [pages],
  );

  return (
    <aside className="w-full lg:w-80 shrink-0 space-y-8" aria-label="Sidebar navigation">
      <div className="bg-white rounded-2xl p-8 border border-border shadow-sm">
        <div className="flex items-center gap-3 text-secondary font-bold uppercase tracking-wider text-sm mb-6">
          <BookOpen size={18} />
          Site Directory
        </div>
        <p className="text-muted-foreground text-sm font-medium mb-6">
          Browse our programs, resources, and updates.
        </p>
        <div className="flex flex-col max-h-[500px] overflow-y-auto pr-4 space-y-1 custom-scrollbar">
          {visiblePages.map((page) => {
            const path = page.path || `/${page.slug}`;
            const isActive = normalizePath(path) === currentPath;
            return (
              <a
                key={page.id}
                href={path}
                className={`flex items-center justify-between gap-3 px-4 py-3 rounded-lg text-sm font-bold transition-all duration-200 ${
                  isActive 
                    ? 'bg-primary/10 text-primary' 
                    : 'text-foreground/80 hover:bg-muted hover:text-primary'
                }`}
              >
                <span className="truncate">
                  {page.slug === 'home'
                    ? 'Home (legacy)'
                    : page.title.replace(/&#8217;|&#039;/g, "'")}
                </span>
                <ArrowRight size={14} className={`shrink-0 transition-transform ${isActive ? 'text-primary translate-x-1' : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'}`} />
              </a>
            );
          })}
        </div>
      </div>
      
      <div className="bg-gradient-to-br from-secondary to-secondary/90 rounded-2xl p-8 text-white shadow-lg relative overflow-hidden">
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <h3 className="text-xl font-bold mb-3 relative z-10">Make a Difference</h3>
        <p className="text-white/90 text-sm font-medium mb-6 relative z-10">
          Support African-led peacebuilding and economic development initiatives today.
        </p>
        <Button asChild className="w-full bg-accent hover:bg-accent/90 text-white font-bold relative z-10">
          <a href="/make-a-donation">Donate Now</a>
        </Button>
      </div>
    </aside>
  );
}

export default function PolishedPage({ path }: { path: string }) {
  const [page, setPage] = useState<LegacyPageRecord | null>(null);
  const [pages, setPages] = useState<PageMeta[]>([]);
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
        setPages(index);

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
      <main className="flex-1 pt-[72px] md:pt-[108px]">
        {/* Polished Hero */}
        <div className="bg-gradient-to-br from-primary to-secondary text-white py-24 px-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 opacity-70 pointer-events-none"></div>
          <div className="container mx-auto relative z-10">
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
        </div>

        {/* Content Layout */}
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            
            <div className="flex-1 w-full min-w-0">
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
                <article className="prose prose-lg text-foreground/90 prose-headings:text-foreground prose-headings:font-extrabold prose-headings:tracking-tight prose-a:text-primary prose-a:font-bold prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-img:shadow-md max-w-none bg-white p-8 md:p-12 rounded-3xl border border-border shadow-sm">
                  <div dangerouslySetInnerHTML={{ __html: sanitizeContent(page.content) }} />
                </article>
              )}
            </div>

            {/* Always show sidebar for navigation */}
            <PageSidebar pages={pages} currentPath={targetPath} />
            
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
