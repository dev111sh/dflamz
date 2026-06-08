import { go } from "../hooks/useHashRoute.js";
import { LINKS, SOCIALS } from "../data/site.js";
import { IMAGES } from "../assets/images.js";

const NAV_LINKS = [
  ["home", "Home"],
  ["about", "About"],
  ["services", "Services"],
  ["artists", "Artists"],
  ["presskit", "Press Kit"],
  ["contact", "Contact"],
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__brandcol">
          <img className="footer__logo" src={IMAGES.logo} alt="D'Flamz Nation" />
          <p className="footer__tag">Spreading Music Like Wild Fire</p>
        </div>
        <div className="footer__col">
          <span className="footer__h">Navigate</span>
          {NAV_LINKS.map(([r, l]) => (
            <button key={r} className="footer__a" onClick={() => go(r)}>{l}</button>
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
