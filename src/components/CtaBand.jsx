import { useNavigate } from "react-router-dom";
import Reveal from "./Reveal.jsx";
import Eyebrow from "./Eyebrow.jsx";
import Btn from "./Btn.jsx";

export default function CtaBand() {
  const navigate = useNavigate();
  return (
    <Reveal as="section" className="cta">
      <div className="cta__glow" />
      <Eyebrow n="—">Let's build a moment</Eyebrow>
      <h2 className="cta__h">Ready to set your dancefloor alight?</h2>
      <p className="cta__p">From a single night to a full residency, tell us the brief and we bring the fire.</p>
      <div className="row-btns">
        <Btn lg onClick={() => navigate("/contact")}>Book a DJ</Btn>
        <Btn kind="outline" lg onClick={() => navigate("/presskit")}>View Press Kit</Btn>
      </div>
    </Reveal>
  );
}
