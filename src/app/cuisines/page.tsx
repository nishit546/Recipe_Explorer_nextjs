import Link from "next/link";
import { cuisines, recipes } from "@/lib/recipes";
import { Crumbs, cuisineHref } from "@/components/ui";

export const metadata = { title: "Cuisines" };

export default function CuisinesPage() {
  return (
    <>
      <Crumbs items={[["Home", "/"], ["Cuisines"]]} />
      <h1>Cuisines</h1>
      <p className="lede">Pick a regional style to see its recipes.</p>
      <div className="grid four">
        {cuisines.map((c) => {
          const n = recipes.filter((r) => r.cuisine === c).length;
          return <Link key={c} href={cuisineHref(c)} className="card"><h3>{c}</h3><p>{n} {n === 1 ? "recipe" : "recipes"}</p><small>Explore</small></Link>;
        })}
      </div>
    </>
  );
}
