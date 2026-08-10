import { useEffect } from "react";

const KEY = "dflamz_ref";

export function useReferral() {
  useEffect(() => {
    const ref = new URLSearchParams(window.location.search).get("ref");
    if (ref) sessionStorage.setItem(KEY, ref);
  }, []);
}

export function getReferral() {
  return sessionStorage.getItem(KEY) || null;
}
