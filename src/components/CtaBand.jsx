import { go } from "../hooks/useHashRoute.js";
import Reveal from "./Reveal.jsx";
import Eyebrow from "./Eyebrow.jsx";
import Btn from "./Btn.jsx";

export default function CtaBand() {
  return (
    <Reveal as="section" className="cta">
      <div className="cta__glow" />
      <Eyebrow n="—">Let's build a moment</Eyebrow>
      <h2 className="cta__h">Ready to set your dancefloor alight?</h2>
      <p className="cta__p">From a single night to a full residency, tell us the brief — we bring the fire.</p>
      <div className="row-btns">
        <Btn lg onClick={() => go("contact")}>Book a DJ</Btn>
        <Btn kind="outline" lg onClick={() => go("presskit")}>View Press Kit</Btn>
      </div>
    </Reveal>
  );
}
