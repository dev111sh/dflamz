import { MARQUEE } from "../data/site.js";

export default function Ticker() {
  const row = [...MARQUEE, ...MARQUEE];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__in">
        {row.map((t, i) => (
          <span className="ticker__it" key={i}><i>★</i>{t}</span>
        ))}
      </div>
    </div>
  );
}
