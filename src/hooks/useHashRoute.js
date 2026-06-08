import { useState, useEffect } from "react";
import { PAGES, PROFILES } from "../data/site.js";

export function parseHash() {
  const h = (window.location.hash || "").replace(/^#\/?/, "").trim();
  if (!h) return "home";
  const parts = h.split("/");
  if (parts[0] === "artist" && PROFILES[parts[1]]) return "artist:" + parts[1];
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
