import { type Metadata } from 'next';
// Removed i18n import

type MetadataParams = {
  title: string;
  description: string;
  keywords: string[];
  path: string; // Path relative to the root (e.g., '/about-us')
  image?: {
    url: string; // Should be absolute URL or relative to public folder
    alt: string;
    width?: number;
    height?: number;
  };
};

export function generateSEOMetadata({
  title,
  description,
  keywords,
  path,
  image = {
    url: '/images/production-line-extended.webp', // Default image relative to public
    alt: 'YILSA Wheel Weight Manufacturing Equipment',
    width: 1200,
    height: 630,
  },
}: MetadataParams): Metadata { // Removed locale parameter
  const url = 'https://www.adhesivewheelweight.com';

  // Removed language alternates generation

  // Simplified canonical URL (absolute)
  const canonical = `${url}${path}`;

  // Ensure image URL is absolute for metadata
  const absoluteImageUrl = image.url.startsWith('/') ? `${url}${image.url}` : image.url;

  return {
    title: `${title} | YILSA Wheel Weight Machines`,
    description,
    keywords,
    metadataBase: new URL(url),
    alternates: {
      canonical,
      // Removed languages alternates
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    openGraph: {
      type: 'website',
      locale: 'en_US', // Hardcoded locale
      url: canonical, // Use simplified canonical URL
      title,
      description,
      siteName: 'YILSA Wheel Weight Machines',
      images: [
        {
          url: absoluteImageUrl, // Use absolute image URL
          width: image.width,
          height: image.height,
          alt: image.alt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [absoluteImageUrl], // Use absolute image URL
      creator: '@YilsaMachines',
      site: '@YilsaMachines',
    },
    verification: {
      // Keep existing verification if correct, otherwise update
      google: 'v4TkfPcQIcmiJU7-RWI3oRiKhEbWbQwUS18K81XC4EY',
    },
    // 'other' might not be necessary if 'verification' is used
    // other: {
    //   'google-site-verification': 'v4TkfPcQIcmiJU7-RWI3oRiKhEbWbQwUS18K81XC4EY',
    // },
  };
}
