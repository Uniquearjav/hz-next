export async function getIndivisualProducts() {
    const response = await fetch('https://www.horizaura.tech/api/products.json');
    return response.json();
  }

// Model/products.js

export async function getProducts() {
  const response = await fetch('https://www.horizaura.tech/api/products.json');
  const products = await response.json();
  return products;
}