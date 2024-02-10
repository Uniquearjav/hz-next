import Image from 'next/image'
import './globals.css'
import { Montserrat } from "next/font/google";
import Header from "./components/header"
import Head from 'next/head';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script'
// import GET from './og/route'


const montserrat = Montserrat({
  subsets: ['latin'],
  dispaly: 'swap',
})

export var met = {
  title: 'Horizaura'
}

export var metadata = {
  openGraph: {
    title: 'Horizaura',
    description: 'HZ',
    url: 'https://www.horizaura.tech/',
    siteName: 'Horizaura',
    images: [
      {
        url: `https://horizaura.tech/og?title=${met.title}`, // Must be an absolute URL
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  title: 'Horizaura',
  description: 'Generated by Next.js',
}
export default function RootLayout({ children }) {
 return (
    <html lang="en" className={montserrat.className}>
      {/* <GET></GET> */}
      <Head>
        <meta 
        name='og:image'
        content={
          // Because OG images must have a absolute URL, we use the
          // `VERCEL_URL` environment variable to get the deployment’s URL.
          // More info:
          // https://vercel.com/docs/concepts/projects/environment-variables
          `${
            process.env.VERCEL_URL ? 'https://' + process.env.VERCEL_URL : ''
          }/api/vercel`
        }
      />
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
