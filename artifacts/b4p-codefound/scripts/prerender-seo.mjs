import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outputRoot = path.join(projectRoot, 'dist', 'public');
const siteUrl = 'https://b4pcodefound.org';
const defaultImage = `${siteUrl}/brand/b4p-og-source.png`;

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function decodeTitle(value) {
  return value
    .replaceAll('&#8217;', '’')
    .replaceAll('&#039;', "'")
    .replaceAll('&#038;', '&')
    .replaceAll('&amp;', '&');
}

function replaceMeta(html, attribute, key, value) {
  const expression = new RegExp(`<meta ${attribute}="${key}"[^>]*>`);
  return html.replace(expression, `<meta ${attribute}="${key}" content="${escapeHtml(value)}" />`);
}

function renderHead(shell, metadata) {
  let html = shell.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(metadata.title)}</title>`);
  html = replaceMeta(html, 'name', 'description', metadata.description);
  html = replaceMeta(html, 'name', 'robots', metadata.indexable === false ? 'noindex, follow' : 'index, follow');
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

const routeRegistry = JSON.parse(
  await readFile(path.join(projectRoot, 'src', 'data', 'route-metadata.json'), 'utf8'),
);
const routes = new Map(routeRegistry.map((metadata) => [metadata.path, metadata]));
routes.set('/programs-libera', {
  path: '/programs-libera',
  canonicalPath: '/programs/liberia',
  title: 'Liberia Programs | B4P CODEFOUND',
  description: 'Explore B4P CODEFOUND programs rooted in Liberian communities.',
  image: '/images/conference/day-2-community-01.jpg',
  indexable: false,
});

const programSource = await readFile(path.join(projectRoot, 'src', 'data', 'programs.ts'), 'utf8');
const programPattern = /\{\s*slug: '([^']+)',\s*title: '([^']+)',\s*description: '([^']+)',\s*region: '(global|usa|liberia)',\s*image: '([^']+)'/g;
for (const match of programSource.matchAll(programPattern)) {
  const [, slug, title, description, region, image] = match;
  const routePath = `/programs/${region}/${slug}`;
  routes.set(routePath, {
    path: routePath,
    title: `${title} | B4P CODEFOUND`,
    description,
    image,
    indexable: true,
  });
}

const legacyIndex = JSON.parse(
  await readFile(path.join(projectRoot, 'public', 'content', 'legacy-page-index.json'), 'utf8'),
);
for (const legacy of legacyIndex) {
  if (legacy.path === '/' || routes.has(legacy.path)) continue;
  const title = decodeTitle(legacy.title.trim()) || 'B4P CODEFOUND';
  routes.set(legacy.path, {
    path: legacy.path,
    title: `${title} | B4P CODEFOUND`,
    description: `Learn more about ${title} and B4P CODEFOUND’s peacebuilding and community development work.`,
    indexable: false,
  });
}

const shell = await readFile(path.join(outputRoot, 'index.html'), 'utf8');
for (const metadata of routes.values()) {
  if (metadata.path === '/') continue;
  const canonicalPath = metadata.canonicalPath ?? metadata.path;
  const rendered = renderHead(shell, {
    ...metadata,
    canonical: `${siteUrl}${canonicalPath}`,
    image: metadata.image ? `${siteUrl}${metadata.image}` : defaultImage,
    type: metadata.type ?? 'website',
  });
  const routePath = metadata.path.slice(1).replace(/\/+$/, '');
  const outputPaths = [
    path.join(outputRoot, `${routePath}.html`),
    path.join(outputRoot, routePath, 'index.html'),
  ];
  for (const outputPath of outputPaths) {
    await mkdir(path.dirname(outputPath), { recursive: true });
    await writeFile(outputPath, rendered);
  }
}

console.log(`Prerendered crawler metadata for ${routes.size} supported routes.`);