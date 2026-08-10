import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { EVENTS, EVENT_FILTERS, ROSTER, LINKS } from "../data/site.js";
import Reveal from "../components/Reveal.jsx";
import Media from "../components/Media.jsx";
import Btn from "../components/Btn.jsx";
import PageHead from "../components/PageHead.jsx";

const rosterBySlug = Object.fromEntries(ROSTER.map(d => [d.slug, d]));

function fmtDate(iso) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short", year: "numeric" });
}

function EventCard({ ev, past }) {
  const navigate = useNavigate();
  const dj = ev.dj && rosterBySlug[ev.dj];
  return (
    <Reveal className={`ev-card${past ? " ev-card--past" : ""}`}>
      <div className="ev-card__media">
        <Media slot={ev.img} mono={ev.title.slice(0, 2).toUpperCase()} alt={ev.title} ratio="16 / 9" />
        {ev.sponsored && <span className="ev-card__chip">Featured</span>}
        {past && <span className="ev-card__chip ev-card__chip--past">Past event</span>}
      </div>
      <div className="ev-card__b">
        <span className="ev-card__date">{fmtDate(ev.date)}</span>
        <h3 className="ev-card__t">{ev.title}</h3>
        <p className="ev-card__meta">{ev.time} · {ev.venue}, {ev.city}{dj && <> · <button className="larrow" onClick={() => navigate(`/dj/${dj.slug}`)}>{dj.name}</button></>}</p>
        <div className="tags">
          {ev.tags.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
        <p className="ev-card__blurb">{ev.blurb}</p>
        {ev.ticketUrl && (
          <Btn kind="outline" href={ev.ticketUrl} target="_blank" rel="noreferrer">Get Tickets</Btn>
        )}
      </div>
    </Reveal>
  );
}

export default function Events() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("All");

  const { upcoming, past } = useMemo(() => {
    const today = new Date().toISOString().slice(0, 10);
    const up = EVENTS.filter(e => e.date >= today).sort((a, b) => a.date.localeCompare(b.date));
    const pa = EVENTS.filter(e => e.date < today).sort((a, b) => b.date.localeCompare(a.date));
    return { upcoming: up, past: pa };
  }, []);

  return (
    <>
      <Helmet>
        <title>Events | D'Flamz Nation</title>
        <meta name="description" content="Catch D'Flamz Nation DJs live. Upcoming and past events, club nights, festivals and residencies." />
      </Helmet>
      <PageHead
        n="Live"
        title={<>Upcoming <span>Events</span></>}
        intro="Catch our DJs live, from club nights to festival stages."
      />
      <section className="section">
        <div className="seg" role="tablist">
          {EVENT_FILTERS.map(f => (
            <button
              key={f}
              className={`seg__b${filter === f ? " seg__b--on" : ""}`}
              onClick={() => setFilter(f)}
              role="tab" aria-selected={filter === f}
            >{f}</button>
          ))}
        </div>

        {(filter === "All" || filter === "Upcoming") && (
          <div className="ev-block">
            {filter === "All" && <h2 className="h2 ev-block__h">Upcoming</h2>}
            {upcoming.length > 0 ? (
              <div className="ev-grid">
                {upcoming.map(ev => <EventCard key={ev.slug} ev={ev} />)}
              </div>
            ) : (
              <div className="events__empty">
                <p>No events on the calendar right now. Follow <a href={LINKS.ig} target="_blank" rel="noreferrer">@dflamzz</a> for announcements.</p>
                <Btn lg onClick={() => navigate("/contact")}>Book a DJ</Btn>
              </div>
            )}
          </div>
        )}

        {(filter === "All" || filter === "Past") && past.length > 0 && (
          <div className="ev-block">
            {filter === "All" && <h2 className="h2 ev-block__h">Past</h2>}
            <div className="ev-grid">
              {past.map(ev => <EventCard key={ev.slug} ev={ev} past />)}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
