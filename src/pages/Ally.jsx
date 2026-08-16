import { useParams, useNavigate, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ALLIES } from "../data/site.js";
import Reveal from "../components/Reveal.jsx";
import Btn from "../components/Btn.jsx";
import CtaBand from "../components/CtaBand.jsx";

const LOGO_URLS = import.meta.glob("../assets/logos/*", { eager: true, import: "default" });
const ALLY_URLS = import.meta.glob("../assets/allies/*", { eager: true, import: "default" });
const allyLogoSrc = file => file && (ALLY_URLS[`../assets/allies/${file}`] || LOGO_URLS[`../assets/logos/${file}`]);
const isTransparent = file => !!file && file.toLowerCase().endsWith(".png");

function withUtm(url) {
  if (!url) return url;
  const utm = "utm_source=dflamz&utm_medium=referral&utm_campaign=allies";
  return url.includes("?") ? `${url}&${utm}` : `${url}?${utm}`;
}

export default function Ally() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const i = ALLIES.findIndex(a => a.slug === slug);
  if (i === -1) return <Navigate to="/allies" replace />;

  const a = ALLIES[i];
  const next = ALLIES[(i + 1) % ALLIES.length];
  const src = allyLogoSrc(a.logo);
  const bare = a.logo && isTransparent(a.logo);

  return (
    <>
      <Helmet>
        <title>{a.name} | D'Flamz Nation</title>
        <meta name="description" content={a.offer || a.blurb} />
      </Helmet>

      <section className="section">
        <Reveal>
          <button className="larrow larrow--back" onClick={() => navigate("/allies")}>← Back to allies</button>
        </Reveal>

        <Reveal className="ad">
          {bare ? (
            <div className="amark amark--detail">
              <img src={src} alt={a.name} />
            </div>
          ) : (
            <div className="ally__logo ally__logo--detail">
              {src ? <img src={src} alt={a.name} /> : <span>{a.name}</span>}
            </div>
          )}

          <h1 className="ad__n">{a.name}</h1>
          <p className="ad__meta">{a.category} · {a.location}</p>
          {a.offer && <p className="ad__offer">{a.offer}</p>}
          <p className="ad__long">{a.long}</p>

          <div className="row-btns ad__btns">
            {a.instagram && (
              <Btn kind="outline" lg href={withUtm(a.instagram)} target="_blank" rel="noreferrer">Instagram ↗</Btn>
            )}
            {a.website && (
              <Btn kind="outline" lg href={withUtm(a.website)} target="_blank" rel="noreferrer">Website ↗</Btn>
            )}
          </div>
        </Reveal>
      </section>

      <section className="section section--t">
        <Reveal className="pnext">
          <button className="pnext__b" onClick={() => navigate(`/allies/${next.slug}`)}>
            <span className="pd__label">Next ally</span>
            <strong className="pnext__t">{next.name}</strong>
            <span className="pnext__meta">{next.category}</span>
            <span className="pcard__view">View ally →</span>
          </button>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
