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
      <body suppressHydrationWarning>
        <ThemeProvider attribute="class">
          <HeaderBar />
          <main>{children}</main>
          <FooterBar />
        </ThemeProvider>
      </body>
    </html>
  );
}
