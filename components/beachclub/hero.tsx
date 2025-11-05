import React from 'react';
import { Box, Container, Title, Text, Stack } from '@mantine/core';

export const Hero = () => {
  return (
    <Box
      style={{
        position: 'relative',
        height: 384,
        backgroundImage: 'url(https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&h=600&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <Container 
        size="xl" 
        style={{ 
          position: 'relative',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Stack align="center" gap={24} style={{ textAlign: 'center' }}>
          <Title 
            order={1} 
            style={{ 
              fontSize: 'clamp(3rem, 5vw, 4rem)',
              fontWeight: 700,
              color: 'white',
              lineHeight: 1.1
            }}
          >
            Discover Bali's Best Beach Clubs
          </Title>
          <Text 
            size="xl" 
            style={{ 
              color: 'white',
              maxWidth: 768,
              lineHeight: 1.6
            }}
          >
            Relax, swim, and sip your favorite cocktails at our curated
            selections.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};