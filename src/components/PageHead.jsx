import Reveal from "./Reveal.jsx";
import Eyebrow from "./Eyebrow.jsx";

export default function PageHead({ n, title, intro }) {
  return (
    <section className="phead">
      <Reveal>
        <Eyebrow n={n}> </Eyebrow>
        <h1 className="ptitle">{title}</h1>
        {intro && <p className="pintro">{intro}</p>}
      </Reveal>
    </section>
  );
}
