import { getProducts } from './Model/products';

export default async function sitemap() {
  const products = await getProducts();

  const productUrls = products.map((product) => ({
    url: `/store/${product.id}`,
    lastModified: new Date(), // Modify this according to your product's last modification date
    changeFrequency: 'monthly', // Modify this according to your product's change frequency
    priority: 0.8, // Modify this according to your product's priority
  }));

  return [
    {
      url: 'https://www.horizaura.tech',
      lastModified: new Date(), // Modify this according to your site's last modification date
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: '/store',
      lastModified: new Date(), // Modify this according to your store's last modification date
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: '/blog',
      lastModified: new Date(), // Modify this according to your blog's last modification date
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...productUrls,
  ];
}
