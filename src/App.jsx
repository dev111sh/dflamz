import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import GangOfDJs from "./pages/GangOfDJs.jsx";
import PressKit from "./pages/PressKit.jsx";
import Contact from "./pages/Contact.jsx";
import Artist from "./pages/Artist.jsx";

export default function App() {
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
          <Route path="/presskit" element={<PressKit />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
