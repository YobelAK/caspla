'use client';

import React from 'react';
import Link from 'next/link';
import { Container, Box, Group, Text, Stack, Grid, GridCol } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ProgressIndicator } from '@/components/beachclub/progress-indicator';
import { ContactForm } from '@/components/beachclub/contact-form';
import { BookingSummary } from '@/components/beachclub/booking-summary';
import { useRouter } from 'next/navigation';

export default function TourBookingPage() {
  const router = useRouter();
  return (
    <Box style={{ minHeight: '100vh', backgroundColor: '#f8f9fa', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <ProgressIndicator currentStep={1} />
      
      {/* Back Button */}
      <Container size="xl" pt="md">
        <Link href="/beachclub/product-detail" style={{ textDecoration: 'none' }}>
          <Group gap={8} style={{ cursor: 'pointer', color: '#6c757d' }}>
            <IconArrowLeft size={16} />
            <Text size="sm">Back to Beach Club</Text>
          </Group>
        </Link>
      </Container>

      <Box component="main" style={{ flex: 1 }}>
        <Container size="xl" pb="xl">
          <Grid gutter="xl">
            <GridCol span={{ base: 12, lg: 8 }}>
              <Stack gap="xl">
                <ContactForm />
               
              </Stack>
            </GridCol>
            <GridCol span={{ base: 12, lg: 4 }}>
              <BookingSummary 
                trip="Day Pass – Caspia Beach Club" 
                departureDate="12 Oct 2025" 
                passengers="2 Guests" 
                passengerPrice={200000} 
                portFee={10000} 
                onContinue={() => router.push('/beachclub/book/seat')}
                buttonText="Continue to Seat Selection"
              />
            </GridCol>
          </Grid>
        </Container>
      </Box>
      
      <Footer />
    </Box>
  );
}