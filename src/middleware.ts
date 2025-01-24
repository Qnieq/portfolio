import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server'
import { languages, defaultLanguage } from './config/languages'

export function middleware(req: NextRequest) {
    const userAgent = req.headers.get('user-agent') || '';

    // Get the pathname of the request (e.g. /, /about, /blog/first-post)
    const pathname = req.nextUrl.pathname

    // Check if the pathname starts with our supported languages
    const pathnameIsMissingLocale = Object.keys(languages).every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    )

    // Простейшая проверка на мобильное устройство
    const isMobile = /Mobile|Android|iPhone|iPad/i.test(userAgent);

    if (pathnameIsMissingLocale) {
        // Redirect if there is no locale
        const locale = defaultLanguage
        return NextResponse.redirect(
            new URL(`/${locale}${pathname}`, req.url)
        )
    } else if (isMobile && pathnameIsMissingLocale) {
        const locale = defaultLanguage
        return NextResponse.redirect(new URL(`/${locale}/not-allowed`, req.url));
    }
}

// Настройка путей, на которых работает middleware
export const config = {
    matcher: ['/((?!_next|api|favicon.ico).*)'],
};