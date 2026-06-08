import { useState } from "react";
import { go } from "../hooks/useHashRoute.js";
import { IMAGES } from "../assets/images.js";
import VinylMark from "./VinylMark.jsx";

const LINKS_NAV = [
  ["home", "Home"],
  ["about", "About"],
  ["services", "Services"],
  ["artists", "Artists"],
  ["presskit", "Press Kit"],
  ["contact", "Contact"],
];

export default function Nav({ route }) {
  const [open, setOpen] = useState(false);
  const nav = (r) => { go(r); setOpen(false); };
  const active = (r) => route === r || (r === "artists" && route.startsWith("artist:"));
  return (
    <header className="nav">
      <div className="nav__bar">
        <button className="logo" onClick={() => nav("home")}>
          <VinylMark size={20} /> D'<span>FLAMZ</span>
        </button>
        <nav className="nav__links">
          {LINKS_NAV.map(([r, l]) => (
            <button key={r} className={`nav__a${active(r) ? " on" : ""}`} onClick={() => nav(r)}>{l}</button>
          ))}
        </nav>
        <button className="nav__cta" onClick={() => nav("contact")}>Book a DJ</button>
        <button className="nav__burger" onClick={() => setOpen(o => !o)} aria-label="Menu">
          {open ? "✕" : "☰"}
        </button>
      </div>
      {open && (
        <div className="nav__m">
          {LINKS_NAV.map(([r, l]) => (
            <button key={r} className={`nav__ma${active(r) ? " on" : ""}`} onClick={() => nav(r)}>{l}</button>
          ))}
          <button className="btn btn--primary btn--block" onClick={() => nav("contact")}>Book a DJ</button>
        </div>
      )}
    </header>
  );
}
