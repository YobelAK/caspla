import React from 'react';
import { Box, Text } from '@mantine/core';
import { Header } from '@/components/profile/header';
import { Sidebar } from '@/components/profile/Sidebar';
import { ProfileForm } from '@/components/profile/ProfileForm';

export default function Page() {
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
            <ProfileForm />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}