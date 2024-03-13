"use client";
import Image from 'next/image';
import { Client, Databases, Query } from 'appwrite';
import { useState, useEffect } from 'react';

export default function Page({ params }) {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const client = new Client()
            .setEndpoint("https://cloud.appwrite.io/v1")
            .setProject(process.env.APPWRITE_PROJECT);

        const databases = new Databases(client);

        databases.listDocuments(
            "horizaura",
            "Products",
            [
                Query.equal('product_id', params.productId)
            ]
        ).then(
            function (response) {
                console.log(response)
                setProduct(response);
            },
            function (error) {
                console.log(error);
            }
        );
    }, [params.productId]);

    return (
        <div>
            {params.productId}
            <section className="body-font dark:text-white text-black overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        {product && (
                            <div>
                                <Image
                                    width={400}
                                    height={400}
                                    alt={`${product.name}, ID - ${product.product_id}, Price - Rs. ${product.price}`}
                                    className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                                    src={`/media/products/${product.product_id}.jpg`}
                                />
                                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                    <h2 className="text-sm title-font text-white tracking-widest">HORIZAURA - Big Furniture </h2>
                                    <h1 className="text-3xl title-font text-white font-medium mb-1">{product.product_name}</h1>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
