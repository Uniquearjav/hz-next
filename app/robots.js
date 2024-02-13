export default function robots() {
    return {
      rules: [
        {
          userAgent: ['Applebot','Googlebot', 'Bingbot'],
          allow: ['/'],
          disallow: ['/admin/'],
        },
      ],
      sitemap: 'https://www.horizaura.tech/sitemap.xml',
    }
  }