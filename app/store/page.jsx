import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
import ProductCard from "@/components/productcard";
import { fetchData } from "@/config/appwritejson";

export default async function Store(){
    const products = await fetchData();
  return (
    <main>
        <p className='text-black dark:text-white text-5xl p-10 text-center'>Store</p>
        <span id='breadcrumb' className="px-10 py-10">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
            <BreadcrumbLink href="/store">Store</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
        </BreadcrumbList>
      </Breadcrumb>
      </span>
      <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  )
}


