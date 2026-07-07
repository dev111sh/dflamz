import { useState, useEffect } from "react";
const PAGES = ["home", "about", "services", "artists", "presskit", "contact"];

export function parseHash() {
  const h = (window.location.hash || "").replace(/^#\/?/, "").trim();
  if (!h) return "home";
  const parts = h.split("/");
  // Any artist/<slug> is routed to the Artist page; unknown slugs (e.g. a
  // retired profile like jd) fall through to the roster from there.
  if (parts[0] === "artist" && parts[1]) return "artist:" + parts[1];
  return PAGES.includes(parts[0]) ? parts[0] : "home";
}

export function go(route) {
  window.location.hash = route.startsWith("artist:")
    ? `#/artist/${route.split(":")[1]}`
    : `#/${route}`;
}

export function useHashRoute() {
  const [route, setRoute] = useState(parseHash);
  useEffect(() => {
    const onHash = () => { setRoute(parseHash()); window.scrollTo({ top: 0 }); };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return route;
}
