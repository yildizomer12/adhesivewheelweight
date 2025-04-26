import { type Metadata } from 'next';
import { type Locale, i18n } from '@/i18n-config';
import { getDictionary } from '@/lib/dictionary';

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  const awaitedParams = await params;
  const { lang } = awaitedParams;
  const dictionary = await getDictionary(lang || i18n.defaultLocale);

  return {
    title: "From Raw Material to Finished Product", // Updated title as requested
    description: dictionary.pages.home.meta.description,
    keywords: ["wheel weights", "adhesive wheel weights", "wheel weight manufacturing", "industrial wheel weight machines"],
    metadataBase: new URL('https://www.adhesivewheelweight.com'),
    alternates: {
      canonical: `/`,
      languages: i18n.locales.reduce((acc: Record<string, string>, locale) => {
        acc[locale] = `/${locale}`;
        return acc;
      }, {}),
    },
    openGraph: {
      title: "From Raw Material to Finished Product", // Updated OG title
      description: dictionary.pages.home.meta.description,
      images: [
        {
          url: '/images/production-line.jpg',
          width: 1200,
          height: 630,
          alt: 'YILSA Wheel Weight Manufacturing Equipment',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: "From Raw Material to Finished Product", // Updated Twitter title
      description: dictionary.pages.home.meta.description,
      images: ['/images/production-line.jpg'],
    },
  };
}
