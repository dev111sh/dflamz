import { EVENTS, LINKS } from "../data/site.js";
import { go } from "../hooks/useHashRoute.js";
import SectionHead from "./SectionHead.jsx";
import Reveal from "./Reveal.jsx";
import Btn from "./Btn.jsx";

export default function EventsSection() {
  return (
    <section className="section">
      <SectionHead n="◷" eyebrow="On The Road" title="Upcoming Dates" />
      {EVENTS.length === 0 ? (
        <Reveal className="events__empty">
          <p>New dates are announced regularly across Lagos, London and beyond.</p>
          <div className="row-btns">
            <Btn onClick={() => go("contact")}>Enquire about a date</Btn>
            <Btn kind="outline" href={LINKS.ig} target="_blank" rel="noreferrer">Follow for announcements</Btn>
          </div>
        </Reveal>
      ) : (
        <div className="events">
          {EVENTS.map((e, i) => (
            <Reveal key={i} delay={i * 50} className="ev">
              <span className="ev__d">{e.date}</span>
              <span className="ev__v">{e.venue}</span>
              <span className="ev__c">{e.city}</span>
              <a className="ev__t" href={e.ticket} target="_blank" rel="noreferrer">Details →</a>
            </Reveal>
          ))}
        </div>
      )}
    </section>
  );
}
