import { Link, useNavigate } from "react-router-dom";
import { ALLIES } from "../data/site.js";
import Reveal from "./Reveal.jsx";
import SectionHead from "./SectionHead.jsx";
import Btn from "./Btn.jsx";

const LOGO_URLS = import.meta.glob("../assets/logos/*", { eager: true, import: "default" });
const ALLY_URLS = import.meta.glob("../assets/allies/*", { eager: true, import: "default" });
const allyLogoSrc = file => file && (ALLY_URLS[`../assets/allies/${file}`] || LOGO_URLS[`../assets/logos/${file}`]);
const isTransparent = file => !!file && file.toLowerCase().endsWith(".png");

/* Homepage teaser only — logo and name, nothing else. The full grid with
   category lives on /allies. */
export default function AlliesSection() {
  const navigate = useNavigate();
  return (
    <section className="section section--t">
      <SectionHead n="04" eyebrow="Allies" title="Our Partners" />
      <div className="allies">
        {ALLIES.map((a, i) => {
          const src = allyLogoSrc(a.logo);
          const bare = a.logo && isTransparent(a.logo);
          return (
            <Reveal key={a.slug} delay={i * 40} className="ally-wrap">
              <Link to={`/allies/${a.slug}`} className="ally" aria-label={a.name}>
                {bare ? (
                  <div className="amark amark--home">
                    <img src={src} alt={a.name} loading="lazy" />
                  </div>
                ) : (
                  <div className="ally__logo ally__logo--home">
                    {src ? <img src={src} alt={a.name} /> : <span>{a.name}</span>}
                  </div>
                )}
                <span className="ally__n">{a.name}</span>
              </Link>
            </Reveal>
          );
        })}
      </div>
      <div className="row-btns" style={{ justifyContent: "center", marginTop: "2rem" }}>
        <Btn lg onClick={() => navigate("/allies")}>Meet our Allies</Btn>
      </div>
    </section>
  );
}
