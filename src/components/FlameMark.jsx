export default function FlameMark({ size = 18, color = "var(--blue)" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className="flame-mark" aria-hidden="true">
      <path
        fill={color}
        d="M12.5 1.5c.6 2.8-.4 4.6-1.9 6.3C9 9.7 7 11.7 7 14.8a5 5 0 0 0 10 0c0-1.7-.7-2.8-1.5-3.9-.2.9-.7 1.6-1.4 1.6-.8 0-1.4-.7-1.3-1.6.3-2 1.9-3.2 1.9-5.5 0-1.6-.8-2.9-2.2-3.9z"
      />
    </svg>
  );
}
