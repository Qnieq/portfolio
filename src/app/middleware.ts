import { NextResponse } from 'next/server';

export function middleware(req: NextResponse) {
    const userAgent = req.headers.get('user-agent') || '';

    // Проверка на мобильное устройство
    const isMobile = /iPhone|iPad|iPod|Android/i.test(userAgent);

    if (isMobile) {
        // Если пользователь зашёл с мобильного устройства, перенаправляем его на страницу с сообщением
        return NextResponse.redirect(new URL('/not-allowed', req.url));
    }

    return NextResponse.next();
}