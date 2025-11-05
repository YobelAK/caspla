'use client';

import React, { useState } from 'react';
import { Paper, Title, Group, Button, TextInput, Stack, Text, Checkbox, Collapse, Slider } from '@mantine/core';
import { IconChevronDown, IconChevronUp, IconSearch } from '@tabler/icons-react';

export const FiltersSidebar = () => {
  const [expandedSections, setExpandedSections] = useState({
    location: true,
    type: true,
    facilities: true,
    priceRange: true,
    sortBy: false
  });

  const [priceRange, setPriceRange] = useState([100000, 2000000]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section as keyof typeof prev]
    }));
  };

  return (
    <Paper 
      style={{ 
        width: 320, 
        padding: 24, 
        borderRight: '1px solid #e5e7eb',
        borderRadius: 0,
        backgroundColor: 'white'
      }}
    >
      <Group justify="space-between" align="center" style={{ marginBottom: 24 }}>
        <Title order={2} style={{ fontSize: 20, fontWeight: 600, color: '#111827' }}>Filters</Title>
        <Button 
          variant="subtle" 
          size="sm" 
          style={{ color: '#284361' }}
          styles={{
            root: {
              '&:hover': {
                textDecoration: 'underline'
              }
            }
          }}
        >
          Reset
        </Button>
      </Group>

      {/* Search */}
      <Stack gap={24}>
        <TextInput
          placeholder="Search beach clubs..."
          leftSection={<IconSearch size={16} style={{ color: '#9ca3af' }} />}
          styles={{
            input: {
              backgroundColor: 'white',
              color: '#111827',
              borderColor: '#d1d5db',
              '&:focus': {
                borderColor: '#284361',
                boxShadow: '0 0 0 2px rgba(40, 67, 97, 0.2)'
              },
              '&::placeholder': {
                color: '#6b7280'
              }
            }
          }}
        />

        {/* Quick Filters */}
        <Stack gap={12}>
          <Text style={{ fontWeight: 500, color: '#111827' }}>Quick Filters</Text>
          <Group gap={8}>
            {['Popular', 'Near Beach', 'Pool Access', 'Restaurant'].map((filter) => (
              <Button 
                key={filter} 
                variant="outline"
                size="xs"
                style={{ 
                  color: '#111827',
                  borderRadius: 20
                }}
                styles={{
                  root: {
                    borderColor: '#d1d5db',
                    backgroundColor: 'white',
                    '&:hover': {
                      backgroundColor: '#f9fafb'
                    }
                  }
                }}
              >
                {filter}
              </Button>
            ))}
          </Group>
        </Stack>

        {/* Location */}
        <Stack gap={12}>
          <Button 
            variant="subtle"
            onClick={() => toggleSection('location')} 
            justify="space-between"
            fullWidth
            rightSection={
              expandedSections.location ? 
                <IconChevronUp size={20} style={{ color: '#111827' }} /> : 
                <IconChevronDown size={20} style={{ color: '#111827' }} />
            }
            styles={{
              root: {
                padding: 0,
                height: 'auto',
                color: '#111827',
                fontWeight: 500
              },
              inner: {
                justifyContent: 'space-between'
              }
            }}
          >
            Location
          </Button>
          <Collapse in={expandedSections.location}>
            <Stack gap={8}>
              {['Canggu', 'Seminyak', 'Sanur', 'Nusa Penida', 'Ubud'].map((location) => (
                <Checkbox 
                  key={location} 
                  label={location}
                  size="sm"
                  styles={{
                    input: {
                      backgroundColor: 'white',
                      borderColor: '#d1d5db',
                      '&:checked': {
                        backgroundColor: '#284361',
                        borderColor: '#284361'
                      }
                    },
                    label: {
                      color: '#111827',
                      fontSize: 14
                    }
                  }}
                />
              ))}
            </Stack>
          </Collapse>
        </Stack>

        {/* Beach Club Type */}
        <Stack gap={12}>
          <Button 
            variant="subtle"
            onClick={() => toggleSection('type')} 
            justify="space-between"
            fullWidth
            rightSection={
              expandedSections.type ? 
                <IconChevronUp size={20} style={{ color: '#111827' }} /> : 
                <IconChevronDown size={20} style={{ color: '#111827' }} />
            }
            styles={{
              root: {
                padding: 0,
                height: 'auto',
                color: '#111827',
                fontWeight: 500
              },
              inner: {
                justifyContent: 'space-between'
              }
            }}
          >
            Beach Club Type
          </Button>
          <Collapse in={expandedSections.type}>
            <Stack gap={8}>
              {['Day Pass', 'Sunset Lounge', 'VIP Table', 'Party Event'].map((type) => (
                <Checkbox 
                  key={type} 
                  label={type}
                  size="sm"
                  styles={{
                    input: {
                      backgroundColor: 'white',
                      borderColor: '#d1d5db',
                      '&:checked': {
                        backgroundColor: '#284361',
                        borderColor: '#284361'
                      }
                    },
                    label: {
                      color: '#111827',
                      fontSize: 14
                    }
                  }}
                />
              ))}
            </Stack>
          </Collapse>
        </Stack>

        {/* Facilities */}
        <Stack gap={12}>
          <Button 
            variant="subtle"
            onClick={() => toggleSection('facilities')} 
            justify="space-between"
            fullWidth
            rightSection={
              expandedSections.facilities ? 
                <IconChevronUp size={20} style={{ color: '#111827' }} /> : 
                <IconChevronDown size={20} style={{ color: '#111827' }} />
            }
            styles={{
              root: {
                padding: 0,
                height: 'auto',
                color: '#111827',
                fontWeight: 500
              },
              inner: {
                justifyContent: 'space-between'
              }
            }}
          >
            Facilities
          </Button>
          <Collapse in={expandedSections.facilities}>
            <Stack gap={8}>
              {['Pool', 'DJ', 'Bar', 'Restaurant', 'Beach Access'].map((facility) => (
                <Checkbox 
                  key={facility} 
                  label={facility}
                  size="sm"
                  styles={{
                    input: {
                      backgroundColor: 'white',
                      borderColor: '#d1d5db',
                      '&:checked': {
                        backgroundColor: '#284361',
                        borderColor: '#284361'
                      }
                    },
                    label: {
                      color: '#111827',
                      fontSize: 14
                    }
                  }}
                />
              ))}
            </Stack>
          </Collapse>
        </Stack>

        {/* Price Range */}
        <Stack gap={12}>
          <Button 
            variant="subtle"
            onClick={() => toggleSection('priceRange')} 
            justify="space-between"
            fullWidth
            rightSection={
              expandedSections.priceRange ? 
                <IconChevronUp size={20} style={{ color: '#111827' }} /> : 
                <IconChevronDown size={20} style={{ color: '#111827' }} />
            }
            styles={{
              root: {
                padding: 0,
                height: 'auto',
                color: '#111827',
                fontWeight: 500
              },
              inner: {
                justifyContent: 'space-between'
              }
            }}
          >
            Price Range
          </Button>
          <Collapse in={expandedSections.priceRange}>
            <Stack gap={8}>
              <Slider
                min={100000}
                max={2000000}
                value={priceRange[1]}
                onChange={(value) => setPriceRange([100000, value])}
                color="#284361"
                size="sm"
                styles={{
                  track: {
                    backgroundColor: '#e5e7eb'
                  },
                  bar: {
                    backgroundColor: '#284361'
                  },
                  thumb: {
                    backgroundColor: '#284361',
                    borderColor: '#284361'
                  }
                }}
              />
              <Group justify="space-between">
                <Text size="xs" style={{ color: '#111827' }}>
                  Rp {priceRange[0].toLocaleString()}
                </Text>
                <Text size="xs" style={{ color: '#111827' }}>
                  Rp {priceRange[1].toLocaleString()}
                </Text>
              </Group>
            </Stack>
          </Collapse>
        </Stack>

        <Button 
          fullWidth
          style={{ 
            backgroundColor: '#284361',
            color: 'white',
            fontWeight: 500,
            marginTop: 24
          }}
          styles={{
            root: {
              '&:hover': {
                backgroundColor: '#1f3349'
              }
            }
          }}
        >
          Apply Filters
        </Button>
      </Stack>
    </Paper>
  );
};