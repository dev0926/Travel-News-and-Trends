'use client';

import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { Pagination } from '@mantine/core';

export default function ArticlePagination(props: any) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const currentPage = Number(searchParams.get('page')) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const total = props.data.hits / 10 + 1;
  return (
    <Pagination
      total={total}
      value={currentPage}
      onChange={(value: number) => {
        replace(createPageURL(value));
      }}
    />
  );
}
