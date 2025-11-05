'use client';

import React from 'react';
import Link from 'next/link';
import { Container, Box, Group, Text, ActionIcon, SimpleGrid, Stack, Grid, GridCol } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ProgressIndicator } from '@/components/watersport/progress-indicator';
import { ContactForm } from '@/components/watersport/contact-form';
import { BookingSummary } from '@/components/watersport/booking-summary';
import { useRouter } from 'next/navigation';

export default function TourBookingPage() {
  const router = useRouter();
  return (
    <Box style={{ minHeight: '100vh', backgroundColor: '#f8f9fa', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <ProgressIndicator currentStep={1} />
      
      {/* Back Button */}
    

      {/* <Container size="xl" pt="xl" style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <Link href="/tour/product" style={{ textDecoration: 'none' }}>
          <Group gap="xs" style={{ cursor: 'pointer', color: '#284361', transition: 'color 0.2s ease' }}>
            <IconArrowLeft size={20} />
            <Text fw={500} style={{ ':hover': { color: '#1f3450' } }}>Back to Product Detail</Text>
          </Group>
        </Link>
      </Container> */}

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
                trip="Sanur → Nusa Penida" 
                departureDate="12 Oct 2025, 09:00 AM" 
                passengers="2 Adults" 
                passengerPrice={200000} 
                portFee={10000} 
                onContinue={() => router.push('/watersport/book/addons')}
                buttonText="Continue to Add-Ons"
              />
            </GridCol>
          </Grid>
        </Container>
      </Box>
      
      <Footer />
    </Box>
  );
}