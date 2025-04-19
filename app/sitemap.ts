// app/sitemap.ts
import { MetadataRoute } from 'next';
import { i18n } from '@/i18n-config'; // Assuming your i18n config is here

const BASE_URL = 'https://www.adhesivewheelweight.com'; // Make sure this is your production URL

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [];

  // Add default language route (e.g., English)
  routes.push({
    url: `${BASE_URL}/${i18n.defaultLocale}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 1,
  });

  // Add other language routes
  i18n.locales.forEach((locale) => {
    if (locale !== i18n.defaultLocale) {
      routes.push({
        url: `${BASE_URL}/${locale}`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.8, // Slightly lower priority for non-default languages
      });
    }
  });

  // --- Add static pages ---
  const staticPages = [
    'about-us',
    'blogs',
    'faq',
    'chopping-and-marking-machine',
    'decoiler-machine',
    'rotary-punch',
    'taping-and-packaging-machine',
    'wheel-weights',
    'wire-flattening-machine',
  ];

  staticPages.forEach((page) => {
    i18n.locales.forEach((locale) => {
      routes.push({
        url: `${BASE_URL}/${locale}/${page}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    });
  });

  // Example: Add dynamic routes (e.g., blog posts, machine details)
  // const blogPosts = await getBlogPosts(); // Fetch your dynamic content
  // blogPosts.forEach((post) => {
  //   i18n.locales.forEach((locale) => {
  //     routes.push({
  //       url: `${BASE_URL}/${locale}/blog/${post.slug}`, // Adjust URL structure as needed
  //       lastModified: post.updatedAt || new Date(),
  //       changeFrequency: 'weekly',
  //       priority: 0.6,
  //     });
  //   });
  // });

  return routes;
}