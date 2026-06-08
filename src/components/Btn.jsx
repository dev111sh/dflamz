export default function Btn({ kind = "primary", children, onClick, href, lg, block, ...rest }) {
  const cls = `btn btn--${kind}${lg ? " btn--lg" : ""}${block ? " btn--block" : ""}`;
  if (href) return <a className={cls} href={href} {...rest}>{children}</a>;
  return <button className={cls} onClick={onClick} {...rest}>{children}</button>;
}
