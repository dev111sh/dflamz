import { SERVICES, PROCESS } from "../data/site.js";
import Reveal from "../components/Reveal.jsx";
import PageHead from "../components/PageHead.jsx";
import SectionHead from "../components/SectionHead.jsx";
import CtaBand from "../components/CtaBand.jsx";

export default function Services() {
  return (
    <>
      <PageHead
        n="Our Services"
        title={<>What <span>We Do</span></>}
        intro="From single-night bookings to long-term residencies, DJ training to full event production, D'Flamz Nation delivers fire at every level."
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
        <SectionHead n="02" eyebrow="How It Works" title="The Process" />
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

      <CtaBand />
    </>
  );
}
