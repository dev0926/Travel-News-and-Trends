import {
  Card,
  Image,
  Text,
  Badge,
  Group,
  Center,
  Avatar,
  useMantineTheme,
  Modal,
  Skeleton,
  AspectRatio,
} from '@mantine/core';
import classes from './ArticleModal.module.css';
import { Article, Keyword } from '../types';

export function ArticleModal({
  article,
  opened,
  close,
}: {
  article: Article;
  opened: any;
  close: any;
}) {
  const linkProps = { href: article.web_url, target: '_blank', rel: 'noopener noreferrer' };
  const theme = useMantineTheme();
  return (
    <Modal
      opened={opened}
      onClose={close}
      title="Article Details"
      size="auto"
      centered
      transitionProps={{ transition: 'fade', duration: 300, timingFunction: 'linear' }}
    >
      <Card withBorder radius="md" className={classes.card}>
        <Card.Section>
          <a {...linkProps}>
            <AspectRatio ratio={1920 / 1080}>
              {article.multimedia[0]?.url ? (
                <Image src={`https://static01.nyt.com/${article.multimedia[0]?.url}`} />
              ) : (
                <Skeleton />
              )}
            </AspectRatio>
          </a>
        </Card.Section>

        <Badge
          className={classes.rating}
          variant="gradient"
          gradient={{ from: 'yellow', to: 'red' }}
        >
          Travel News
        </Badge>

        <Text className={classes.title} fw={500} component="a" {...linkProps}>
          {article.headline.main}
        </Text>

        <Text fz="sm" c="dimmed" lineClamp={4}>
          {article.lead_paragraph}
        </Text>

        <Group justify="space-between" className={classes.footer}>
          <Center>
            <Avatar
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
              size={24}
              radius="xl"
              mr="xs"
            />
            <Text fz="sm" inline>
              {article.byline.original}
            </Text>
          </Center>

          <Group gap={8} mr={0}>
            {article.keywords.map((keyword: Keyword) =>
              keyword.name === 'subject' ? (
                <Badge color={theme.primaryColor}>{keyword.value}</Badge>
              ) : (
                <></>
              )
            )}
          </Group>
        </Group>
      </Card>
    </Modal>
  );
}
