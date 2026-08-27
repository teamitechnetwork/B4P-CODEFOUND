import { useEffect } from 'react';
import { useLocation } from 'wouter';
import routeRegistry from '@/data/route-metadata.json';
import { getProgram } from '@/data/programs';
import type { ProgramRegion } from '@/data/programs';

const SITE_URL = 'https://b4pcodefound.org';
const DEFAULT_IMAGE = `${SITE_URL}/brand/b4p-og-source.png`;

type PageMetadata = {
  path: string;
  title: string;
  description: string;
  image?: string;
  type?: 'website' | 'article';
  canonicalPath?: string;
  indexable?: boolean;
};

const pageMetadata = new Map(
  (routeRegistry as PageMetadata[]).map((metadata) => [metadata.path, metadata]),
);

function getMetadata(pathname: string): PageMetadata {
  const exact = pageMetadata.get(pathname);
  if (exact) return exact;

  const detailMatch = pathname.match(/^\/programs\/(global|usa|liberia)\/([^/]+)$/);
  if (detailMatch) {
    const program = getProgram(detailMatch[1] as ProgramRegion, detailMatch[2]);
    if (program) {
      return {
        path: pathname,
        title: `${program.title} | B4P CODEFOUND`,
        description: program.description,
        image: program.image,
      };
    }
  }

  return {
    path: pathname,
    title: 'B4P CODEFOUND | African-Led Peacebuilding & Development',
    description: 'B4P CODEFOUND connects peacebuilding, community development, and inclusive leadership across Liberia, the United States, and beyond.',
  };
}

function upsertMeta(attribute: 'name' | 'property', key: string, value: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = value;
}

export default function SiteMetadata() {
  const [location] = useLocation();

  useEffect(() => {
    const pathname = location.split(/[?#]/)[0].replace(/\/+$/, '') || '/';
    const metadata = getMetadata(pathname);
    const canonicalPath = metadata.canonicalPath ?? pathname;
    const canonicalUrl = `${SITE_URL}${canonicalPath === '/' ? '/' : canonicalPath}`;
    const image = metadata.image ? `${SITE_URL}${metadata.image}` : DEFAULT_IMAGE;

    document.title = metadata.title;
    upsertMeta('name', 'description', metadata.description);
    upsertMeta('name', 'robots', metadata.indexable === false ? 'noindex, follow' : 'index, follow');
    upsertMeta('property', 'og:title', metadata.title);
    upsertMeta('property', 'og:description', metadata.description);
    upsertMeta('property', 'og:type', metadata.type ?? 'website');
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:image', image);
    upsertMeta('property', 'og:image:alt', metadata.title);
    upsertMeta('property', 'og:image:width', '433');
    upsertMeta('property', 'og:image:height', '406');
    upsertMeta('property', 'og:site_name', 'B4P CODEFOUND');
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', metadata.title);
    upsertMeta('name', 'twitter:description', metadata.description);
    upsertMeta('name', 'twitter:image', image);
    upsertMeta('name', 'twitter:image:alt', metadata.title);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[data-site-canonical]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      canonical.dataset.siteCanonical = 'true';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }, [location]);

  return null;
}