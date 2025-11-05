'use client';

import React, { useState } from 'react';
import { Menu, X, ChevronDown, Globe, DollarSign } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  AppShell, 
  Group, 
  Burger, 
  Button, 
  Avatar, 
  Text, 
  Anchor, 
  Collapse, 
  Stack, 
  Divider,
  Box,
  Container
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export function Header() {
  const [mobileMenuOpen, { toggle: toggleMobileMenu, close: closeMobileMenu }] = useDisclosure(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/speedboat', label: 'Speedboat' },
    { href: '/watersport', label: 'Watersport' },
    { href: '/tour', label: 'Tours' },
    { href: '/beachclub', label: 'Beach Club' },
    { href: '/promo', label: 'Promo' },
  ];

  return (
    <Box 
      component="header" 
      style={{ 
        backgroundColor: 'white', 
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', 
        position: 'sticky', 
        top: 0, 
        zIndex: 50 
      }}
    >
      <Container size="xl" px="md">
        <Group justify="space-between" h={64}>
          {/* Logo */}
          <Group>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <Group gap="sm">
                <Avatar 
                  size="md" 
                  color="primary" 
                  style={{ backgroundColor: '#284361' }}
                >
                  N
                </Avatar>
                <Text fw={700} size="lg" c="dark">Name</Text>
              </Group>
            </Link>
          </Group>

          {/* Desktop Navigation */}
          <Group gap="xl" visibleFrom="md">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{ 
                  textDecoration: 'none',
                  color: isActive(item.href) ? '#284361' : '#6c757d',
                  fontWeight: isActive(item.href) ? 500 : 400,
                  transition: 'color 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#284361';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = isActive(item.href) ? '#284361' : '#6c757d';
                }}
              >
                {item.label}
              </Link>
            ))}
          </Group>

          {/* Right Side Actions */}
          <Group gap="md" visibleFrom="md">
            <Button 
              variant="subtle" 
              color="gray" 
              leftSection={<Globe size={16} />}
              rightSection={<ChevronDown size={16} />}
              size="sm"
            >
              EN
            </Button>
            <Button 
              variant="subtle" 
              color="gray" 
              leftSection={<DollarSign size={16} />}
              rightSection={<ChevronDown size={16} />}
              size="sm"
            >
              IDR
            </Button>
            <Link href="/profile" style={{ textDecoration: 'none' }}>
              <Avatar 
                size={40} 
                radius="xl" 
                style={{ backgroundColor: '#284361', color: '#ffffff', fontWeight: 700 }}
              >
                NA
              </Avatar>
            </Link>
          </Group>

          {/* Mobile Menu Button */}
          <Burger 
            opened={mobileMenuOpen} 
            onClick={toggleMobileMenu} 
            hiddenFrom="md" 
            size="sm" 
          />
        </Group>

          {/* Mobile Menu */}
          <Collapse in={mobileMenuOpen}>
            <Box hiddenFrom="md" py="md">
              <Divider mb="md" />
              <Stack gap="md">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    style={{
                      textDecoration: 'none',
                      color: isActive(item.href) ? '#284361' : '#6c757d',
                      fontWeight: isActive(item.href) ? 500 : 400
                    }}
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </Link>
                ))}
                <Box style={{ paddingTop: 16, paddingBottom: 12, borderTop: '1px solid #e5e7eb' }}>
                  <Box style={{ display: 'flex', alignItems: 'center', paddingLeft: 20, paddingRight: 20 }}>
                    <Link href="/profile" style={{ textDecoration: 'none' }}>
                      <Avatar 
                        size={40} 
                        radius="xl" 
                        style={{ backgroundColor: '#284361', color: '#ffffff', fontWeight: 700 }}
                      >
                        NA
                      </Avatar>
                    </Link>
                  </Box>
                </Box>
              </Stack>
            </Box>
          </Collapse>
      </Container>
    </Box>
  );
}