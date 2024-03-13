"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Client, Databases, Query } from 'appwrite';

export default function Page({ params }) {
  const [Product, setProduct] = useState();

  const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject(process.env.APPWRITE_PROJECT)

  const databases = new Databases(client);

  let promise = databases.listDocuments(
    "horizaura",
    "Products",
    [
      Query.equal('product_id', params.productId)
    ]
  );

  promise.then(function (response) {
    console.log(response.documents[0]);
    setProduct(response.documents[0]);
  }, function (error) {
    console.log(error);
  });
  return (
    <section class="text-gray-600 body-font overflow-hidden">
      {Product && ( // Render content only if productData is not null
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <Image alt="ecommerce" width={500} height={500} class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={`/media/products/${Product.product_id}.jpg`} />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 class="text-sm title-font dark:text-white text-gray-500 tracking-widest">HORIZAURA</h2>
              <h1 class="text-gray-900 text-3xl title-font dark:text-white font-medium mb-1">{Product.name}</h1>
              <div class="flex mb-4">
                <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a class="text-gray-500">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a class="text-gray-500">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a class="text-gray-500">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p class="leading-relaxed dark:text-white">{Product.description}</p>
              <div class="flex">
                <span class="title-font font-medium text-2xl dark:text-white text-gray-900">{Product.price}</span>
                <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
                <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}


    </section>
  );
}
