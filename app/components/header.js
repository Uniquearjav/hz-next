import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header>
<div id="NavBar" className="flex justify-between">
  <div id="Logo" className="flex flex-row items-center">
    <Image priority={true} src="/media/favicon/hz.svg" width={64} height={64} className="h-20 p-1" alt=""/>
    <h1 className="text-black dark:text-white text-4xl">Horizaura</h1>
  </div>
  <div id="Links" className="flex items-center">
    <Link className="link" href="/">Home</Link>
    <Link className="link" href="/store">Store</Link>
    <Link className="link" href="/blog">Blog</Link>
    <Link className="link" href="/ContactUs">Contact Us</Link>
  </div>
  <div id="Icons" className="flex items-center">
    <a href=""><Image src="/media/icons/search.svg" width={100} height={100} className="h-10 p-1" alt=""/></a>
    <a href=""><Image src="/media/icons/cart.svg" width={100} height={100} className="h-10 p-1" alt=""/></a>
    <a href=""><Image src="/media/icons/user.svg" width={100} height={100} className="h-10 p-1" alt=""/></a>
  </div>
</div>
</header>
  )
}

export default Header
