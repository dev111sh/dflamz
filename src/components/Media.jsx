import { IMAGES } from "../assets/images.js";
import VinylMark from "./VinylMark.jsx";

export default function Media({ slot, mono = "DF", alt = "", ratio = "4 / 5", className = "" }) {
  const src = slot && IMAGES[slot];
  return (
    <div className={`media ${className}`} style={{ aspectRatio: ratio }}>
      {src
        ? <img src={src} alt={alt} loading="lazy" />
        : (
          <div className="media__ph">
            <VinylMark size={40} />
            <span>{mono}</span>
            <i>photo</i>
          </div>
        )}
    </div>
  );
}
