import Image from 'next/image'
import './globals.css'
import { Montserrat } from "next/font/google";
import Header from "./components/header"
import Head from 'next/head';



const montserrat = Montserrat({
  subsets: ['latin'],
  dispaly: 'swap',
})
export var metadata = {
  title: 'Horizaura',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en" className={montserrat.className}>
      <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/media/favicon/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/media/favicon/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/media/favicon/favicon-16x16.png"/>
      <link rel="manifest" href="/media/favicon/site.webmanifest"/>
      </Head>
      <body><Header/>{children}
      </body>
    </html>
  )
}