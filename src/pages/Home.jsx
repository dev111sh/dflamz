import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ROSTER, STATS } from "../data/site.js";
import Reveal from "../components/Reveal.jsx";
import Eyebrow from "../components/Eyebrow.jsx";
import Btn from "../components/Btn.jsx";
import dflamzBrand from "../assets/dflamz-brand.png";
import Ticker from "../components/Ticker.jsx";
import SectionHead from "../components/SectionHead.jsx";
import RosterCard from "../components/RosterCard.jsx";
import PartnerWall from "../components/PartnerWall.jsx";
import ListenSection from "../components/ListenSection.jsx";
import CtaBand from "../components/CtaBand.jsx";

function pickRandom(arr, n) {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, n);
}

export default function Home() {
  const navigate = useNavigate();
  const [featured] = useState(() => pickRandom(ROSTER, 6));
  return (
    <>
      <section className="hero hero--center">
        <div className="vinyl-bg" />
        <div className="hero__glow" />
        <div className="hero__in hero__in--center">
          <Reveal className="hero__c">
            <img src={dflamzBrand} alt="D'Flamz" className="hero__logo" />
            <Eyebrow n="★">Africa's Premier DJ Management Crew</Eyebrow>
            <p className="hero__s">The most dynamic DJ booking, management,and entertainment company, giving global recognition, building careers and delivering world-class DJ services across venues, festivals and residencies.</p>
            <div className="row-btns">
              <Btn lg onClick={() => navigate("/contact")}>Book a DJ</Btn>
              <Btn kind="outline" lg onClick={() => navigate("/presskit")}>Press Kit</Btn>
            </div>
            <div className="hero__meta">
              {STATS.map(s => (
                <div key={s.l} className="hero__stat"><b>{s.n}</b><span>{s.l}</span></div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <Ticker />

      <section className="section">
        <SectionHead
          n="01" eyebrow="Our DJs" title="Gang of DJs"
          action={<button className="larrow" onClick={() => navigate("/gangofdjs")}>See all →</button>}
        />
        <div className="roster">
          {featured.map((dj, i) => <RosterCard key={i} dj={dj} />)}
        </div>
        <div className="row-btns" style={{ justifyContent: "center", marginTop: "2rem" }}>
          <Btn lg onClick={() => navigate("/gangofdjs")}>Meet the full Gang</Btn>
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
