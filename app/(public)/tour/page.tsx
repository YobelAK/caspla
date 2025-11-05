import React from 'react';
import { Box, Container, Group } from '@mantine/core';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/tour/hero';
import { SearchBar } from '@/components/tour/search-bar';
import { FilterSidebar } from '@/components/tour/filter-sidebar';
import { TourGrid } from '@/components/tour/tour-grid';
import { TopDestinations } from '@/components/tour/top-destinations';
import { TourRedirector } from '@/components/tour/redirector';

export default function TourPage() {
  return (
    <Box style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      <TourRedirector />
      <Header />
      {/* Hero Section */}
      <Hero />
      
      {/* Search Bar */}
      <SearchBar />
      
      {/* Main Content */}
      <Container size="xl" style={{ paddingTop: 48, paddingBottom: 48 }}>
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