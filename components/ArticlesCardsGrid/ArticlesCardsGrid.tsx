import { SimpleGrid, Container } from '@mantine/core';
import { Article } from './types';
import { fetchArticleData } from '@/lib/data';
import ArticlesCard from './ArticleCard/ArticleCard';
import { FailNotification } from '../Notification/Notifications';

export async function ArticlesCardsGrid({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const data = await fetchArticleData(query, currentPage);
  let show;
  if (data === false) {
    show = <FailNotification />;
  } else {
    const articleData: Array<Article> = data.response.docs;
    const nyCards = articleData.map((article: Article) => (
      <ArticlesCard article={article} key={article.headline.main} />
    ));
    show = <SimpleGrid cols={{ base: 1, sm: 2 }}>{nyCards}</SimpleGrid>;
  }

  return <Container py="xl">{show}</Container>;
}
