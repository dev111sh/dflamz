import { useNavigate } from "react-router-dom";
import { ALLIES } from "../data/site.js";
import Reveal from "./Reveal.jsx";
import SectionHead from "./SectionHead.jsx";
import Btn from "./Btn.jsx";

const LOGO_URLS = import.meta.glob("../assets/logos/*", { eager: true, import: "default" });
const logoSrc = file => file && LOGO_URLS[`../assets/logos/${file}`];

export default function AlliesSection() {
  const navigate = useNavigate();
  return (
    <section className="section section--t">
      <SectionHead n="04" eyebrow="Allies" title="Our Partners" />
      <div className="allies">
        {ALLIES.map((a, i) => (
          <Reveal key={a.slug} delay={i * 60} className="ally">
            <div className="ally__logo">
              {a.logo
                ? <img src={logoSrc(a.logo)} alt={a.name} />
                : <span>{a.name}</span>}
            </div>
            <h3 className="ally__n">{a.name}</h3>
            <span className="ally__cat">{a.category}</span>
            <span className="ally__loc">{a.location}</span>
            <p className="ally__b">{a.blurb}</p>
          </Reveal>
        ))}
      </div>
      <div className="row-btns" style={{ justifyContent: "center", marginTop: "2rem" }}>
        <Btn lg onClick={() => navigate("/allies")}>Meet our Allies</Btn>
      </div>
    </section>
  );
}
