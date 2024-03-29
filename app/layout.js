import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
import Link from "next/link";
import Script from "next/script";
import { cn } from "../lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
// Google Analytics
import { GoogleAnalytics } from "@next/third-parties/google";
// Vercel Analytics
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

// If loading a variable font, you don't need to specify the font weight
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

export const metadata = {
  // google site verification
  verification: { google: process.env.GOOGLE_VERIFICATION_WEBSITE },
  title: "Horizaura : Furniture and Sofas Redefined",
  description:
    "Horizaura: Enhancing homes with beautifully crafted elegance. Explore our stunning selection of sofas, home decor, and captivating resin plates. Experience the blend of artistic craftsmanship and comfort in every aspect. Welcome to a world where creativity meets refined style.",
  openGraph: {},
};

metadata.openGraph.title = metadata.title;
metadata.openGraph.description = metadata.description;
metadata.openGraph.images = `https://www.horizaura.tech/og?title=${metadata.title}`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/media/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/media/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/media/favicon/favicon-16x16.png"
        />
        <Link rel="manifest" href="/media/favicon/site.webmanifest" />
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.GOOGLE_ADSENSE}`}
          crossorigin="anonymous"
        />
      </Head>

      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased ",
          poppins.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div>{children}</div>
        </ThemeProvider>
        <Analytics />
        <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS} />
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
