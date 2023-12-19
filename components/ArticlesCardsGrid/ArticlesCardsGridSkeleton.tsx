import { SimpleGrid, Card, Container, AspectRatio, Skeleton } from '@mantine/core';
import classes from './ArticlesCardsGrid.module.css';

const mockdata = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export function ArticlesCardsGridSkeleton() {
  const cards = mockdata.map((id) => (
    <Card key={id} p="md" radius="md" component="a" href="#" className={classes.card}>
      <AspectRatio ratio={1920 / 1080}>
        <Skeleton />
      </AspectRatio>
      <Skeleton height={16} mt="md" radius="xl" width="40%" />
      <Skeleton height={16} mt={5} radius="xl" width="90%" />
      <Skeleton height={16} mt={4} radius="xl" width="60%" />
    </Card>
  ));

  return (
    <Container py="xl">
      <SimpleGrid cols={{ base: 1, sm: 2 }}>{cards}</SimpleGrid>
    </Container>
  );
}
