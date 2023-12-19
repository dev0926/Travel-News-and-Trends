'use client';

import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { Pagination } from '@mantine/core';

export function MyPagination({ meta }: { meta: { hits: number; offset: number; time: number } }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = meta.offset / 10 + 1;
  const { replace } = useRouter();

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <Pagination
      total={meta.hits / 10 + 1}
      value={currentPage}
      onChange={(value: number) => {
        replace(createPageURL(value));
      }}
    />
  );
}
