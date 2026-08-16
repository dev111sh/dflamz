import { useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ALLIES } from "../data/site.js";
import Reveal from "../components/Reveal.jsx";
import Eyebrow from "../components/Eyebrow.jsx";
import Btn from "../components/Btn.jsx";
import PageHead from "../components/PageHead.jsx";
import CtaBand from "../components/CtaBand.jsx";

const LOGO_URLS = import.meta.glob("../assets/logos/*", { eager: true, import: "default" });
const ALLY_URLS = import.meta.glob("../assets/allies/*", { eager: true, import: "default" });
/* ally logos live in assets/allies/; assets/logos/ stays as a fallback */
const allyLogoSrc = file => file && (ALLY_URLS[`../assets/allies/${file}`] || LOGO_URLS[`../assets/logos/${file}`]);
/* .png ally logos are pre-cut transparent marks that sit directly on the dark
   background; .jpg ones still carry a baked-in background and keep the light
   rounded container as a fallback */
const isTransparent = file => !!file && file.toLowerCase().endsWith(".png");

/* Sized by height only, never a fixed box — logos vary from a wide wordmark
   (Clooza) to a square mark (Mavin, Zuri's), and a box would crop or dwarf one. */
function AllyMark({ ally, size }) {
  const src = allyLogoSrc(ally.logo);
  if (ally.logo && isTransparent(ally.logo)) {
    return (
      <div className={`amark amark--${size}`}>
        <img src={src} alt={ally.name} loading="lazy" />
      </div>
    );
  }
  return (
    <div className={`ally__logo ally__logo--${size}`}>
      {src
        ? <img src={src} alt={ally.name} />
        : <span>{ally.name}</span>}
    </div>
  );
}

export default function Allies() {
  const navigate = useNavigate();

  /* featured partners pin to the front, everyone else keeps array order */
  const ordered = useMemo(
    () => [...ALLIES].sort((a, b) => (b.featured === true) - (a.featured === true)),
    []
  );

  return (
    <>
      <Helmet>
        <title>Allies | D'Flamz Nation</title>
        <meta name="description" content="The brands and businesses D'Flamz Nation works alongside. Partnership enquiries welcome." />
      </Helmet>
      <PageHead
        n="Network"
        title={<>Our <span>Allies</span></>}
        intro="The brands and businesses we work alongside."
      />

      <section className="section">
        <div className="agrid">
          {ordered.map((a, i) => (
            <Reveal key={a.slug} delay={i * 40} className="acard-wrap">
              <Link to={`/allies/${a.slug}`} className="acard" aria-label={a.name}>
                <AllyMark ally={a} size="tile" />
                <span className="acard__n">{a.name}</span>
                <span className="acard__cat">{a.category}</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section--t">
        <Reveal className="pk-contact">
          <Eyebrow n="—">Partner with us</Eyebrow>
          <h2 className="h2">Let's work together</h2>
          <p className="lead">If it lines up with D'Flamz Nation, we want to hear about it.</p>
          <div className="row-btns">
            <Btn lg onClick={() => navigate("/contact")}>Send a partnership enquiry</Btn>
          </div>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
