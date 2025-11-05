import React from 'react';
import { Box } from '@mantine/core';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/watersport/product/HeroSection';
import { ActivityDetails } from '@/components/watersport/product/ActivityDetails';
import { LocationMap } from '@/components/watersport/product/LocationMap';
import { Reviews } from '@/components/watersport/product/Reviews';

export default function WatersportProductPage() {
  return (
    <Box style={{ minHeight: '100vh', backgroundColor: '#f9fafb', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Box component="main" style={{ flex: 1 }}>
        <HeroSection />
        <ActivityDetails />
        <LocationMap />
        <Reviews />
      </Box>
      <Footer />
    </Box>
  );
}