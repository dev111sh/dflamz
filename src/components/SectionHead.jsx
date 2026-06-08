import Reveal from "./Reveal.jsx";
import Eyebrow from "./Eyebrow.jsx";

export default function SectionHead({ n, eyebrow, title, action }) {
  return (
    <Reveal className="shead">
      <div>
        <Eyebrow n={n}>{eyebrow}</Eyebrow>
        <h2 className="h2">{title}</h2>
      </div>
      {action}
    </Reveal>
  );
}
