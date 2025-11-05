import React from 'react';
import { Box, Container, Title, Text, Button, Stack } from '@mantine/core';

export function Hero() {
  return (
    <Box
      style={{
        position: 'relative',
        height: '500px',
        width: '100%',
        background: 'linear-gradient(135deg, #284361 0%, #1e3a5f 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start'
      }}
    >
      <Container size="xl" style={{ position: 'relative', zIndex: 1, textAlign: 'left' }}>
        <Box style={{ maxWidth: '600px' }}>
          <Stack gap="lg" align="flex-start">
            <Title
              order={1}
              size="xl"
              fw={700}
              c="white"
              style={{ 
                lineHeight: 1.1,
                fontSize: '3rem',
                textAlign: 'left'
              }}
            >
              Book Fast, Sail Faster
            </Title>
            <Text
              size="xl"
              c="gray.1"
              style={{ lineHeight: 1.6 }}
            >
              Explore Bali and the Gili Islands effortlessly with our trusted
              booking service.
            </Text>
            <Button
              size="lg"
              color="#2dbe8d"
              style={{
                fontWeight: 600,
                padding: '12px 32px',
                fontSize: '16px'
              }}
              styles={{
                root: {
                  '&:hover': {
                    backgroundColor: '#25a378'
                  }
                }
              }}
            >
              Book Now
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}