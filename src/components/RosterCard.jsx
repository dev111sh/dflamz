import { go } from "../hooks/useHashRoute.js";
import Reveal from "./Reveal.jsx";
import Media from "./Media.jsx";

export default function RosterCard({ dj }) {
  const clickable = dj.profile;
  const onClick = () => { if (dj.profile) go("artist:" + dj.slug); };
  return (
    <Reveal className={`rc-wrap${dj.feat ? " rc-wrap--feat" : ""}`}>
      <div
        className={`rc${clickable ? " rc--link" : ""}`}
        onClick={onClick}
        role={clickable ? "button" : undefined}
      >
        <Media slot={dj.img} mono={dj.mono || "DF"} alt={dj.name} ratio={dj.feat ? "5 / 4" : "4 / 5"} />
        <div className="rc__b">
          <div className="rc__row">
            <h3 className="rc__n">{dj.name}</h3>
            {dj.feat && <span className="rc__badge">Head DJ</span>}
          </div>
          <p className="rc__r">{dj.role}</p>
          <div className="tags">
            {dj.tags.map(t => <span key={t} className="tag">{t}</span>)}
          </div>
          {clickable && <span className="rc__view">View profile →</span>}
        </div>
      </div>
    </Reveal>
  );
}
