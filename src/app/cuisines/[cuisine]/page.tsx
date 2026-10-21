import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { cuisines, cuisineFromSlug, recipes, slugify, getCuisineMeta } from "@/lib/recipes";
import { RecipeCard, Crumbs, cuisineHref } from "@/components/ui";

type Props = { params: Promise<{ cuisine: string }> };

export const generateStaticParams = () => cuisines.map((c) => ({ cuisine: slugify(c) }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const name = cuisineFromSlug((await params).cuisine);
  if (!name) return {};
  const meta = getCuisineMeta(name);
  return {
    title: `${name} Cuisine`,
    description: meta.description
  };
}

export default async function CuisinePage({ params }: Props) {
  const name = cuisineFromSlug((await params).cuisine);
  if (!name) notFound();

  const meta = getCuisineMeta(name);
  const list = recipes.filter((r) => r.cuisine === name);
  const avg = list.length > 0 ? Math.round(list.reduce((s, r) => s + r.minutes, 0) / list.length) : 0;
  const others = cuisines.filter((c) => c !== name);

  return (
    <>
      <Crumbs items={[["Cuisines", "/cuisines"], [name]]} />
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "12px" }}>
        <span style={{ fontSize: "36px" }}>{meta.emoji}</span>
        <h1 style={{ margin: 0 }}>{name} Cuisine</h1>
      </div>
      <p className="lede">
        {meta.description} {list.length} {list.length === 1 ? "recipe" : "recipes"} available, averaging {avg} minutes of prep.
      </p>

      <div className="grid">
        {list.map((r) => (
          <RecipeCard key={r.id} r={r} />
        ))}
      </div>

      <h2 className="sec">Explore Other Cuisines</h2>
      <div className="chips">
        {others.map((c) => {
          const m = getCuisineMeta(c);
          return (
            <Link key={c} href={cuisineHref(c)}>
              <span>{m.emoji}</span> {c}
            </Link>
          );
        })}
      </div>
    </>
  );
}
