'use client';

import { TextInput, TextInputProps, ActionIcon, rem } from '@mantine/core';
import { IconSearch, IconArrowRight } from '@tabler/icons-react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export function SearchInput(props: TextInputProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 200);
  return (
    <TextInput
      radius="xl"
      size="lg"
      placeholder="Search"
      rightSectionWidth={42}
      leftSection={<IconSearch style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
      rightSection={
        <ActionIcon size={32} radius="xl" color="blue" variant="filled">
          <IconArrowRight style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
        </ActionIcon>
      }
      onChange={(e) => {
        handleSearch(e.target.value);
      }}
      defaultValue={searchParams.get('query')?.toString()}
      {...props}
    />
  );
}
