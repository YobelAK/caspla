"use client";

import React, { useEffect } from "react";
import { Box, Container, Title, Text } from "@mantine/core";
import "leaflet/dist/leaflet.css";

// Avoid SSR import issues by requiring react-leaflet on client
let RL: any = null;
if (typeof window !== "undefined") {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  RL = require("react-leaflet");
}

// Configure default marker icons to load correctly
let L: any = null;
if (typeof window !== "undefined") {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  L = require("leaflet");
}

export function LocationMap() {
  useEffect(() => {
    if (L) {
      const DefaultIcon = L.icon({
        iconUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        iconRetinaUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        shadowUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
      });
      if (L.Marker && L.Marker.prototype) {
        L.Marker.prototype.options.icon = DefaultIcon;
      }
    }
  }, []);

  const position: [number, number] = [-8.748, 115.219]; // Tanjung Benoa

  return (
    <Box bg="#f3f4f6" py="md">
      <Container size="xl" px={{ base: 16, sm: 24, lg: 32 }}>
        <Box
          bg="white"
          p={24}
          style={{ borderRadius: 16, boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}
        >
          <Title order={3} size="xl" style={{ fontWeight: 700, color: "#111827", marginBottom: 16 }}>
            Location
          </Title>
          <Text style={{ color: "#6b7280", marginBottom: 16 }}>
            Tanjung Benoa, Bali – popular watersport hub with calm waves and clear waters.
          </Text>
          <Box style={{ height: 360, borderRadius: 12, overflow: "hidden" }}>
            {RL ? (
              <RL.MapContainer center={position} zoom={13} style={{ height: "100%", width: "100%" }}>
                <RL.TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <RL.Marker position={position}>
                  <RL.Popup>Jet Ski Adventure Bali – Meeting Point</RL.Popup>
                </RL.Marker>
              </RL.MapContainer>
            ) : (
              <Box
                style={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#e5e7eb",
                  color: "#374151",
                }}
              >
                Map will load on client
              </Box>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}