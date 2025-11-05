'use client';

import React, { useState, useMemo } from 'react';
import { Box, Group, Button, Text, Stack, Container } from '@mantine/core';
import { Header } from '@/components/profile/header';
import { Sidebar } from '@/components/profile/Sidebar';
import { BookingCard } from '@/components/profile/BookingCard';

type Status = 'All' | 'Booked' | 'Completed' | 'Cancelled';

const categories = ['All', 'Speedboat', 'Watersport', 'Tour', 'Beach Club'];
const statuses: Status[] = ['All', 'Booked', 'Completed', 'Cancelled'];

const bookings = [
  {
    id: 1,
    initials: 'TN',
    title: 'Caspla Fast Boat',
    location: 'Bali (Sanur) → Nusa Penida (Banjar Nyuh)',
    date: '15 Oct 2025',
    passengers: 2,
    bookingCode: 'TX-2391',
    status: 'Booked' as const,
    category: 'Speedboat',
  },
  {
    id: 2,
    initials: 'TN',
    title: 'The Tanis Beach Club',
    location: 'Rock Pool',
    date: '08 Oct 2025',
    passengers: 3,
    bookingCode: 'TX-2198',
    status: 'Completed' as const,
    category: 'Beach Club',
  },
  {
    id: 3,
    initials: 'CB',
    title: 'Caspla Snorkeling Tour',
    location: 'Nusa Penida Snorkeling Safari',
    date: '08 Oct 2025',
    passengers: 3,
    bookingCode: 'TX-2198',
    status: 'Completed' as const,
    category: 'Tour',
  },
];

export default function MyBookingsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeStatus, setActiveStatus] = useState<Status>('All');

  const filtered = useMemo(() => {
    return bookings.filter((booking) => {
      const categoryMatch = activeCategory === 'All' || booking.category === activeCategory;
      const statusMatch = activeStatus === 'All' || booking.status === activeStatus;
      return categoryMatch && statusMatch;
    });
  }, [activeCategory, activeStatus]);

  return (
    <Box style={{ width: '100%', minHeight: '100vh', backgroundColor: '#ffffff' }}>
        <Header />
          <Box style={{ display: 'flex' }}>
            <Sidebar />
            <Box component="main" style={{ flex: 1, padding: 32 }}>
              <Box style={{ maxWidth: 1024 }}>
                <Text style={{ fontSize: 30, fontWeight: 700, color: '#284361', marginBottom: 8 }}>
                    My Profile
                </Text>
                <Text style={{ color: '#6b7280', marginBottom: 32 }}>
                  Manage your account and preferences easily.
                </Text>

                <Group gap={12} mb={24}>
                  {categories.map((cat) => {
                    const active = cat === activeCategory;
                    return (
                      <Button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        styles={{
                          root: {
                            borderRadius: 9999,
                            paddingInline: 24,
                            paddingBlock: 10,
                            fontWeight: 600,
                            backgroundColor: active ? '#284361' : '#ffffff',
                            color: active ? '#ffffff' : '#284361',
                            border: '1px solid #e5e7eb',
                            boxShadow: active ? 'none' : '0 1px 2px rgba(0,0,0,0.03)',
                            '&:hover': {
                              backgroundColor: active ? '#1f3349' : '#f3f4f6',
                            },
                          },
                        }}
                      >
                        {cat}
                      </Button>
                    );
                  })}
                </Group>

                <Box style={{ borderBottom: '1px solid #e5e7eb', marginBottom: 24 }}>
                  <Group gap={24}>
                    {statuses.map((st) => {
                      const active = st === activeStatus;
                      return (
                        <Box
                          key={st}
                          onClick={() => setActiveStatus(st)}
                          style={{
                            paddingBottom: 12,
                            cursor: 'pointer',
                            color: active ? '#284361' : '#6b7280',
                            fontWeight: active ? 600 : 500,
                            position: 'relative',
                          }}
                        >
                          {st}
                          {active && (
                            <Box
                              style={{
                                position: 'absolute',
                                bottom: -1,
                                left: 0,
                                right: 0,
                                height: 2,
                                backgroundColor: '#284361',
                              }}
                            />
                          )}
                        </Box>
                      );
                    })}
                  </Group>
                </Box>

                <Stack gap={16}>
                  {filtered.map((b) => (
                    <BookingCard
                      key={b.id}
                      initials={b.initials}
                      title={b.title}
                      location={b.location}
                      date={b.date}
                      passengers={b.passengers}
                      bookingCode={b.bookingCode}
                      status={b.status}
                    />
                  ))}
                </Stack>
              </Box>
            </Box>
          </Box>
      </Box>
    
  );
}