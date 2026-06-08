import { LINKS } from "../data/site.js";
import SectionHead from "./SectionHead.jsx";
import Reveal from "./Reveal.jsx";

export default function ListenSection({ compact }) {
  const cards = [
    { p: "SoundCloud", l: "Latest Mixes", url: LINKS.soundcloud },
    { p: "Mixcloud", l: "Radio Sets", url: LINKS.mixcloud },
    { p: "Spotify", l: "Playlists", url: LINKS.spotify },
    { p: "YouTube", l: "Live & Visuals", url: LINKS.youtube },
  ];
  return (
    <section className={`section${compact ? " section--t" : ""}`}>
      <SectionHead n="♪" eyebrow="Hear The Sound" title="Listen & Mixes" />
      <div className="listen">
        {cards.map((c, i) => (
          <Reveal key={c.p} delay={i * 60}>
            <a className="listen__c" href={c.url} target="_blank" rel="noreferrer">
              <span className="listen__play">▶</span>
              <span className="listen__p">{c.p}</span>
              <span className="listen__l">{c.l}</span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
