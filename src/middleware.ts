import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'ru'];
const defaultLocale = 'en';

function getLocale(request: NextRequest): string {
	// Check if there is any supported locale in the pathname
	const pathname = request.nextUrl.pathname;
	const pathnameIsMissingLocale = locales.every(
		locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
	);

	// Redirect if there is no locale
	if (pathnameIsMissingLocale) {
		// Get locale from Accept-Language header
		const acceptLanguage = request.headers.get('accept-language');
		const locale = acceptLanguage?.includes('ru') ? 'ru' : defaultLocale;
		return locale;
	}

	return '';
}

export function middleware(request: NextRequest) {
	const pathname = request.nextUrl.pathname;

	// Check if the pathname is missing a locale
	const pathnameIsMissingLocale = locales.every(
		locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
	);

	// Redirect if there is no locale
	if (pathnameIsMissingLocale) {
		const locale = getLocale(request);

		// Redirect to locale-specific path
		if (pathname === '/') {
			return NextResponse.redirect(new URL(`/${locale}`, request.url));
		}

		return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
	}

	// Add security headers for SEO
	const response = NextResponse.next();

	// Security headers
	response.headers.set('X-Content-Type-Options', 'nosniff');
	response.headers.set('X-Frame-Options', 'DENY');
	response.headers.set('X-XSS-Protection', '1; mode=block');
	response.headers.set('Referrer-Policy', 'origin-when-cross-origin');

	return response;
}

export const config = {
	matcher: [
		// Skip all internal paths (_next)
		'/((?!_next|api|favicon.ico|robots.txt|sitemap.xml|.*\\.).*)',
	],
};
