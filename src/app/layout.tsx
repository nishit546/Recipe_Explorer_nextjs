import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header, Footer } from "@/components/ui";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = { title: { default: "Everyday Recipes", template: "%s · Everyday Recipes" }, description: "Browse everyday recipes by cuisine and prep time." };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="wrap">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
