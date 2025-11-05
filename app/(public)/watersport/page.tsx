import React from 'react';
import { Box, Container, Group } from '@mantine/core';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/watersport/hero';
import { SearchBar } from '@/components/watersport/search-bar';
import { FilterSidebar } from '@/components/watersport/filter-sidebar';
import { TourGrid } from '@/components/watersport/tour-grid';
import { TopDestinations } from '@/components/watersport/top-destinations';

export default function WatersportPage() {
  return (
    <Box style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      <Header />
      {/* Hero Section */}
      <Hero />
      
      {/* Search Bar */}
      <SearchBar />
      
      {/* Main Content */}
      <Container size="xl" py="xl">
        <Group gap="xl" align="flex-start">
          <FilterSidebar />
          <TourGrid />
        </Group>
      </Container>
      
      {/* Top Destinations Section */}
      <TopDestinations />
      
      <Footer />
    </Box>
  );
}