async function productList() {
    let data = await fetch("https://turbo-cod-5p7pp9grj59fvgj6-3001.app.github.dev/api/products.json");
    console.log(data.json());
    data = data.json();
    return data.products;

}

export default async function Page() {
    const product = await productList();
    return (
        <div>
            <h1>Product List</h1>
            {/* {
                product.map((item) => (
                        <div>
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                        </div>
                ))
            } */}
        </div>
    );
}