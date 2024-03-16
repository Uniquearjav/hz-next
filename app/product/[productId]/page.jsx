import Image from "next/image";
import { Client, Databases, Query } from "appwrite";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { IndianRupee, Star, StarHalf } from "lucide-react";

export default async function Page({ params }) {
    let INRIndia = new Intl.NumberFormat('en-IN', {
        maximumSignificantDigits: 3
    });
    const client = new Client().setEndpoint("https://cloud.appwrite.io/v1").setProject(process.env.APPWRITE_PROJECT);

    const databases = new Databases(client);

    const response = await databases.listDocuments("horizaura", "Products", [Query.equal("product_id", params.productId), Query.limit(1)])
    const product = response.documents[0]
    return (
            <section className="body-font dark:text-white text-black overflow-hidden">
                <div className="container px-5 py-24 mx-auto">

                {product && (
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <Image alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" width={400} height={400} src={`/media/products/${product.product_id}.jpg`} />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font dark:text-white text-black tracking-widest">HORIZAURA</h2>
                            <h1 className="text-black dark:text-white text-3xl title-font font-medium mb-1">{product.product_name}</h1>
                            <div className="flex mb-4">
                                <span className="flex items-center">
                                <Star /><Star /><Star /><StarHalf  />
                                    <span className="text-gray-600 ml-3">4 Reviews</span>
                                </span>
                                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                    <a className="text-gray-500">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a className="text-gray-500">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </a>
                                    <a className="text-gray-500">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>
                                    </a>
                                </span>
                            </div>
                            <p className="leading-relaxed dark:text-white text-black">{product.description}</p>
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                            <span className="title-font flex items-center font-medium text-2xl text-black dark:text-white"><IndianRupee /> {INRIndia.format(product.price)} </span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
