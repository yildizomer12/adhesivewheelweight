import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Removed i18n imports: import { i18n, isValidLocale, getPreferredLocale } from './i18n-config';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

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
    return NextResponse.next(); // Allow the request to proceed without modification
  }

  // Removed all locale detection, redirection, rewriting, header setting, and cookie setting logic.
  // The middleware now only handles the index.php redirect and skips static assets/API routes.

  // Allow all other requests to proceed
  return NextResponse.next();
}

export const config = {
  // Match all routes except static files and api routes
  matcher: ['/((?!api|_next|favicon\\.ico|.*\\..*).*)'],
};
