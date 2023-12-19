import { Center } from '@mantine/core';
import { fetchPaginationData } from '@/lib/data';
import { MyPagination } from './Pagination';

export async function ArticlePagination({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const data = await fetchPaginationData(query, currentPage);
  return (
    <Center pb="lg">
      <MyPagination meta={data.response.meta} />
    </Center>
  );
}
