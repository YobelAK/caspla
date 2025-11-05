import React from 'react';
import { Box } from '@mantine/core';
import { HeroSection } from '@/components/promo/hero-section';
import { FilterSection } from '@/components/promo/filter-section';
import { OffersGrid } from '@/components/promo/offers-grid';
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function PromoPage() {
  return (
    <Box style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      <Header />
      <HeroSection />
      <FilterSection />
      <OffersGrid />
      <Footer />
    </Box>
  );
}