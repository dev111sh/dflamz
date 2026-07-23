import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LINKS, SOCIALS, ROSTER,
  BOOKING_EVENT_TYPES, BOOKING_CROWD_SIZES, BOOKING_BUDGETS, BOOKING_EQUIPMENT,
  ENQUIRY_SUBJECTS,
} from "../data/site.js";
import Reveal from "../components/Reveal.jsx";
import Btn from "../components/Btn.jsx";
import PageHead from "../components/PageHead.jsx";

const DJ_NO_PREF = "No preference / recommend one";
const DJ_OPTIONS = [DJ_NO_PREF, ...ROSTER.map(d => d.name)];

const BOOK_DEFAULTS = {
  name: "", email: "", phone: "", date: "",
  eventType: BOOKING_EVENT_TYPES[0], crowd: BOOKING_CROWD_SIZES[0],
  budget: BOOKING_BUDGETS[0], equipment: BOOKING_EQUIPMENT[0],
  dj: DJ_NO_PREF, venue: "", details: "",
};

function BookForm() {
  const [f, setF] = useState(BOOK_DEFAULTS);
  const [status, setStatus] = useState("idle");
  const set = k => e => setF(s => ({ ...s, [k]: e.target.value }));

  const handleSubmit = async () => {
    setStatus("sending");
    try {
      const res = await fetch(LINKS.formBooking, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: f.name, email: f.email, phone: f.phone, eventDate: f.date,
          eventType: f.eventType, crowdSize: f.crowd, budget: f.budget,
          equipment: f.equipment, dj: f.dj, venue: f.venue, details: f.details,
        }),
      });
      if (res.ok) {
        setStatus("sent");
        setF(BOOK_DEFAULTS);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <Reveal className="form" delay={100}>
        <p>Your booking request has been sent. We'll be in touch shortly.</p>
      </Reveal>
    );
  }

  return (
    <Reveal className="form" delay={100}>
      <label className="fld">
        <span>Name</span>
        <input value={f.name} onChange={set("name")} placeholder="Your name" />
      </label>
      <label className="fld">
        <span>Email</span>
        <input type="email" value={f.email} onChange={set("email")} placeholder="you@email.com" />
      </label>
      <label className="fld">
        <span>Phone</span>
        <input value={f.phone} onChange={set("phone")} placeholder="Phone / WhatsApp" />
      </label>
      <label className="fld">
        <span>Event date</span>
        <input type="date" value={f.date} onChange={set("date")} />
      </label>
      <label className="fld">
        <span>Event type</span>
        <select value={f.eventType} onChange={set("eventType")}>
          {BOOKING_EVENT_TYPES.map(t => <option key={t}>{t}</option>)}
        </select>
      </label>
      <label className="fld">
        <span>Crowd size</span>
        <select value={f.crowd} onChange={set("crowd")}>
          {BOOKING_CROWD_SIZES.map(t => <option key={t}>{t}</option>)}
        </select>
      </label>
      <label className="fld">
        <span>Budget</span>
        <select value={f.budget} onChange={set("budget")}>
          {BOOKING_BUDGETS.map(t => <option key={t}>{t}</option>)}
        </select>
      </label>
      <label className="fld">
        <span>Sound / mixing gear needed</span>
        <select value={f.equipment} onChange={set("equipment")}>
          {BOOKING_EQUIPMENT.map(t => <option key={t}>{t}</option>)}
        </select>
      </label>
      <label className="fld">
        <span>Which DJ</span>
        <select value={f.dj} onChange={set("dj")}>
          {DJ_OPTIONS.map(t => <option key={t}>{t}</option>)}
        </select>
      </label>
      <label className="fld">
        <span>Venue / location</span>
        <input value={f.venue} onChange={set("venue")} placeholder="Venue, city or address" />
      </label>
      <label className="fld">
        <span>Details</span>
        <textarea rows={5} value={f.details} onChange={set("details")} placeholder="Tell us about your event, the vibe you want and anything else we should know…" />
      </label>
      <Btn lg block onClick={handleSubmit} disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Submit Booking →"}
      </Btn>
      {status === "error" && (
        <p className="form__err">Something went wrong. Please try again or email us directly at {LINKS.email}.</p>
      )}
    </Reveal>
  );
}

const ENQUIRY_DEFAULTS = { name: "", email: "", subject: ENQUIRY_SUBJECTS[0], message: "" };

function EnquiryForm() {
  const [f, setF] = useState(ENQUIRY_DEFAULTS);
  const [status, setStatus] = useState("idle");
  const set = k => e => setF(s => ({ ...s, [k]: e.target.value }));

  const handleSubmit = async () => {
    setStatus("sending");
    try {
      const res = await fetch(LINKS.formEnquiry, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: f.name, email: f.email, subject: f.subject, message: f.message,
        }),
      });
      if (res.ok) {
        setStatus("sent");
        setF(ENQUIRY_DEFAULTS);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <Reveal className="form" delay={100}>
        <p>Your enquiry has been sent. We'll be in touch shortly.</p>
      </Reveal>
    );
  }

  return (
    <Reveal className="form" delay={100}>
      <label className="fld">
        <span>Name</span>
        <input value={f.name} onChange={set("name")} placeholder="Your name" />
      </label>
      <label className="fld">
        <span>Email</span>
        <input type="email" value={f.email} onChange={set("email")} placeholder="you@email.com" />
      </label>
      <label className="fld">
        <span>Subject</span>
        <select value={f.subject} onChange={set("subject")}>
          {ENQUIRY_SUBJECTS.map(t => <option key={t}>{t}</option>)}
        </select>
      </label>
      <label className="fld">
        <span>Message</span>
        <textarea rows={5} value={f.message} onChange={set("message")} placeholder="How can we help?" />
      </label>
      <Btn lg block onClick={handleSubmit} disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send Enquiry →"}
      </Btn>
      {status === "error" && (
        <p className="form__err">Something went wrong. Please try again or email us directly at {LINKS.email}.</p>
      )}
    </Reveal>
  );
}

export default function Contact() {
  const [tab, setTab] = useState("book");
  const navigate = useNavigate();

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
            <button className="larrow" onClick={() => navigate("/presskit")}>Open the Press Kit →</button>
          </div>
        </Reveal>
        <div className="contact__forms">
          <div className="seg" role="tablist">
            <button
              className={`seg__b${tab === "book" ? " seg__b--on" : ""}`}
              onClick={() => setTab("book")}
              role="tab" aria-selected={tab === "book"}
            >Book a DJ</button>
            <button
              className={`seg__b${tab === "enquiry" ? " seg__b--on" : ""}`}
              onClick={() => setTab("enquiry")}
              role="tab" aria-selected={tab === "enquiry"}
            >General Enquiry</button>
          </div>
          {tab === "book" ? <BookForm /> : <EnquiryForm />}
        </div>
      </section>
    </>
  );
}
