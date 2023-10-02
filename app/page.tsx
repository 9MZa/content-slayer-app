"use client";
import { compareDesc } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { Container, Space } from "@mantine/core";
import { OneColumn, TwoColumns, ThreeColumns } from "@/components/GridCard";

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.createdAt), new Date(b.createdAt))
  );

  return (
    <Container>
      <OneColumn content={posts} />
      <Space my="xl" />
      <TwoColumns content={posts} />
      <Space my="xl" />
      <ThreeColumns content={posts} />
    </Container>
  );
}
