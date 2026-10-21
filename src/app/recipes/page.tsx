import Link from "next/link";
import { recipes, cuisines } from "@/lib/recipes";
import { RecipeCard, Crumbs } from "@/components/ui";

type Search = { q?: string; sort?: string; cuisine?: string };

export default async function RecipesPage({ searchParams }: { searchParams: Promise<Search> }) {
  const { q = "", sort = "recent", cuisine } = await searchParams;
  const needle = q.trim().toLowerCase();
  let list = recipes.filter((r) =>
    (!cuisine || r.cuisine === cuisine) &&
    (!needle || r.title.toLowerCase().includes(needle) || r.ingredients.some((i) => i.toLowerCase().includes(needle))));
  if (sort === "time") list = [...list].sort((a, b) => a.minutes - b.minutes);
  if (sort === "title") list = [...list].sort((a, b) => a.title.localeCompare(b.title));

  return (
    <>
      <Crumbs items={[["Home", "/"], ["Recipes"]]} />
      <h1>All recipes</h1>
      <p className="lede">Browse everyday dishes by cuisine and prep time.</p>

      <form className="filters" action="/recipes">
        <input name="q" defaultValue={q} placeholder="Search recipes or ingredients…" aria-label="Search" />
        {cuisine && <input type="hidden" name="cuisine" value={cuisine} />}
        <select name="sort" defaultValue={sort} aria-label="Sort by">
          <option value="recent">Most recent</option><option value="time">Quickest</option><option value="title">A to Z</option>
        </select>
        <button className="btn">Apply</button>
      </form>

      <div className="chips">
        <Link href="/recipes" className={!cuisine ? "on" : ""}>All</Link>
        {cuisines.map((c) => <Link key={c} href={`/recipes?cuisine=${encodeURIComponent(c)}`} className={cuisine === c ? "on" : ""}>{c}</Link>)}
      </div>

      {list.length ? <div className="grid four">{list.map((r) => <RecipeCard key={r.id} r={r} />)}</div>
        : <p className="panel">No recipes match “{q}”. Try a different ingredient or clear the filters.</p>}
      <p className="count">{list.length} of {recipes.length} recipes</p>
    </>
  );
}
