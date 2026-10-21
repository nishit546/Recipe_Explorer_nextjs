import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getRecipe, recipes, relatedTo } from "@/lib/recipes";
import { RecipeCard, Crumbs, cuisineHref } from "@/components/ui";
import Checklist from "@/components/Checklist";

type Props = { params: Promise<{ id: string }> };
export const generateStaticParams = () => recipes.map((r) => ({ id: r.id }));
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const r = getRecipe((await params).id);
  return r ? { title: r.title, description: r.summary } : {};
}

export default async function RecipePage({ params }: Props) {
  const r = getRecipe((await params).id);
  if (!r) notFound();
  const related = relatedTo(r);

  return (
    <>
      <Crumbs items={[["Recipes", "/recipes"], [r.cuisine, cuisineHref(r.cuisine)], [r.title]]} />
      <header className="hero">
        <div>
          <h1>{r.title}</h1>
          <p className="lede">{r.summary}</p>
          <dl className="meta">
            <div><dt>Cuisine</dt><dd><Link href={cuisineHref(r.cuisine)}>{r.cuisine}</Link></dd></div>
            <div><dt>Prep time</dt><dd>{r.minutes} mins</dd></div>
            <div><dt>Difficulty</dt><dd>{r.difficulty}</dd></div>
            <div><dt>Serves</dt><dd>{r.servings}</dd></div>
          </dl>
        </div>
        <div className="photo" style={{ background: `linear-gradient(135deg, ${r.tone}, ${r.tone}88)` }}><b>{r.title[0]}</b></div>
      </header>

      <div className="split">
        <section className="panel"><h2>Ingredients <small>{r.ingredients.length} items</small></h2><Checklist items={r.ingredients} /></section>
        <section className="panel">
          <h2>Method <small>{r.steps.length} steps</small></h2>
          <ol className="steps">
            {r.steps.map((s) => <li key={s.title}><h3>{s.title}</h3><p>{s.body}</p></li>)}
          </ol>
        </section>
      </div>

      <h2 className="sec">Related recipes</h2>
      <div className="grid">{related.map((x) => <RecipeCard key={x.id} r={x} />)}</div>
    </>
  );
}
