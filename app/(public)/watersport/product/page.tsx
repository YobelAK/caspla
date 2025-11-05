import React from 'react';
import { Container,Box, Grid, GridCol, Stack, Title, Text, Group, Badge, List, ThemeIcon, Paper, Divider, Image } from '@mantine/core';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero as WatersportHero } from '@/components/watersport/hero';
import { BookingSummary } from '@/components/watersport/booking-summary';
import { IconCheck, IconX, IconClock, IconMapPin, IconStarFilled } from '@tabler/icons-react';

export default function WatersportProductPage() {
  return (
    <Box style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      <Header />
      <WatersportHero />
      <Container size="xl">
        <Grid gutter="xl">
          <GridCol span={{ base: 12, lg: 8 }}>
            <Stack gap="xl">
              {/* Title & meta */}
              <Stack gap={4}>
                <Title order={1}>Jet Ski Adventure in Nusa Penida</Title>
                <Group gap="sm">
                  <Badge color="blue" variant="light">Best Seller</Badge>
                  <Text c="dimmed">Safety equipment • Professional instructor</Text>
                </Group>
              </Stack>

              {/* Overview */}
              <Stack gap="sm">
                <Title order={3} size="h4">Overview</Title>
                <Text c="dimmed">
                  Experience the thrill of riding a jet ski on the crystal-clear waters of Nusa Penida.
                  Our professional instructors will guide you through a safety briefing and ensure you have
                  an unforgettable adventure.
                </Text>
              </Stack>

              {/* Inclusions / Exclusions */}
              <Grid gutter="lg">
                <GridCol span={{ base: 12, md: 6 }}>
                  <Stack gap="xs">
                    <Title order={4} size="h5">Includes</Title>
                    <Stack gap={6}
                    >
                      <Group gap="xs" align="center">
                        <ThemeIcon color="green" size={20} radius="xl"><IconCheck size={14} /></ThemeIcon>
                        <Text>Jet ski 15 minutes</Text>
                      </Group>
                      <Group gap="xs" align="center">
                        <ThemeIcon color="green" size={20} radius="xl"><IconCheck size={14} /></ThemeIcon>
                        <Text>Life jacket and safety briefing</Text>
                      </Group>
                      <Group gap="xs" align="center">
                        <ThemeIcon color="green" size={20} radius="xl"><IconCheck size={14} /></ThemeIcon>
                        <Text>Instructor guidance</Text>
                      </Group>
                    </Stack>
                  </Stack>
                </GridCol>
                <GridCol span={{ base: 12, md: 6 }}>
                  <Stack gap="xs">
                    <Title order={4} size="h5">Excludes</Title>
                    <Stack gap={6}>
                      <Group gap="xs" align="center">
                        <ThemeIcon color="red" size={20} radius="xl"><IconX size={14} /></ThemeIcon>
                        <Text>Hotel pickup</Text>
                      </Group>
                      <Group gap="xs" align="center">
                        <ThemeIcon color="red" size={20} radius="xl"><IconX size={14} /></ThemeIcon>
                        <Text>Personal expenses</Text>
                      </Group>
                    </Stack>
                  </Stack>
                </GridCol>
              </Grid>

              {/* Itinerary */}
              <Stack gap="xs">
                <Title order={3} size="h4">Itinerary</Title>
                <Stack gap={6}>
                  <Group gap="xs" align="center">
                    <ThemeIcon color="blue" size={20} radius="xl"><IconClock size={14} /></ThemeIcon>
                    <Text>09:00 – Safety briefing and equipment</Text>
                  </Group>
                  <Group gap="xs" align="center">
                    <ThemeIcon color="blue" size={20} radius="xl"><IconClock size={14} /></ThemeIcon>
                    <Text>09:15 – Jet ski session begins</Text>
                  </Group>
                  <Group gap="xs" align="center">
                    <ThemeIcon color="blue" size={20} radius="xl"><IconClock size={14} /></ThemeIcon>
                    <Text>09:30 – Free ride under instructor supervision</Text>
                  </Group>
                </Stack>
              </Stack>

              {/* Reviews */}
              <Stack gap="xs">
                <Title order={3} size="h4">Reviews</Title>
                <Paper withBorder p="md" radius="md" bg="white">
                  <Group justify="space-between" align="center">
                    <Group>
                      <ThemeIcon color="yellow" variant="light"><IconStarFilled size={16} /></ThemeIcon>
                      <Text fw={600}>4.8</Text>
                      <Text c="dimmed">(120 reviews)</Text>
                    </Group>
                    <Badge color="green">Excellent</Badge>
                  </Group>
                  <Divider my="sm" />
                  <Stack gap="xs">
                    <Text fw={600}>Ayu</Text>
                    <Text c="dimmed">Seru banget, instruktur sabar. Recommended!</Text>
                  </Stack>
                </Paper>
              </Stack>

              {/* Location */}
              <Stack gap="xs">
                <Title order={3} size="h4">Location</Title>
                <Group gap="xs"><IconMapPin size={16} /><Text>Nusa Penida</Text></Group>
                <Paper radius="md" withBorder>
                  <Image src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80" alt="Nusa Penida map" height={240} fit="cover" />
                </Paper>
              </Stack>
            </Stack>
          </GridCol>

          {/* Sidebar booking card */}
          <GridCol span={{ base: 12, lg: 4 }}>
            <BookingSummary
              trip="Watersport • Nusa Penida"
              departureDate="Any day, 09:00 AM"
              passengers="2 Persons"
              passengerPrice={250000}
              portFee={10000}
              addOns={[]}
              nextStep="/watersport/book"
              buttonText="Continue to Booking"
            />
          </GridCol>
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
}