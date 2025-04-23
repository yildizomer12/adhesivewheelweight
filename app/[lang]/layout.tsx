import { headers } from 'next/headers';
import { type Metadata } from 'next';
import { type Locale, i18n } from '@/i18n-config';

// Bu fonksiyon, her sayfa isteği için dinamik olarak metadata oluşturur.
export async function generateMetadata({
  params,
}: {
  params: { lang: Locale };
}): Promise<Metadata> {
  const headersList = headers();
  // Middleware'den gelen tam pathname'i al (örn: /en/about-us)
  const pathname = headersList.get('x-pathname') || '/';
  const lang = params.lang;
  const siteUrl = 'https://www.adhesivewheelweight.com';

  // Mevcut dilin pathname'inden dil kodunu kaldırarak temel yolu elde et
  // Örnek: /en/about-us -> /about-us, /tr/ -> /, /en -> /
  const basePath = pathname.startsWith(`/${lang}`)
    ? pathname.substring(`/${lang}`.length) || '/'
    : pathname; // Eğer pathname dil ile başlamıyorsa (örn: /), olduğu gibi kullan

  // Kanonik URL'yi oluştur (örn: https://www.adhesivewheelweight.com/en/about-us)
  const canonicalUrl = `${siteUrl}/${lang}${basePath === '/' ? '' : basePath}`;

  // Alternatif dil sürümleri için hreflang etiketlerini oluştur
  const languages: { [key: string]: string } = {};
  i18n.locales.forEach((locale) => {
    // Next.js'in beklediği format (örn: en-US, tr-TR)
    // Not: Gerçek hreflang değeri sadece dil kodu olmalı (örn: en, tr)
    // Ancak Next.js 'alternates.languages' için bölge içeren formatı kullanıyor gibi görünüyor.
    // Test edip gerekirse sadece 'en', 'tr' kullanacak şekilde ayarlayabiliriz.
    // Şimdilik Next.js belgelerine daha yakın olan formatı kullanalım.
    const localeTag = locale === 'en' ? 'en-US' : 'tr-TR';
    languages[localeTag] = `${siteUrl}/${locale}${basePath === '/' ? '' : basePath}`;
  });

  // x-default hreflang etiketini ekle (genellikle varsayılan dile işaret eder)
  languages['x-default'] = `${siteUrl}/${i18n.defaultLocale}${basePath === '/' ? '' : basePath}`;

  return {
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: canonicalUrl,
      languages: languages,
    },
    // app/layout.tsx'den taşınan diğer metadata alanları
    icons: {
      icon: '/yilsa-logo.svg',
      shortcut: '/yilsa-logo.svg',
      apple: '/yilsa-logo.svg',
    },
    verification: {
      // Eski layout'tan gelen değer. Doğruluğunu kontrol edin.
      google: 'AiSiarEPNKXsp4SKrEwvPx_eSv9P2V1NtrBNgM1Gosw',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

// Bu, dile özgü layout bileşenidir.
// Genellikle sadece children'ı render eder, çünkü genel yapı app/layout.tsx'de.
export default function LangLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}