import { useParams, useNavigate, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { PROJECTS, ALLIES, CLIENTS } from "../data/site.js";
import Reveal from "../components/Reveal.jsx";
import Eyebrow from "../components/Eyebrow.jsx";
import Btn from "../components/Btn.jsx";
import Media from "../components/Media.jsx";
import SectionHead from "../components/SectionHead.jsx";
import Gallery from "../components/Gallery.jsx";
import CtaBand from "../components/CtaBand.jsx";

/* Partner logos live alongside client logos in src/assets/logos/. */
const LOGO_URLS = import.meta.glob("../assets/logos/*", { eager: true, import: "default" });
const logoSrc = file => file && LOGO_URLS[`../assets/logos/${file}`];

/* name -> logo filename, so a project's `partners` entry can render its mark. */
const PARTNER_LOGOS = Object.fromEntries(
  [...ALLIES.map(a => [a.name, a.logo]), ...CLIENTS.map(c => [c.name, c.logo])]
);

/* The editorial hero numeral is a graphic element, not a data field — pull
   the leading year out of strings like "2025 to present" so it stays a
   clean number instead of overflowing on mobile. The full string is still
   shown verbatim in the meta line beneath it. */
const yearNumeral = y => y?.match(/\d{4}/)?.[0] || y;

function Stats({ p, editorial }) {
  if (!p.stats?.length) return null;
  return (
    <Reveal className={`pstats${editorial ? " pstats--editorial" : ""}`}>
      {p.stats.map(s => (
        <div key={s.l} className="pstat"><b>{s.n}</b><span>{s.l}</span></div>
      ))}
    </Reveal>
  );
}

export default function Project() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const i = PROJECTS.findIndex(p => p.slug === slug);
  if (i === -1) return <Navigate to="/projects" replace />;

  const p = PROJECTS[i];
  const next = PROJECTS[(i + 1) % PROJECTS.length];
  const hasHighlights = p.highlights?.length > 0;
  const hasPartners = p.partners?.length > 0;
  const editorial = p.layout === "editorial";
  /* Editorial is a strictly no-imagery layout — even a project with gallery
     entries on file (from before it was retagged) must not show a Gallery
     section here, or "no images anywhere" would be broken. */
  const hasGallery = !editorial && p.gallery?.length > 0;

  return (
    <>
      <Helmet>
        <title>{p.title} | D'Flamz Nation</title>
        <meta name="description" content={p.summary} />
      </Helmet>

      {editorial ? (
        /* No images anywhere on this layout — the absence of imagery is
           the design, not a gap waiting to be filled. */
        <section className="section">
          <Reveal>
            <button className="larrow larrow--back" onClick={() => navigate("/projects")}>← Back to projects</button>
          </Reveal>

          <Reveal className="ped">
            <span className="ped__year" aria-hidden="true">{yearNumeral(p.year)}</span>
            <h1 className="ped__t">{p.title}</h1>
            <p className="ped__meta">{p.location}</p>
            <div className="tags ped__tags">
              {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
            <p className="ped__lead">{p.summary}</p>
          </Reveal>

          <div className="ped__rule" />

          <Stats p={p} editorial />

          <Reveal className="pd__prose ped__prose">
            <p>{p.body}</p>
          </Reveal>

          {hasHighlights && (
            <Reveal className="pd__hlwrap">
              <span className="pd__label">Highlights</span>
              <ul className="proj__hl proj__hl--editorial">
                {p.highlights.map((h, j) => <li key={j}>{h}</li>)}
              </ul>
            </Reveal>
          )}

          {hasPartners && (
            <Reveal className="pd__partners">
              <span className="pd__label">In partnership with</span>
              <p className="ped__partners">{p.partners.join(' · ')}</p>
            </Reveal>
          )}
        </section>
      ) : (
        <section className="section">
          <Reveal>
            <button className="larrow larrow--back" onClick={() => navigate("/projects")}>← Back to projects</button>
          </Reveal>

          <div className="pd">
            <Reveal className="pd__media">
              <Media slot={p.img} mono={p.title.slice(0, 2).toUpperCase()} alt={p.title} ratio="4 / 3" className="media--glow" />
            </Reveal>
            <Reveal className="pd__c" delay={100}>
              <Eyebrow n="★">{p.year} · {p.location}</Eyebrow>
              <h1 className="pd__t">{p.title}</h1>
              <div className="tags">
                {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
              <p className="lead pd__lead">{p.summary}</p>
            </Reveal>
          </div>

          <Stats p={p} />

          <Reveal className="pd__prose">
            <p>{p.body}</p>
          </Reveal>

          {hasHighlights && (
            <Reveal className="pd__hlwrap">
              <span className="pd__label">Highlights</span>
              <ul className="proj__hl">
                {p.highlights.map((h, j) => <li key={j}>{h}</li>)}
              </ul>
            </Reveal>
          )}

          {hasPartners && (
            <Reveal className="pd__partners">
              <span className="pd__label">In partnership with</span>
              <div className="pd__plist">
                {p.partners.map(name => {
                  const src = logoSrc(PARTNER_LOGOS[name]);
                  return (
                    <div key={name} className="pd__partner">
                      {src && <span className="pd__plogo"><img src={src} alt={name} loading="lazy" /></span>}
                      <b>{name}</b>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          )}
        </section>
      )}

      {hasGallery && (
        <section className="section section--t">
          <SectionHead n="—" eyebrow="Gallery" title="In Frame" />
          <Gallery slots={p.gallery} />
        </section>
      )}

      <section className="section section--t">
        <Reveal className="pnext">
          <button className="pnext__b" onClick={() => navigate(`/projects/${next.slug}`)}>
            <span className="pd__label">Next project</span>
            <strong className="pnext__t">{next.title}</strong>
            <span className="pnext__meta">{next.year} · {next.location}</span>
            <span className="pcard__view">View project →</span>
          </button>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
