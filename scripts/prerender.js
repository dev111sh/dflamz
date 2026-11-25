import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { pathToFileURL } from 'node:url';

const SITE = 'https://www.dflamz.com';
const DIST = 'dist';
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

// Load the data modules directly. They must be plain data (no React or image imports).
const { EVENTS, PROJECTS } = await import(pathToFileURL('src/data/site.js').href);
const { ROSTER, PROFILES } = await import(pathToFileURL('src/data/roster.js').href);
const { ALLIES } = await import(pathToFileURL('src/data/partners.js').href);

const routes = [
  ...EVENTS.map(ev => ({
    path: `/events/${ev.slug}`,
    title: `${ev.title} | D'Flamz Nation`,
    desc: ev.blurb,
    image: `/og/events/${ev.slug}.jpg`,
  })),
  ...Object.entries(PROFILES).map(([slug, p]) => ({
    path: `/dj/${slug}`,
    title: `${p.name} | D'Flamz Nation`,
    desc: p.bio,
    image: `/og/dj/${slug}.jpg`,
  })),
];

const template = await readFile(join(DIST, 'index.html'), 'utf8');

for (const r of routes) {
  const url = SITE + r.path;
  const meta = `
    <title>${esc(r.title)}</title>
    <meta name="description" content="${esc(r.desc)}">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="D'Flamz Nation">
    <meta property="og:title" content="${esc(r.title)}">
    <meta property="og:description" content="${esc(r.desc)}">
    <meta property="og:image" content="${SITE}${r.image}">
    <meta property="og:url" content="${url}">
    <meta name="twitter:card" content="summary_large_image">`;

  // Strip any existing title/description/og tags from the shell, then inject ours.
  const html = template
    .replace(/<title>[\s\S]*?<\/title>/i, '')
    .replace(/<meta[^>]+(name|property)="(description|og:[^"]+|twitter:[^"]+)"[^>]*>/gi, '')
    .replace('</head>', `${meta}\n  </head>`);

  const out = join(DIST, r.path, 'index.html');
  await mkdir(dirname(out), { recursive: true });
  await writeFile(out, html);
}

console.log(`Prerendered ${routes.length} pages`);