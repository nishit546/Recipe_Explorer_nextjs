import Link from "next/link";
import { recipes } from "@/lib/recipes";
import { RecipeCard } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="panel narrow">
      <h1>Recipe not found</h1>
      <p className="lede">That recipe or cuisine doesn’t exist, or its link has changed. Try one of these instead.</p>
      <p className="actions"><Link className="btn" href="/recipes">All recipes</Link><Link className="btn ghost" href="/cuisines">Browse cuisines</Link></p>
      <div className="grid">{recipes.slice(0, 3).map((r) => <RecipeCard key={r.id} r={r} />)}</div>
    </section>
  );
}
