import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { getProgram, programRegions } from '@/data/programs';

const SITE_URL = 'https://b4pcodefound.org';
const DEFAULT_IMAGE = `${SITE_URL}/brand/b4p-og-source.png`;

type PageMetadata = {
  title: string;
  description: string;
  image?: string;
  type?: 'website' | 'article';
  canonicalPath?: string;
};

const pageMetadata: Record<string, PageMetadata> = {
  '/': {
    title: 'B4P CODEFOUND | Peacebuilding & Community Development',
    description: 'B4P CODEFOUND is an African-led nonprofit and social enterprise advancing peacebuilding, community development, and women’s leadership across Liberia, the United States, and beyond.',
  },
  '/about-us': {
    title: 'About B4P CODEFOUND | African-Led Community Development',
    description: 'Learn how B4P CODEFOUND connects peacebuilding, economic development, and inclusive leadership across Liberia, the United States, and global communities.',
  },
  '/about': {
    title: 'Our Impact | B4P CODEFOUND',
    description: 'Explore the people-centered impact of B4P CODEFOUND, from women’s leadership and youth opportunity to stronger communities and collective action.',
  },
  '/our-impact': {
    title: 'Our Impact | B4P CODEFOUND',
    description: 'Explore the people-centered impact of B4P CODEFOUND, from women’s leadership and youth opportunity to stronger communities and collective action.',
  },
  '/our-core-values': {
    title: 'Core Values | B4P CODEFOUND',
    description: 'Explore the principles that guide B4P CODEFOUND’s African-led peacebuilding, community development, and collective action.',
  },
  '/core-values': {
    title: 'Core Values | B4P CODEFOUND',
    description: 'Explore the principles that guide B4P CODEFOUND’s African-led peacebuilding, community development, and collective action.',
  },
  '/what-we-do': {
    title: 'What We Do | B4P CODEFOUND',
    description: 'Discover B4P CODEFOUND’s peacebuilding, economic development, regional programs, and organizational support for community-led change.',
  },
  '/programs': {
    title: 'Programs | B4P CODEFOUND',
    description: 'Explore B4P CODEFOUND programs connecting local knowledge, global exchange, leadership, peacebuilding, and economic opportunity.',
  },
  '/peacebuilding-program': {
    title: 'Peacebuilding Programs | B4P CODEFOUND',
    description: 'B4P CODEFOUND facilitates dialogue, builds conflict-resolution capacity, and equips communities with practical tools for lasting peace.',
  },
  '/economic-development-program': {
    title: 'Economic Development | B4P CODEFOUND',
    description: 'B4P CODEFOUND supports women and youth through enterprise, agriculture, mentorship, financial literacy, and access to opportunity.',
  },
  '/services': {
    title: 'Services for Mission-Driven Work | B4P CODEFOUND',
    description: 'Explore B4P CODEFOUND services for fiscal sponsorship, nonprofit capacity building, and business development.',
  },
  '/b4p-services': {
    title: 'Services for Mission-Driven Work | B4P CODEFOUND',
    description: 'Explore B4P CODEFOUND services for fiscal sponsorship, nonprofit capacity building, and business development.',
  },
  '/services/fiscal-sponsorship': {
    title: 'Fiscal Sponsorship | B4P CODEFOUND Services',
    description: 'Learn about B4P CODEFOUND’s fiscal sponsorship pathway for mission-aligned projects and community initiatives.',
  },
  '/services/nonprofit-capacity-building': {
    title: 'Nonprofit Capacity Building | B4P CODEFOUND',
    description: 'Explore practical support that helps nonprofit organizations strengthen leadership, planning, and internal systems.',
  },
  '/services/business-development': {
    title: 'Business Development Services | B4P CODEFOUND',
    description: 'Explore B4P CODEFOUND support for enterprise capacity, mentorship, financial literacy, digital skills, and opportunity.',
  },
  '/columbus-women-connect': {
    title: 'Columbus Women Connect | B4P CODEFOUND',
    description: 'Columbus Women Connect is a multicultural network helping women connect, lead, advocate, and thrive across cultures and generations.',
  },
  '/the-directors-corner': {
    title: 'The Director’s Corner | B4P CODEFOUND',
    description: 'Read a message from Lindora Kolu Howard-Diawara, Founder and Executive Director of B4P CODEFOUND.',
    image: `${SITE_URL}/images/team/team-lindora-management.png`,
    type: 'article',
  },
  '/directors-corner': {
    title: 'The Director’s Corner | B4P CODEFOUND',
    description: 'Read a message from Lindora Kolu Howard-Diawara, Founder and Executive Director of B4P CODEFOUND.',
    image: `${SITE_URL}/images/team/team-lindora-management.png`,
    type: 'article',
    canonicalPath: '/the-directors-corner',
  },
  '/director': {
    title: 'The Director’s Corner | B4P CODEFOUND',
    description: 'Read a message from Lindora Kolu Howard-Diawara, Founder and Executive Director of B4P CODEFOUND.',
    image: `${SITE_URL}/images/team/team-lindora-management.png`,
    type: 'article',
    canonicalPath: '/the-directors-corner',
  },
  '/the-management-team': {
    title: 'Management Team | B4P CODEFOUND',
    description: 'Meet the team driving B4P CODEFOUND’s global-local peacebuilding, community development, and leadership work.',
  },
  '/the-board': {
    title: 'Board of Directors | B4P CODEFOUND',
    description: 'Meet the board guiding B4P CODEFOUND’s strategic vision, accountability, and community impact.',
  },
  '/advisory-council': {
    title: 'Advisory Council | B4P CODEFOUND',
    description: 'Learn about the advisors supporting B4P CODEFOUND across peacebuilding, development, philanthropy, and community engagement.',
  },
  '/where-we-work': {
    title: 'Where We Work | B4P CODEFOUND',
    description: 'See how B4P CODEFOUND connects communities and partners across Liberia, the United States, and global networks.',
  },
  '/theory-of-change': {
    title: 'Theory of Change | B4P CODEFOUND',
    description: 'Understand how B4P CODEFOUND turns local leadership, practical tools, and collective action into lasting community change.',
  },
  '/contact': {
    title: 'Contact B4P CODEFOUND',
    description: 'Connect with B4P CODEFOUND about programs, partnerships, volunteering, donations, and community-led peacebuilding.',
  },
  '/site-directory': {
    title: 'Site Directory | B4P CODEFOUND',
    description: 'Browse B4P CODEFOUND pages, programs, services, leadership information, and ways to get involved.',
  },
  '/become-a-volunteer': {
    title: 'Volunteer with B4P CODEFOUND',
    description: 'Share your time and skills with B4P CODEFOUND and support African-led peacebuilding, development, and leadership.',
  },
  '/internship': {
    title: 'Internships at B4P CODEFOUND',
    description: 'Learn alongside B4P CODEFOUND through a mission-led internship focused on community, leadership, and practical change.',
  },
  '/jobs': {
    title: 'Jobs at B4P CODEFOUND',
    description: 'Explore current and future opportunities to join B4P CODEFOUND’s peacebuilding and community development work.',
  },
};

const regionAliases: Record<string, keyof typeof programRegions> = {
  global: 'global',
  usa: 'usa',
  liberia: 'liberia',
};

function getMetadata(pathname: string): PageMetadata {
  const exact = pageMetadata[pathname];
  if (exact) return exact;

  const regionMatch = pathname.match(/^\/programs\/(global|usa|liberia)$/);
  if (regionMatch) {
    const region = programRegions[regionAliases[regionMatch[1]]];
    return {
      title: `${region.title} | B4P CODEFOUND`,
      description: region.intro,
    };
  }

  const detailMatch = pathname.match(/^\/programs\/(global|usa|liberia)\/([^/]+)$/);
  if (detailMatch) {
    const regionKey = regionAliases[detailMatch[1]];
    const program = getProgram(regionKey, detailMatch[2]);
    if (program) {
      return {
        title: `${program.title} | B4P CODEFOUND`,
        description: program.description,
        image: `${SITE_URL}${program.image}`,
      };
    }
  }

  return {
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
    const image = metadata.image ?? DEFAULT_IMAGE;

    document.title = metadata.title;
    upsertMeta('name', 'description', metadata.description);
    upsertMeta('name', 'robots', 'index, follow');
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