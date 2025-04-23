import Script from 'next/script';
import { type Locale, i18n } from '@/i18n-config';
import { getDictionary } from '@/lib/dictionary';
import { generateOrganizationSchema } from '@/lib/schema';
import { ClientLayout } from './client-layout';
import './globals.css';

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  };
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  // Use URL locale or fall back to default
  const locale = params.lang || i18n.defaultLocale;
  
  // Load dictionary for the locale
  const dictionary = await getDictionary(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/yilsa-logo.svg" />
        <meta
          name="google-site-verification"
          content="v4TkfPcQIcmiJU7-RWI3oRiKhEbWbQwUS18K81XC4EY"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: generateOrganizationSchema(locale) }}
        />
      </head>
      <body>
        {/* Google Tag Manager - Global site tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-WQ1XCRQE7F`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WQ1XCRQE7F', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        <ClientLayout dictionary={dictionary} locale={locale}>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
