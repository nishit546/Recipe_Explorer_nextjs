# Recipe Explorer 🍳

A modern, responsive Recipe Explorer web application built with **Next.js 15+ (App Router)**, **TypeScript**, and modern CSS.

Browse everyday dishes, filter by regional cuisines, search ingredients, sort by preparation time, and follow interactive cooking checklists.

---

## ✨ Features

- **🔍 Search & Filtering**: Instant search across recipe titles and ingredients with cuisine chips and query persistence via URL search parameters.
- **⏱️ Smart Sorting**: Sort recipes by recent addition, quickest preparation time, or alphabetically.
- **🏷️ Regional Cuisines**: Explore dedicated cuisine landing pages (`/cuisines`) and individual cuisine hubs (`/cuisines/[cuisine]`) with average prep times and recipe counts.
- **📖 Dynamic Recipe Details**: Rich detail views (`/recipes/[id]`) featuring difficulty ratings, serving sizes, tone color cards, and recommended related recipes.
- **✅ Interactive Cooking Checklist**: Stateful client-side checklist component allowing users to cross off ingredients as they cook.
- **⚡ Static Site Generation (SSG)**: Fast static generation using `generateStaticParams` for cuisines and recipes, combined with dynamic search and metadata generation (`generateMetadata`).
- **🎨 Responsive UI**: Custom CSS design system with breadcrumb navigation, badges, grids, and clean cards.
- **🚫 Custom 404 Page**: Graceful error handling with suggested recipes and recovery actions.

---

## 📁 Project Structure

```
recipe_explorer/
├── src/
│   ├── app/
│   │   ├── cuisines/
│   │   │   ├── [cuisine]/page.tsx   # Individual cuisine page
│   │   │   └── page.tsx             # Cuisines listing page
│   │   ├── recipes/
│   │   │   ├── [id]/page.tsx        # Recipe detail page
│   │   │   └── page.tsx             # Recipe catalog with search/filter
│   │   ├── favicon.ico
│   │   ├── globals.css              # Global styles & design tokens
│   │   ├── layout.tsx               # Root layout with Header and Footer
│   │   ├── not-found.tsx            # Custom 404 error page
│   │   └── page.tsx                 # Root redirect to /recipes
│   ├── components/
│   │   ├── Checklist.tsx            # Interactive ingredient checklist
│   │   └── ui.tsx                   # UI components (Header, Footer, RecipeCard, Crumbs)
│   └── lib/
│       └── recipes.ts               # Recipe datasets, types, and helper utilities
├── public/                          # Static assets and icons
├── next.config.ts                   # Next.js configuration
├── package.json                     # Project dependencies and scripts
└── tsconfig.json                    # TypeScript configuration
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.18.0 or newer recommended)
- `npm`, `pnpm`, or `yarn`

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/nishit546/Recipe_Explorer_nextjs.git
   cd Recipe_Explorer_nextjs
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to explore the app.

---

## 🛠️ Scripts

- `npm run dev` - Starts the local development server with Turbopack.
- `npm run build` - Generates an optimized production build.
- `npm run start` - Runs the production server.
- `npm run lint` - Runs ESLint code quality checks.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
