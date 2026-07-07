import { CLIENTS } from "../data/site.js";
import Reveal from "./Reveal.jsx";

/* Partner / client logo wall.
   CLIENTS entries are { name, logo }. When a real logo lands, drop the file in
   src/assets/logos/ and set CLIENTS[].logo to that path (e.g. an imported asset
   URL). Until then logo is null and we render a uniform monochrome name card so
   the grid still reads like a logo wall rather than a plain text list. */
export default function PartnerWall() {
  return (
    <Reveal className="pwall">
      {CLIENTS.map(c => (
        <div key={c.name} className="pwall__i" title={c.name}>
          {c.logo
            ? <img className="pwall__logo" src={c.logo} alt={c.name} loading="lazy" />
            : <span className="pwall__name">{c.name}</span>}
        </div>
      ))}
    </Reveal>
  );
}
