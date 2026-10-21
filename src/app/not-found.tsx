import Link from "next/link";
import { recipes } from "@/lib/recipes";
import { RecipeCard } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="panel narrow" style={{ margin: "48px auto", maxWidth: "800px" }}>
      <p style={{ fontSize: "52px", margin: "0 0 16px" }}>🍽️</p>
      <h1>Page or Recipe Not Found</h1>
      <p className="lede" style={{ margin: "0 auto 24px" }}>
        That dish or cuisine page doesn’t exist or may have been moved. Try exploring popular recipes below or search our collection.
      </p>

      <div className="actions">
        <Link className="btn" href="/recipes">
          All Recipes
        </Link>
        <Link className="btn ghost" href="/cuisines">
          Browse Cuisines
        </Link>
      </div>

      <h2 className="sec" style={{ textAlign: "left", marginTop: "36px" }}>
        Popular Recipes to Try
      </h2>
      <div className="grid" style={{ textAlign: "left" }}>
        {recipes.slice(0, 3).map((r) => (
          <RecipeCard key={r.id} r={r} />
        ))}
      </div>
    </section>
  );
}
