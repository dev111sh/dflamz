import { useNavigate } from "react-router-dom";
import { useMemo, useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { ROSTER, STATS } from "../data/site.js";
import Reveal from "../components/Reveal.jsx";
import Eyebrow from "../components/Eyebrow.jsx";
import Btn from "../components/Btn.jsx";
import dflamzBrand from "../assets/Dflamz-logo-main.png";
import Ticker from "../components/Ticker.jsx";
import SectionHead from "../components/SectionHead.jsx";
import RosterCard from "../components/RosterCard.jsx";
import PartnerWall from "../components/PartnerWall.jsx";
import AlliesSection from "../components/AlliesSection.jsx";
import GalleryMarquee from "../components/GalleryMarquee.jsx";
import CtaBand from "../components/CtaBand.jsx";

const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

/* Mirrors the .roster grid breakpoints in global.css (980px / 600px).
   2 columns fits 4 cards as a clean 2x2; 1 and 3 columns both fill exactly on 3. */
const columnsFor = (w) => (w <= 600 ? 1 : w <= 980 ? 2 : 3);
const countFor = (cols) => (cols === 2 ? 4 : 3);
const readCount = () => countFor(columnsFor(window.innerWidth));

export default function Home() {
  const navigate = useNavigate();
  const [count, setCount] = useState(3);
  useEffect(() => {
    const onResize = () => setCount(readCount());
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  const pool = useMemo(() => shuffle(ROSTER), []);
  const featured = pool.slice(0, count);
  return (
    <>
      <Helmet>
        <title>D'Flamz Nation | Africa's Premier DJ Management Crew</title>
        <meta name="description" content="D'Flamz Nation books, manages and represents top DJs across Nigeria, the UK and beyond. Direct booking for venues, festivals and residencies, no middlemen." />
      </Helmet>
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
              <Btn kind="outline" lg onClick={() => navigate("/projects")}>View Projects</Btn>
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
          n="01" eyebrow="Our DJs" title=""
          action={<button className="larrow" onClick={() => navigate("/gangofdjs")}>See all →</button>}
        />
        <div className="roster">
          {featured.map((dj, i) => <RosterCard key={i} dj={dj} />)}
        </div>
        <div className="row-btns" style={{ justifyContent: "center", marginTop: "2rem" }}>
          <Btn lg onClick={() => navigate("/gangofdjs")}>Meet the full Gang</Btn>
        </div>
      </section>

      <section className="section section--t">
        <SectionHead n="02" eyebrow="Behind The Decks" title="Gallery" />
        <GalleryMarquee />
      </section>

      <section className="section">
        <SectionHead n="03" eyebrow="Esteemed Clients" title="Clients (Past & Present)" />
        <PartnerWall />
      </section>

      <AlliesSection />

      <CtaBand />
    </>
  );
}