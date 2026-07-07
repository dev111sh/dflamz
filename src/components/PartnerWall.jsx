import { CLIENTS } from "../data/site.js";
import Reveal from "./Reveal.jsx";

/* Partner / client logo wall.
   Logo files live in src/assets/logos/ and CLIENTS[].logo holds the filename.
   Vite's import.meta.glob resolves every file in that folder at build time; we
   key the resolved URLs by filename so each client maps to its logo image. */
const LOGO_URLS = import.meta.glob("../assets/logos/*", { eager: true, import: "default" });
const logoSrc = file => LOGO_URLS[`../assets/logos/${file}`];

export default function PartnerWall() {
  return (
    <Reveal className="pwall">
      {CLIENTS.map(c => (
        <div key={c.name} className="pwall__i" title={c.name}>
          <img className="pwall__logo" src={logoSrc(c.logo)} alt={c.name} loading="lazy" />
        </div>
      ))}
    </Reveal>
  );
}
