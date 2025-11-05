'use client';

import React from 'react';
import { 
  Container, 
  Box, 
  Stack, 
  Title, 
  Text, 
  Group, 
  Button, 
  Card, 
  SimpleGrid, 
  Table, 
  ThemeIcon,
  Flex,
  Center,
  Badge,
  Anchor,
  Grid
} from '@mantine/core';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { 
  IconCheck, 
  IconDownload, 
  IconHome, 
  IconClock, 
  IconCreditCard, 
  IconMapPin, 
  IconPhone, 
  IconBriefcase, 
  IconUmbrella, 
  IconToolsKitchen2, 
  IconWaveSawTool,
  IconInfoCircle
} from '@tabler/icons-react';
import { useRouter } from 'next/navigation';

export default function BookingConfirmationPage() {
  const router = useRouter();

  const handleBackToHome = () => {
    router.push('/');
  };

  const handleDownloadTicket = () => {
    // In a real app, this would trigger a PDF download
    alert('E-Ticket download will be implemented');
  };

  return (
    <Box style={{ minHeight: '100vh', backgroundColor: 'white', display: 'flex', flexDirection: 'column' }}>
      <Header />
      
      <Box component="main" style={{ flex: 1 }}>
        <Container size="xl" py="xl">
          {/* Confirmation Message */}
          <Stack align="center" gap="md" mb="xl">
            <ThemeIcon size={64} radius="xl" color="green" variant="light">
              <IconCheck size={32} />
            </ThemeIcon>
            <Title order={1} size="2xl" fw={700} c="#284361" ta="center">
              Your Beach Club Booking is Confirmed!
            </Title>
            <Text c="dimmed" ta="center" mb="xs">
              Thank you for booking with Caspla Bali. Your payment via QRIS has
              been received successfully.
            </Text>
            <Text c="dimmed" ta="center">
              We've also sent your e-ticket and booking details to your email.
            </Text>
          </Stack>

          {/* Action Buttons */}
          <Group justify="center" gap="md" mb="xl">
            <Button 
              onClick={handleDownloadTicket}
              leftSection={<IconDownload size={20} />}
              color="#284361"
              size="md"
            >
              Download E-Ticket (PDF)
            </Button>
            <Button 
              onClick={handleBackToHome}
              leftSection={<IconHome size={20} />}
              variant="light"
              color="#284361"
              size="md"
            >
              Back to Homepage
            </Button>
          </Group>

          {/* Main Content Grid */}
          <Grid gutter="xl" mb="xl">
            {/* Left Column - E-Ticket Summary */}
            <Grid.Col span={{ base: 12, lg: 8 }}>
              <Stack gap="xl">
                <Card withBorder radius="md" p="xl" bg="white">
                  <Title order={2} size="xl" fw={600} c="#284361" mb="xl">
                    E-Ticket Summary
                  </Title>
                  <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
                    <Box>
                      <Text size="sm" c="dimmed" mb={4}>Booking ID</Text>
                      <Text fw={600} c="#284361">CAS-2025-14521</Text>
                    </Box>
                    <Box>
                      <Text size="sm" c="dimmed" mb={4}>Guests</Text>
                      <Text fw={600} c="#284361">2 Guests</Text>
                    </Box>
                    <Box>
                      <Text size="sm" c="dimmed" mb={4}>Provider Name</Text>
                      <Text fw={600} c="#284361">
                        Caspla Beach Club
                      </Text>
                    </Box>
                    <Box>
                      <Text size="sm" c="dimmed" mb={4}>Venue</Text>
                      <Text fw={600} c="#284361">
                        Seminyak, Bali
                      </Text>
                    </Box>
                    <Box>
                      <Text size="sm" c="dimmed" mb={4}>Date</Text>
                      <Text fw={600} c="#284361">
                        Saturday, 12 October 2025
                      </Text>
                    </Box>
                    <Box>
                      <Text size="sm" c="dimmed" mb={4}>Payment Method</Text>
                      <Text fw={600} c="#284361">QRIS</Text>
                    </Box>
                    <Box>
                      <Text size="sm" c="dimmed" mb={4}>Duration</Text>
                      <Text fw={600} c="#284361">
                        11:00 AM – 04:00 PM
                      </Text>
                    </Box>
                    <Box>
                      <Text size="sm" c="dimmed" mb={4}>Status</Text>
                      <Group gap="xs">
                        <IconCheck size={16} color="#2dbe8d" />
                        <Text fw={600} c="#2dbe8d">Confirmed</Text>
                      </Group>
                    </Box>
                  </SimpleGrid>
                  <Box mt="xl" pt="xl" style={{ borderTop: '1px solid #e9ecef' }}>
                    <Group justify="space-between" align="center">
                      <Text size="lg" fw={600} c="#284361">
                        Total Paid
                      </Text>
                      <Text size="2xl" fw={700} c="#284361">
                        IDR 740,000
                      </Text>
                    </Group>
                  </Box>
                </Card>
              </Stack>
            </Grid.Col>

            {/* Right Column - QR Code & Travel Tips */}
            <Grid.Col span={{ base: 12, lg: 4 }}>
              <Stack gap="xl">
              <Card withBorder radius="md" p="xl" bg="white">
                <Title order={2} size="xl" fw={600} c="#284361" mb="lg">
                  E-Ticket QR Code
                </Title>
                <Box bg="#f8f9fa" p="xl" style={{ borderRadius: 8 }} mb="lg">
                  <Center>
                    <Box 
                      w={192} 
                      h={192} 
                      bg="white" 
                      style={{ 
                        border: '2px solid #dee2e6', 
                        borderRadius: 8,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Box ta="center" c="dimmed">
                        <SimpleGrid 
                          cols={8} 
                          spacing={1} 
                          w={160} 
                          h={160} 
                          bg="#e9ecef" 
                          p={8} 
                          style={{ borderRadius: 4 }}
                        >
                          {Array.from({ length: 64 }).map((_, i) => (
                            <Box 
                              key={i} 
                              w="100%" 
                              h="100%" 
                              bg={Math.random() > 0.5 ? 'black' : 'white'}
                              style={{ borderRadius: 2 }}
                            />
                          ))}
                        </SimpleGrid>
                      </Box>
                    </Box>
                  </Center>
                </Box>
                <Text size="sm" c="dimmed" ta="center">
                  Show this QR at the Caspla Beach Club host desk for verification.
                </Text>
              </Card>

              <Card withBorder radius="md" p="xl" bg="white">
                <Title order={2} size="lg" fw={600} c="#284361" mb="lg">
                  Visit Tips
                </Title>
                <Stack gap="lg">
                  <Group align="flex-start" gap="md">
                    <IconClock size={20} color="#284361" style={{ marginTop: 2, flexShrink: 0 }} />
                    <Box style={{ flex: 1 }}>
                      <Text fw={500} c="#284361" size="sm">
                        Before You Arrive:
                      </Text>
                      <Text size="sm" c="dimmed">
                        Arrive 20 minutes before your booking time.
                      </Text>
                    </Box>
                  </Group>
                  <Group align="flex-start" gap="md">
                    <IconCreditCard size={20} color="#284361" style={{ marginTop: 2, flexShrink: 0 }} />
                    <Box style={{ flex: 1 }}>
                      <Text size="sm" c="dimmed">
                        Bring your ID for check-in.
                      </Text>
                    </Box>
                  </Group>
                  <Group align="flex-start" gap="md">
                    <IconPhone size={20} color="#284361" style={{ marginTop: 2, flexShrink: 0 }} />
                    <Box style={{ flex: 1 }}>
                      <Text size="sm" c="dimmed">
                        Keep this ticket accessible on your phone.
                      </Text>
                    </Box>
                  </Group>
                  <Group align="flex-start" gap="md">
                    <IconUmbrella size={20} color="#284361" style={{ marginTop: 2, flexShrink: 0 }} />
                    <Box style={{ flex: 1 }}>
                      <Text size="sm" c="dimmed">
                        Contact Caspla staff for assistance during your visit.
                      </Text>
                    </Box>
                  </Group>
                </Stack>
              </Card>
              </Stack>
            </Grid.Col>
          </Grid>

          {/* Contact Details */}
          <Card withBorder radius="md" p="xl" mb="xl" bg="white">
            <Title order={2} size="xl" fw={600} c="#284361" mb="xl">
              Contact Details
            </Title>
            <Box style={{ overflowX: 'auto' }}>
              <Table>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>
                      <Text size="sm" fw={500} c="dimmed">No.</Text>
                    </Table.Th>
                    <Table.Th>
                      <Text size="sm" fw={500} c="dimmed">Name</Text>
                    </Table.Th>
                    <Table.Th>
                      <Text size="sm" fw={500} c="dimmed">Email</Text>
                    </Table.Th>
                    <Table.Th>
                      <Text size="sm" fw={500} c="dimmed">Phone Number</Text>
                    </Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  <Table.Tr>
                    <Table.Td>
                      <Text size="sm" c="dark">1</Text>
                    </Table.Td>
                    <Table.Td>
                      <Text size="sm" fw={500} c="#284361">
                        Kadek Arta
                      </Text>
                    </Table.Td>
                    <Table.Td>
                      <Text size="sm" c="dark">
                        kadekarta@gmail.com
                      </Text>
                    </Table.Td>
                    <Table.Td>
                      <Text size="sm" c="dark">
                        628589952345
                      </Text>
                    </Table.Td>
                  </Table.Tr>
                </Table.Tbody>
              </Table>
            </Box>
            <Group gap="xs" mt="lg">
              <ThemeIcon size={16} radius="xl" color="blue" variant="light">
                <IconInfoCircle size={12} />
              </ThemeIcon>
              <Text size="sm" c="dimmed">
                Please bring your ID or passport for check-in verification.
              </Text>
            </Group>
          </Card>

          {/* Passenger Details */}
          <Card withBorder radius="md" p="xl" mb="xl" bg="white">
            <Title order={2} size="xl" fw={600} c="#284361" mb="xl">
              Passenger Details
            </Title>
            <Box style={{ overflowX: 'auto' }}>
              <Table>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>
                      <Text size="sm" fw={500} c="dimmed">No.</Text>
                    </Table.Th>
                    <Table.Th>
                      <Text size="sm" fw={500} c="dimmed">Name</Text>
                    </Table.Th>
                    <Table.Th>
                      <Text size="sm" fw={500} c="dimmed">ID</Text>
                    </Table.Th>
                    <Table.Th>
                      <Text size="sm" fw={500} c="dimmed">Nationality</Text>
                    </Table.Th>
                    <Table.Th>
                      <Text size="sm" fw={500} c="dimmed">Type</Text>
                    </Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  <Table.Tr>
                    <Table.Td>
                      <Text size="sm" c="dark">1</Text>
                    </Table.Td>
                    <Table.Td>
                      <Text size="sm" fw={500} c="#284361">
                        Kadek Arta
                      </Text>
                    </Table.Td>
                    <Table.Td>
                      <Text size="sm" c="dark">
                        1303223061
                      </Text>
                    </Table.Td>
                    <Table.Td>
                      <Text size="sm" c="dark">
                        Indonesian
                      </Text>
                    </Table.Td>
                    <Table.Td>
                      <Text size="sm" c="dark">Adult</Text>
                    </Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td>
                      <Text size="sm" c="dark">2</Text>
                    </Table.Td>
                    <Table.Td>
                      <Text size="sm" fw={500} c="#284361">
                        Rina Wati
                      </Text>
                    </Table.Td>
                    <Table.Td>
                      <Text size="sm" c="dark">
                        1303223061
                      </Text>
                    </Table.Td>
                    <Table.Td>
                      <Text size="sm" c="dark">
                        Indonesian
                      </Text>
                    </Table.Td>
                    <Table.Td>
                      <Text size="sm" c="dark">Adult</Text>
                    </Table.Td>
                  </Table.Tr>
                </Table.Tbody>
              </Table>
            </Box>
            <Group gap="xs" mt="lg">
              <ThemeIcon size={16} radius="xl" color="blue" variant="light">
                <IconInfoCircle size={12} />
              </ThemeIcon>
              <Text size="sm" c="dimmed">
                Please bring your ID or passport for check-in verification.
              </Text>
            </Group>
          </Card>

          {/* Additional Packages */}
          <Card withBorder radius="md" p="xl" mb="xl" bg="white">
            <Title order={2} size="xl" fw={600} c="#284361" mb="xl">
              Additional Packages Included
            </Title>
            <SimpleGrid cols={{ base: 1, md: 3 }} spacing="md">
              <Group align="flex-start" gap="md" p="md" bg="gray.0" style={{ borderRadius: '8px' }}>
                <ThemeIcon size={48} radius="xl" color="blue" variant="light" style={{ flexShrink: 0 }}>
                  <IconUmbrella size={24} />
                </ThemeIcon>
                <Box style={{ flex: 1 }}>
                  <Text fw={500} c="#284361">
                    VIP Beach Club Access
                  </Text>
                  <Group gap="xs" mt={4}>
                    <IconCheck size={16} color="#2dbe8d" />
                    <Text size="sm" c="#2dbe8d">Confirmed</Text>
                  </Group>
                </Box>
              </Group>
              <Group align="flex-start" gap="md" p="md" bg="gray.0" style={{ borderRadius: '8px' }}>
                <ThemeIcon size={48} radius="xl" color="orange" variant="light" style={{ flexShrink: 0 }}>
                  <IconToolsKitchen2 size={24} />
                </ThemeIcon>
                <Box style={{ flex: 1 }}>
                  <Text fw={500} c="#284361">
                    Beach Club Lunch Package
                  </Text>
                  <Group gap="xs" mt={4}>
                    <IconCheck size={16} color="#2dbe8d" />
                    <Text size="sm" c="#2dbe8d">Confirmed</Text>
                  </Group>
                </Box>
              </Group>
              <Group align="flex-start" gap="md" p="md" bg="gray.0" style={{ borderRadius: '8px' }}>
                <ThemeIcon size={48} radius="xl" color="teal" variant="light" style={{ flexShrink: 0 }}>
                  <IconWaveSawTool size={24} />
                </ThemeIcon>
                <Box style={{ flex: 1 }}>
                  <Text fw={500} c="#284361">
                    Pool Float Rental
                  </Text>
                  <Group gap="xs" mt={4}>
                    <IconCheck size={16} color="#2dbe8d" />
                    <Text size="sm" c="#2dbe8d">Confirmed</Text>
                  </Group>
                </Box>
              </Group>
            </SimpleGrid>
            <Text size="sm" c="dimmed" mt="md">
              Your add-ons will be prepared upon check-in at the beach club.
            </Text>
          </Card>

          {/* Boarding Information */}
          <Card withBorder radius="md" p="xl" mb="xl" bg="white">
            <Title order={2} size="xl" fw={600} c="#284361" mb="xl">
              Check-in Information
            </Title>
            <Stack gap="xl">
              <Group align="flex-start" gap="md">
                <IconMapPin size={20} color="#284361" style={{ marginTop: 2, flexShrink: 0 }} />
                <Box style={{ flex: 1 }}>
                  <Text fw={500} c="#284361" mb={4}>
                    Check-in Location
                  </Text>
                  <Text c="dark" mb={8}>
                    Caspla Beach Club, Seminyak, Bali
                  </Text>
                  <Text size="sm" c="dimmed">
                    Host desk near main entrance
                  </Text>
                  <Anchor size="sm" c="#284361" fw={500} mt={8}>
                    View on Google Maps
                  </Anchor>
                </Box>
              </Group>
              <Group align="flex-start" gap="md">
                <IconClock size={20} color="#284361" style={{ marginTop: 2, flexShrink: 0 }} />
                <Box style={{ flex: 1 }}>
                  <Text fw={500} c="#284361" mb={4}>
                    Check-in Time
                  </Text>
                  <Text c="dark">
                    10:40 AM (20 minutes before start time)
                  </Text>
                </Box>
              </Group>
              <Group align="flex-start" gap="md">
                <IconBriefcase size={20} color="#284361" style={{ marginTop: 2, flexShrink: 0 }} />
                <Box style={{ flex: 1 }}>
                  <Text fw={500} c="#284361" mb={4}>
                    Venue Policy
                  </Text>
                  <Stack gap={4}>
                    <Text c="dark">• Outside food and drinks not allowed</Text>
                    <Text c="dark">• No glassware by the pool</Text>
                  </Stack>
                </Box>
              </Group>
              <Group align="flex-start" gap="md">
                <IconPhone size={20} color="#284361" style={{ marginTop: 2, flexShrink: 0 }} />
                <Box style={{ flex: 1 }}>
                  <Text fw={500} c="#284361" mb={4}>
                    Host Contact
                  </Text>
                  <Text c="dark">
                    +62 812 3456 7890 (Caspla Beach Club)
                  </Text>
                </Box>
              </Group>
            </Stack>
          </Card>

          {/* Payment Details */}
          <Card withBorder radius="md" p="xl" bg="white">
            <Group gap="md" mb="xl">
              <Badge color="gray" variant="light">
                QRIS
              </Badge>
              <Group gap="xs">
                <IconCheck size={20} color="#2dbe8d" />
                <Text size="sm" fw={500} c="#2dbe8d">
                  Payment Successful
                </Text>
              </Group>
            </Group>
            <Title order={2} size="xl" fw={600} c="#284361" mb="xl">
              Payment Details
            </Title>
            <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
              <Box>
                <Text size="sm" c="dimmed" mb={4}>Payment ID</Text>
                <Text fw={600} c="#284361">QRIS-TRX-89172</Text>
              </Box>
              <Box>
                <Text size="sm" c="dimmed" mb={4}>Time</Text>
                <Text fw={600} c="#284361">
                  12 October 2025, 10:23 AM
                </Text>
              </Box>
              <Box>
                <Text size="sm" c="dimmed" mb={4}>Method</Text>
                <Text fw={600} c="#284361">QRIS</Text>
              </Box>
              <Box>
                <Text size="sm" c="dimmed" mb={4}>Amount</Text>
                <Text fw={600} c="#284361">IDR 740,000</Text>
              </Box>
              <Box>
                <Text size="sm" c="dimmed" mb={4}>Status</Text>
                <Text fw={600} c="#2dbe8d">Paid</Text>
              </Box>
            </SimpleGrid>
            <Text size="sm" c="dimmed" mt="xl">
              This transaction is verified and secured through our official
              payment gateway.
            </Text>
          </Card>
        </Container>
      </Box>
      
      <Footer />
    </Box>
  );
}