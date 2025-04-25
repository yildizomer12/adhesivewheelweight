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
{/* Yandex.Metrika counter */}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(95085832, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true,
                  webvisor:true,
                  ecommerce:"dataLayer"
            });
          `}
        </Script>
        <noscript><div><img src="https://mc.yandex.ru/watch/95085832" style={{position:'absolute', left:'-9999px'}} alt="" /></div></noscript>
        {/* /Yandex.Metrika counter */}
        <ClientLayout dictionary={dictionary} locale={locale}>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
