import Image from 'next/image'
import './globals.css'
import { Montserrat } from "next/font/google";
import Header from "./components/header"
import Head from 'next/head';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script'

export const metadata = {
  title: 'Horizaura : Furniture and Sofas Redefined',
  description: 'Horizaura: Enhancing homes with beautifully crafted elegance. Explore our stunning selection of sofas, home decor, and captivating resin plates. Experience the blend of artistic craftsmanship and comfort in every aspect. Welcome to a world where creativity meets refined style.',
  openGraph: {}
};

metadata.openGraph.title = metadata.title;
metadata.openGraph.description = metadata.description;
metadata.openGraph.image = `https://www.horizaura.tech/og?title=${metadata.title}`

const montserrat = Montserrat({
  subsets: ['latin'],
  dispaly: 'swap',
})

export default function RootLayout({ children }) {
 return (
    <html lang="en" className={montserrat.className}>
      <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/media/favicon/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/media/favicon/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/media/favicon/favicon-16x16.png"/>
      <link rel="manifest" href="/media/favicon/site.webmanifest"/>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9405103571986725"
     crossorigin="anonymous"></script>
      </Head>
      <body className='dark:bg-black'><Header/>{children}
      <SpeedInsights />
      <Analytics />
      </body>
    </html>
  )
 }