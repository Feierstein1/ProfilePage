import type { Metadata } from "next";
import "./globals.css"; 
import { ThemeProvider } from "next-themes";
import HeaderBar from "../components/HeaderBar"
import FooterBar from "../components/FooterBar"


export const metadata: Metadata = {
  title: "Kenny Feierstein | Portfolio",
  description: "A showcase of my work and projects.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <ThemeProvider attribute="class">
      <body className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
       <HeaderBar/>
        <main className="pt-20 container mx-auto p-4">{children}</main>
        <FooterBar/>
      </body>
      </ThemeProvider>
    </html>
  );
}
