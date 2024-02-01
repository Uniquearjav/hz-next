import Image from 'next/image'
import React from 'react'

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
    <Image priority={true} src="/media/products/HZ1.jpg" alt="Background Image" className="object-cover object-center w-full h-full" width={1000} height={1000} />
    <div className="absolute inset-0 bg-black opacity-50"></div>
  </div>
  
  <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
    <h1 className="text-5xl font-bold leading-tight mb-4">Welcome To Horizaura</h1>
    <p className="text-lg text-gray-300 mb-8">Discover amazing features and services that await you.</p>
    <a href="/store" className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Shop Now !!</a>
  </div>
</div>
</section>
<div>

<form action="./api/data" method="post">

    <label htmlFor="prod_id"> Enter Age </label>
    <input type="text" name="prod_id" id="prod_id" />

    <label htmlFor="prod_name"> Enter Age </label>
    <input type="text" name="prod_name" id="prod_name" />

    <label htmlFor="prod_price"> Enter Age </label>
    <input type="text" name="prod_price" id="prod_price" />

    <label htmlFor="prod_desc"> Enter Age </label>
    <input type="text" name="prod_desc" id="prod_desc" />

    <input type="submit" value="submit" />

</form>
</div>
    </main>
  )
}

export default page