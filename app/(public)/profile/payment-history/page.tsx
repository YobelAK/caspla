"use client";
import React, { useState } from 'react';
import { Box, Text, Group, Drawer, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconMenu2 } from '@tabler/icons-react';
import { Header } from '@/components/profile/header';
import { Sidebar } from '@/components/profile/Sidebar';
import { DateFilter } from '@/components/profile/DateFilter';
import { TransactionTable } from '@/components/profile/TransactionTable';

export default function Page() {
  const [sidebarOpened, { open, close }] = useDisclosure(false);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
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
                  Payment History
                </Text>
                <Text style={{ color: '#6b7280' }}>
                  Track all your previous transactions.
                </Text>
              </Box>
              <DateFilter
                fromDate={fromDate}
                toDate={toDate}
                onFromDateChange={setFromDate}
                onToDateChange={setToDate}
              />
            </Group>

            <TransactionTable fromDate={fromDate} toDate={toDate} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}