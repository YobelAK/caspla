import React from 'react';
import { Paper, Title, Table, Select, TextInput, Checkbox, Text, ScrollArea } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';

export function PassengerForm() {
  const passengers = [
    {
      id: 1,
      label: 'Adult 1'
    },
    {
      id: 2,
      label: 'Adult 2'
    }
  ];

  return (
    <Paper shadow="sm" p="xl" radius="lg" bg="white">
      <Title order={2} size="lg" fw={600} c="#284361" mb="xl">
        Passenger Information
      </Title>
      <ScrollArea>
        <Table>
          <Table.Thead>
            <Table.Tr style={{ borderBottom: '1px solid #e5e7eb' }}>
              <Table.Th style={{ padding: '12px 16px', fontSize: '14px', fontWeight: 500, color: '#374151' }}>
                Passenger
              </Table.Th>
              <Table.Th style={{ padding: '12px 16px', fontSize: '14px', fontWeight: 500, color: '#374151' }}>
                Title
              </Table.Th>
              <Table.Th style={{ padding: '12px 16px', fontSize: '14px', fontWeight: 500, color: '#374151' }}>
                Full Name
              </Table.Th>
              <Table.Th style={{ padding: '12px 16px', fontSize: '14px', fontWeight: 500, color: '#374151' }}>
                Nationality
              </Table.Th>
              <Table.Th style={{ padding: '12px 16px', fontSize: '14px', fontWeight: 500, color: '#374151' }}>
                Identity Type
              </Table.Th>
              <Table.Th style={{ padding: '12px 16px', fontSize: '14px', fontWeight: 500, color: '#374151' }}>
                ID Number
              </Table.Th>
              <Table.Th style={{ padding: '12px 16px', fontSize: '14px', fontWeight: 500, color: '#374151' }}>
                Age Category
              </Table.Th>
              <Table.Th style={{ padding: '12px 16px' }}></Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {passengers.map((passenger, index) => (
              <Table.Tr key={passenger.id} style={{ borderBottom: '1px solid #f3f4f6' }}>
                <Table.Td style={{ padding: '16px' }}>
                  <Text size="sm" fw={500} c="#1a1a1a">
                    {passenger.label}
                  </Text>
                </Table.Td>
                <Table.Td style={{ padding: '16px' }}>
                  <Select
                    data={['Mr', 'Mrs', 'Ms']}
                    defaultValue="Mr"
                    size="sm"
                    w={80}
                    rightSection={<IconChevronDown size={12} />}
                    styles={{
                      input: {
                        fontSize: '14px',
                        color: '#1a1a1a',
                        backgroundColor: 'white',
                        borderColor: '#d1d5db',
                        '&:focus': {
                          borderColor: '#284361',
                          boxShadow: '0 0 0 2px rgba(40, 67, 97, 0.2)'
                        }
                      }
                    }}
                  />
                </Table.Td>
                <Table.Td style={{ padding: '16px' }}>
                  <TextInput
                    placeholder="Full name"
                    size="sm"
                    styles={{
                      input: {
                        fontSize: '14px',
                        color: '#1a1a1a',
                        backgroundColor: 'white',
                        borderColor: '#d1d5db',
                        '&:focus': {
                          borderColor: '#284361',
                          boxShadow: '0 0 0 2px rgba(40, 67, 97, 0.2)'
                        }
                      }
                    }}
                  />
                </Table.Td>
                <Table.Td style={{ padding: '16px' }}>
                  <Select
                    data={['Indonesia', 'Malaysia', 'Singapore']}
                    defaultValue="Indonesia"
                    size="sm"
                    w={128}
                    rightSection={<IconChevronDown size={12} />}
                    styles={{
                      input: {
                        fontSize: '14px',
                        color: '#1a1a1a',
                        backgroundColor: 'white',
                        borderColor: '#d1d5db',
                        '&:focus': {
                          borderColor: '#284361',
                          boxShadow: '0 0 0 2px rgba(40, 67, 97, 0.2)'
                        }
                      }
                    }}
                  />
                </Table.Td>
                <Table.Td style={{ padding: '16px' }}>
                  <Select
                    data={['KTP', 'Passport', 'SIM']}
                    defaultValue="KTP"
                    size="sm"
                    w={96}
                    rightSection={<IconChevronDown size={12} />}
                    styles={{
                      input: {
                        fontSize: '14px',
                        color: '#1a1a1a',
                        backgroundColor: 'white',
                        borderColor: '#d1d5db',
                        '&:focus': {
                          borderColor: '#284361',
                          boxShadow: '0 0 0 2px rgba(40, 67, 97, 0.2)'
                        }
                      }
                    }}
                  />
                </Table.Td>
                <Table.Td style={{ padding: '16px' }}>
                  <TextInput
                    placeholder="ID number"
                    size="sm"
                    styles={{
                      input: {
                        fontSize: '14px',
                        color: '#1a1a1a',
                        backgroundColor: 'white',
                        borderColor: '#d1d5db',
                        '&:focus': {
                          borderColor: '#284361',
                          boxShadow: '0 0 0 2px rgba(40, 67, 97, 0.2)'
                        }
                      }
                    }}
                  />
                </Table.Td>
                <Table.Td style={{ padding: '16px' }}>
                  <Select
                    data={['Adult', 'Child', 'Infant']}
                    defaultValue="Adult"
                    size="sm"
                    w={96}
                    rightSection={<IconChevronDown size={12} />}
                    styles={{
                      input: {
                        fontSize: '14px',
                        color: '#1a1a1a',
                        backgroundColor: 'white',
                        borderColor: '#d1d5db',
                        '&:focus': {
                          borderColor: '#284361',
                          boxShadow: '0 0 0 2px rgba(40, 67, 97, 0.2)'
                        }
                      }
                    }}
                  />
                </Table.Td>
                <Table.Td style={{ padding: '16px' }}>
                  {index === 0 && (
                    <Checkbox
                      label="Same as main contact"
                      color="#0075ff"
                      size="sm"
                      styles={{
                        label: { 
                          fontSize: '12px', 
                          color: '#6b7280',
                          whiteSpace: 'nowrap'
                        }
                      }}
                    />
                  )}
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </ScrollArea>
      <Text size="xs" c="#6b7280" mt="md">
        Passenger names must match ID or passport
      </Text>
    </Paper>
  );
}