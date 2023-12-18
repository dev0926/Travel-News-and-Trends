import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { ArticlesCardsGrid } from '@/components/ArticlesCardsGrid/ArticlesCardsGrid';

async function getData() {
  const res = await fetch(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=aviation&api-key=${process.env.API_KEY}&page=1`
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function HomePage() {
  const data = await getData();

  return (
    <>
      <Welcome />
      <ArticlesCardsGrid data={data} />
      <ColorSchemeToggle />
    </>
  );
}
