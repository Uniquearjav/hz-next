// import { BASE_URL } from '@/app/lib/constants'

export default function sitemap() {
    return [
      {
        url: 'https://www.horizaura.tech',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
      },
      {
        url: ['/store','blog'],
        lastModified: [new Date()],
        changeFrequency: ['monthly'],
        priority: [0.8],
      }
    ]
  }