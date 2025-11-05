import React from 'react';
import { Box, Container, Group } from '@mantine/core';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/beachclub/hero';
import { SearchBar } from '@/components/beachclub/search-bar';
import { FiltersSidebar } from '@/components/beachclub/filters-sidebar';
import { BeachClubGrid } from '@/components/beachclub/beach-club-grid';
import { TopDestinations } from '@/components/watersport/top-destinations';

export default function BeachClubPage() {
  return (
    <Box style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      <Header />
      <Hero />
      <SearchBar />
      
      {/* Main Content */}
      <Container 
        size="xl" 
        style={{ 
          paddingTop: 48,
          paddingBottom: 48,
          paddingLeft: 16,
          paddingRight: 16
        }}
      >
        <Group align="flex-start" gap={32} style={{ flexWrap: 'nowrap' }}>
          <FiltersSidebar />
          <BeachClubGrid />
        </Group>
      </Container>

      <TopDestinations />
      <Footer />
    </Box>
  );
}