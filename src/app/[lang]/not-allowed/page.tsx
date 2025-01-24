import type { Metadata } from 'next';
import NotAllowed from './not-allowed';
import { getDictionary } from '../dictionaries/getDictionary';
import { Dictionary } from '@/types/lang.types';

export const metadata: Metadata = {
    title: 'Not Allowed',
};

export default async function NotAllowedPage({ params }: { params: Promise<{ lang: string }> }) {

    const { lang } = await params;

    const dictionary: Dictionary = await getDictionary(lang);

    return (
        <NotAllowed dictionary={dictionary} />
    );
}