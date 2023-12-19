import { IconX, IconCheck } from '@tabler/icons-react';
import { Notification, rem } from '@mantine/core';

export function FailNotification() {
  const xIcon = <IconX style={{ width: rem(20), height: rem(20) }} />;

  return (
    <Notification icon={xIcon} color="red" title="Bummer!">
      Failed to fetch data
    </Notification>
  );
}

export function SuccessNotification() {
  const checkIcon = <IconCheck style={{ width: rem(20), height: rem(20) }} />;

  return (
    <Notification icon={checkIcon} color="teal" title="All good!" mt="md">
      Everything is fine
    </Notification>
  );
}
