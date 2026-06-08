import { go } from "../hooks/useHashRoute.js";
import { ROSTER, AFFILIATE, CLIENTS, STATS } from "../data/site.js";
import Reveal from "../components/Reveal.jsx";
import Eyebrow from "../components/Eyebrow.jsx";
import Btn from "../components/Btn.jsx";
import Media from "../components/Media.jsx";
import VinylMark from "../components/VinylMark.jsx";
import Ticker from "../components/Ticker.jsx";
import SectionHead from "../components/SectionHead.jsx";
import RosterCard from "../components/RosterCard.jsx";
import ListenSection from "../components/ListenSection.jsx";
import CtaBand from "../components/CtaBand.jsx";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="vinyl-bg" />
        <div className="hero__glow" />
        <div className="hero__in">
          <Reveal className="hero__c">
            <Eyebrow n="★">Africa's Premier DJ Management Crew</Eyebrow>
            <h1 className="hero__t">D'FLAMZ<br /><span>NATION</span></h1>
            <p className="hero__s">Nigeria's most dynamic DJ management, training and entertainment company — building global careers and delivering world-class DJ services across venues, festivals and residencies.</p>
            <div className="row-btns">
              <Btn lg onClick={() => go("contact")}>Book a DJ</Btn>
              <Btn kind="outline" lg onClick={() => go("presskit")}>Press Kit</Btn>
            </div>
            <div className="hero__meta">
              {STATS.map(s => (
                <div key={s.l} className="hero__stat"><b>{s.n}</b><span>{s.l}</span></div>
              ))}
            </div>
          </Reveal>
          <Reveal className="hero__media" delay={140}>
            <Media slot="flammzy" ratio="4 / 5" alt="DJ Flammzy" className="media--glow" />
            <div className="hero__chip"><VinylMark size={16} /> Est. Lagos · London</div>
          </Reveal>
        </div>
      </section>

      <Ticker />

      <section className="section">
        <SectionHead
          n="01" eyebrow="Our Artists" title="The Roster"
          action={<button className="larrow" onClick={() => go("artists")}>See all artists →</button>}
        />
        <div className="roster">
          {ROSTER.map((dj, i) => <RosterCard key={i} dj={dj} />)}
        </div>
      </section>

      <section className="section section--t">
        <SectionHead n="02" eyebrow="Affiliated Artist" title="In The Network" />
        <Reveal className="feat-strip" onClick={() => go("artist:jd")}>
          <Media slot="jd" ratio="1 / 1" className="feat-strip__img" alt="Vibemaster JD" />
          <div className="feat-strip__b">
            <span className="feat-strip__role">{AFFILIATE.role}</span>
            <h3 className="feat-strip__n">Vibemaster JD</h3>
            <p className="feat-strip__d">Boston radio host and Afrobeats culture amplifier — and a frequent D'Flamz collaborator on record and on the bill.</p>
            <div className="tags">{AFFILIATE.tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
            <span className="rc__view">View profile →</span>
          </div>
        </Reveal>
      </section>

      <ListenSection compact />

      <section className="section">
        <SectionHead n="03" eyebrow="Esteemed Clients" title="Who We Work With" />
        <Reveal className="clients">
          {CLIENTS.map(c => <span key={c} className="clients__i">{c}</span>)}
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
