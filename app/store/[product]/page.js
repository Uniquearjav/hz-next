import { getIndivisualProducts } from "../../Model/products";
import Image from 'next/image'

// Return a list of `params` to populate the [slug] dynamic segment


export default async function Page(props) {
    const getProductList = await getIndivisualProducts();
    const currentProduct = props.params.product;
    const ProductData = getProductList[currentProduct-1]
    // console.log(getProductList)
    console.log(ProductData);

    return (
        <div>
            <section class="body-font dark:text-white text-black overflow-hidden">
            <div class="container px-5 py-24 mx-auto">
                <div class="lg:w-4/5 mx-auto flex flex-wrap">
                <Image width={4000} height={4000} alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={`/media/products/${ProductData.product_id}.jpg`} />
                <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h2 class="text-sm title-font tracking-widest">HORIZAURA - Big Furniture </h2>
                    <h1 class="text-3xl title-font font-medium mb-1">{ProductData.name}</h1>
                    <div class="flex mb-4">
                    <span class="flex items-center">
                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                        </path>
                        </svg>
                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                        </path>
                        </svg>
                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                        </path>
                        </svg>
                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                        </path>
                        </svg>
                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                        </path>
                        </svg>
                    </span>
                    <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                        <a href="https://www.facebook.com/people/Horizaura/61550317251847/" class="ml-3">
                        <i class="bi bi-facebook"></i>
                        </a>
                        <a href="https://twitter.com/horizaura" class="ml-3">
                        <i class="bi bi-twitter-x"></i>
                        </a>
                        <a href="https://www.instagram.com/horizaura/" class="ml-3 ">
                        <i class="bi bi-instagram"></i>
                        </a>
                        <a href="https://www.linkedin.com/company/horizaura" class="ml-3">
                        <i class="bi bi-linkedin"></i>
                        </a>
                    </span>
                    <span class="pl-5">Views : 31 </span>
                    </div>
                    <p class="leading-relaxed">{ProductData.description}</p>
                    <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                    </div>
                    <div class="">
                    <span class="title-font font-medium text-2xl">&#8377;{ProductData.price}</span>
                    <button class="flex ml-auto bg-indigo-500 text-white border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded " href='https:www.instagram.com'>Buy on Instagram</button>
                    <button id="pr-2" class="flex ml-auto bg-indigo-500 cart text-white border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Add to Cart</button>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </div>
    )
}

export async function generateStaticParams() {
    const getIndProd = getIndivisualProducts();
    const prod = await getIndProd;
    return prod.map(prod=>({
        product: prod.id.toString()
    }))
  }