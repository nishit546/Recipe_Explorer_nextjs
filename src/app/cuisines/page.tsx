import Link from "next/link";
import { cuisines, recipes, getCuisineMeta } from "@/lib/recipes";
import { Crumbs, cuisineHref } from "@/components/ui";

export const metadata = { title: "Cuisines" };

export default function CuisinesPage() {
  return (
    <>
      <Crumbs items={[["Home", "/"], ["Cuisines"]]} />
      <h1>Regional Cuisines</h1>
      <p className="lede">Pick a regional culinary tradition to explore authentic recipes, spices, and cooking methods.</p>
      
      <div className="grid four">
        {cuisines.map((c) => {
          const n = recipes.filter((r) => r.cuisine === c).length;
          const meta = getCuisineMeta(c);
          return (
            <Link key={c} href={cuisineHref(c)} className="cuisine-card">
              <div className="cuisine-header">
                <span className="cuisine-emoji">{meta.emoji}</span>
                <div>
                  <h3>{c}</h3>
                </div>
              </div>
              <p>{meta.description}</p>
              <div className="cuisine-meta">
                <span className="recipe-count-badge">
                  {n} {n === 1 ? "recipe" : "recipes"}
                </span>
                <small>Explore →</small>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
