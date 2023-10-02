import React from "react";
import { Image, Text, Badge, Group, Card, Grid } from "@mantine/core";
import { Post } from "contentlayer/generated";

const CommonCard = ({ item }: { item: Post }) => {
  return (
    <Card component="a" href={item.url} shadow="sm" p="lg" radius="sm">
      <Card.Section>
        <Image src={item.thumbnail} height={160} alt="Norway" />
      </Card.Section>

      <Group mt="md" mb="xs">
        <Badge>{item.category}</Badge>

        <Text fw={500} lineClamp={2}>
          {item.title}
        </Text>
      </Group>

      <Text size="sm" color="dimmed" lineClamp={3}>
        {item.description}
      </Text>
    </Card>
  );
};

export default CommonCard;

export const HeroCard = ({ item }: { item: Post }) => {
  return (
    <Card
      withBorder
      component="a"
      href={item.url}
      shadow="sm"
      p={0}
      radius="sm"
    >
      <Grid>
        <Grid.Col span={6}>
          <Image src={item.thumbnail} height={250} alt="Norway" />
        </Grid.Col>
        <Grid.Col span={6} p={10}>
          <Group mt="md" mb="xs">
            <Badge>{item.category}</Badge>

            <Text fw={500} lineClamp={2}>
              {item.title}
            </Text>
          </Group>

          <Text size="sm" color="dimmed" lineClamp={3}>
            {item.description}
          </Text>
        </Grid.Col>
      </Grid>
    </Card>
  );
};
