import { go } from "../hooks/useHashRoute.js";
import { ROSTER, STATS } from "../data/site.js";
import Reveal from "../components/Reveal.jsx";
import Eyebrow from "../components/Eyebrow.jsx";
import Btn from "../components/Btn.jsx";
import Media from "../components/Media.jsx";
import VinylMark from "../components/VinylMark.jsx";
import Ticker from "../components/Ticker.jsx";
import SectionHead from "../components/SectionHead.jsx";
import RosterCard from "../components/RosterCard.jsx";
import PartnerWall from "../components/PartnerWall.jsx";
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

      <ListenSection compact />

      <section className="section">
        <SectionHead n="02" eyebrow="Esteemed Clients" title="Who We Work With" />
        <PartnerWall />
      </section>

      <CtaBand />
    </>
  );
}
