import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server'
import { languages, defaultLanguage } from './config/languages'

export function middleware(req: NextRequest) {
    const userAgent = req.headers.get('user-agent') || '';
    const pathname = req.nextUrl.pathname;

    const pathnameLocale = Object.keys(languages).find((locale) =>
        pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    const isMobile = /Mobile|Android|iPhone|iPad/i.test(userAgent);

    if (!pathnameLocale) {
        const locale = defaultLanguage;
        return NextResponse.redirect(new URL(`/${locale}${pathname}`, req.url));
    }

    if (isMobile && pathname.endsWith('/not-allowed')) {
        return NextResponse.next();
    }

    if (isMobile) {
        return NextResponse.redirect(new URL(`/${pathnameLocale}/not-allowed`, req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!_next|api|favicon.ico|logos|icons|images).*)'],
};
