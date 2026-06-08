import { SERVICES, PROCESS, GANG } from "../data/site.js";
import Reveal from "../components/Reveal.jsx";
import Eyebrow from "../components/Eyebrow.jsx";
import VinylMark from "../components/VinylMark.jsx";
import PageHead from "../components/PageHead.jsx";
import SectionHead from "../components/SectionHead.jsx";
import CtaBand from "../components/CtaBand.jsx";

export default function Services() {
  return (
    <>
      <PageHead
        n="Our Services"
        title={<>What <span>We Do</span></>}
        intro="From single-night bookings to long-term residencies, DJ training to full event production — D'Flamz Nation delivers fire at every level."
      />

      <section className="section">
        <div className="svc">
          {SERVICES.map((s, i) => (
            <Reveal key={s.n} delay={i * 50} className="svc__c">
              <span className="svc__n">{s.n}</span>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section--t">
        <SectionHead n="—" eyebrow="How It Works" title="The Process" />
        <div className="proc">
          {PROCESS.map((p, i) => (
            <Reveal key={p.s} delay={i * 70} className="proc__s">
              <span>{p.s}</span>
              <h3>{p.t}</h3>
              <p>{p.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <Reveal className="gang">
          <Eyebrow n="+">Extended Network</Eyebrow>
          <h2 className="h2">Gang of DJs</h2>
          <p className="gang__i">Our vetted extended network of independent DJs — same standard, wider options. Available across all event types and genres.</p>
          <div className="gang__l">
            {GANG.map(g => (
              <span key={g} className="chip"><VinylMark size={13} />{g}</span>
            ))}
          </div>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
