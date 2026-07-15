import { ROSTER } from "../data/site.js";
import gangLogo from "../assets/gang-of-djs-logo.png";
import Reveal from "../components/Reveal.jsx";
import Eyebrow from "../components/Eyebrow.jsx";
import SectionHead from "../components/SectionHead.jsx";
import RosterCard from "../components/RosterCard.jsx";
import CtaBand from "../components/CtaBand.jsx";

export default function GangOfDJs() {
  return (
    <>
      <section className="phead">
        <Reveal>
          <Eyebrow n="The Crew"> </Eyebrow>
          <img src={gangLogo} alt="Gang of DJs" className="phead__logo" style={{ maxWidth: 420, width: "100%", height: "auto" }} />
          <p className="pintro">Award-winning resident DJs plus a vetted extended network, the right sound for every room, every crowd, every city.</p>
        </Reveal>
      </section>

      <section className="section">
        <SectionHead n="01" eyebrow="Resident Roster" title="Our Network of DJs" />
        <div className="roster">
          {ROSTER.map((dj, i) => <RosterCard key={i} dj={dj} />)}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
