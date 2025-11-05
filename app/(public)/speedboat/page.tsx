import React from 'react';
import { Container, Box, Title, Text, Group, Stack } from '@mantine/core';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { SearchBar } from '@/components/speedboat/search-bar';
import { FilterSidebar } from '@/components/speedboat/filter-sidebar';
import { ResultsSection } from '@/components/speedboat/results-section';

export default function SpeedboatPage() {
  return (
    <Box style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      <Header />
      
      {/* Hero Section */}
      <Box
        style={{
          background: 'linear-gradient(to right, #284361, #1a2c3d)',
          paddingTop: '64px',
          paddingBottom: '64px'
        }}
      >
        <Container size="xl">
          <Stack align="center" gap="md">
            <Title 
              order={1} 
              size="2.5rem" 
              fw={700} 
              c="white" 
              ta="center"
            >
              Speedboat Services
            </Title>
            <Text 
              size="lg" 
              c="#e5e7eb" 
              ta="center" 
              maw={640}
            >
              Fast and reliable speedboat transfers between Bali and Nusa Penida. 
              Book your journey with trusted operators.
            </Text>
          </Stack>
        </Container>
      </Box>

      {/* Search Section */}
      <Container size="xl" style={{ marginTop: '-32px', position: 'relative', zIndex: 10 }}>
        <SearchBar />
      </Container>

      {/* Main Content */}
      <Container size="xl" py="xl">
        <Group align="flex-start" gap="xl">
          <FilterSidebar />
          <Box style={{ flex: 1 }}>
            <Stack gap="md" mb="xl">
              <Title order={2} size="1.5rem" fw={700} c="#111827">
                Available Speedboat Services
              </Title>
              <Text c="#6b7280">
                Choose from our selection of reliable speedboat operators
              </Text>
            </Stack>
            <ResultsSection />
          </Box>
        </Group>
      </Container>
      
      <Footer />
    </Box>
  );
}