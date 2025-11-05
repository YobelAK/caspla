import React from 'react';
import { Group, Box, Text } from '@mantine/core';

export function BeachClubSeatLegend() {
  return (
    <Group justify="center" gap="xl">
      <Group gap={8} align="center">
        <Box w={16} h={16} style={{ borderRadius: 4, background: '#e03131' }} />
        <Text size="sm" c="dimmed">Reserved</Text>
      </Group>
      <Group gap={8} align="center">
        <Box w={16} h={16} style={{ borderRadius: 4, background: '#284361' }} />
        <Text size="sm" c="dimmed">Selected</Text>
      </Group>
    </Group>
  );
}