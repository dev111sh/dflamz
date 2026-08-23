import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { EVENTS, EVENT_FILTERS, ROSTER, LINKS } from "../data/site.js";
import Reveal from "../components/Reveal.jsx";
import Media from "../components/Media.jsx";
import Btn from "../components/Btn.jsx";
import PageHead from "../components/PageHead.jsx";

const rosterBySlug = Object.fromEntries(ROSTER.map(d => [d.slug, d]));

const parse = iso => new Date(iso + "T00:00:00");
const dayOf = iso => parse(iso).toLocaleDateString("en-GB", { day: "numeric" });
const monthOf = iso => parse(iso).toLocaleDateString("en-GB", { month: "short" });
const yearOf = iso => parse(iso).toLocaleDateString("en-GB", { year: "numeric" });
const weekdayOf = iso => parse(iso).toLocaleDateString("en-GB", { weekday: "short" });

/* Headline act first, then supporting DJs — resolved to roster entries. */
const lineupOf = ev =>
  [ev.dj, ...(ev.lineup || [])]
    .filter(Boolean)
    .filter((s, i, a) => a.indexOf(s) === i)
    .map(s => rosterBySlug[s])
    .filter(Boolean);

function DateTile({ iso, past }) {
  return (
    <div className={`dtile${past ? " dtile--past" : ""}`} aria-hidden="true">
      <b>{dayOf(iso)}</b>
      <span>{monthOf(iso)}</span>
      <i>{yearOf(iso)}</i>
    </div>
  );
}

/* The next upcoming event — the most valuable slot on the page. */
function FeaturedEvent({ ev }) {
  const navigate = useNavigate();
  const acts = lineupOf(ev);
  const go = () => navigate(`/events/${ev.slug}`);
  return (
    <Reveal className="evf">
      <div className="evf__media" onClick={go} role="button" tabIndex={0}
        onKeyDown={e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(); } }}
        aria-label={`View event: ${ev.title}`}>
        <Media slot={ev.img} mono={ev.title.slice(0, 2).toUpperCase()} alt={ev.title} ratio="16 / 9" />
        <span className="evf__flag">Next up</span>
        {ev.sponsored && <span className="ev-card__chip">Featured</span>}
      </div>
      <div className="evf__c">
        <div className="evf__head">
          <DateTile iso={ev.date} />
          <div>
            <span className="evf__when">
              {ev.endDate
                ? `${weekdayOf(ev.date)} – ${weekdayOf(ev.endDate)}`
                : ev.time
                ? `${weekdayOf(ev.date)} · ${ev.time}`
                : weekdayOf(ev.date)}
            </span>
            <h3 className="evf__t">
              <button className="evf__link" onClick={go}>{ev.title}</button>
            </h3>
            <p className="evf__venue">{ev.venue}, {ev.city}</p>
          </div>
        </div>
        {acts.length > 0 && (
          <p className="evf__lineup">
            <span className="pd__label">Lineup</span>
            {acts.map((d, i) => (
              <span key={d.slug}>
                {i > 0 && <em> · </em>}
                <button className="larrow evf__act" onClick={() => navigate(`/dj/${d.slug}`)}>{d.name}</button>
              </span>
            ))}
          </p>
        )}
        <p className="evf__blurb">{ev.blurb}</p>
        <div className="tags">
          {ev.tags.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
        <div className="row-btns evf__btns">
          {ev.ticketUrl
            ? <Btn lg href={ev.ticketUrl} target="_blank" rel="noreferrer">Get Tickets</Btn>
            : <Btn lg onClick={go}>View event</Btn>}
          {ev.ticketUrl && <Btn kind="outline" lg onClick={go}>Details</Btn>}
          {ev.price && <span className="evf__price">{ev.price}</span>}
        </div>
      </div>
    </Reveal>
  );
}

function EventCard({ ev, past }) {
  const navigate = useNavigate();
  const acts = lineupOf(ev);
  const go = () => navigate(`/events/${ev.slug}`);
  return (
    <Reveal className="ev-card-wrap">
      <div
        className={`ev-card ev-card--link${past ? " ev-card--past" : ""}`}
        role="button"
        tabIndex={0}
        onClick={go}
        onKeyDown={e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(); } }}
        aria-label={`View event: ${ev.title}`}
      >
        <div className="ev-card__media">
          <Media slot={ev.img} mono={ev.title.slice(0, 2).toUpperCase()} alt={ev.title} ratio="16 / 9" />
          {ev.sponsored && <span className="ev-card__chip">Featured</span>}
          {past && <span className="ev-card__chip ev-card__chip--past">Past event</span>}
        </div>
        <div className="ev-card__b">
          <div className="ev-card__row">
            <DateTile iso={ev.date} past={past} />
            <div className="ev-card__head">
              <h3 className="ev-card__t">{ev.title}</h3>
              <p className="ev-card__meta">{ev.endDate || !ev.time ? `${ev.venue}, ${ev.city}` : `${ev.time} · ${ev.venue}, ${ev.city}`}</p>
              {acts.length > 0 && (
                <p className="ev-card__acts">{acts.map(d => d.name).join(" · ")}</p>
              )}
            </div>
          </div>
          <div className="tags">
            {ev.tags.map(t => <span key={t} className="tag">{t}</span>)}
          </div>
          <p className="ev-card__blurb">{ev.blurb}</p>
          <div className="ev-card__foot">
            <span className="pcard__view">View event →</span>
            {!past && ev.price && <span className="ev-card__price">{ev.price}</span>}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Events() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("All");

  const { upcoming, past } = useMemo(() => {
    const today = new Date().toISOString().slice(0, 10);
    const up = EVENTS.filter(e => (e.endDate ?? e.date) >= today).sort((a, b) => a.date.localeCompare(b.date));
    const pa = EVENTS.filter(e => (e.endDate ?? e.date) < today).sort((a, b) => b.date.localeCompare(a.date));
    return { upcoming: up, past: pa };
  }, []);

  const [featured, ...restUpcoming] = upcoming;

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
              <>
                <FeaturedEvent ev={featured} />
                {restUpcoming.length > 0 && (
                  <div className="ev-grid">
                    {restUpcoming.map(ev => <EventCard key={ev.slug} ev={ev} />)}
                  </div>
                )}
              </>
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
