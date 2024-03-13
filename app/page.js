// import ProductAPI from '@/config/ProductAPI';
import ProductCard from '@/components/productcard';
import { fetchData } from '@/config/appwritejson';

export default async function page() {
    const products = await fetchData()
    return (
        <div>
            <h2 className="text-5xl text-center p-10">Browse The Range</h2>
            <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
    {products.map((product) => (
        <ProductCard key={product.id} product={product} />
    ))}
</div>

        </div>
    );
}