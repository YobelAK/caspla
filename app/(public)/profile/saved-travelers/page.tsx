"use client";
import React from 'react';
import { Box, Text, Group, Button, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconMenu2 } from '@tabler/icons-react';
import { Header } from '@/components/profile/header';
import { Sidebar } from '@/components/profile/Sidebar';
import { SavedTravelersTable } from '@/components/profile/SavedTravelersTable';

export default function Page() {
  const [sidebarOpened, { open, close }] = useDisclosure(false);
  return (
    <Box style={{ width: '100%', minHeight: '100vh', backgroundColor: '#ffffff' }}>
      <Header />
      {/* Mobile Sidebar Toggle */}
      <Box hiddenFrom="md" style={{ paddingLeft: 16, paddingRight: 16, marginTop: 12 }}>
        <Button variant="outline" leftSection={<IconMenu2 size={18} />} onClick={open}>
          Open Menu
        </Button>
      </Box>
      <Drawer opened={sidebarOpened} onClose={close} title="Menu" size="md" padding="md">
        <Sidebar />
      </Drawer>
      <Box style={{ display: 'flex' }}>
        <Box visibleFrom="md">
          <Sidebar />
        </Box>
        <Box component="main" style={{ flex: 1, padding: 32 }}>
          <Box style={{ maxWidth: 1024 }}>
            <Group justify="space-between" align="flex-start" mb={24}>
              <Box>
                <Text style={{ fontSize: 30, fontWeight: 700, color: '#284361', marginBottom: 8 }}>
                  Saved Travelers
                </Text>
                <Text style={{ color: '#6b7280' }}>
                  Save your frequent travel companions for faster checkout.
                </Text>
              </Box>
              <Button
                styles={{
                  root: {
                    paddingInline: 24,
                    paddingBlock: 12,
                    borderRadius: 8,
                    fontWeight: 600,
                    backgroundColor: '#284361',
                    color: '#ffffff',
                  },
                }}
              >
                <span style={{ fontSize: 18, marginRight: 8 }}>+</span>
                Add New Traveler
              </Button>
            </Group>

            <SavedTravelersTable />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}