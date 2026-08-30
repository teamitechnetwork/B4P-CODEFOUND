import { useEffect, useState } from 'react';
import { ArrowUpRight, Loader2 } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Link } from 'wouter';
import { DrivePhotoGallery } from '@/components/sections/DrivePhotoGallery';
import { featuredDrivePhotos } from '@/data/drivePhotos';
import NotFound from '@/pages/not-found';

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

function stripHtml(value: string) {
  if (!value) return '';
  if (typeof DOMParser === 'undefined') return value.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const document = new DOMParser().parseFromString(value, 'text/html');
  return (document.body.textContent ?? '').replace(/\s+/g, ' ').trim();
}

function getPagePresentation(path: string) {
  if (/privacy|cookie|terms|refund|shipping|return/.test(path)) {
    return {
      label: 'Policies & accountability',
      image: '/images/conference/day-1-audience-stage.jpg',
      description: 'Read the information that guides how B4P CODEFOUND communicates, operates, and serves its community.',
      legal: true,
    };
  }

  if (/news|blog|event|conference|story|resource|gallery/.test(path)) {
    return {
      label: 'News, stories & resources',
      image: featuredDrivePhotos[0]?.src ?? '/images/story-conference.jpg',
      description: 'Explore updates, learning, and community moments from across B4P CODEFOUND’s work.',
      legal: false,
    };
  }

  if (/donat|support|partner|volunteer|job|intern|career/.test(path)) {
    return {
      label: 'Take part',
      image: featuredDrivePhotos[4]?.src ?? '/images/conference/day-3-community-02.jpg',
      description: 'Find a practical way to support African-led peacebuilding and community development.',
      legal: false,
    };
  }

  return {
    label: 'B4P CODEFOUND',
    image: featuredDrivePhotos[6]?.src ?? '/images/conference/day-2-community-03.jpg',
    description: 'Learn more about the people, programs, partnerships, and community knowledge that shape our work.',
    legal: false,
  };
}

function sanitizeContent(html: string) {
  if (typeof DOMParser === 'undefined') return html;

  const document = new DOMParser().parseFromString(html, 'text/html');
  document
    .querySelectorAll('script, style, iframe, object, embed, link, meta, noscript, form, input, textarea, select, option, button')
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
  const presentation = getPagePresentation(targetPath);

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

  if (status === 'missing') {
    return <NotFound />;
  }

  const title = page?.title
    .replace(/&#8217;|&#039;/g, "'")
    .replace(/&#038;/g, '&') ?? 'B4P CODEFOUND';
  const excerpt = page ? stripHtml(page.excerpt) : '';
  const heroDescription = excerpt || presentation.description;

  return (
    <div className="flex flex-col min-h-screen bg-background font-sans">
      <Header />
      <main className="legacy-page flex-1">
        <section className="polished-page__hero">
          <img className="polished-page__hero-image" src={presentation.image} alt="" />
          <div className="polished-page__hero-overlay" />
          <div className="page-container polished-page__hero-inner">
            <span className="page-kicker">
              {presentation.label}
            </span>
            <h1>
              {status === 'ready' ? title : (status === 'loading' ? 'Loading...' : 'Page Not Found')}
            </h1>
            {status === 'ready' && (
              <p>{heroDescription}</p>
            )}
          </div>
        </section>

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

              {status === 'ready' && page && (
                <>
                  <article className="legacy-article prose prose-lg text-foreground/90 prose-headings:text-foreground prose-headings:font-extrabold prose-headings:tracking-tight prose-a:text-primary prose-a:font-bold prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-img:shadow-md max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: sanitizeContent(page.content) }} />
                  </article>
                  <aside className="legacy-page__aside" aria-label="Continue exploring B4P CODEFOUND">
                    <span className="section-heading__eyebrow">Continue exploring</span>
                    <h2>Connect this page to the wider mission.</h2>
                    <nav>
                      <Link href="/about-us">About B4P <ArrowUpRight size={16} aria-hidden="true" /></Link>
                      <Link href="/what-we-do">Explore our work <ArrowUpRight size={16} aria-hidden="true" /></Link>
                      <Link href="/where-we-work">Where we work <ArrowUpRight size={16} aria-hidden="true" /></Link>
                      <Link href="/contact">Contact the team <ArrowUpRight size={16} aria-hidden="true" /></Link>
                    </nav>
                  </aside>
                </>
              )}
            </div>
          </div>
        </section>

        {status === 'ready' && !presentation.legal && !/donat/.test(targetPath) && (
          <DrivePhotoGallery
            eyebrow="Community in focus"
            title="The mission is carried by people."
            description="See the learning, dialogue, and collective action that connect B4P CODEFOUND’s programs and partnerships."
            photos={featuredDrivePhotos.slice(0, 6)}
            variant="editorial"
            linkHref="/site-directory"
            linkLabel="Browse the site directory"
          />
        )}
      </main>
      <Footer />
    </div>
  );
}
