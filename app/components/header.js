"use client";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import useDarkMode from './darkMode'
import search_svg from '../../public/media/icons/search.svg'
import cart_svg from '../../public/media/icons/cart.svg'
import favicon from '../../public/media/favicon/hz.svg'

export default function Header() {
  const [colorTheme, setTheme] = useDarkMode();
  return (
        <header className='dark:text-white dark:bg-slate-800'>
    <div id="NavBar" className="flex justify-between">
      <div id="Logo" className="flex flex-row items-center">
        <Image priority={true} src={favicon} width={64} height={64} className="h-20 p-1" alt=""/>
        <h1 className="text-black dark:text-white text-4xl">Horizaura</h1>
      </div>
      <div id="Links" className="flex items-center">
        <Link className="link" href="/">Home</Link>
        <Link className="link" href="/store">Store</Link>
        <Link className="link" href="/blogs">Blogs</Link>
        
      </div>
      <div id="Icons" className="flex items-center">
        <a href=""><Image src={search_svg} className="h-10 dark:text-white p-1" alt=""/></a>
        <a href=""><Image src={cart_svg} className="h-10 p-1" alt=""/></a>
        {colorTheme === "light" ? (
        <svg
          onClick={() => setTheme("light")}
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-indigo-200"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ) : (
        <svg
          onClick={() => setTheme("dark")}
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-gray-900"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}
      </div>
    </div>
    </header>
  )
}
