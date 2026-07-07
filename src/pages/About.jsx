import { VALUES, MILESTONES } from "../data/site.js";
import Reveal from "../components/Reveal.jsx";
import Media from "../components/Media.jsx";
import VinylMark from "../components/VinylMark.jsx";
import PageHead from "../components/PageHead.jsx";
import SectionHead from "../components/SectionHead.jsx";
import CtaBand from "../components/CtaBand.jsx";

export default function About() {
  return (
    <>
      <PageHead n="About" title={<>Spreading Music<br /><span>Like Wild Fire</span></>} />

      <section className="section about">
        <Reveal className="about__txt">
          <p className="lead"><strong>D'Flamz Nation</strong> is a DJ booking and management collective connecting top DJs directly with the venues, festivals, brands and event planners who want them — no middlemen.</p>
          <p>We train, develop and manage a roster of top-tier DJs for venues, events and residencies across Nigeria, the UK and beyond, built on a single belief: that music, properly delivered, is a force of nature. From intimate lounges to festival stages of 5,000+, our DJs don't just play music — they own the room.</p>
          <p>Our <strong>Gang of DJs</strong> network extends our reach further, connecting venues with carefully vetted independent talent who carry the same standard our name is built on.</p>
          <div className="facts">
            {[["Founded", "Lagos, Nigeria"], ["Global reach", "Nigeria · UK · USA"], ["Slogan", "Spreading Music Like Wild Fire"]].map(([k, v]) => (
              <div key={k} className="facts__r"><span>{k}</span><b>{v}</b></div>
            ))}
          </div>
        </Reveal>
        <Reveal className="about__media" delay={120}>
          <Media slot="flammzy2" ratio="4 / 5" alt="D'Flamz Nation" />
        </Reveal>
      </section>

      <section className="section section--t">
        <SectionHead n="01" eyebrow="What We Stand For" title="Our Values" />
        <div className="values">
          {VALUES.map((v, i) => (
            <Reveal key={v.t} delay={i * 80} className="value">
              <VinylMark size={24} /><h3>{v.t}</h3><p>{v.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHead n="02" eyebrow="Our Journey" title="Key Milestones" />
        <div className="tl">
          {MILESTONES.map((m, i) => (
            <Reveal key={m.y} delay={i * 50} className="tl__r">
              <span className="tl__y">{m.y}</span>
              <div><h3>{m.t}</h3><p>{m.d}</p></div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
