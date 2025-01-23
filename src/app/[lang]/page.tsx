import { Main } from './Main';
import { Analytics } from '@vercel/analytics/next';

export default function Page() {
  return (
    <main>
      <Main />
      <Analytics />
    </main>
  );
}