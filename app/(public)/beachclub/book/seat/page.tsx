'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Box, Container, Grid, Group, Button, Text } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ProgressIndicator } from '@/components/beachclub/progress-indicator';
import { BeachClubSeatLegend } from '@/components/beachclub/seat/legend';
import { BeachClubSeatTabNavigation } from '@/components/beachclub/seat/tab-navigation';
import { BeachClubSeatImageMap } from '@/components/beachclub/seat/image-map';
import { BookingSummary } from '@/components/beachclub/booking-summary';

export default function BeachClubSeatSelectionPage() {
  const [activeTab, setActiveTab] = useState('Rock Pool');
  const [selectedCount, setSelectedCount] = useState(0);
  const router = useRouter();

  return (
    <Box style={{ minHeight: '100vh', backgroundColor: '#f9fafb', display: 'flex', flexDirection: 'column' }}>
      <Header />

      <ProgressIndicator currentStep={2} />

      <Container size="xl" style={{ paddingLeft: 16, paddingRight: 16, paddingTop: 16, paddingBottom: 16 }}>
        <Button
          component={Link}
          href="/beachclub/book"
          variant="subtle"
          leftSection={<IconArrowLeft size={16} />}
          styles={{
            root: { color: '#6b7280' }, // text-gray-600
            label: { fontSize: 14 },
          }}
        >
          Back to Contact Info
        </Button>
      </Container>

      <Container size="xl" style={{ paddingLeft: 16, paddingRight: 16, paddingBottom: 32, flex: 1 }}>
        <Grid gutter={24}>
          <Grid.Col span={{ base: 12, lg: 8 }}>
            <Group justify="space-between" align="center" style={{ marginBottom: 24 }}>
              <BeachClubSeatLegend />
              <Text size="sm" c="#6b7280">
                Selected: <Text component="span" fw={500} c="#284361">{selectedCount}</Text>
              </Text>
            </Group>
            <Box style={{ marginBottom: 24 }}>
              <BeachClubSeatTabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
            </Box>
            <BeachClubSeatImageMap activeTab={activeTab} onSelectionChange={setSelectedCount} />
          </Grid.Col>
          <Grid.Col span={{ base: 12, lg: 4 }}>
            <BookingSummary
              trip="Day Pass – Caspia Beach Club"
              departureDate="12 Oct 2025"
              passengers="2 Guests"
              passengerPrice={200000}
              portFee={10000}
              onContinue={() => router.push('/beachclub/book/addons')}
              buttonText="Continue to Add-Ons"
            />
          </Grid.Col>
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
}