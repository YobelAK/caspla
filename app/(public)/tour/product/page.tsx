import React from 'react';
import { Container, SimpleGrid, Stack, Title, Text } from '@mantine/core';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { TourProductHeroSection } from '../../../../components/tour/product/hero-section';
import { TourOverview } from '../../../../components/tour/product/tour-overview';
import { InclusionsExclusions } from '../../../../components/tour/product/inclusions-exclusions';
import { TourItinerary } from '../../../../components/tour/product/itinerary';
import { TourReviews } from '../../../../components/tour/product/reviews';
import { TourLocationMap } from '../../../../components/tour/product/location-map';
import { TourBookingCard } from '../../../../components/tour/product/booking-card';

export default function TourProductPage() {
  return (
    <Stack gap="xl">
      <Header />
      <TourProductHeroSection />
      <Container size="xl">
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
          <div>
            <Stack gap="xl">
              <Stack gap={4}>
                <Title order={2}>Full-Day Bali Highlights Tour</Title>
                <Text c="dimmed">Best for first-timers • Free pickup • Private guide</Text>
              </Stack>
              <TourOverview />
              <InclusionsExclusions />
              <TourItinerary />
              <TourReviews />
              <TourLocationMap />
            </Stack>
          </div>
          <div>
            <TourBookingCard />
          </div>
        </SimpleGrid>
      </Container>
      <Footer />
    </Stack>
  );
}