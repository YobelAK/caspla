import React from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import AuthLoginPage from '@/components/auth/page';
import { Box } from '@mantine/core';

export default function LoginRoutePage() {
  return (
    <Box style={{ minHeight: '100vh', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column' }}>
      {/* <Header /> */}
      <Box component="main" style={{ flex: 1 }}>
        <AuthLoginPage />
      </Box>
      {/* <Footer /> */}
    </Box>
  );
}