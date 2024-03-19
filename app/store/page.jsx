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
import { Home, StoreIcon } from 'lucide-react';

export default async function Store(){
    const products = await fetchData();
  return (
    <main className='container'>
        <p className='text-black dark:text-white text-5xl p-10 text-center'>Store</p>
        <span id='breadcrumb' className="px-10 dark:text-white text-black py-10">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/"> <span className='flex items-center '><Home className='p-1' /> Home</span> </BreadcrumbLink>
          </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
            <BreadcrumbLink href="/store"><span className='flex items-center'> <StoreIcon className='p-1'/> Store</span> </BreadcrumbLink>
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


