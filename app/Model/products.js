export async function getProducts() {
    const response = await fetch('https://www.horizaura.tech/api/products.json');
    const products = await response.json();
    return products;
  }

export async function generateStaticParams() {
  const posts = await fetch('https://www.horizaura.tech/api/products.json').then((res) => res.json())
}