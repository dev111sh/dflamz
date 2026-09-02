import { useParams, useNavigate, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { EVENTS, ROSTER } from "../data/site.js";
import Reveal from "../components/Reveal.jsx";
import Eyebrow from "../components/Eyebrow.jsx";
import Btn from "../components/Btn.jsx";
import Media from "../components/Media.jsx";
import SectionHead from "../components/SectionHead.jsx";
import Gallery from "../components/Gallery.jsx";
import CtaBand from "../components/CtaBand.jsx";

const rosterBySlug = Object.fromEntries(ROSTER.map(d => [d.slug, d]));

const fmtLong = iso =>
  new Date(iso + "T00:00:00").toLocaleDateString("en-GB", {
    weekday: "long", day: "numeric", month: "long", year: "numeric",
  });

export default function Event() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const ev = EVENTS.find(e => e.slug === slug);
  if (!ev) return <Navigate to="/events" replace />;

  const past = (ev.endDate ?? ev.date) < new Date().toISOString().slice(0, 10);
  /* Headline act first, then supporting DJs, de-duplicated. */
  const acts = [ev.dj, ...(ev.lineup || [])]
    .filter(Boolean)
    .filter((s, i, a) => a.indexOf(s) === i)
    .map(s => rosterBySlug[s])
    .filter(Boolean);

  return (
    <>
      <Helmet>
        <title>{ev.title} | D'Flamz Nation</title>
        <meta name="description" content={ev.description || ev.blurb} />
      </Helmet>

      <section className="section">
        <Reveal>
          <button className="larrow larrow--back" onClick={() => navigate("/events")}>← Back to events</button>
        </Reveal>

        <div className="pd">
          <Reveal className="pd__media evd__media">
            <Media slot={ev.img} mono={ev.title.slice(0, 2).toUpperCase()} alt={ev.title} ratio="16 / 10" className="media--glow" />
          </Reveal>
          <Reveal className="pd__c" delay={100}>
            <Eyebrow n="★">{past ? "Past event" : "Upcoming"}</Eyebrow>
            <h1 className="pd__t">{ev.title}</h1>
            <p className="evd__when">{ev.endDate ? `${fmtLong(ev.date)} – ${fmtLong(ev.endDate)}` : fmtLong(ev.date)}</p>
            <p className="evd__where">{ev.endDate || !ev.time ? `${ev.venue}, ${ev.city}` : `${ev.time} · ${ev.venue}, ${ev.city}`}</p>
            <div className="tags">
              {ev.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
            <p className="lead pd__lead">{ev.description || ev.blurb}</p>
            <div className="row-btns evd__cta">
              {past ? (
                <span className="evd__passed">This event has passed</span>
              ) : ev.ticketUrl ? (
                <>
                  <Btn lg href={ev.ticketUrl} target="_blank" rel="noreferrer">Get Tickets</Btn>
                  {ev.price && <span className="evf__price">{ev.price}</span>}
                </>
              ) : (
                <>
                  <Btn lg onClick={() => navigate("/contact")}>Enquire about this event</Btn>
                  {ev.price && <span className="evf__price">{ev.price}</span>}
                </>
              )}
              {ev.socialUrl && (
                <Btn kind="outline" lg href={ev.socialUrl} target="_blank" rel="noreferrer">View announcement</Btn>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {acts.length > 0 && (
        <section className="section section--t">
          <SectionHead n="—" eyebrow="On the night" title="Lineup" />
          <div className="lineup">
            {acts.map((d, i) => (
              <Reveal key={d.slug} delay={i * 50} className="lineup__i">
                <button className="lineup__b" onClick={() => navigate(`/dj/${d.slug}`)}>
                  <Media slot={d.img} mono={d.mono || "DF"} alt={d.name} ratio="1 / 1" />
                  <span className="lineup__n">{d.name}</span>
                  <span className="lineup__r">{i === 0 ? "Headline" : "Supporting"}</span>
                </button>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {ev.gallery?.length > 0 && (
        <section className="section section--t">
          <SectionHead n="—" eyebrow="Gallery" title="On The Night" />
          <Gallery slots={ev.gallery} />
        </section>
      )}

      <CtaBand />
    </>
  );
}
