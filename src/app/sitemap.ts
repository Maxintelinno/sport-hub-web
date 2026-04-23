import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';

const baseUrl = 'https://sporthub.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = routing.locales;
  const paths = ['', '/about', '/owners', '/guide', '/contact', '/blog'];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    paths.forEach((path) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: path === '' ? 1 : 0.8,
      });
    });
  });

  return sitemapEntries;
}
