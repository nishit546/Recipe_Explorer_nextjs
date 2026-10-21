import Link from "next/link";
import { Recipe, slugify } from "@/lib/recipes";

export function Header() {
  return (
    <header className="bar">
      <div className="wrap row">
        <Link href="/recipes" className="brand">
          <span className="brand-badge">🍳</span>
          Everyday Recipes
        </Link>
        <nav>
          <Link href="/recipes">Recipes</Link>
          <Link href="/cuisines">Cuisines</Link>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="wrap foot">
      <div>
        <span className="foot-brand">Everyday Recipes</span> — Functional culinary notebook.
      </div>
      <div>Curated recipes and regional dishes from around the globe.</div>
    </footer>
  );
}

export function Crumbs({ items }: { items: [string, string?][] }) {
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      {items.map(([label, href], i) => (
        <span key={label} style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
          {i > 0 && <span className="sep">/</span>}
          {href ? <Link href={href}>{label}</Link> : <span>{label}</span>}
        </span>
      ))}
    </nav>
  );
}

export function RecipeCard({ r }: { r: Recipe }) {
  const diffClass = r.difficulty.toLowerCase();
  return (
    <Link href={`/recipes/${r.id}`} className="card">
      <div
        className="thumb"
        style={{
          background: `linear-gradient(135deg, ${r.tone}, ${r.tone}cc)`
        }}
      >
        <span className="thumb-initial">{r.title[0]}</span>
        <span className="thumb-emoji">{r.emoji}</span>
        <span className="pill">{r.minutes}m</span>
      </div>
      <div className="tags">
        <span className="tag-badge">{r.cuisine}</span>
        <span className={`tag-difficulty ${diffClass}`}>{r.difficulty}</span>
      </div>
      <h3>{r.title}</h3>
      <p>{r.summary}</p>
      <small>View recipe →</small>
    </Link>
  );
}

export const cuisineHref = (c: string) => `/cuisines/${slugify(c)}`;
