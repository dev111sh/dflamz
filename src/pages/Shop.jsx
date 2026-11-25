import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import Eyebrow from "../components/Eyebrow.jsx";
import Btn from "../components/Btn.jsx";
import SectionHead from "../components/SectionHead.jsx";

export default function Shop() {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Shop | D'Flamz Nation</title>
        <meta
          name="description"
          content="The D'Flamz Nation shop is coming soon."
        />
      </Helmet>

      <section className="hero">
        <div className="vinyl-bg" />
        <div className="hero__glow" />
        <div className="hero__in">
          <Reveal>
            <Eyebrow n="★">Coming soon</Eyebrow>
            <h1 className="hero__t">The <span>Shop</span></h1>
            <p className="hero__lead">
              Merch, tickets and exclusive drops from the D'Flamz Nation are on the way.
            </p>
            <div className="row-btns">
              <Btn kind="outline" lg onClick={() => navigate("/contact")}>
                Get notified
              </Btn>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--t">
        <SectionHead n="01" eyebrow="Launching soon" title="What's Coming" />
        <div className="gs-chapters">
          {["Nation merch", "Event drops", "Exclusive mixes"].map((t, i) => (
            <Reveal key={t} delay={i * 80} className="gs-ch gs-ch--next">
              <span className="gs-ch__n">{String(i + 1).padStart(2, "0")} · Soon</span>
              <h3 className="gs-ch__city">{t}</h3>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}