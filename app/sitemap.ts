import type { MetadataRoute } from 'next';
import { schools, skillCourses, tracks } from '@/lib/academy';
import { siteConfig } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date('2026-08-09');
  const staticPaths = [
    '', '/schools', '/about', '/contact', '/how-it-works',
    '/student-stories', '/faq', '/privacy', '/terms',
  ];

  const paths = [
    ...staticPaths,
    ...schools.map(({ slug }) => `/schools/${slug}`),
    ...tracks.map(({ slug }) => `/roles/${slug}`),
    ...skillCourses.map(({ slug }) => `/skill-courses/${slug}`),
  ];

  return paths.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: updated,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path === '/schools' ? 0.9 : 0.7,
  }));
}
