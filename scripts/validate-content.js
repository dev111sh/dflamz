import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { ROSTER, PROFILES, PROJECTS, ALLIES, EVENTS } from "../src/data/site.js";

// images.js imports raw .jpg/.png files, which plain Node can't load without
// a bundler. We only need the IMAGES map's key names, so parse them out of
// the source text instead of importing the module.
const __dirname = dirname(fileURLToPath(import.meta.url));
const imagesSrc = readFileSync(join(__dirname, "../src/assets/images.js"), "utf8");
const imagesMatch = imagesSrc.match(/export const IMAGES = \{([\s\S]*?)\};/);
if (!imagesMatch) {
  console.error("Could not find `export const IMAGES = { ... };` in images.js");
  process.exit(1);
}
const IMAGES = Object.fromEntries(
  imagesMatch[1]
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
    .map((key) => [key, true])
);

const errors = [];
const warnings = [];

function err(slug, msg) {
  errors.push(`${slug}: ${msg}`);
}
function warn(slug, msg) {
  warnings.push(`${slug}: ${msg}`);
}

const imageKeys = new Set(Object.keys(IMAGES));
const usedImageKeys = new Set();

function checkImageRef(slug, label, key) {
  if (key == null) return;
  usedImageKeys.add(key);
  if (!imageKeys.has(key)) {
    err(slug, `${label} "${key}" is not a key in IMAGES`);
  }
}

// ROSTER <-> PROFILES consistency
const rosterSlugs = new Set();
for (const entry of ROSTER) {
  const slug = entry.slug ?? "(missing slug)";
  if (!entry.name || !entry.slug || !entry.mono) {
    err(slug, "ROSTER entry missing name, slug or mono");
  }
  if (rosterSlugs.has(slug)) {
    err(slug, "duplicate slug in ROSTER");
  }
  rosterSlugs.add(slug);

  if (entry.img === null) {
    warn(slug, "img is null, renders branded placeholder");
  } else {
    checkImageRef(slug, "ROSTER img", entry.img);
  }

  if (entry.slug && !(entry.slug in PROFILES)) {
    err(slug, "ROSTER slug has no matching key in PROFILES");
  }
}

for (const [key, profile] of Object.entries(PROFILES)) {
  if (!profile.name || !key) {
    err(key, "PROFILES entry missing name or slug");
  }
  if (!rosterSlugs.has(key)) {
    err(key, "PROFILES key has no corresponding ROSTER entry");
  }
  checkImageRef(key, "profile img", profile.img);
  if (Array.isArray(profile.gallery)) {
    for (const g of profile.gallery) checkImageRef(key, "profile gallery entry", g);
  }
  if (profile.draft === true) {
    warn(key, `draft profile (${profile.name})`);
  }
}

// PROJECTS
const projectSlugs = new Set();
for (const p of PROJECTS) {
  const slug = p.slug ?? "(missing slug)";
  if (projectSlugs.has(slug)) err(slug, "duplicate slug in PROJECTS");
  projectSlugs.add(slug);

  if (p.layout !== "gallery" && p.layout !== "editorial") {
    err(slug, `invalid layout "${p.layout}" (must be "gallery" or "editorial")`);
  }
  if (p.layout === "gallery" && !p.img && (!p.gallery || p.gallery.length === 0)) {
    err(slug, 'layout "gallery" has no img and no gallery to render');
  }
  checkImageRef(slug, "project img", p.img);
  if (Array.isArray(p.gallery)) {
    for (const g of p.gallery) checkImageRef(slug, "project gallery entry", g);
  }
}

// ALLIES
const allySlugs = new Set();
for (const a of ALLIES) {
  const slug = a.slug ?? "(missing slug)";
  if (allySlugs.has(slug)) err(slug, "duplicate slug in ALLIES");
  allySlugs.add(slug);
}

// EVENTS
const eventSlugs = new Set();
for (const e of EVENTS) {
  const slug = e.slug ?? "(missing slug)";
  if (eventSlugs.has(slug)) err(slug, "duplicate slug in EVENTS");
  eventSlugs.add(slug);

  checkImageRef(slug, "event img", e.img);
  if (Array.isArray(e.gallery)) {
    for (const g of e.gallery) checkImageRef(slug, "event gallery entry", g);
  }
}

// Orphaned images
for (const key of imageKeys) {
  if (!usedImageKeys.has(key)) {
    warn(key, "IMAGES key is not referenced anywhere in the data");
  }
}

function printBlock(title, list) {
  console.log(`\n${title} (${list.length})`);
  if (list.length === 0) {
    console.log("  none");
    return;
  }
  for (const line of list) console.log(`  - ${line}`);
}

printBlock("Errors", errors);
printBlock("Warnings", warnings);

process.exit(errors.length > 0 ? 1 : 0);
