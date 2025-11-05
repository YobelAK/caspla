'use client';

import React from 'react';
import { Container, Title, Text, Group, ActionIcon, Grid, Box, Image, Badge, Stack, Overlay } from '@mantine/core';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

const recommendations = [
  {
    id: 1,
    name: 'Potato Head Beach Club',
    description: 'Iconic beach club with stunning sunset views and world-class dining',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop',
    badge: 'Most Popular'
  },
  {
    id: 2,
    name: 'Ku De Ta',
    description: 'Sophisticated beachfront venue with premium cocktails and cuisine',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop',
    badge: 'Luxury'
  },
  {
    id: 3,
    name: 'Finns Beach Club',
    description: 'Vibrant atmosphere with multiple pools and beach access',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
    badge: 'Family Friendly'
  },
  {
    id: 4,
    name: 'La Brisa',
    description: 'Bohemian-style beach club with bamboo architecture and chill vibes',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop',
    badge: 'Unique Design'
  }
];

export const Recommendations = () => {
  return (
    <Box style={{ padding: '64px 0', backgroundColor: 'white' }}>
      <Container size="xl">
        <Group justify="space-between" align="flex-start" style={{ marginBottom: 32 }}>
          <Stack gap={8}>
            <Title 
              order={2} 
              style={{ 
                fontSize: 30,
                fontWeight: 700,
                color: '#1f2937'
              }}
            >
              Recommended Beach Clubs
            </Title>
            <Text style={{ color: '#374151' }}>
              Handpicked selections for the ultimate beach club experience
            </Text>
          </Stack>
          <Group gap={8}>
            <ActionIcon
              variant="outline"
              size="lg"
              style={{ borderColor: '#e5e7eb' }}
              styles={{
                root: {
                  '&:hover': {
                    backgroundColor: '#f9fafb'
                  }
                }
              }}
            >
              <IconChevronLeft size={20} style={{ color: '#374151' }} />
            </ActionIcon>
            <ActionIcon
              variant="outline"
              size="lg"
              style={{ borderColor: '#e5e7eb' }}
              styles={{
                root: {
                  '&:hover': {
                    backgroundColor: '#f9fafb'
                  }
                }
              }}
            >
              <IconChevronRight size={20} style={{ color: '#374151' }} />
            </ActionIcon>
          </Group>
        </Group>

        <Grid gutter={24}>
          {recommendations.map((club) => (
            <Grid.Col key={club.id} span={{ base: 12, md: 6, lg: 3 }}>
              <Box 
                style={{ 
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                <Box 
                  style={{ 
                    position: 'relative',
                    height: 192,
                    borderRadius: 8,
                    overflow: 'hidden',
                    marginBottom: 16
                  }}
                >
                  <Image
                    src={club.image}
                    alt={club.name}
                    className="recommendation-image"
                    style={{ 
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 300ms ease'
                    }}
                  />
                  <Overlay 
                    className="recommendation-overlay"
                    color="#000" 
                    opacity={0.2}
                    style={{ transition: 'opacity 300ms ease' }}
                  />
                  <Badge
                    style={{
                      position: 'absolute',
                      top: 16,
                      left: 16,
                      backgroundColor: '#284361',
                      color: 'white',
                      fontSize: 12,
                      fontWeight: 500
                    }}
                  >
                    {club.badge}
                  </Badge>
                </Box>
                <Stack gap={8}>
                  <Title 
                    order={3}
                    className="recommendation-title"
                    style={{ 
                      fontSize: 18,
                      fontWeight: 600,
                      color: '#1f2937',
                      transition: 'color 300ms ease'
                    }}
                  >
                    {club.name}
                  </Title>
                  <Text 
                    size="sm" 
                    style={{ 
                      color: '#374151',
                      lineHeight: 1.5,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}
                  >
                    {club.description}
                  </Text>
                </Stack>
              </Box>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};