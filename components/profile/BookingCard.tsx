'use client';

import React from 'react';
import { Box, Paper, Group, Text, Button } from '@mantine/core';
import { FileText, Download } from 'lucide-react';

interface BookingCardProps {
  initials: string;
  title: string;
  location: string;
  date: string;
  passengers: number;
  bookingCode: string;
  status: 'Booked' | 'Completed' | 'Cancelled';
}

export function BookingCard({
  initials,
  title,
  location,
  date,
  passengers,
  bookingCode,
  status,
}: BookingCardProps) {
  const statusStyles: Record<BookingCardProps['status'], { bg: string; color: string }> = {
    Booked: { bg: '#fef9c3', color: '#854d0e' },
    Completed: { bg: '#bbf7d0', color: '#166534' },
    Cancelled: { bg: '#fee2e2', color: '#991b1b' },
  };

  return (
    <Paper
      withBorder
      p={24}
      radius={16}
      style={{ borderColor: '#f3f4f6', boxShadow: '0 1px 2px rgba(0,0,0,0.05)', background:'white' }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 10px rgba(0,0,0,0.08)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = '0 1px 2px rgba(0,0,0,0.05)';
      }}
    >
      <Group justify="space-between" align="flex-start">
        <Group gap={16} style={{ flex: 1 }}>
          <Box
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              backgroundColor: '#e8f1f5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#284361',
              fontWeight: 700,
              fontSize: 18,
              flexShrink: 0,
            }}
          >
            {initials}
          </Box>
          <Box style={{ flex: 1 }}>
            <Text c="#284361" fw={600} size="lg" mb={4}>
              {title}
            </Text>
            <Text c="#6b7280" size="sm" mb={12}>
              {location}
            </Text>
            <Group gap={32}>
              <Box>
                <Text c="#6b7280" size="sm">
                  Date: <Text span c="#284361" fw={500}>{date}</Text>
                </Text>
              </Box>
              <Box>
                <Text c="#6b7280" size="sm">
                  Passengers: <Text span c="#284361" fw={500}>{passengers}</Text>
                </Text>
              </Box>
              <Box>
                <Text c="#6b7280" size="sm">
                  Booking Code: <Text span c="#284361" fw={500}>{bookingCode}</Text>
                </Text>
              </Box>
            </Group>
          </Box>
        </Group>

        <Group align="flex-start" gap={12}>
          <Box
            style={{
              backgroundColor: statusStyles[status].bg,
              color: statusStyles[status].color,
              padding: '6px 16px',
              borderRadius: 9999,
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            {status}
          </Box>
          <Group gap={8}>
            <Button
              leftSection={<FileText size={16} />}
              style={{ backgroundColor: '#284361' }}
              styles={{ root: { borderRadius: 8, '&:hover': { backgroundColor: '#1f3349' } } }}
            >
              View E-Ticket
            </Button>
            <Button
              leftSection={<Download size={16} />}
              variant="outline"
              styles={{
                root: {
                  borderRadius: 8,
                  borderWidth: 2,
                  borderColor: '#284361',
                  color: '#284361',
                  '&:hover': { backgroundColor: '#284361', color: '#ffffff' },
                },
              }}
            >
              Invoice
            </Button>
          </Group>
        </Group>
      </Group>
    </Paper>
  );
}