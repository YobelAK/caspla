"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Box,
  Container,
  Grid,
  Group,
  Paper,
  Stack,
  Text,
  Title,
  Button,
} from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ProgressIndicator } from "@/components/beachclub/progress-indicator";

type SeatPoint = {
  id: string;
  xPercent: number;
  yPercent: number;
  reserved?: boolean;
};

const SEATS: SeatPoint[] = [
  { id: "RB-01", xPercent: 22, yPercent: 64 },
  { id: "RB-02", xPercent: 30, yPercent: 60 },
  { id: "RB-03", xPercent: 38, yPercent: 58, reserved: true },
  { id: "RB-04", xPercent: 46, yPercent: 62 },
  { id: "RB-05", xPercent: 54, yPercent: 65 },
  { id: "RB-06", xPercent: 62, yPercent: 61 },
  { id: "RB-07", xPercent: 70, yPercent: 58 },
  { id: "RB-08", xPercent: 78, yPercent: 60 },
];

export default function RockBarSeatPage() {
  const router = useRouter();
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const toggleSeat = (id: string, reserved?: boolean) => {
    if (reserved) return;
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <Box style={{ minHeight: "100vh", backgroundColor: "#f9fafb", display: "flex", flexDirection: "column" }}>
      <Header />
      <ProgressIndicator currentStep={2} />

      {/* Back */}
      <Container size="xl" style={{ paddingLeft: 16, paddingRight: 16, paddingTop: 16, paddingBottom: 16 }}>
        <Button
          component={Link}
          href="/beachclub/book/seat"
          variant="subtle"
          leftSection={<IconArrowLeft size={16} />}
          styles={{ root: { color: "#6b7280" }, label: { fontSize: 14 } }}
        >
          Kembali ke Seat Selection
        </Button>
      </Container>

      {/* Content */}
      <Container size="xl" style={{ paddingLeft: 16, paddingRight: 16, paddingBottom: 32, flex: 1 }}>
        <Grid gutter={24}>
          <Grid.Col span={{ base: 12, lg: 8 }}>
            <Stack gap="md">
              <Group justify="space-between" align="center">
                <Title order={3}>Rock Bar – Pilih Kursi</Title>
                <Text size="sm" c="#6b7280">
                  Terpilih: <Text component="span" fw={500} c="#284361">{selectedIds.length}</Text>
                </Text>
              </Group>

              {/* Seat map */}
              <Paper withBorder radius="xl" shadow="lg" p={0} bg="white" style={{ overflow: "hidden" }}>
                <Box style={{ position: "relative", width: "100%", height: 560 }}>
                  <img
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80"
                    alt="Rock Bar Background"
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />

                  {SEATS.map((s) => {
                    const selected = selectedIds.includes(s.id);
                    const bg = s.reserved ? "#e03131" : selected ? "#284361" : "#ffffff";
                    const color = s.reserved || selected ? "#ffffff" : "#333";
                    return (
                      <Box
                        key={s.id}
                        style={{
                          position: "absolute",
                          left: `${s.xPercent}%`,
                          top: `${s.yPercent}%`,
                          transform: "translate(-50%, -50%)",
                          width: 40,
                          height: 40,
                          borderRadius: "50%",
                          border: "4px solid #ffffff",
                          boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
                          background: bg,
                          color,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: 600,
                          cursor: s.reserved ? "not-allowed" : "pointer",
                          transition: "transform 120ms ease, background 120ms ease",
                        }}
                        onClick={() => toggleSeat(s.id, s.reserved)}
                        title={s.id}
                      >
                        <Text size="xs">{s.id.replace("RB-", "")}</Text>
                      </Box>
                    );
                  })}
                </Box>
              </Paper>

              <Group justify="flex-end" mt="md">
                <Button
                  onClick={() => router.push("/beachclub/book/seat")}
                  styles={{ root: { backgroundColor: "#284361" } }}
                >
                  Simpan Kursi & Kembali
                </Button>
              </Group>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, lg: 4 }}>
            <Paper withBorder radius="lg" p="lg">
              <Stack>
                <Title order={4}>Ringkasan Rock Bar</Title>
                <Text size="sm" c="dimmed">Kursi dipilih:</Text>
                <Stack gap={4}>
                  {selectedIds.length === 0 ? (
                    <Text size="sm" c="#6b7280">Belum ada kursi dipilih</Text>
                  ) : (
                    selectedIds.map((id) => (
                      <Text key={id} size="sm">{id}</Text>
                    ))
                  )}
                </Stack>
              </Stack>
            </Paper>
          </Grid.Col>
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
}