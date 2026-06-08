import { useHashRoute } from "./hooks/useHashRoute.js";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Artists from "./pages/Artists.jsx";
import PressKit from "./pages/PressKit.jsx";
import Contact from "./pages/Contact.jsx";
import Artist from "./pages/Artist.jsx";

const PAGES = { home: Home, about: About, services: Services, artists: Artists, presskit: PressKit, contact: Contact };

export default function App() {
  const route = useHashRoute();

  let body;
  if (route.startsWith("artist:")) {
    body = <Artist slug={route.split(":")[1]} />;
  } else {
    const Page = PAGES[route] || Home;
    body = <Page />;
  }

  return (
    <div className="dfn">
      <Nav route={route} />
      <main>{body}</main>
      <Footer />
    </div>
  );
}
