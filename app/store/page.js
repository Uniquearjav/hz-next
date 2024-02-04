async function productList() {
    let data = await fetch("https://dummyjson.com/products");
    console.log(data);
    // data = data.json();
    return data.json();

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