import React from 'react';
import { Stack } from '@mantine/core';
import { ResultCard } from './result-card';

const mockResults = [
  {
    id: 1,
    provider: 'Caspia Bali',
    logo: 'https://via.placeholder.com/60',
    departureTime: '09:00',
    arrivalTime: '09:45',
    duration: '45 min',
    origin: 'Bali (Sanur)',
    destination: 'Nusa Penida (Banjar Nyuh)',
    prices: {
      indonesian: {
        adult: 100000,
        child: 75000
      },
      foreigner: {
        adult: 125000,
        child: 100000
      }
    }
  },
  {
    id: 2,
    provider: 'Eka Jaya',
    logo: 'https://via.placeholder.com/60',
    departureTime: '10:00',
    arrivalTime: '10:45',
    duration: '45 min',
    origin: 'Bali (Sanur)',
    destination: 'Nusa Penida (Banjar Nyuh)',
    prices: {
      indonesian: {
        adult: 110000,
        child: 75000
      },
      foreigner: {
        adult: 135000,
        child: 100000
      }
    }
  },
  {
    id: 3,
    provider: 'The Tanis',
    logo: 'https://via.placeholder.com/60',
    departureTime: '13:00',
    arrivalTime: '13:30',
    duration: '30 min',
    origin: 'Bali (Sanur)',
    destination: 'Nusa Penida (Banjar Nyuh)',
    prices: {
      indonesian: {
        adult: 150000,
        child: 90000
      },
      foreigner: {
        adult: 200000,
        child: 90000
      }
    }
  }
];

export function ResultsSection() {
  return (
    <Stack gap="md" style={{ flex: 1, color: '#000000' }}>
      {mockResults.map(result => (
        <ResultCard key={result.id} {...result} />
      ))}
    </Stack>
  );
}