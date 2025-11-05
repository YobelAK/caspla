import React from 'react';
import { Paper, Button, Group } from '@mantine/core';

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function BeachClubSeatTabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  const tabs = ['Overview', 'Main Pool', 'Rock Pool', 'Rock Bar', 'VIP Cabana', 'Sunset Lounge', 'Suite Room', 'Spa'];

  return (
    <Group justify="center">
      <Paper withBorder shadow="xs" radius="lg" p={6} style={{ background: '#ffffff' }}>
        <Group gap={4}>
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <Button
                key={tab}
                size="sm"
                radius="md"
                variant={isActive ? 'filled' : 'subtle'}
                onClick={() => onTabChange(tab)}
                styles={{
                  root: isActive
                    ? {
                        backgroundColor: '#284361',
                        color: '#ffffff',
                      }
                    : {
                        color: '#6b7280', // text-gray-600
                        backgroundColor: 'transparent',
                      },
                }}
              >
                {tab}
              </Button>
            );
          })}
        </Group>
      </Paper>
    </Group>
  );
}