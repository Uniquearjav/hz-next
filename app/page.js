import ProductCard from "@/components/productcard";
import { fetchData } from "@/config/appwritejson";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Home } from "lucide-react";
import ImageSlider from "@/components/slider";


export default async function Page() {
    const products = await fetchData();

  return (
    <main className="container">
      <ImageSlider />
      <span id='breadcrumb' className="px-10 py-10">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/"> <span className="flex items-center"><Home className="p-1"/>Home </span> </BreadcrumbLink>
          </BreadcrumbItem>
            <BreadcrumbSeparator />
        </BreadcrumbList>
      </Breadcrumb>
      </span>
      <h2 className="text-5xl text-center p-10">Browse The Range</h2>
      <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
