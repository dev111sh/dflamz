import { ROSTER, AFFILIATE, GANG } from "../data/site.js";
import Reveal from "../components/Reveal.jsx";
import Eyebrow from "../components/Eyebrow.jsx";
import VinylMark from "../components/VinylMark.jsx";
import PageHead from "../components/PageHead.jsx";
import SectionHead from "../components/SectionHead.jsx";
import RosterCard from "../components/RosterCard.jsx";
import CtaBand from "../components/CtaBand.jsx";

export default function Artists() {
  return (
    <>
      <PageHead
        n="The Crew"
        title={<>Our <span>Artists</span></>}
        intro="Award-winning resident DJs plus a vetted extended network — the right sound for every room, every crowd, every city."
      />

      <section className="section">
        <SectionHead n="01" eyebrow="Resident Roster" title="The D'Flamz DJs" />
        <div className="roster">
          {ROSTER.map((dj, i) => <RosterCard key={i} dj={dj} />)}
        </div>
      </section>

      <section className="section section--t">
        <SectionHead n="02" eyebrow="Affiliated" title="In The Network" />
        <div className="roster">
          <RosterCard dj={AFFILIATE} />
        </div>
      </section>

      <section className="section">
        <Reveal className="gang">
          <Eyebrow n="+">Extended Network</Eyebrow>
          <h2 className="h2">Gang of DJs</h2>
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
