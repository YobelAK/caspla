"use client";
import React from 'react';
import { Card, CardSection, Image, Text, Group, Badge, Button, Stack } from '@mantine/core';
import { IconMapPin, IconStar, IconWash, IconUsers, IconToolsKitchen2 } from '@tabler/icons-react';

interface BeachClubCardProps {
  name: string;
  location: string;
  description: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  facilities: string[];
  onViewDetails?: () => void;
}

export const BeachClubCard: React.FC<BeachClubCardProps> = ({
  name,
  location,
  description,
  price,
  rating,
  reviews,
  image,
  badge,
  facilities,
  onViewDetails
}) => {
  return (
    <Card
      shadow="md"
      radius="lg"
      style={{
        backgroundColor: 'white',
        transition: 'box-shadow 0.3s ease'
      }}
      styles={{
        root: {
          '&:hover': {
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          }
        }
      }}
    >
      <CardSection style={{ position: 'relative' }}>
        <Image
          src={image}
          alt={name}
          height={192}
          fallbackSrc="https://placehold.co/800x600?text=Image+unavailable"
          style={{ objectFit: 'cover' }}
        />
        {badge && (
          <Badge
            style={{
              position: 'absolute',
              top: 16,
              right: 16,
              backgroundColor: '#284361',
              color: 'white',
              fontSize: 12,
              fontWeight: 500
            }}
            radius="xl"
          >
            {badge}
          </Badge>
        )}
      </CardSection>
      <Stack gap={16} p={24}>
        <Group justify="space-between" align="flex-start">
          <Text size="xl" style={{ fontWeight: 600, color: '#1f2937' }}>{name}</Text>
          <Group gap={4} align="center">
            <IconStar size={16} style={{ fill: '#fbbf24', color: '#fbbf24' }} />
            <Text size="sm" style={{ fontWeight: 500, color: '#1f2937' }}>{rating}</Text>
            <Text size="sm" style={{ color: '#374151' }}>({reviews} reviews)</Text>
          </Group>
        </Group>
        <Group gap={4} align="center" style={{ color: '#374151' }}>
          <IconMapPin size={16} />
          <Text size="sm">{location}</Text>
        </Group>
        <Text 
          size="sm" 
          style={{ 
            color: '#374151',
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical'
          }}
        >
          {description}
        </Text>
        <Group gap={12} style={{ flexWrap: 'wrap' }}>
          {facilities.map((facility) => (
            <Group key={facility} gap={4} align="center">
              {facility === 'Pool' && <IconWash size={16} style={{ color: '#374151' }} />}
              {facility === 'Sunset View' && <IconUsers size={16} style={{ color: '#374151' }} />}
              {facility === 'Restaurant' && <IconToolsKitchen2 size={16} style={{ color: '#374151' }} />}
              {facility === 'Beach Access' && <IconWash size={16} style={{ color: '#374151' }} />}
              <Text size="xs" style={{ color: '#374151' }}>{facility}</Text>
            </Group>
          ))}
        </Group>
        <Group
          justify="space-between"
          align="center"
          style={{
            paddingTop: 16,
            borderTop: '1px solid #e5e7eb'
          }}
        >
          <Stack gap={4}>
            <Text size="xs" style={{ color: '#374151' }}>Start From</Text>
            <Group gap={4} align="baseline">
              <Text size="xl" style={{ fontWeight: 700, color: '#1f2937' }}>
                IDR {price.toLocaleString('id-ID')}
              </Text>
              <Text size="sm" style={{ color: '#374151' }}> / pax</Text>
            </Group>
          </Stack>
          <Button
            style={{
              backgroundColor: '#284361',
              color: 'white',
              paddingLeft: 24,
              paddingRight: 24
            }}
            styles={{
              root: {
                '&:hover': {
                  backgroundColor: '#1f2937'
                }
              }
            }}
            onClick={onViewDetails}
          >
            View Details
          </Button>
        </Group>
      </Stack>
    </Card>
  );
};