import { useEffect, useMemo, useState } from 'react';
import { ArrowUpRight, BookOpen, Loader2 } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

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

function PageDirectory({ pages }: { pages: PageMeta[] }) {
  const visiblePages = useMemo(
    () =>
      [...pages]
        .filter((page) => page.path !== '/')
        .sort((a, b) => a.title.localeCompare(b.title)),
    [pages],
  );

  return (
    <aside className="legacy-directory" aria-label="All B4P website pages">
      <div className="legacy-directory__label">
        <BookOpen size={15} aria-hidden="true" />
        Full site directory
      </div>
      <p>
        Browse every published page from the B4P CODEFOUND website, including
        program, resource, event, and account pages.
      </p>
      <div className="legacy-directory__links">
        {visiblePages.map((page) => (
          <a key={page.id} href={page.path || `/${page.slug}`}>
            {page.title.replace(/&#8217;|&#039;/g, '’')}
            <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        ))}
      </div>
    </aside>
  );
}

export default function LegacyPage({ path }: { path: string }) {
  const [page, setPage] = useState<LegacyPageRecord | null>(null);
  const [pages, setPages] = useState<PageMeta[]>([]);
  const [status, setStatus] = useState<'loading' | 'ready' | 'missing' | 'error'>(
    'loading',
  );

  useEffect(() => {
    let cancelled = false;
    const targetPath = normalizePath(path);

    async function loadPage() {
      try {
        setStatus('loading');
        const indexResponse = await fetch(
          `${baseUrl}content/legacy-page-index.json`,
        );
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

        const contentResponse = await fetch(
          `${baseUrl}content/legacy-pages-${match.chunk}.json`,
        );
        if (!contentResponse.ok) throw new Error('Unable to load page content');
        const chunk = (await contentResponse.json()) as LegacyPageRecord[];
        const record = chunk.find((entry) => entry.id === match.id) ?? null;
        if (cancelled) return;
        setPage(record);
        setStatus(record ? 'ready' : 'missing');
      } catch {
        if (!cancelled) setStatus('error');
      }
    }

    void loadPage();
    return () => {
      cancelled = true;
    };
  }, [path]);

  const title = page?.title
    .replace(/&#8217;|&#039;/g, '’')
    .replace(/&#038;/g, '&') ?? 'B4P CODEFOUND';

  return (
    <div className="site-page">
      <Header />
      <main className="legacy-page">
        <div className="legacy-page__intro">
          <div className="container legacy-page__intro-inner">
            <span className="eyebrow">B4P CODEFOUND · {normalizePath(path)}</span>
            <h1>{status === 'ready' ? title : 'B4P CODEFOUND'}</h1>
            <p>Business for Peace Community Development Foundation</p>
          </div>
        </div>

        <div className="container legacy-page__body">
          {status === 'loading' && (
            <div className="legacy-state">
              <Loader2 size={24} className="spin" aria-hidden="true" />
              Loading this B4P page…
            </div>
          )}

          {status === 'error' && (
            <div className="legacy-state legacy-state--error">
              This page could not be loaded right now. Please try again.
            </div>
          )}

          {status === 'missing' && (
            <div className="legacy-state legacy-state--missing">
              <h2>Page not found</h2>
              <p>
                The page is not in the current published archive. Use the full
                site directory below to continue exploring B4P CODEFOUND.
              </p>
            </div>
          )}

          {status === 'ready' && page && (
            <div className="legacy-page__grid">
              <article
                className="legacy-content"
                dangerouslySetInnerHTML={{ __html: sanitizeContent(page.content) }}
              />
              <PageDirectory pages={pages} />
            </div>
          )}

          {(status === 'missing' || status === 'error') && (
            <PageDirectory pages={pages} />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}