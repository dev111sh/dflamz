import Reveal from "./Reveal.jsx";
import Media from "./Media.jsx";

export default function Gallery({ slots }) {
  return (
    <div className="gallery">
      {slots.map((s, i) => (
        <Reveal key={s + i} delay={i * 50} className={`gal${i % 3 === 0 ? " gal--tall" : ""}`}>
          <Media slot={s} ratio={i % 3 === 0 ? "3 / 4" : "1 / 1"} alt="D'Flamz Nation" />
        </Reveal>
      ))}
    </div>
  );
}
