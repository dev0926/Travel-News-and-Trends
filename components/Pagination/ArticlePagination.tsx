import { Center } from '@mantine/core';
import { fetchPaginationData } from '@/lib/data';
import { MyPagination } from './Pagination';
import { FailNotification } from '../Notification/Notifications';

export async function ArticlePagination({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const data = await fetchPaginationData(query, currentPage);
  let show;
  if (data === false) {
    show = <FailNotification />;
  } else {
    show = <MyPagination meta={data.response.meta} />;
  }
  return <Center pb="lg">{show}</Center>;
}
