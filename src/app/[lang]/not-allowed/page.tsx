import type { Metadata } from 'next';
import NotAllowed from './not-allowed';

export const metadata: Metadata = {
    title: 'Not Allowed',
};

export function NotAllowedPage() {

    return (
        <NotAllowed />
    );
}