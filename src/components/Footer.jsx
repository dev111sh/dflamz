import { useNavigate } from "react-router-dom";
import { LINKS, SOCIALS } from "../data/site.js";
import dflamzBrand from "../assets/Dflamz-logo-main.png";

const NAV_LINKS = [
  ["/", "Home"],
  ["/about", "About"],
  ["/services", "Services"],
  ["/gangofdjs", "Gang of DJs"],
  ["/presskit", "Press Kit"],
  ["/contact", "Contact"],
];

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__brandcol">
          <button className="footer__logobtn" onClick={() => navigate("/")} style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}>
            <img className="footer__logo" src={dflamzBrand} alt="D'Flamz Nation" style={{ height: 110, width: "auto" }} />
          </button>
          <p className="footer__tag">Spreading Music Like Wild Fire</p>
        </div>
        <div className="footer__col">
          <span className="footer__h">Navigate</span>
          {NAV_LINKS.map(([r, l]) => (
            <button key={r} className="footer__a" onClick={() => navigate(r)}>{l}</button>
          ))}
        </div>
        <div className="footer__col">
          <span className="footer__h">Reach us</span>
          <a className="footer__a" href={`mailto:${LINKS.email}`}>{LINKS.email}</a>
          <span className="footer__a footer__a--s">Lagos, NG · London, UK</span>
        </div>
        <div className="footer__col">
          <span className="footer__h">Follow</span>
          {SOCIALS.map(s => (
            <a key={s.h} className="footer__a" href={s.url} target="_blank" rel="noreferrer">{s.h}</a>
          ))}
        </div>
      </div>
      <div className="footer__base">
        <span>© {new Date().getFullYear()} D'Flamz Nation Ltd · dflamz.com</span>
        <span className="footer__mono">SPREADING MUSIC LIKE WILD FIRE</span>
      </div>
    </footer>
  );
}
