"use client";

import React, { useMemo, useState } from 'react';
import { Container, Grid, GridCol, Stack, Title, Group, Button, Paper, Text, Badge, SimpleGrid, Box } from '@mantine/core';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { BookingSummary } from '@/components/beachclub/booking-summary';
import { ProgressIndicator } from '@/components/beachclub/progress-indicator';

type Seat = {
  id: string;
  label: string;
  price: number;
  type: 'regular' | 'vip' | 'sofa' | 'daybed';
  reserved?: boolean;
};

function SeatCell({ seat, selected, onSelect }: { seat: Seat; selected: boolean; onSelect: (seat: Seat) => void }) {
  const color = seat.reserved ? 'gray' : selected ? 'blue' : seat.type === 'vip' ? 'yellow' : 'teal';
  return (
    <Paper
      withBorder
      p="xs"
      radius="sm"
      onClick={() => !seat.reserved && onSelect(seat)}
      style={{ cursor: seat.reserved ? 'not-allowed' : 'pointer', opacity: seat.reserved ? 0.5 : 1 }}
    >
      <Stack gap={4} align="center">
        <Badge color={color} variant={selected ? 'filled' : 'light'}>{seat.label}</Badge>
        <Text size="xs" c="dimmed">{seat.type.toUpperCase()}</Text>
      </Stack>
    </Paper>
  );
}

export default function BeachClubSeatSelectionPage() {
  const [selected, setSelected] = useState<Seat[]>([]);

  const seats = useMemo<Seat[]>(() => {
    const list: Seat[] = [];
    const types: Seat['type'][] = ['regular', 'vip', 'sofa', 'daybed'];
    for (let i = 1; i <= 36; i++) {
      const type = types[i % types.length];
      list.push({ id: `${i}`, label: `S${i}`, type, price: type === 'vip' ? 200000 : type === 'daybed' ? 300000 : 150000, reserved: i % 11 === 0 });
    }
    return list;
  }, []);

  const total = selected.reduce((sum, s) => sum + s.price, 0);

  const toggleSelect = (seat: Seat) => {
    setSelected((prev) => {
      const exists = prev.find((s) => s.id === seat.id);
      if (exists) return prev.filter((s) => s.id !== seat.id);
      return [...prev, seat];
    });
  };

  return (
    <Stack gap="xl">
      <Header />
      <Container size="xl" pt="lg" pb="xl">
        <ProgressIndicator currentStep={2} />
        <Grid gutter="xl" mt="md">
          <GridCol span={{ base: 12, lg: 8 }}>
            <Stack gap="md">
              <Group justify="space-between" align="center">
                <Title order={2}>Select Your Seats</Title>
                <Group gap="xs">
                  <Badge color="teal" variant="light">Regular</Badge>
                  <Badge color="yellow" variant="light">VIP</Badge>
                  <Badge color="teal" variant="outline">Sofa</Badge>
                  <Badge color="teal" variant="outline">Daybed</Badge>
                </Group>
              </Group>

              <Paper withBorder p="md" radius="md">
                <SimpleGrid cols={{ base: 4, sm: 6, md: 8 }} spacing="sm">
                  {seats.map((seat) => (
                    <SeatCell
                      key={seat.id}
                      seat={seat}
                      selected={!!selected.find((s) => s.id === seat.id)}
                      onSelect={toggleSelect}
                    />
                  ))}
                </SimpleGrid>
              </Paper>

              <Group justify="space-between">
                <Text c="dimmed">Selected: {selected.length} seat(s)</Text>
                <Text fw={600}>Subtotal: {total.toLocaleString('id-ID')}</Text>
              </Group>
            </Stack>
          </GridCol>
          <GridCol span={{ base: 12, lg: 4 }}>
            <BookingSummary
              trip="Beach Club • Seat Selection"
              departureDate="Any day, 03:00 PM"
              passengers={`${selected.length} Seat(s)`}
              passengerPrice={total}
              portFee={0}
              addOns={[]}
              nextStep="/beachclub/book/addons"
              buttonText="Continue to Add-Ons"
            />
          </GridCol>
        </Grid>
      </Container>
      <Footer />
    </Stack>
  );
}