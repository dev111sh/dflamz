import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { PROJECTS } from "../data/site.js";
import Reveal from "../components/Reveal.jsx";
import Media from "../components/Media.jsx";
import PageHead from "../components/PageHead.jsx";
import CtaBand from "../components/CtaBand.jsx";

/* The big display numeral is a graphic anchor, not a data field — pull the
   leading year out of strings like "2025 to present" so it stays a clean
   number instead of overflowing the card. The full string still appears
   verbatim in the meta line beneath it. */
const yearNumeral = y => y?.match(/\d{4}/)?.[0] || y;

/* Index only — the full body copy lives on /projects/<slug>. */
export default function Projects() {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Projects | D'Flamz Nation</title>
        <meta name="description" content="Selected work and events from D'Flamz Nation, from our flagship Global Sound nights to festivals, artist campaigns and talent development programmes." />
      </Helmet>
      <PageHead
        n="Our Work"
        title={<>Selected <span>Projects</span></>}
        intro="A look at the events, campaigns and partnerships behind the D'Flamz name, from flagship nights to festivals and artist promotions."
      />
      <section className="section">
        <div className="pgrid">
          {PROJECTS.map((p, i) => {
            const editorial = p.layout === "editorial";
            return (
              <Reveal key={p.slug} delay={i * 60} className="pcard-wrap">
                <div
                  className="pcard pcard--link"
                  role="button"
                  tabIndex={0}
                  onClick={() => navigate(`/projects/${p.slug}`)}
                  onKeyDown={e => {
                    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); navigate(`/projects/${p.slug}`); }
                  }}
                  aria-label={`View project: ${p.title}`}
                >
                  {editorial ? (
                    <div className="pcard__yearwrap" aria-hidden="true">
                      <span className="pcard__year">{yearNumeral(p.year)}</span>
                    </div>
                  ) : (
                    <Media slot={p.img} mono={p.title.slice(0, 2).toUpperCase()} alt={p.title} ratio="16 / 10" />
                  )}
                  <div className="pcard__b">
                    <span className="pcard__meta">{p.year} · {p.location}</span>
                    <h2 className="pcard__t">{p.title}</h2>
                    <div className="tags">
                      {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                    </div>
                    <p className="pcard__sum">{p.summary}</p>
                    <span className="pcard__view">View project →</span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
