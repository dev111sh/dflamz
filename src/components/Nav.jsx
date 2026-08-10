import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import dflamzNav from "../assets/dflamz-nav.png";

const NAV_ITEMS = [
  ["/gangofdjs", "Gang of DJs"],
  ["/projects", "Projects"],
  ["/events", "Events"],
  ["/allies", "Allies"],
];

const MOBILE_ITEMS = [
  ["/", "Home"],
  ["/about", "Our Story"],
  ["/services", "Services"],
  ["/gangofdjs", "Gang of DJs"],
  ["/projects", "Projects"],
  ["/events", "Events"],
  ["/allies", "Allies"],
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const aboutRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const nav = (r) => { navigate(r); setOpen(false); setAboutOpen(false); };
  const active = (r) => location.pathname === r || (r === "/gangofdjs" && location.pathname.startsWith("/dj/"));
  const aboutActive = location.pathname === "/about" || location.pathname === "/services";

  useEffect(() => {
    const onDocClick = (e) => {
      if (aboutRef.current && !aboutRef.current.contains(e.target)) setAboutOpen(false);
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  return (
    <header className="nav">
      <div className="nav__bar">
        <button className="logo" onClick={() => nav("/")}>
          <img src={dflamzNav} alt="D'Flamz Nation" style={{ height: 36, width: "auto" }} />
        </button>
        <nav className="nav__links">
          <button className={`nav__a${active("/") ? " on" : ""}`} onClick={() => nav("/")}>Home</button>

          <div
            className="nav__drop"
            ref={aboutRef}
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button
              className={`nav__a nav__a--drop${aboutActive ? " on" : ""}`}
              aria-haspopup="true"
              aria-expanded={aboutOpen}
              onClick={() => setAboutOpen(o => !o)}
            >
              About
              <ChevronDown size={13} className={`nav__chev${aboutOpen ? " nav__chev--on" : ""}`} />
            </button>
            {aboutOpen && (
              <div className="nav__panel">
                <button className="nav__pa" onClick={() => nav("/about")}>Our Story</button>
                <button className="nav__pa" onClick={() => nav("/services")}>Services</button>
              </div>
            )}
          </div>

          {NAV_ITEMS.map(([r, l]) => (
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
          {MOBILE_ITEMS.map(([r, l]) => (
            <button key={r} className={`nav__ma${active(r) ? " on" : ""}`} onClick={() => nav(r)}>{l}</button>
          ))}
          <button className="btn btn--primary btn--block" onClick={() => nav("/contact")}>Book a DJ</button>
        </div>
      )}
    </header>
  );
}
