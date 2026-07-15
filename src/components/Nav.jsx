import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import dflamzNav from "../assets/dflamz-nav.png";

const LINKS_NAV = [
  ["/", "Home"],
  ["/about", "About"],
  ["/services", "Services"],
  ["/gangofdjs", "Gang of DJs"],
  ["/presskit", "Press Kit"],
  ["/contact", "Contact"],
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const nav = (r) => { navigate(r); setOpen(false); };
  const active = (r) => location.pathname === r || (r === "/gangofdjs" && location.pathname.startsWith("/dj/"));
  return (
    <header className="nav">
      <div className="nav__bar">
        <button className="logo" onClick={() => nav("/")}>
          <img src={dflamzNav} alt="D'Flamz Nation" style={{ height: 36, width: "auto" }} />
        </button>
        <nav className="nav__links">
          {LINKS_NAV.map(([r, l]) => (
            <button key={r} className={`nav__a${active(r) ? " on" : ""}`} onClick={() => nav(r)}>{l}</button>
          ))}
        </nav>
        <button className="nav__cta" onClick={() => nav("/contact")}>Book a DJ</button>
        <button className="nav__burger" onClick={() => setOpen(o => !o)} aria-label="Menu">
          {open ? "✕" : "☰"}
        </button>
      </div>
      {open && (
        <div className="nav__m">
          {LINKS_NAV.map(([r, l]) => (
            <button key={r} className={`nav__ma${active(r) ? " on" : ""}`} onClick={() => nav(r)}>{l}</button>
          ))}
          <button className="btn btn--primary btn--block" onClick={() => nav("/contact")}>Book a DJ</button>
        </div>
      )}
    </header>
  );
}
