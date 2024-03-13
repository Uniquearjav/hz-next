import Image from 'next/image'
import React from 'react'
import Logo from '../public/horizaura.svg'
import usersvg from '../public/icons/user.svg'
import cartsvg from '../public/icons/cart.svg'
import blogsvg from '../public/icons/blog.svg'
import Link from 'next/link'


const Header = () => {
  return (
    <header>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Image src={Logo} height={80} width={80} className="h-20 p-1" alt="Logo" priority />
          <h1 className="text-black dark:text-white text-4xl">Horizaura</h1>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href='/' className="header-link">Home</Link>
          <Link href='/store' className="header-link">Store</Link>
          <Link href='/blog' className="header-link">Blog</Link>
          <Link href='/ContactUs' className="header-link">Contact Us</Link>
        </nav>
        <div id="Icons" className="flex items-center">
          {/* <Image src={usersvg}></Image>
          <Image src={cartsvg}></Image>
          <Image src={blogsvg}></Image> */}
        </div>
      </div>
    </header>
  )
}

export default Header