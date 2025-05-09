import Script from 'next/script';
// Removed i18n imports: import { type Locale, i18n } from '@/i18n-config';
// Removed dictionary import: import { getDictionary } from '@/lib/dictionary';
import { generateOrganizationSchema } from '@/lib/schema'; // Assuming this function can handle 'en' or be refactored
import { ClientLayout } from './client-layout';
import './globals.css';

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  };
}

// Removed generateStaticParams function

export default async function RootLayout({
  children,
  // Removed params prop
}: {
  children: React.ReactNode;
  // Removed params type
}) {
  // Removed locale and dictionary loading logic

  return (
    // Set lang attribute to "en"
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/yilsa-logo.svg" />
        <meta
          name="google-site-verification"
          content="v4TkfPcQIcmiJU7-RWI3oRiKhEbWbQwUS18K81XC4EY" // Keep this verification meta tag
        />
        <script
          type="application/ld+json"
          // Removed 'en' argument as locale is no longer needed
          dangerouslySetInnerHTML={{ __html: generateOrganizationSchema() }}
        />
        {/* Add other head elements like title, description from page metadata later */}
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
        {/* Yandex.Metrika counter (101089454) */}
        <Script id="yandex-metrika-101089454" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(101089454, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true
            });
          `}
        </Script>
        <noscript><div><img src="https://mc.yandex.ru/watch/101089454" style={{position:'absolute', left:'-9999px'}} alt="" /></div></noscript>
        {/* /Yandex.Metrika counter (101089454) */}
        {/* Removed dictionary and locale props from ClientLayout */}
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}