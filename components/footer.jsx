import Link from 'next/link'
import React from 'react'
import { Instagram, Linkedin,Twitter, Facebook } from 'lucide-react';
import Logo from '../public/horizaura.svg'
import Image from 'next/image';

function Footer() {
  return (
  <footer className="text-gray-600 dark:bg-black dark:text-white body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap md:text-left text-center order-first">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="footer-title">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <Link href={'/store/category/sofas'} className="footer-link">Sofas</Link>
          </li>
          <li>
            <Link href={'/'} className="footer-link">Second Link</Link>
          </li>
          <li>
            <Link href={'/'} className="footer-link">Third Link</Link>
          </li>
          <li>
            <Link href={'/'} className="footer-link">Fourth Link</Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="footer-title">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <Link href='/' className="footer-link">First Link</Link>
          </li>
          <li>
            <Link href='/' className="footer-link">Second Link</Link>
          </li>
          <li>
            <Link href='/' className="footer-link">Third Link</Link>
          </li>
          <li>
            <Link href='/' className="footer-link">Fourth Link</Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium dark:text-white text-gray-900 tracking-widest text-sm mb-3">SUBSCRIBE</h2>
        <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
          <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
            <label htmlFor="footer-field" className="leading-7 text-sm text-gray-600">Placeholder</label>
            <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
        </div>
        <p className="text-gray-500 text-sm mt-2 md:text-left text-center">Bitters chicharrones fanny pack
          <br className="lg:block hidden" />waistcoat green juice
        </p>
      </div>
    </div>
  </div>
  <div className="dark:bg-black bg-gray-100">
    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
      <Link href={'/'} className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <Image src={Logo} height={80} width={80} alt="Horizaura Logo" priority />
        <span className="ml-3 dark:text-white text-xl">Horizaura</span>
      </Link>
      <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2024 Horizaura —
        <Link href="https://twitter.com/horizaura" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@horizaura</Link>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <Link href={'/'} className="text-gray-500">
        <Facebook />
        </Link>
        <Link href={'/'} className="ml-3 text-gray-500">
        <Twitter />
        </Link>
        <Link href={'/'} className="ml-3 text-gray-500">
        <Instagram />
        </Link>
        <Link href={'/'} className="ml-3 text-gray-500">
        <Linkedin />
        </Link>
      </span>
    </div>
  </div>
</footer>
  )
}

export default Footer
