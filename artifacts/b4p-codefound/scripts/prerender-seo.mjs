import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outputRoot = path.join(projectRoot, 'dist', 'public');
const siteUrl = 'https://b4pcodefound.org';
const defaultImage = `${siteUrl}/brand/b4p-og-source.png`;

const staticMetadata = {
  '/about-us': ['About B4P CODEFOUND | African-Led Community Development', 'Learn how B4P CODEFOUND connects peacebuilding, economic development, and inclusive leadership across Liberia, the United States, and global communities.'],
  '/our-impact': ['Our Impact | B4P CODEFOUND', 'Explore the people-centered impact of B4P CODEFOUND, from women’s leadership and youth opportunity to stronger communities and collective action.'],
  '/what-we-do': ['What We Do | B4P CODEFOUND', 'Discover B4P CODEFOUND’s peacebuilding, economic development, regional programs, and organizational support for community-led change.'],
  '/peacebuilding-program': ['Peacebuilding Programs | B4P CODEFOUND', 'B4P CODEFOUND facilitates dialogue, builds conflict-resolution capacity, and equips communities with practical tools for lasting peace.'],
  '/economic-development-program': ['Economic Development | B4P CODEFOUND', 'B4P CODEFOUND supports women and youth through enterprise, agriculture, mentorship, financial literacy, and access to opportunity.'],
  '/services': ['Services for Mission-Driven Work | B4P CODEFOUND', 'Explore B4P CODEFOUND services for fiscal sponsorship, nonprofit capacity building, and business development.'],
  '/services/fiscal-sponsorship': ['Fiscal Sponsorship | B4P CODEFOUND Services', 'Learn about B4P CODEFOUND’s fiscal sponsorship pathway for mission-aligned projects and community initiatives.'],
  '/services/nonprofit-capacity-building': ['Nonprofit Capacity Building | B4P CODEFOUND', 'Explore practical support that helps nonprofit organizations strengthen leadership, planning, and internal systems.'],
  '/services/business-development': ['Business Development Services | B4P CODEFOUND', 'Explore B4P CODEFOUND support for enterprise capacity, mentorship, financial literacy, digital skills, and opportunity.'],
  '/programs/global': ['Global Programs | B4P CODEFOUND', 'Building exchange, leadership, enterprise, governance, and cultural connection across borders.'],
  '/programs/usa': ['USA Programs | B4P CODEFOUND', 'Community-centered programs that help people navigate opportunity, build relationships, and lead.'],
  '/programs/liberia': ['Liberia Programs | B4P CODEFOUND', 'Locally rooted work supporting livelihoods, health education, youth, and civic participation.'],
  '/columbus-women-connect': ['Columbus Women Connect | B4P CODEFOUND', 'Columbus Women Connect is a multicultural network helping women connect, lead, advocate, and thrive across cultures and generations.'],
  '/the-directors-corner': ['The Director’s Corner | B4P CODEFOUND', 'Read a message from Lindora Kolu Howard-Diawara, Founder and Executive Director of B4P CODEFOUND.'],
  '/the-management-team': ['Management Team | B4P CODEFOUND', 'Meet the team driving B4P CODEFOUND’s global-local peacebuilding, community development, and leadership work.'],
  '/the-board': ['Board of Directors | B4P CODEFOUND', 'Meet the board guiding B4P CODEFOUND’s strategic vision, accountability, and community impact.'],
  '/advisory-council': ['Advisory Council | B4P CODEFOUND', 'Learn about the advisors supporting B4P CODEFOUND across peacebuilding, development, philanthropy, and community engagement.'],
  '/where-we-work': ['Where We Work | B4P CODEFOUND', 'See how B4P CODEFOUND connects communities and partners across Liberia, the United States, and global networks.'],
  '/theory-of-change': ['Theory of Change | B4P CODEFOUND', 'Understand how B4P CODEFOUND turns local leadership, practical tools, and collective action into lasting community change.'],
  '/contact': ['Contact B4P CODEFOUND', 'Connect with B4P CODEFOUND about programs, partnerships, volunteering, donations, and community-led peacebuilding.'],
  '/become-a-volunteer': ['Volunteer with B4P CODEFOUND', 'Share your time and skills with B4P CODEFOUND and support African-led peacebuilding, development, and leadership.'],
  '/internship': ['Internships at B4P CODEFOUND', 'Learn alongside B4P CODEFOUND through a mission-led internship focused on community, leadership, and practical change.'],
  '/jobs': ['Jobs at B4P CODEFOUND', 'Explore current and future opportunities to join B4P CODEFOUND’s peacebuilding and community development work.'],
  '/site-directory': ['Site Directory | B4P CODEFOUND', 'Browse B4P CODEFOUND pages, programs, services, leadership information, and ways to get involved.'],
};

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function replaceMeta(html, attribute, key, value) {
  const expression = new RegExp(`<meta ${attribute}="${key}"[^>]*>`);
  return html.replace(expression, `<meta ${attribute}="${key}" content="${escapeHtml(value)}" />`);
}

function renderHead(shell, metadata) {
  let html = shell.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(metadata.title)}</title>`);
  html = replaceMeta(html, 'name', 'description', metadata.description);
  html = replaceMeta(html, 'property', 'og:title', metadata.title);
  html = replaceMeta(html, 'property', 'og:description', metadata.description);
  html = replaceMeta(html, 'property', 'og:type', metadata.type);
  html = replaceMeta(html, 'property', 'og:url', metadata.canonical);
  html = replaceMeta(html, 'property', 'og:image', metadata.image);
  html = replaceMeta(html, 'property', 'og:image:alt', metadata.title);
  html = replaceMeta(html, 'name', 'twitter:title', metadata.title);
  html = replaceMeta(html, 'name', 'twitter:description', metadata.description);
  html = replaceMeta(html, 'name', 'twitter:image', metadata.image);
  html = replaceMeta(html, 'name', 'twitter:image:alt', metadata.title);
  return html.replace(
    /<link rel="canonical"[^>]*>/,
    `<link rel="canonical" href="${escapeHtml(metadata.canonical)}" data-site-canonical="true" />`,
  );
}

const source = await readFile(path.join(projectRoot, 'src', 'data', 'programs.ts'), 'utf8');
const programs = new Map();
const programPattern = /\{\s*slug: '([^']+)',\s*title: '([^']+)',\s*description: '([^']+)',\s*region: '(global|usa|liberia)',\s*image: '([^']+)'/g;
for (const match of source.matchAll(programPattern)) {
  const [, slug, title, description, region, image] = match;
  programs.set(`/programs/${region}/${slug}`, { title, description, image });
}

const shell = await readFile(path.join(outputRoot, 'index.html'), 'utf8');
const sitemap = await readFile(path.join(outputRoot, 'sitemap.xml'), 'utf8');
const sitemapRoutes = [...sitemap.matchAll(/<loc>https:\/\/b4pcodefound\.org([^<]*)<\/loc>/g)]
  .map((match) => match[1] || '/')
  .filter((route) => route !== '/');
const aliases = [
  { path: '/directors-corner', canonicalPath: '/the-directors-corner' },
  { path: '/director', canonicalPath: '/the-directors-corner' },
];

for (const route of [...sitemapRoutes.map((route) => ({ path: route })), ...aliases]) {
  const program = programs.get(route.path);
  const staticEntry = staticMetadata[route.path] ?? staticMetadata[route.canonicalPath];
  const title = program ? `${program.title} | B4P CODEFOUND` : staticEntry?.[0];
  const description = program?.description ?? staticEntry?.[1];

  if (!title || !description) {
    throw new Error(`Missing prerender metadata for ${route.path}`);
  }

  const canonicalPath = route.canonicalPath ?? route.path;
  const isDirector = canonicalPath === '/the-directors-corner';
  const rendered = renderHead(shell, {
    title,
    description,
    canonical: `${siteUrl}${canonicalPath}`,
    image: program ? `${siteUrl}${program.image}` : isDirector ? `${siteUrl}/images/team/team-lindora-management.png` : defaultImage,
    type: isDirector ? 'article' : 'website',
  });
  const outputPath = path.join(outputRoot, `${route.path.slice(1)}.html`);
  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, rendered);
}

console.log(`Prerendered SEO metadata for ${sitemapRoutes.length + aliases.length} public routes.`);