'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Paper, Grid, Stack, Text, Select, TextInput, Checkbox, Group, Button } from '@mantine/core';
import { IconChevronDown, IconCalendar, IconUsers } from '@tabler/icons-react';
import { PassengerSelector, PassengerCounts } from './passenger-selector';

export function SearchBar() {
  const [returnTrip, setReturnTrip] = useState(false);
  const [showPassengerSelector, setShowPassengerSelector] = useState(false);
  const [passengers, setPassengers] = useState<PassengerCounts>({
    adult: 2,
    child: 0,
    infant: 0
  });
  const passengerRef = useRef<HTMLDivElement>(null);

  // Close passenger selector when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (passengerRef.current && !passengerRef.current.contains(event.target as Node)) {
        setShowPassengerSelector(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handlePassengerDone = (newPassengers: PassengerCounts) => {
    setPassengers(newPassengers);
    setShowPassengerSelector(false);
  };

  const getPassengerText = () => {
    const total = passengers.adult + passengers.child + passengers.infant;
    if (total === 0) return 'Select passengers';
    
    const parts = [];
    if (passengers.adult > 0) parts.push(`${passengers.adult} Adult${passengers.adult > 1 ? 's' : ''}`);
    if (passengers.child > 0) parts.push(`${passengers.child} Child${passengers.child > 1 ? 'ren' : ''}`);
    if (passengers.infant > 0) parts.push(`${passengers.infant} Infant${passengers.infant > 1 ? 's' : ''}`);
    
    return parts.join(', ');
  };

  return (
    <Paper shadow="sm" radius="lg" p="xl" bg="white">
      <Grid gutter="md">
        <Grid.Col span={{ base: 12, md: 2 }}>
          <Stack gap="xs">
            <Text size="sm" c="dimmed">From</Text>
            <Select
              data={[
                { value: 'all', label: 'All Origins' },
                { value: 'bali', label: 'Bali (Sanur)' },
                { value: 'nusa-penida', label: 'Nusa Penida' }
              ]}
              defaultValue="all"
              rightSection={<IconChevronDown size={16} />}
              styles={{
                input: {
                  backgroundColor: '#f5f7fa',
                  border: 'none',
                  padding: '12px 16px'
                }
              }}
            />
          </Stack>
        </Grid.Col>
        
        <Grid.Col span={{ base: 12, md: 2 }}>
          <Stack gap="xs">
            <Text size="sm" c="dimmed">To</Text>
            <Select
              data={[
                { value: 'all', label: 'All Destinations' },
                { value: 'bali', label: 'Bali (Sanur)' },
                { value: 'nusa-penida', label: 'Nusa Penida' }
              ]}
              defaultValue="all"
              rightSection={<IconChevronDown size={16} />}
              styles={{
                input: {
                  backgroundColor: '#f5f7fa',
                  border: 'none',
                  padding: '12px 16px'
                }
              }}
            />
          </Stack>
        </Grid.Col>
        
        <Grid.Col span={{ base: 12, md: 2 }}>
          <Stack gap="xs">
            <Text size="sm" c="dimmed">Departure Date</Text>
            <TextInput
              placeholder="mm/dd/yyyy"
              rightSection={<IconCalendar size={16} />}
              styles={{
                input: {
                  backgroundColor: '#f5f7fa',
                  border: 'none',
                  padding: '12px 16px'
                }
              }}
            />
          </Stack>
        </Grid.Col>
        
        <Grid.Col span={{ base: 12, md: 2 }}>
          <Stack gap="xs">
            <Group justify="space-between" align="center">
              <Text size="sm" c="dimmed">Return Date</Text>
              <Checkbox
                label="Return"
                checked={returnTrip}
                onChange={(e) => setReturnTrip(e.currentTarget.checked)}
                size="sm"
                styles={{
                  label: { fontSize: '14px', color: '#6b7280' }
                }}
              />
            </Group>
            <TextInput
              placeholder="mm/dd/yyyy"
              disabled={!returnTrip}
              rightSection={<IconCalendar size={16} />}
              styles={{
                input: {
                  backgroundColor: '#f5f7fa',
                  border: 'none',
                  padding: '12px 16px',
                  opacity: returnTrip ? 1 : 0.5
                }
              }}
            />
          </Stack>
        </Grid.Col>
        
        <Grid.Col span={{ base: 12, md: 2 }} ref={passengerRef}>
          <Stack gap="xs">
            <Text size="sm" c="dimmed">Passengers</Text>
            <div style={{ position: 'relative' }}>
              <Button
                variant="subtle"
                color="gray"
                fullWidth
                justify="space-between"
                leftSection={<IconUsers size={16} />}
                rightSection={<IconChevronDown size={16} />}
                onClick={() => setShowPassengerSelector(!showPassengerSelector)}
                styles={{
                  root: {
                    backgroundColor: '#f5f7fa',
                    border: 'none',
                    padding: '12px 16px',
                    height: 'auto',
                    color: '#111827'
                  },
                  inner: { justifyContent: 'space-between' },
                  section: { marginLeft: 0, marginRight: 0 }
                }}
              >
                {getPassengerText()}
              </Button>
              
              {showPassengerSelector && (
                <div style={{ 
                  position: 'absolute', 
                  top: '100%', 
                  left: 0, 
                  marginTop: 8, 
                  zIndex: 50 
                }}>
                  <PassengerSelector
                    initialCounts={passengers}
                    onDone={handlePassengerDone}
                  />
                </div>
              )}
            </div>
          </Stack>
        </Grid.Col>
        
        <Grid.Col span={{ base: 12, md: 2 }} style={{ display: 'flex', alignItems: 'flex-end' }}>
          <Button
            fullWidth
            size="md"
            style={{
              backgroundColor: '#284361',
              ':hover': { backgroundColor: '#1f3349' }
            }}
          >
            Search
          </Button>
        </Grid.Col>
      </Grid>
    </Paper>
  );
}