import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ALLIES } from "../data/site.js";
import Reveal from "../components/Reveal.jsx";
import Eyebrow from "../components/Eyebrow.jsx";
import Btn from "../components/Btn.jsx";
import PageHead from "../components/PageHead.jsx";
import CtaBand from "../components/CtaBand.jsx";

const LOGO_URLS = import.meta.glob("../assets/logos/*", { eager: true, import: "default" });
const logoSrc = file => file && LOGO_URLS[`../assets/logos/${file}`];

function withUtm(url) {
  if (!url) return url;
  const utm = "utm_source=dflamz&utm_medium=referral&utm_campaign=allies";
  return url.includes("?") ? `${url}&${utm}` : `${url}?${utm}`;
}

export default function Allies() {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Allies | D'Flamz Nation</title>
        <meta name="description" content="The brands and businesses D'Flamz Nation works alongside. Partnership enquiries welcome." />
      </Helmet>
      <PageHead
        n="Network"
        title={<>Our <span>Allies</span></>}
        intro="These are the brands and businesses we work alongside and our active collaborators. We're always open to partnership enquiries."
      />
      <section className="section">
        <div className="proj">
          {ALLIES.map((a, i) => (
            <Reveal key={a.slug} delay={i * 60} className={`proj__r${i % 2 ? " proj__r--rev" : ""}`}>
              <div className="ally__logo ally__logo--lg">
                {a.logo
                  ? <img src={logoSrc(a.logo)} alt={a.name} />
                  : <span>{a.name}</span>}
              </div>
              <div className="proj__c">
                <Eyebrow n={String(i + 1).padStart(2, "0")}>{a.category}</Eyebrow>
                <h2 className="h2">{a.name}</h2>
                <span className="ally__loc">{a.location}</span>
                <p className="lead">{a.long}</p>
                <div className="row-btns">
                  {a.instagram && (
                    <Btn kind="outline" href={withUtm(a.instagram)} target="_blank" rel="noreferrer">Instagram ↗</Btn>
                  )}
                  {a.website && (
                    <Btn kind="outline" href={withUtm(a.website)} target="_blank" rel="noreferrer">Website ↗</Btn>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section--t">
        <Reveal className="pk-contact">
          <Eyebrow n="—">Partner with us</Eyebrow>
          <h2 className="h2">Let's work together</h2>
          <p className="lead">Studio space, drinks, media, venues, whatever the collaboration, if it lines up with D'Flamz Nation we want to hear about it.</p>
          <div className="row-btns">
            <Btn lg onClick={() => navigate("/contact")}>Send a partnership enquiry</Btn>
          </div>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
