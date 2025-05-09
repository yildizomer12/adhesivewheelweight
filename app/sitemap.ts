// app/sitemap.ts
import { MetadataRoute } from 'next';
// Removed i18n import

const BASE_URL = 'https://www.adhesivewheelweight.com'; // Make sure this is your production URL

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [];

  // Add root route
  routes.push({
    url: BASE_URL, // Root URL
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 1,
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
    // Add the specific blog post slug
    'blogs/adhesive-wheel-weights-production'
  ];

  // Add each static page route once, without locale
  staticPages.forEach((page) => {
    routes.push({
      url: `${BASE_URL}/${page}`, // URL without locale segment
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8, // Adjusted priority as there's only one version
    });
  });

  // Example: Add dynamic routes (e.g., other blog posts)
  // const blogPosts = await getBlogPosts(); // Fetch your dynamic content
  // blogPosts.forEach((post) => {
  //   // Skip the one already added statically if necessary
  //   if (post.slug !== 'adhesive-wheel-weights-production') {
  //     routes.push({
  //       url: `${BASE_URL}/blogs/${post.slug}`, // URL without locale segment
  //       lastModified: post.updatedAt || new Date(),
  //       changeFrequency: 'weekly',
  //       priority: 0.7,
  //     });
  //   }
  // });

  return routes;
}