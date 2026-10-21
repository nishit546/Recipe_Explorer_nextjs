import Link from "next/link";
import { Recipe, slugify } from "@/lib/recipes";

export function Header() {
  return (
    <header className="bar">
      <div className="wrap row">
        <Link href="/recipes" className="brand"><i />Everyday Recipes</Link>
        <nav><Link href="/recipes">Recipes</Link><Link href="/cuisines">Cuisines</Link></nav>
      </div>
    </header>
  );
}

export function Footer() {
  return <footer className="wrap foot">© 2026 Everyday Recipes. Functional culinary notebook.</footer>;
}

export function Crumbs({ items }: { items: [string, string?][] }) {
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      {items.map(([label, href], i) => (
        <span key={label}>{i > 0 && " / "}{href ? <Link href={href}>{label}</Link> : label}</span>
      ))}
    </nav>
  );
}

export function RecipeCard({ r }: { r: Recipe }) {
  return (
    <Link href={`/recipes/${r.id}`} className="card">
      <div className="thumb" style={{ background: `linear-gradient(135deg, ${r.tone}, ${r.tone}99)` }}>
        <span className="pill">{r.minutes} mins</span>
        <b>{r.title[0]}</b>
      </div>
      <div className="tags"><span>{r.cuisine}</span><span>{r.difficulty}</span></div>
      <h3>{r.title}</h3>
      <p>{r.summary}</p>
      <small>View recipe</small>
    </Link>
  );
}

export const cuisineHref = (c: string) => `/cuisines/${slugify(c)}`;
