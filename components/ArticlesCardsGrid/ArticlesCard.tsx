'use client';

import { AspectRatio, Card, Image, Skeleton, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Article } from './types';
import classes from './ArticlesCardsGrid.module.css';
import { ArticleModal } from './ArticleModal/ArticleModal';

function getFormattedDate(pub_date: string) {
  const date: Date = new Date(pub_date);
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };

  const formattedDate: string = new Intl.DateTimeFormat('en-US', options)
    .format(date)
    .toUpperCase();

  return formattedDate;
}

export default function ArticlesCard({ article }: { article: Article }) {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <ArticleModal article={article} opened={opened} close={close} />
      <Card
        key={article.headline.main}
        p="md"
        radius="md"
        component="div"
        className={classes.card}
        onClick={open}
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
    </>
  );
}
