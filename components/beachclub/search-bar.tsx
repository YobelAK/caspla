import React from 'react';
import { Container, Paper, SimpleGrid, Stack, Text, Select, TextInput, Button } from '@mantine/core';
import { IconMapPin, IconCalendar, IconSearch, IconUsers } from '@tabler/icons-react';

export const SearchBar = () => {
  return (
    <Container 
      size="xl" 
      style={{ 
        marginTop: -32,
        position: 'relative',
        zIndex: 10
      }}
    >
      <Paper 
        shadow="lg" 
        style={{ 
          backgroundColor: 'white',
          padding: 24
        }}
      >
        <SimpleGrid cols={{ base: 1, md: 4 }} spacing={16}>
          <div>
            <Stack gap={8}>
              <Text size="sm" style={{ color: '#6b7280' }}>
                Location
              </Text>
              <Select
                placeholder="Select Location"
                leftSection={<IconMapPin size={20} style={{ color: '#9ca3af' }} />}
                data={[
                  { value: 'seminyak', label: 'Seminyak' },
                  { value: 'canggu', label: 'Canggu' },
                  { value: 'uluwatu', label: 'Uluwatu' }
                ]}
                styles={{
                  input: {
                    backgroundColor: '#f5f7fa',
                    color: '#111827',
                    borderColor: '#d1d5db',
                    '&:focus': {
                      borderColor: '#284361',
                      boxShadow: '0 0 0 2px rgba(40, 67, 97, 0.2)'
                    }
                  }
                }}
              />
            </Stack>
          </div>
          <div>
            <Stack gap={8}>
              <Text size="sm" style={{ color: '#6b7280' }}>
                Date
              </Text>
              <TextInput
                placeholder="mm/dd/yyyy"
                leftSection={<IconCalendar size={20} style={{ color: '#9ca3af' }} />}
                styles={{
                  input: {
                    backgroundColor: '#f5f7fa',
                    color: '#111827',
                    borderColor: '#d1d5db',
                    '&:focus': {
                      borderColor: '#284361',
                      boxShadow: '0 0 0 2px rgba(40, 67, 97, 0.2)'
                    }
                  }
                }}
              />
            </Stack>
          </div>
          <div>
            <Stack gap={8}>
              <Text size="sm" style={{ color: '#6b7280' }}>
                Guests
              </Text>
              <Select
                placeholder="Select Guests"
                leftSection={<IconUsers size={20} style={{ color: '#9ca3af' }} />}
                data={[
                  { value: '1', label: '1 Guest' },
                  { value: '2', label: '2 Guests' },
                  { value: '3+', label: '3+ Guests' }
                ]}
                styles={{
                  input: {
                    backgroundColor: '#f5f7fa',
                    color: '#111827',
                    borderColor: '#d1d5db',
                    '&:focus': {
                      borderColor: '#284361',
                      boxShadow: '0 0 0 2px rgba(40, 67, 97, 0.2)'
                    }
                  }
                }}
              />
            </Stack>
          </div>
          <div>
            <Stack justify="flex-end" style={{ height: '100%' }}>
              <Button
                fullWidth
                leftSection={<IconSearch size={20} />}
                style={{
                  backgroundColor: '#284361',
                  color: 'white',
                  fontWeight: 500
                }}
                styles={{
                  root: {
                    '&:hover': {
                      backgroundColor: '#1f3349'
                    }
                  }
                }}
              >
                Search Beach Clubs
              </Button>
            </Stack>
          </div>
        </SimpleGrid>
      </Paper>
    </Container>
  );
};