import { Center } from '@mantine/core';
import { Suspense } from 'react';
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { ArticlesCardsGrid } from '@/components/ArticlesCardsGrid/ArticlesCardsGrid';
import { ArticlesCardsGridSkeleton } from '@/components/ArticlesCardsGrid/ArticlesCardsGridSkeleton';
import { ArticlePagination } from '@/components/Pagination/ArticlePagination';
import { SearchInput } from '@/components/SearchInput/SearchInput';

export default async function HomePage({
  searchParams,
}: {
  searchParams?: { query?: string; page?: string };
}) {
  const currentPage = Number(searchParams?.page) || 1;
  const query = searchParams?.query || 'aviation';

  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <Center mt="lg">
        <SearchInput placeholder="Search Articles" />
      </Center>
      <Suspense key={query + currentPage} fallback={<ArticlesCardsGridSkeleton />}>
        <ArticlesCardsGrid query={query} currentPage={currentPage} />
      </Suspense>
      <Center pb="lg">
        <ArticlePagination query={query} currentPage={currentPage} />
      </Center>
    </>
  );
}
