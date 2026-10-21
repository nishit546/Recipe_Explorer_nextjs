export type Recipe = {
  id: string;
  title: string;
  cuisine: string;
  difficulty: "Easy" | "Medium" | "Hard";
  minutes: number;
  servings: number;
  summary: string;
  tone: string;
  emoji: string;
  ingredients: string[];
  steps: { title: string; body: string }[];
};

export type CuisineInfo = {
  name: string;
  emoji: string;
  description: string;
};

export const cuisineMeta: Record<string, { emoji: string; description: string }> = {
  "Asian": { emoji: "🥢", description: "Vibrant stir-fries, umami broths, and fresh aromatics." },
  "Mediterranean": { emoji: "🫒", description: "Sun-ripened produce, olive oils, and wholesome bakes." },
  "European": { emoji: "🌿", description: "Classic roasts, aromatic herbs, and time-tested comfort food." },
  "Indian": { emoji: "🌶️", description: "Fragrant spices, rich dals, and slow-tempered aromatics." },
  "Italian": { emoji: "🍕", description: "Artisanal breads, simple quality ingredients, and rustic flavors." },
  "Latin American": { emoji: "🥑", description: "Smoky chipotles, hearty beans, and zesty citrus." },
  "Middle Eastern": { emoji: "🧆", description: "Nutty tahini, roasted spices, and fresh herb blends." },
};

export const recipes: Recipe[] = [
  {
    id: "vegetable-noodles",
    title: "Vegetable Noodles",
    cuisine: "Asian",
    difficulty: "Easy",
    minutes: 20,
    servings: 2,
    tone: "#ea580c",
    emoji: "🍜",
    summary: "Tender stir-fried ribbons with ginger-tamari glaze, scallions, and sesame.",
    ingredients: [
      "200g wheat noodles or soba",
      "1 tbsp toasted sesame oil",
      "1 small carrot, julienned",
      "1 red bell pepper, thinly sliced",
      "2 cups shredded savoy cabbage",
      "2 scallions, diagonally sliced",
      "2 tbsp low-sodium soy sauce",
      "1 tbsp dark soy sauce",
      "1 tsp grated ginger"
    ],
    steps: [
      { title: "Par-boil the noodles", body: "Cook in salted boiling water until al dente, drain, and toss with half the sesame oil." },
      { title: "Preheat the wok", body: "Heat a wide skillet over medium-high heat with the remaining oil until shimmering." },
      { title: "Flash the aromatics and vegetables", body: "Add ginger, carrot, and pepper; stir-fry briskly for 3 minutes until tender-crisp." },
      { title: "Add greens and sauce", body: "Fold in the cabbage and noodles, then pour in both soy sauces." },
      { title: "Glaze and finish", body: "Toss for 2 minutes until glossy. Finish with scallions and serve." }
    ]
  },
  {
    id: "rustic-tomato-galette",
    title: "Rustic Tomato Galette",
    cuisine: "Mediterranean",
    difficulty: "Medium",
    minutes: 45,
    servings: 4,
    tone: "#e11d48",
    emoji: "🍅",
    summary: "Flaky spelt dough folded over slow-roasted heirloom tomatoes and herbed ricotta.",
    ingredients: [
      "200g spelt flour",
      "100g cold butter, cubed",
      "4 heirloom tomatoes, sliced",
      "150g ricotta",
      "1 tbsp thyme leaves",
      "1 egg, beaten"
    ],
    steps: [
      { title: "Make the dough", body: "Rub butter into flour with a pinch of salt, add 3 tbsp ice water, and chill 20 minutes." },
      { title: "Salt the tomatoes", body: "Layer slices on paper towels with salt and drain for 15 minutes." },
      { title: "Assemble", body: "Roll the dough to a rough circle, spread ricotta, top with tomatoes, and fold the edges in." },
      { title: "Bake", body: "Brush with egg and bake at 200°C for 35 minutes until deep golden." }
    ]
  },
  {
    id: "lemon-herb-roast-chicken",
    title: "Lemon Herb Roast Chicken",
    cuisine: "European",
    difficulty: "Medium",
    minutes: 90,
    servings: 4,
    tone: "#d97706",
    emoji: "🍗",
    summary: "Crisp skin infused with crushed garlic, lemon peel, and cracked pepper.",
    ingredients: [
      "1 whole chicken (1.6kg)",
      "1 lemon, zested and halved",
      "6 garlic cloves, crushed",
      "2 tbsp olive oil",
      "1 tsp cracked black pepper",
      "A handful of thyme and rosemary"
    ],
    steps: [
      { title: "Dry and season", body: "Pat the chicken dry and rub with oil, zest, garlic, pepper, and salt." },
      { title: "Stuff the cavity", body: "Add lemon halves and herbs, then tie the legs." },
      { title: "Roast", body: "Roast at 200°C for about 75 minutes until the juices run clear." },
      { title: "Rest", body: "Rest 15 minutes before carving." }
    ]
  },
  {
    id: "miso-glazed-eggplant",
    title: "Miso Glazed Eggplant",
    cuisine: "Asian",
    difficulty: "Easy",
    minutes: 25,
    servings: 2,
    tone: "#7c3aed",
    emoji: "🍆",
    summary: "Cross-hatched eggplant broiled with red miso, mirin, and toasted sesame.",
    ingredients: [
      "2 Japanese eggplants, halved",
      "3 tbsp red miso",
      "2 tbsp mirin",
      "1 tbsp neutral oil",
      "1 tsp sesame seeds",
      "1 scallion, sliced"
    ],
    steps: [
      { title: "Score the flesh", body: "Cut a diamond pattern into each half and brush with oil." },
      { title: "Roast", body: "Roast cut-side up at 220°C for 15 minutes until soft." },
      { title: "Glaze and broil", body: "Whisk miso and mirin, spread over the eggplant, and broil for 3 minutes." },
      { title: "Finish", body: "Top with sesame and scallion." }
    ]
  },
  {
    id: "classic-lentil-dhal",
    title: "Classic Lentil Dhal",
    cuisine: "Indian",
    difficulty: "Easy",
    minutes: 35,
    servings: 4,
    tone: "#ca8a04",
    emoji: "🍲",
    summary: "Yellow split lentils simmered with turmeric and finished with a sizzling tarka.",
    ingredients: [
      "1 cup yellow split lentils",
      "1 tsp turmeric",
      "1 onion, diced",
      "3 garlic cloves",
      "1 tsp cumin seeds",
      "2 tbsp ghee",
      "Lemon wedges"
    ],
    steps: [
      { title: "Simmer the lentils", body: "Cook lentils with turmeric and 4 cups water for 25 minutes until creamy." },
      { title: "Make the tarka", body: "Fry cumin, onion, and garlic in ghee until golden." },
      { title: "Combine", body: "Pour the tarka over the dhal, stir, and add lemon." }
    ]
  },
  {
    id: "sourdough-focaccia",
    title: "Sourdough Focaccia",
    cuisine: "Italian",
    difficulty: "Hard",
    minutes: 60,
    servings: 8,
    tone: "#b45309",
    emoji: "🥖",
    summary: "High-hydration open crumb focaccia steeped in extra virgin olive oil.",
    ingredients: [
      "500g bread flour",
      "400g water",
      "100g active starter",
      "10g salt",
      "80ml olive oil",
      "Flaky salt and rosemary"
    ],
    steps: [
      { title: "Mix and rest", body: "Combine flour, water, starter, and salt. Rest 30 minutes." },
      { title: "Fold", body: "Do four sets of stretch-and-folds, 30 minutes apart." },
      { title: "Pan and dimple", body: "Transfer to an oiled pan, rest, then dimple with oiled fingers." },
      { title: "Bake", body: "Top with salt and rosemary, bake at 230°C for 25 minutes." }
    ]
  },
  {
    id: "smoky-black-bean-soup",
    title: "Smoky Black Bean Soup",
    cuisine: "Latin American",
    difficulty: "Easy",
    minutes: 30,
    servings: 4,
    tone: "#be123c",
    emoji: "🥣",
    summary: "Deep chipotle broth with tender simmered black turtle beans.",
    ingredients: [
      "2 cans black beans",
      "1 chipotle in adobo",
      "1 onion, diced",
      "3 garlic cloves",
      "1 tsp ground cumin",
      "3 cups vegetable stock",
      "Lime and cilantro"
    ],
    steps: [
      { title: "Soften the base", body: "Sauté onion and garlic with cumin for 5 minutes." },
      { title: "Simmer", body: "Add beans, chipotle, and stock; simmer 20 minutes." },
      { title: "Blend and serve", body: "Blend half the soup, stir back in, and finish with lime and cilantro." }
    ]
  },
  {
    id: "sesame-tahini-noodles",
    title: "Sesame Tahini Noodles",
    cuisine: "Middle Eastern",
    difficulty: "Easy",
    minutes: 15,
    servings: 2,
    tone: "#0d9488",
    emoji: "🥢",
    summary: "Cold wheat noodles tossed in roasted sesame paste and grilled chili.",
    ingredients: [
      "200g wheat noodles",
      "3 tbsp tahini",
      "1 tbsp soy sauce",
      "1 tbsp lemon juice",
      "1 tsp chili flakes",
      "1 cucumber, sliced"
    ],
    steps: [
      { title: "Cook and chill", body: "Boil the noodles, rinse under cold water, and drain." },
      { title: "Whisk the sauce", body: "Mix tahini, soy, lemon, and 3 tbsp water until smooth." },
      { title: "Toss", body: "Coat the noodles, top with cucumber and chili." }
    ]
  }
];

export const slugify = (s: string) => s.toLowerCase().replace(/\s+/g, "-");
export const getRecipe = (id: string) => recipes.find((r) => r.id === id);
export const cuisines = [...new Set(recipes.map((r) => r.cuisine))];
export const cuisineFromSlug = (slug: string) => cuisines.find((c) => slugify(c) === slug);
export const getCuisineMeta = (c: string) => cuisineMeta[c] || { emoji: "🍽️", description: "Delicious regional dishes." };

/** Score by shared cuisine, similar difficulty, and similar prep time. */
export function relatedTo(r: Recipe, n = 3) {
  return recipes
    .filter((o) => o.id !== r.id)
    .map((o) => ({
      o,
      score:
        (o.cuisine === r.cuisine ? 3 : 0) +
        (o.difficulty === r.difficulty ? 1 : 0) +
        (Math.abs(o.minutes - r.minutes) <= 15 ? 1 : 0)
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, n)
    .map((x) => x.o);
}
