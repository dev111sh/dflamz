import { go } from "../hooks/useHashRoute.js";
import { PROFILES } from "../data/site.js";
import Reveal from "../components/Reveal.jsx";
import Eyebrow from "../components/Eyebrow.jsx";
import Btn from "../components/Btn.jsx";
import Media from "../components/Media.jsx";
import SectionHead from "../components/SectionHead.jsx";
import Gallery from "../components/Gallery.jsx";
import ListenSection from "../components/ListenSection.jsx";
import CtaBand from "../components/CtaBand.jsx";

export default function Artist({ slug }) {
  const p = PROFILES[slug];
  return (
    <>
      <section className="section">
        <Reveal>
          <button className="larrow larrow--back" onClick={() => go("artists")}>← Back to roster</button>
        </Reveal>
        <div className="ap">
          <Reveal className="ap__media">
            <Media slot={p.img} ratio="4 / 5" alt={p.name} className="media--glow" />
          </Reveal>
          <Reveal className="ap__c" delay={100}>
            <Eyebrow n="★">{p.role}</Eyebrow>
            <h1 className="ap__n">{p.name}</h1>
            {p.handle && (
              <a className="ap__h" href={p.ig} target="_blank" rel="noreferrer">{p.handle}</a>
            )}
            <p className="ap__bio">{p.bio}</p>
            <p className="ap__long">{p.long}</p>
            <div className="ap__facts">
              <div><span>Based</span><b>{p.based}</b></div>
              <div><span>Genres</span><b>{p.tags.join(" · ")}</b></div>
            </div>
            <div className="row-btns">
              <Btn lg onClick={() => go("contact")}>Book {p.name.replace("DJ ", "")}</Btn>
              {p.ext && <Btn kind="outline" lg href={p.ext} target="_blank" rel="noreferrer">Official site ↗</Btn>}
              {p.apple && <Btn kind="outline" lg href={p.apple} target="_blank" rel="noreferrer">Apple Music ↗</Btn>}
            </div>
            {p.draft && <p className="draft-note">Draft bio — send final copy to replace.</p>}
          </Reveal>
        </div>
      </section>

      {p.highlights && p.highlights.length > 0 && (
        <section className="section section--t">
          <SectionHead n="01" eyebrow="Career" title="Selected Highlights" />
          <div className="hl">
            {p.highlights.map(([k, v], i) => (
              <Reveal key={i} delay={i * 50} className="hl__r">
                <span className="hl__k">{k}</span>
                <span className="hl__v">{v}</span>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {p.gallery && p.gallery.length > 1 && (
        <section className="section">
          <SectionHead n="02" eyebrow="Gallery" title="In Frame" />
          <Gallery slots={p.gallery} />
        </section>
      )}

      <ListenSection compact />
      <CtaBand />
    </>
  );
}
