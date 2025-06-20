import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Removed i18n imports: import { i18n, isValidLocale, getPreferredLocale } from './i18n-config';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const response = NextResponse.next();

  // Redirect /index.php to root
  if (pathname === '/index.php') {
    const url = request.nextUrl.clone();
    url.pathname = '/';
    // Use 308 for permanent redirect, preserving the request method
    return NextResponse.redirect(url, 308);
  }

  // Skip if requesting non-page resources
  if (
    pathname.includes('.') || // Check for file extensions
    pathname.startsWith('/api/') || // Skip API routes
    pathname.startsWith('/_next/') // Skip Next.js internal routes
  ) {
    return response; // Allow the request to proceed without modification
  }

  // Add compression headers for text-based content
  const acceptsGzip = request.headers.get('accept-encoding')?.includes('gzip');
  const acceptsBrotli = request.headers.get('accept-encoding')?.includes('br');
  
  if (acceptsBrotli) {
    response.headers.set('Content-Encoding', 'br');
  } else if (acceptsGzip) {
    response.headers.set('Content-Encoding', 'gzip');
  }

  // Add performance optimization headers
  response.headers.set('X-Content-Type-Options', 'nosniff');
  
  // Set X-Frame-Options to allow Yandex Metrica domains
  const referer = request.headers.get('referer') || '';
  const allowedDomains = /^https?:\/\/([^\/]+\.)?(adhesivewheelweight\.com|webvisor\.com|metri[ck]a\.yandex\.(com|ru|by|com\.tr))\//;
  
  if (allowedDomains.test(referer)) {
    // Allow framing from Yandex Metrica and your own domain
    response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  } else {
    // Deny framing from all other domains
    response.headers.set('X-Frame-Options', 'DENY');
  }
  
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  // Removed all locale detection, redirection, rewriting, header setting, and cookie setting logic.
  // The middleware now only handles the index.php redirect and skips static assets/API routes.

  // Allow all other requests to proceed
  return response;
}

export const config = {
  // Match all routes except static files and api routes
  matcher: ['/((?!api|_next|favicon\\.ico|.*\\..*).*)'],
};
