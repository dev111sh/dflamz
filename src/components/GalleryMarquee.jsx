import { useState } from "react";

const galleryModules = import.meta.glob("../assets/gallery/*.jpeg", { eager: true, import: "default" });
const ALL_IMAGES = Object.values(galleryModules);

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pick(n) {
  return shuffle(ALL_IMAGES).slice(0, n);
}

function Row({ images, reverse }) {
  const row = [...images, ...images];
  return (
    <div className="gmarq__row" aria-hidden="true">
      <div className={`gmarq__track${reverse ? " gmarq__track--rev" : ""}`}>
        {row.map((src, i) => (
          <div className="gmarq__it" key={i}>
            <img src={src} alt="" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function GalleryMarquee() {
  const [images] = useState(() => pick(14));
  const mid = Math.ceil(images.length / 2);
  const top = images.slice(0, mid);
  const bottom = images.slice(mid);
  return (
    <div className="gmarq">
      <Row images={top} />
      <Row images={bottom} reverse />
    </div>
  );
}
