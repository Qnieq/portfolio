import type { Metadata } from 'next';
import { NotAllowed } from './not-allowed';

export const metadata: Metadata = {
    title: 'Not Allowed',
};

export default function Page() {
    return <div>
        <NotAllowed />
    </div>
}