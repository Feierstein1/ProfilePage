import type { Metadata } from "next";
import "./globals.css"; 
import { ThemeProvider } from "next-themes";
import HeaderBar from "../components/layout/HeaderBar"
import FooterBar from "../components/layout/FooterBar"


export const metadata: Metadata = {
  title: "Kenny Feierstein | Portfolio",
  description: "A showcase of my work and projects.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <ThemeProvider attribute="class">
      <body className="text-gray-900 bg-gray-100 dark:bg-gray-900 dark:text-gray-100">
       <HeaderBar/>
        <main className="container p-4 pt-20 mx-auto">{children}</main>
        <FooterBar/>
      </body>
      </ThemeProvider>
    </html>
  );
}
