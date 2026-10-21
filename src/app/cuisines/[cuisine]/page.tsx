import Link from "next/link";
import { notFound } from "next/navigation";
import { cuisines, cuisineFromSlug, recipes, slugify } from "@/lib/recipes";
import { RecipeCard, Crumbs, cuisineHref } from "@/components/ui";

type Props = { params: Promise<{ cuisine: string }> };
export const generateStaticParams = () => cuisines.map((c) => ({ cuisine: slugify(c) }));

export default async function CuisinePage({ params }: Props) {
  const name = cuisineFromSlug((await params).cuisine);
  if (!name) notFound();
  const list = recipes.filter((r) => r.cuisine === name);
  const avg = Math.round(list.reduce((s, r) => s + r.minutes, 0) / list.length);
  const others = cuisines.filter((c) => c !== name);

  return (
    <>
      <Crumbs items={[["Cuisines", "/cuisines"], [name]]} />
      <h1>{name} cuisine</h1>
      <p className="lede">{list.length} {list.length === 1 ? "recipe" : "recipes"}, averaging {avg} minutes of prep.</p>
      <div className="grid">{list.map((r) => <RecipeCard key={r.id} r={r} />)}</div>
      <h2 className="sec">Other cuisines</h2>
      <div className="chips">{others.map((c) => <Link key={c} href={cuisineHref(c)}>{c}</Link>)}</div>
    </>
  );
}
