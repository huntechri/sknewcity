import { MetadataRoute } from 'next'
import { getPostSlugs } from '@/lib/markdown'
import { propertyHomes } from '@/lib/property-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sk-new-city.ru'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    '',
    '/apartment-renovation',
    '/blogs',
    '/contactus',
    '/privacy-policy',
    '/properties',
    '/terms-and-conditions',
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }))

  const blogPages = getPostSlugs().map((slug) => ({
    url: `${siteUrl}/blogs/${slug.replace(/\.mdx$/, '')}`,
    lastModified: new Date(),
  }))

  const projectPages = propertyHomes.map((item) => ({
    url: `${siteUrl}/properties/${item.slug}`,
    lastModified: new Date(),
  }))

  return [...staticPages, ...blogPages, ...projectPages]
}
