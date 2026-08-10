import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { PROJECTS } from "../data/site.js";
import Reveal from "../components/Reveal.jsx";
import Eyebrow from "../components/Eyebrow.jsx";
import Btn from "../components/Btn.jsx";
import Media from "../components/Media.jsx";
import PageHead from "../components/PageHead.jsx";
import CtaBand from "../components/CtaBand.jsx";

export default function Projects() {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Projects | D'Flamz Nation</title>
        <meta name="description" content="Selected work and events from D'Flamz Nation, from our flagship Global Sound nights to festivals, artist campaigns and talent development programmes." />
      </Helmet>
      <PageHead
        n="Our Work"
        title={<>Selected <span>Projects</span></>}
        intro="A look at the events, campaigns and partnerships behind the D'Flamz name, from flagship nights to festivals and artist promotions."
      />
      <section className="section">
        <div className="proj">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.slug} delay={i * 60} className={`proj__r${i % 2 ? " proj__r--rev" : ""}`}>
              <div className="proj__media">
                <Media slot={p.img} mono={p.title.slice(0, 2).toUpperCase()} alt={p.title} ratio="4 / 3" />
              </div>
              <div className="proj__c">
                <Eyebrow n={String(i + 1).padStart(2, "0")}>{p.year} · {p.location}</Eyebrow>
                <h2 className="h2">{p.title}</h2>
                <div className="tags">
                  {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
                <p className="lead">{p.summary}</p>
                <p className="proj__body">{p.body}</p>
                {p.highlights?.length > 0 && (
                  <ul className="proj__hl">
                    {p.highlights.map((h, j) => <li key={j}>{h}</li>)}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
