import Image from 'next/image'
import Link from "next/link";
import React from 'react'
import HeroImage from "../public/media/products/HZ1.jpg";


export const metadata = {
  title: 'Horizaura : Furniture and Sofas Redefined',
  description: `Horizaura: Enhancing homes with beautifully crafted elegance. Explore our stunning selection of sofas, home decor, and captivating resin plates. Experience the blend of artistic craftsmanship and comfort in every aspect. Welcome to a world where creativity meets refined style.`
}

async function getProducts() {
  const response = await fetch('https://hz-web.vercel.app/store/api/productjson?format=json');
  const products = await response.json();
  console.log(products);
  return products;
}

export async function page() {
  const products = await getProducts();
  return (
    <main className='dark:bg-black'>
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
<section id="ProductHero" className='dark:bg-black'>
      <h2 className="text-5xl text-center p-10">Browse The Range</h2>
      <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {products.map((product) => (
          <div key={product.id} className="products w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
              <Image src={`/media/products/HZ${product.id}.jpg`} alt="Product" width={288} height={320} className="h-80 w-72 object-cover rounded-t-xl" />
              <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">HORIZAURA</span>
                <p className="text-lg font-bold text-black truncate block capitalize">{ product.name}</p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black dark:text-white cursor-auto my-3">&#8377; { product.price}</p>
                  <div className="ml-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
    </main>
  )
}

export default page