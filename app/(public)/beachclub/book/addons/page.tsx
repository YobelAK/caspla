'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container, Box, Group, Text, SimpleGrid, Stack, Title, Grid, GridCol } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ProgressIndicator } from '@/components/beachclub/progress-indicator';
import { FilterButtons } from '@/components/beachclub/filter-buttons';
import { AddOnCard } from '@/components/beachclub/addon-card';
import { BookingSummary } from '@/components/beachclub/booking-summary';
import { AddOnDetailsModal } from '@/components/beachclub/addon-details-modal';
import { useRouter } from 'next/navigation';

interface AddOn {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: number;
  originalPrice?: number;
  discount?: string;
  image: string;
  badge?: 'Popular' | 'Limited Offer';
  category: string;
  location?: string;
  availability?: string;
  about?: string;
  included?: string[];
}

export default function AddOnsPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [selectedAddOnForDetails, setSelectedAddOnForDetails] = useState<AddOn | null>(null);
  const router = useRouter();

  const addOns: AddOn[] = [
    {
      id: 'daybed-upgrade',
      title: 'Daybed Upgrade',
      description: 'Upgrade to premium daybed by the main pool',
      duration: 'Full day',
      price: 200000,
      originalPrice: 300000,
      discount: '33% OFF',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
      badge: 'Popular' as const,
      category: 'beach-club',
      location: 'Seminyak',
      availability: 'Daily',
      about: 'Enjoy a premium daybed with better views and comfort, perfect for relaxing by the pool.',
      included: ['Premium daybed', 'Towel service', 'Welcome drink']
    },
    {
      id: 'cabana-upgrade',
      title: 'Cabana Upgrade',
      description: 'Private cabana near the main pool with dedicated service',
      duration: 'Full day',
      price: 350000,
      originalPrice: 500000,
      discount: '30% OFF',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
      badge: 'Limited Offer' as const,
      category: 'beach-club',
      location: 'Seminyak',
      availability: 'Daily',
      about: 'Upgrade to a private cabana for premium comfort, shade, and personalized service throughout the day.',
      included: ['Private cabana', 'Personal host', 'Welcome drink', 'Towel service']
    },
    {
      id: 'vip-beach-club',
      title: 'VIP Beach Club Access',
      description: "Relax at Bali's premium beachfront club with drinks included",
      duration: 'Full day',
      price: 200000,
      originalPrice: 300000,
      discount: '33% OFF',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
      badge: 'Popular' as const,
      category: 'beach-club',
      location: 'Seminyak',
      availability: 'Daily',
      about: 'Enjoy exclusive access to Bali\'s most luxurious beach club with premium amenities and stunning ocean views.',
      included: ['Day bed access', 'Welcome drinks', 'Pool access', 'WiFi', 'Towel service']
    },
    {
      id: 'beachclub-lunch',
      title: 'Beach Club Lunch Package',
      description: 'Signature dishes served at Caspla Beach Club',
      duration: '1.5 hours',
      price: 85000,
      originalPrice: 120000,
      discount: '29% OFF',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80',
      category: 'beach-club',
      location: 'Seminyak',
      availability: 'Daily',
      about: 'Savor signature beach club dishes prepared with fresh local ingredients, served with ocean views.',
      included: ['Main course', 'Welcome drink', 'Dessert', 'Towel service']
    },
    {
      id: 'professional-photography',
      title: 'Professional Photography',
      description: 'Capture your memories at the beach club venue',
      duration: '2 hours',
      price: 300000,
      originalPrice: 450000,
      discount: '33% OFF',
      image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&q=80',
      badge: 'Limited Offer' as const,
      category: 'beach-club',
      location: 'Seminyak',
      availability: 'Daily',
      about: 'Professional photography session to capture your best moments around the beach club.',
      included: ['Professional photographer', '50+ edited photos', 'Online gallery', 'Print-ready files']
    },
    {
      id: 'pool-float-rental',
      title: 'Pool Float Rental',
      description: 'Colorful floats for Instagrammable poolside moments',
      duration: 'Full day',
      price: 120000,
      originalPrice: 200000,
      discount: '40% OFF',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
      category: 'beach-club',
      location: 'Seminyak',
      availability: 'Daily',
      about: 'Add fun to your pool day with stylish floats perfect for photos and relaxation.',
      included: ['1 premium pool float', 'Inflation service', 'Towel service']
    }
  ];

  const filteredAddOns = activeFilter === 'all' 
    ? addOns 
    : addOns.filter(addon => addon.category === activeFilter);

  const handleToggleAddOn = (id: string) => {
    setSelectedAddOns(prev => 
      prev.includes(id) 
        ? prev.filter(addOnId => addOnId !== id) 
        : [...prev, id]
    );
  };

  const handleSeeDetails = (id: string) => {
    const addOn = addOns.find(addon => addon.id === id);
    if (addOn) {
      setSelectedAddOnForDetails(addOn);
    }
  };

  const handleCloseModal = () => {
    setSelectedAddOnForDetails(null);
  };

  const handleAddToTripFromModal = () => {
    if (selectedAddOnForDetails) {
      handleToggleAddOn(selectedAddOnForDetails.id);
      setSelectedAddOnForDetails(null);
    }
  };

  const selectedAddOnsData = addOns
    .filter(addon => selectedAddOns.includes(addon.id))
    .map(addon => ({
      id: addon.id,
      title: addon.title,
      price: addon.price,
      originalPrice: addon.originalPrice
    }));
    

  return (
    <Box style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      <Header />
      
      {/* Back Button */}
      

      /* <ProgressIndicator currentStep={3} />
      {/* <Container size="xl" pt="xl">
        <Link href="/tour/book/" style={{ textDecoration: 'none' }}>
          <Group gap="xs" style={{ cursor: 'pointer', color: '#284361', transition: 'color 0.2s ease' }}>
            <IconArrowLeft size={20} />
            <Text fw={500} style={{ ':hover': { color: '#1f3450' } }}>Back to Product Detail</Text>
          </Group>
        </Link>
      </Container> */} */
      <Container size="xl" py="xl">
        <Grid gutter="xl">
          <GridCol span={{ base: 12, lg: 8 }}>
            <Stack gap="xl">
              <Stack gap="md">
                <Title order={1} size="xl" fw={700} c="dark">Choose Your Add-Ons</Title>
                <Text c="dimmed" mb="md">Enhance your trip with these amazing experiences</Text>
                <FilterButtons 
                  activeFilter={activeFilter} 
                  onFilterChange={setActiveFilter} 
                />
              </Stack>
              <SimpleGrid 
                cols={{ base: 1, md: 2 }} 
                spacing="xl"
              >
                {filteredAddOns.map(addon => (
                  <AddOnCard 
                    key={addon.id} 
                    {...addon} 
                    isAdded={selectedAddOns.includes(addon.id)} 
                    onToggle={handleToggleAddOn}
                    onSeeDetails={handleSeeDetails}
                  />
                ))}
              </SimpleGrid>
            </Stack>
          </GridCol>
          <GridCol span={{ base: 12, lg: 4 }}>
              <BookingSummary 
                trip="Day Pass – Caspla Beach Club" 
                departureDate="12 Oct 2025" 
                passengers="2 Guests" 
                passengerPrice={200000} 
                portFee={10000} 
                addOns={selectedAddOnsData} 
                onContinue={() => router.push('/beachclub/book/payment')}
                buttonText="Continue to Payment"
              />
          </GridCol>
        </Grid>
      </Container>

      {/* Add-On Details Modal */}
      {selectedAddOnForDetails && (
        <AddOnDetailsModal
          opened={!!selectedAddOnForDetails}
          addOn={selectedAddOnForDetails}
          isAdded={selectedAddOns.includes(selectedAddOnForDetails.id)}
          onBack={handleCloseModal}
          onClose={handleCloseModal}
          onAddToTrip={handleAddToTripFromModal}
        />
      )}

      <Footer />
    </Box>
  );
}