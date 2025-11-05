"use client";

import React from 'react';
import { Box, Text, Drawer, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconMenu2 } from '@tabler/icons-react';
import { Header } from '@/components/profile/header';
import { Sidebar } from '@/components/profile/Sidebar';
import { ProfileForm } from '@/components/profile/ProfileForm';

export default function Page() {
  const [sidebarOpened, { open, close }] = useDisclosure(false);
  return (
    <Box style={{ width: '100%', minHeight: '100vh', backgroundColor: '#ffffff' }}>
      <Header />
      {/* Mobile Sidebar Toggle */}
      <Box hiddenFrom="md" style={{ paddingLeft: 16, paddingRight: 16, marginTop: 12 }}>
        <Button
          variant="outline"
          leftSection={<IconMenu2 size={18} />}
          onClick={open}
          styles={{
            root: {
              borderColor: '#d1d5db',
              color: '#1f2937',
              backgroundColor: 'white'
            }
          }}
        >
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
            <Text style={{ fontSize: 30, fontWeight: 700, color: '#284361', marginBottom: 8 }}>
              My Profile
            </Text>
            <Text style={{ color: '#6b7280', marginBottom: 32 }}>
              Manage your account and preferences easily.
            </Text>
            <ProfileForm />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}