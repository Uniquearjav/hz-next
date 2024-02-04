import Image from 'next/image'
import Link from "next/link";
import React from 'react'
import HeroImage from "../public/media/products/HZ1.jpg";

export const metadata = {
  title: 'Horizaura : Furniture and Sofas Redefined',
  description: `Horizaura: Enhancing homes with beautifully crafted elegance. Explore our stunning selection of sofas, home decor, and captivating resin plates. Experience the blend of artistic craftsmanship and comfort in every aspect. Welcome to a world where creativity meets refined style.`
}

function page() {
  return (
    <main>
        <section id="Hero">
<div className="relative top-0 h-screen text-white overflow-hidden">
  <div className="absolute inset-0">
    <Image src={HeroImage} alt="Background Image" className="object-cover object-center w-full h-full" priority />
    <div className="absolute inset-0 bg-black opacity-30 dark:opacity-70"></div>
  </div>
  
  <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
    <h1 className="text-5xl font-bold leading-tight mb-4">Welcome To Horizaura</h1>
    <p className="text-lg text-gray-300 mb-8">Discover amazing features and services that await you.</p>
    <Link href="/store" className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Shop Now !!</Link>
  </div>
</div>
</section>
    </main>
  )
}

export default page