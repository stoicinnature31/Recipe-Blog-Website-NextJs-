import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Bubbly Baker",
  description: "My amazing recipe app",
};

export default function RootLayout({ children }) {

  let header = (
    <header>
      <Link href={'/'}>
        <h1>🍽️RECIPE BLOG SITE🧑‍🍳</h1>
      </Link>
    </header>
  )

  let footer = (
    <footer>
      <p>&copy; 2024,RecipeBlogSite , All Rights Reserved</p>
    </footer>
  )
  return (
    <html lang="en">
      <body className={inter.className}>
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
