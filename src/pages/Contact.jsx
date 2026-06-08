import { useState } from "react";
import { go } from "../hooks/useHashRoute.js";
import { LINKS, SOCIALS, ENQUIRY_TYPES } from "../data/site.js";
import Reveal from "../components/Reveal.jsx";
import Btn from "../components/Btn.jsx";
import PageHead from "../components/PageHead.jsx";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState(ENQUIRY_TYPES[0]);
  const [msg, setMsg] = useState("");

  const send = () => {
    const subject = `Booking Enquiry: ${type}${name ? ` — ${name}` : ""}`;
    const body = `Name: ${name || "(not provided)"}\nEmail: ${email || "(not provided)"}\nEnquiry type: ${type}\n\n${msg || ""}`;
    window.location.href = `mailto:${LINKS.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <PageHead n="Get In Touch" title={<>Book a <span>DJ</span></>} />
      <section className="section contact">
        <Reveal className="contact__i">
          <div className="ci">
            <span>Email</span>
            <a href={`mailto:${LINKS.email}`}>{LINKS.email}</a>
          </div>
          <div className="ci">
            <span>Based in</span>
            <b>Lagos, Nigeria · London, UK</b>
          </div>
          <div className="ci">
            <span>Follow</span>
            <div className="ci__soc">
              {SOCIALS.map(s => (
                <a key={s.h} href={s.url} target="_blank" rel="noreferrer">{s.h}</a>
              ))}
            </div>
          </div>
          <div className="ci ci--note">
            <p>Marketing or press enquiry? Grab the full <strong>press kit</strong> with everything in one place.</p>
            <button className="larrow" onClick={() => go("presskit")}>Open the Press Kit →</button>
          </div>
        </Reveal>
        <Reveal className="form" delay={100}>
          <label className="fld">
            <span>Name</span>
            <input value={name} onChange={e => setName(e.target.value)} placeholder="Your name" />
          </label>
          <label className="fld">
            <span>Email</span>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@email.com" />
          </label>
          <label className="fld">
            <span>Enquiry type</span>
            <select value={type} onChange={e => setType(e.target.value)}>
              {ENQUIRY_TYPES.map(t => <option key={t}>{t}</option>)}
            </select>
          </label>
          <label className="fld">
            <span>Message</span>
            <textarea rows={5} value={msg} onChange={e => setMsg(e.target.value)} placeholder="Tell us about your event, venue or brief…" />
          </label>
          <Btn lg block onClick={send}>Send Enquiry →</Btn>
        </Reveal>
      </section>
    </>
  );
}
