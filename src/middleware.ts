import { NextResponse } from 'next/server';

export function middleware(req: NextResponse) {
    const userAgent = req.headers.get('user-agent') || '';

    // Простейшая проверка на мобильное устройство
    const isMobile = /Mobile|Android|iPhone|iPad/i.test(userAgent);

    if (isMobile) {
        return NextResponse.redirect(new URL('/not-allowed', req.url));
    }
}

// Настройка путей, на которых работает middleware
export const config = {
    matcher: ['/'], 
};