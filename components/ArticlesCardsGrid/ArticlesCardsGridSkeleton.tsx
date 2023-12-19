import { SimpleGrid, Card, Text, Container, AspectRatio, Skeleton } from '@mantine/core';
import classes from './ArticlesCardsGrid.module.css';

const mockdata = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export function ArticlesCardsGridSkeleton() {
  const cards = mockdata.map((id) => (
    <Card key={id} p="md" radius="md" component="a" href="#" className={classes.card}>
      <AspectRatio ratio={1920 / 1080}>
        <Skeleton />
      </AspectRatio>
      <Text c="dimmed" size="xs" tt="uppercase" fw={700} mt="md">
        <Skeleton height={16} radius="xl" width="40%" />
      </Text>
      <Text className={classes.title} mt={5}>
        <Skeleton height={16} radius="xl" width="90%" />
        <Skeleton height={16} mt={4} radius="xl" width="60%" />
      </Text>
    </Card>
  ));

  return (
    <Container py="xl">
      <SimpleGrid cols={{ base: 1, sm: 2 }}>{cards}</SimpleGrid>
    </Container>
  );
}
