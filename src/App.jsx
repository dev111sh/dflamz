import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import GangOfDJs from "./pages/GangOfDJs.jsx";
import Projects from "./pages/Projects.jsx";
import Events from "./pages/Events.jsx";
import Allies from "./pages/Allies.jsx";
import Contact from "./pages/Contact.jsx";
import Artist from "./pages/Artist.jsx";
import { useReferral } from "./hooks/useReferral.js";

export default function App() {
  useReferral();
  return (
    <div className="dfn">
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gangofdjs" element={<GangOfDJs />} />
          <Route path="/dj/:slug" element={<Artist />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/events" element={<Events />} />
          <Route path="/allies" element={<Allies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
