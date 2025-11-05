"use client";
import React from 'react';
import { BeachClubCard } from './beach-club-card';
import { Stack, Title, Group, Text, Button, SimpleGrid } from '@mantine/core';
import { IconArrowsUpDown, IconStar, IconClock } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';

const beachClubs = [
  {
    name: 'Potato Head Beach Club',
    location: 'Seminyak',
    description: 'Iconic beach club with stunning sunset views, infinity pool, and world-class dining experience.',
    price: 500000,
    rating: 4.8,
    reviews: 1247,
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800',
    badge: 'Popular',
    facilities: ['Pool', 'Restaurant', 'Beach Access', 'Sunset View']
  },
  {
    name: 'Ku De Ta',
    location: 'Seminyak',
    description: 'Sophisticated beachfront venue offering premium dining, cocktails, and panoramic ocean views.',
    price: 400000,
    rating: 4.7,
    reviews: 892,
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
    facilities: ['Restaurant', 'Beach Access', 'Sunset View']
  },
  {
    name: 'Finns Beach Club',
    location: 'Canggu',
    description: 'Vibrant beach club with multiple pools, water slides, and exciting party atmosphere.',
    price: 350000,
    rating: 4.6,
    reviews: 1156,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800',
    badge: 'Family Friendly',
    facilities: ['Pool', 'Restaurant', 'Beach Access']
  },
  {
    name: 'Single Fin',
    location: 'Uluwatu',
    description: 'Clifftop bar with breathtaking views, perfect for watching surfers and enjoying cold drinks.',
    price: 200000,
    rating: 4.5,
    reviews: 743,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
    facilities: ['Restaurant', 'Sunset View']
  },
  {
    name: 'Omnia Dayclub',
    location: 'Uluwatu',
    description: 'Luxury clifftop dayclub with infinity pool and spectacular Indian Ocean panoramas.',
    price: 800000,
    rating: 4.9,
    reviews: 567,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800',
    badge: 'Luxury',
    facilities: ['Pool', 'Restaurant', 'Sunset View']
  },
  {
    name: 'La Brisa',
    location: 'Canggu',
    description: 'Bohemian-style beach club with bamboo architecture, perfect for relaxed beach vibes.',
    price: 300000,
    rating: 4.4,
    reviews: 934,
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800',
    facilities: ['Restaurant', 'Beach Access']
  }
];

export function BeachClubGrid() {
  const router = useRouter();
  return (
    <Stack style={{ flex: 1 }}>
      {/* Header */}
      <Group justify="space-between" align="center" style={{ marginBottom: 24 }}>
        <Title order={2} style={{ fontSize: 24, fontWeight: 700 }}>Available Beach Clubs</Title>
        <Group gap={16} align="center">
          <Text size="sm" style={{ color: '#6b7280' }}>Sort by:</Text>
          <Button
            variant="outline"
            leftSection={<IconArrowsUpDown size={16} />}
            size="sm"
            style={{ color: '#6b7280' }}
            styles={{
              root: {
                borderColor: '#d1d5db',
                '&:hover': {
                  backgroundColor: '#f9fafb'
                }
              }
            }}
          >
            Price (Low → High)
          </Button>
          <Button
            variant="outline"
            leftSection={<IconStar size={16} />}
            size="sm"
            style={{ color: '#6b7280' }}
            styles={{
              root: {
                borderColor: '#d1d5db',
                '&:hover': {
                  backgroundColor: '#f9fafb'
                }
              }
            }}
          >
            Rating
          </Button>
          <Button
            variant="outline"
            leftSection={<IconClock size={16} />}
            size="sm"
            style={{ color: '#6b7280' }}
            styles={{
              root: {
                borderColor: '#d1d5db',
                '&:hover': {
                  backgroundColor: '#f9fafb'
                }
              }
            }}
          >
            Popularity
          </Button>
        </Group>
      </Group>
      
      {/* Beach Club Grid */}
      <SimpleGrid
        cols={{ base: 1, md: 2, lg: 3 }}
        spacing={24}
      >
        {beachClubs.map((beachClub, index) => (
          <BeachClubCard
            key={index}
            {...beachClub}
            onViewDetails={() => router.push('/beachclub/product-detail')}
          />
        ))}
      </SimpleGrid>
    </Stack>
  );
}