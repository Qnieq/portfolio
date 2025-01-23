import { Dictionary } from '@/types/lang.types';
import { getDictionary } from './dictionaries/getDictionary';
import { Main } from './Main';
import { Analytics } from '@vercel/analytics/next';

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {

  const { lang } = await params;
  
  const dictionary: Dictionary = await getDictionary(lang);

  return (
    <main>
      <Main dictionary={dictionary} />
      <Analytics />
    </main>
  );
}