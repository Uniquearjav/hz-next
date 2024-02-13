export async function generateStaticParams() {
    const posts = await fetch('https://www.horizaura.tech/api/products.json').then((res) => res.json())
    
    return posts.map((post) => ({
        slug: post.product_id,
      }))  
}
export default function Page({ params }) {
    const { slug } = params
    return (
        <h1>{slug}</h1>
    )
  }