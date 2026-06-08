export default function Eyebrow({ n, children }) {
  return (
    <span className="eyebrow">
      {n && <em>{n}</em>}
      {children}
    </span>
  );
}
