import { SimpleGrid, Card, Image, Text, Container, AspectRatio, Skeleton } from '@mantine/core';
import classes from './ArticlesCardsGrid.module.css';
import { Article } from './types';
import { fetchArticleData } from '@/lib/data';

function getFormattedDate(pub_date: string) {
  const date: Date = new Date(pub_date);
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };

  const formattedDate: string = new Intl.DateTimeFormat('en-US', options)
    .format(date)
    .toUpperCase();

  return formattedDate;
}

export async function ArticlesCardsGrid({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const data = await fetchArticleData(query, currentPage);
  const articleData: Array<Article> = data.response.docs;
  const nyCards = articleData.map((article: Article) => (
    <Card
      key={article.headline.main}
      p="md"
      radius="md"
      component="a"
      href={article.web_url}
      className={classes.card}
      target="blank"
    >
      <AspectRatio ratio={1920 / 1080}>
        {article.multimedia[0]?.url ? (
          <Image src={`https://static01.nyt.com/${article.multimedia[0]?.url}`} />
        ) : (
          <Skeleton />
        )}
      </AspectRatio>
      <Text c="dimmed" size="xs" tt="uppercase" fw={700} mt="md">
        {getFormattedDate(article.pub_date)}
      </Text>
      <Text className={classes.title} mt={5}>
        {article.headline.main}
      </Text>
    </Card>
  ));

  return (
    <Container py="xl">
      <SimpleGrid cols={{ base: 1, sm: 2 }}>{nyCards}</SimpleGrid>
    </Container>
  );
}
