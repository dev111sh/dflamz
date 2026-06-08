export default function VinylMark({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className="vmark" aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" strokeWidth="1" opacity=".5" />
      <circle cx="12" cy="12" r="7.5" fill="none" stroke="currentColor" strokeWidth="1" opacity=".35" />
      <path d="M12 6c-1.6 2-3 3.4-3 5.4A3 3 0 0 0 15 11.4C15 9.4 13.6 8 12 6z" fill="currentColor" />
    </svg>
  );
}
