import { Center } from '@mantine/core';
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { ArticlesCardsGrid } from '@/components/ArticlesCardsGrid/ArticlesCardsGrid';
import ArticlePagination from '@/components/Pagination/Pagination';

async function getData(pageNumber: number) {
  const res = await fetch(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=section_name:("Travel")&q=aviation&page=${pageNumber}&sort=newest&api-key=${process.env.API_KEY}`
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function HomePage({
  searchParams,
}: {
  searchParams?: { query?: string; page?: string };
}) {
  const currentPage = Number(searchParams?.page) || 0;
  const data = await getData(currentPage - 1);

  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <ArticlesCardsGrid data={data.response.docs} />
      <Center pb="lg">
        <ArticlePagination data={data.response.meta} />
      </Center>
    </>
  );
}
