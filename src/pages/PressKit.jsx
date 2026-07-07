import { go } from "../hooks/useHashRoute.js";
import { LINKS, PK_FACTS, STATS, ROSTER } from "../data/site.js";
import Reveal from "../components/Reveal.jsx";
import Eyebrow from "../components/Eyebrow.jsx";
import Btn from "../components/Btn.jsx";
import SectionHead from "../components/SectionHead.jsx";
import RosterCard from "../components/RosterCard.jsx";
import PartnerWall from "../components/PartnerWall.jsx";
import Gallery from "../components/Gallery.jsx";
import ListenSection from "../components/ListenSection.jsx";

export default function PressKit() {
  return (
    <>
      <section className="pk-hero">
        <div className="vinyl-bg" />
        <div className="pk-hero__in">
          <Reveal>
            <Eyebrow n="EPK">Electronic Press Kit</Eyebrow>
            <h1 className="pk-hero__t">D'FLAMZ NATION</h1>
            <p className="pk-hero__s">Everything a venue, promoter, festival or brand needs to book Africa's premier DJ management crew — in one place.</p>
            <div className="row-btns">
              <Btn lg href={LINKS.epkPdf} download>Download EPK (PDF)</Btn>
              <Btn kind="outline" lg onClick={() => go("contact")}>Book Now</Btn>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--t">
        <div className="pk-facts">
          {PK_FACTS.map(([k, v]) => (
            <Reveal key={k} className="pk-fact"><span>{k}</span><b>{v}</b></Reveal>
          ))}
        </div>
      </section>

      <section className="section section--t pk-split">
        <Reveal className="pk-bio">
          <Eyebrow n="01">The Story</Eyebrow>
          <h2 className="h2">Profile</h2>
          <p className="lead">D'Flamz Nation is a DJ booking and management collective connecting top DJs directly with the venues, festivals, brands and event planners who want them — no middlemen.</p>
          <p>The collective trains, develops and manages top-tier DJs for venues, events and residencies across Nigeria, the UK and the US, built on a single belief — that music, properly delivered, is a force of nature. From intimate lounges to festival stages of 5,000+, D'Flamz DJs don't just play music — they own the room. The Gang of DJs network extends that reach with carefully vetted independent talent.</p>
        </Reveal>
        <Reveal className="pk-metrics" delay={120}>
          <Eyebrow n="02">By The Numbers</Eyebrow>
          <div className="pk-metrics__g">
            {STATS.map(s => (
              <div key={s.l} className="pk-metric"><b>{s.n}</b><span>{s.l}</span></div>
            ))}
          </div>
          <div className="pk-press">
            <span className="pk-press__h">Selected recognition</span>
            <ul>
              <li>Best DJ Crew — Rave Award (2023)</li>
              <li>Headies Rookie of the Year — DJ Flammzy (2014)</li>
              <li>Award for Excellence — Premier Records (2024)</li>
            </ul>
          </div>
        </Reveal>
      </section>

      <section className="section">
        <SectionHead
          n="03" eyebrow="The Talent" title="Roster Snapshot"
          action={<button className="larrow" onClick={() => go("artists")}>Full roster →</button>}
        />
        <div className="roster">
          {ROSTER.slice(0, 4).map((dj, i) => <RosterCard key={i} dj={dj} />)}
        </div>
      </section>

      <section className="section section--t">
        <SectionHead n="04" eyebrow="Track Record" title="Clients & Venues" />
        <PartnerWall />
      </section>

      <section className="section">
        <SectionHead n="05" eyebrow="In The Booth" title="Gallery" />
        <Gallery slots={["flammzy", "flammzy2", "tonik", "scan", "famzy", "shawn"]} />
      </section>

      <ListenSection compact />

      <section className="section section--t">
        <Reveal className="pk-contact">
          <Eyebrow n="06">Booking</Eyebrow>
          <h2 className="h2">Get In Touch</h2>
          <div className="pk-contact__g">
            <div><span>Email</span><a href={`mailto:${LINKS.email}`}>{LINKS.email}</a></div>
            <div><span>Based</span><b>Lagos, NG · London, UK</b></div>
            <div><span>Socials</span><b>@dflamzz · @dflamzuk</b></div>
          </div>
          <div className="row-btns">
            <Btn lg onClick={() => go("contact")}>Send a booking enquiry</Btn>
          </div>
        </Reveal>
      </section>
    </>
  );
}
