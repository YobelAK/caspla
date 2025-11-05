"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Container,
  Grid,
  GridCol,
  Stack,
  Title,
  Text,
  Group,
  Paper,
  Image,
  Box,
  Badge,
  Button,
  ActionIcon,
  Divider
} from '@mantine/core';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import {
  IconArrowLeft,
  IconChevronLeft,
  IconChevronRight,
  IconMapPin,
  IconClock,
  IconUsers,
  IconCash,
  IconEye,
  IconCheck
} from '@tabler/icons-react';

export default function BeachClubProductDetailPage() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=600&fit=crop',
    'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=600&fit=crop',
    'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&h=600&fit=crop'
  ];

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <Box style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      <Header />

      {/* Back link */}
      <Container size="xl" pt="md">
        <Link href="/beachclub" style={{ textDecoration: 'none' }}>
          <Group gap={8} style={{ cursor: 'pointer', color: '#284361' }}>
            <IconArrowLeft size={18} />
            <Text fw={500}>Back to Beach Club</Text>
          </Group>
        </Link>
      </Container>

      <main>
        {/* Product Hero */}
        <Container size="xl" py="xl">
          <Grid gutter="xl" align="stretch">
            {/* Carousel */}
            <GridCol span={{ base: 12, md: 6 }}>
              <Paper radius="xl" shadow="md" p={0} style={{ overflow: 'hidden', position: 'relative' }}>
                <Image src={images[currentImage]} alt="Savaya Beach Club" h={400} fit="cover" />
                <Group justify="space-between" style={{ position: 'absolute', top: '50%', left: 0, right: 0, transform: 'translateY(-50%)', padding: 16 }}>
                  <ActionIcon size="lg" radius="xl" variant="filled" color="gray" onClick={prevImage}>
                    <IconChevronLeft size={20} />
                  </ActionIcon>
                  <ActionIcon size="lg" radius="xl" variant="filled" color="gray" onClick={nextImage}>
                    <IconChevronRight size={20} />
                  </ActionIcon>
                </Group>
                <Group gap={6} style={{ position: 'absolute', bottom: 16, left: '50%', transform: 'translateX(-50%)' }}>
                  {images.map((_, i) => (
                    <Box
                      key={i}
                      onClick={() => setCurrentImage(i)}
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: 999,
                        backgroundColor: i === currentImage ? 'white' : 'rgba(255,255,255,0.6)',
                        cursor: 'pointer'
                      }}
                    />
                  ))}
                </Group>
              </Paper>
            </GridCol>

            {/* Information */}
            <GridCol span={{ base: 12, md: 6 }}>
              <Paper radius="xl" shadow="xs" p="lg">
                <Stack gap="md">
                  <Title order={1} style={{ color: '#333333' }}>Savaya Beach Club</Title>
                  <Text c="dimmed">
                    Perched on the cliffs of Uluwatu, Savaya offers a stunning view of the Indian Ocean. Enjoy world-class music,
                    fine dining, and unforgettable sunsets in a luxurious yet relaxed atmosphere.
                  </Text>
                  {/* Feature tags */}
                  <Grid gutter={12}>
                    {[
                      { emoji: '🌍', text: 'World-renowned DJs' },
                      { emoji: '🛋️', text: 'VIP cabanas and table service' },
                      { emoji: '🍹', text: 'Signature cocktails and cuisine' },
                      { emoji: '♾️', text: 'Infinity pool overlooking the ocean' }
                    ].map((f, idx) => (
                      <GridCol key={idx} span={{ base: 12, sm: 6 }}>
                        <Group gap={8} style={{ backgroundColor: '#f9fafb', padding: '8px 12px', borderRadius: 8 }}>
                          <Text>{f.emoji}</Text>
                          <Text size="sm" style={{ color: '#333333' }}>{f.text}</Text>
                        </Group>
                      </GridCol>
                    ))}
                  </Grid>
                  {/* Quick info */}
                  <Divider />
                  <Group gap="xl" wrap="wrap">
                    <Group gap={8}>
                      <IconMapPin size={18} color="#4c7be1" />
                      <Stack gap={2}>
                        <Text size="xs" c="dimmed">Location</Text>
                        <Text size="sm" fw={500} c="#333">Uluwatu, Bali</Text>
                      </Stack>
                    </Group>
                    <Group gap={8}>
                      <IconClock size={18} color="#4c7be1" />
                      <Stack gap={2}>
                        <Text size="xs" c="dimmed">Opening Hours</Text>
                        <Text size="sm" fw={500} c="#333">11:00 AM - 08:00 PM</Text>
                      </Stack>
                    </Group>
                    <Group gap={8}>
                      <IconUsers size={18} color="#4c7be1" />
                      <Stack gap={2}>
                        <Text size="xs" c="dimmed">Table Type</Text>
                        <Text size="sm" fw={500} c="#333">VIP Sofa, Lounge, Pool Deck</Text>
                      </Stack>
                    </Group>
                  </Group>
                </Stack>
              </Paper>
            </GridCol>
          </Grid>
        </Container>

        {/* Table Selection */}
        <Container size="xl" pb="xl">
          <Stack gap="md" align="center" mb="md">
            <Title order={2} style={{ color: '#333333', textAlign: 'center' }}>Choose Your Table Type</Title>
          </Stack>
          <Grid gutter="xl">
            {[
              {
                name: 'VIP Sofa Area',
                capacity: 'Up to 6 people',
                price: 'Rp 2,500,000',
                description: 'Comfortable sofa by the pool with ocean view'
              },
              {
                name: 'Sunset Lounge',
                capacity: 'Up to 4 people',
                price: 'Rp 1,800,000',
                description: 'Chill zone with direct view of sunset bar'
              },
              {
                name: 'Daybed / Pool Deck',
                capacity: 'Up to 2 people',
                price: 'Rp 1,200,000',
                description: 'Perfect for sunbathing & light snacks'
              }
            ].map((t) => (
              <GridCol key={t.name} span={{ base: 12, md: 4 }}>
                <Paper radius="xl" shadow="xs" p="lg">
                  <Stack gap="sm">
                    <Title order={3} size="h4" c="#333">{t.name}</Title>
                    <Stack gap={8}>
                      <Group gap={8}>
                        <IconUsers size={16} color="#4c7be1" />
                        <Text size="sm"><Text component="span" fw={500}>Capacity:</Text> {t.capacity}</Text>
                      </Group>
                      <Group gap={8}>
                        <IconCash size={16} color="#4c7be1" />
                        <Text size="sm"><Text component="span" fw={500}>Minimum Spend:</Text> {t.price}</Text>
                      </Group>
                      <Group gap={8}>
                        <IconEye size={16} color="#4c7be1" />
                        <Text size="sm">{t.description}</Text>
                      </Group>
                    </Stack>
                    <Button fullWidth color="#284361">Select Table</Button>
                  </Stack>
                </Paper>
              </GridCol>
            ))}
          </Grid>
        </Container>

        {/* Map, Inclusions & Amenities */}
        <Container size="xl" pb="xl">
          <Grid gutter="xl">
            {/* Map */}
            <GridCol span={{ base: 12, md: 6 }}>
              <Paper radius="xl" shadow="xs" p="lg">
                <Title order={3} c="#333" mb="sm">Tour Locations</Title>
                <Box style={{ position: 'relative', width: '100%', height: 400, backgroundColor: '#f9fafb', borderRadius: 12, overflow: 'hidden' }}>
                  <Image
                    src="https://api.mapbox.com/styles/v1/mapbox/light-v11/static/115.0861,-8.8295,10,0/800x600@2x?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw"
                    alt="Bali Map"
                    fit="cover"
                    h={400}
                  />
                  <Box style={{ position: 'absolute', top: '35%', right: '25%', width: 32, height: 32, background: '#4c7be1', borderRadius: 999, border: '4px solid white', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }} />
                  <Box style={{ position: 'absolute', top: '50%', right: '33%', width: 32, height: 32, background: '#4c7be1', borderRadius: 999, border: '4px solid white', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }} />
                </Box>
              </Paper>
            </GridCol>

            {/* Right column: inclusions and amenities */}
            <GridCol span={{ base: 12, md: 6 }}>
              <Stack gap="lg">
                <Paper radius="xl" shadow="xs" p="lg">
                  <Title order={3} c="#333" mb="sm">Inclusions</Title>
                  <Grid gutter={8}>
                    {['Day Pass Access', 'Towel & Locker', 'Welcome Drink', 'Access to Pool Area'].map((inc) => (
                      <GridCol key={inc} span={{ base: 12, sm: 6 }}>
                        <Group gap={8}>
                          <IconCheck size={16} color="#4c7be1" />
                          <Text size="sm">{inc}</Text>
                        </Group>
                      </GridCol>
                    ))}
                  </Grid>
                </Paper>
                <Paper radius="xl" shadow="xs" p="lg">
                  <Title order={3} c="#333" mb="sm">Amenities</Title>
                  <Stack gap={8}>
                    {['Food & Beverage orders', 'Bottle Service', 'VIP Area Upgrade'].map((a) => (
                      <Group key={a} gap={8}>
                        <Box style={{ width: 20, height: 20, borderRadius: 999, border: '2px solid #4c7be1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Box style={{ width: 8, height: 8, borderRadius: 999, background: '#4c7be1' }} />
                        </Box>
                        <Text size="sm">{a}</Text>
                      </Group>
                    ))}
                  </Stack>
                </Paper>
              </Stack>
            </GridCol>
          </Grid>
        </Container>

        {/* CTA to Contact Info */}
        <Container size="xl" pb="xl">
          <Paper radius="xl" shadow="xs" p="lg" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <Title order={4} c="#111">Ready to book your table?</Title>
              <Text size="sm" c="dimmed">Proceed to contact information to continue your booking</Text>
            </div>
            <Link href="/beachclub/book" style={{ textDecoration: 'none' }}>
              <Button color="#284361">Continue to Contact Info</Button>
            </Link>
          </Paper>
        </Container>
      </main>

      <Footer />
    </Box>
  );
}