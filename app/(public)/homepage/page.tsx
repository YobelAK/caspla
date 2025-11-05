"use client";

import { Box, Container, Title, Text } from "@mantine/core";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function Homepage() {
  return (
    <Box>
      <Header />
      <Container size="lg" py="xl">
        <Title order={2}>Homepage</Title>
        <Text c="dimmed">Konten homepage akan ditambahkan di sini.</Text>
      </Container>
      <Footer />
    </Box>
  );
}