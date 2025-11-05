import React, { useState, useRef, useEffect } from 'react';
import { Paper, Box, ActionIcon, Stack, Text } from '@mantine/core';
import { IconZoomIn, IconZoomOut, IconMaximize } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';

interface ImageMapProps {
  activeTab: string;
  onSelectionChange?: (count: number) => void;
}

interface Hotspot {
  id: string;
  label: string;
  x: number;
  y: number;
  status: 'available' | 'reserved';
}

export function BeachClubSeatImageMap({ activeTab, onSelectionChange }: ImageMapProps) {
  const router = useRouter();
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const containerRef = useRef<HTMLDivElement>(null);

  const hotspots: Hotspot[] = [
    { id: '1', label: 'Rock Bar', x: 30, y: 35, status: 'available' },
    { id: '2', label: 'Main Pool', x: 65, y: 55, status: 'available' },
    { id: '3', label: '', x: 45, y: 25, status: 'reserved' },
    { id: '4', label: '', x: 15, y: 50, status: 'reserved' },
    { id: '5', label: '', x: 75, y: 30, status: 'available' },
  ];

  useEffect(() => {
    onSelectionChange?.(selectedIds.length);
  }, [selectedIds, onSelectionChange]);

  const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.2, 3));
  const handleZoomOut = () => setScale((prev) => Math.max(prev - 0.2, 0.5));
  const handleReset = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPosition({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
    }
  };
  const handleMouseUp = () => setIsDragging(false);

  const toggleSelect = (id: string, status: 'available' | 'reserved') => {
    if (status !== 'available') return; // cannot select reserved
    setSelectedIds((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  };

  return (
    <Box style={{ position: 'relative' }}>
      <Paper withBorder radius="xl" shadow="lg" p={0} bg="white" style={{ overflow: 'hidden' }}>
        <Box
          ref={containerRef}
          style={{ position: 'relative', width: '100%', height: 600, overflow: 'hidden', cursor: 'move' }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <Box
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
              transformOrigin: 'center center',
              transition: isDragging ? 'none' : 'transform 0.2s ease-out',
              width: '100%',
              height: '100%',
              position: 'relative',
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1600&q=80"
              alt="Beach Club Map"
              style={{ width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none', display: 'block' }}
              draggable={false}
            />
            {hotspots.map((hotspot) => (
              <Box
                key={hotspot.id}
                style={{ position: 'absolute', left: `${hotspot.x}%`, top: `${hotspot.y}%`, transform: 'translate(-50%, -50%)' }}
              >
                {hotspot.label && (
                  <Box
                    style={{ position: 'absolute', top: -48, left: '50%', transform: 'translateX(-50%)' }}
                  >
                    <Paper shadow="md" radius="md" p="xs" bg="white" style={{ whiteSpace: 'nowrap', position: 'relative' }}>
                      <Text size="sm" fw={500} c="#284361">{hotspot.label}</Text>
                      <Box style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '100%', width: 2, height: 24, background: '#ffffff' }} />
                    </Paper>
                  </Box>
                )}
                <Box
                  role="button"
                  onClick={() => {
                    if (hotspot.label === 'Rock Bar') {
                      router.push('/beachclub/book/seat/rock-bar');
                      return;
                    }
                    toggleSelect(hotspot.id, hotspot.status);
                  }}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    border: '4px solid #ffffff',
                    boxShadow: '0 6px 12px rgba(0,0,0,0.2)',
                    transition: 'transform 120ms ease, background 120ms ease',
                    cursor: hotspot.status === 'reserved' ? 'not-allowed' : 'pointer',
                    background:
                      hotspot.status === 'reserved'
                        ? '#e03131'
                        : selectedIds.includes(hotspot.id)
                        ? '#284361'
                        : '#ffffff',
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Paper>

      <Stack gap={8} style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)' }}>
        <ActionIcon variant="default" aria-label="Zoom in" onClick={handleZoomIn} style={{ width: 40, height: 40 }}>
          <IconZoomIn size={20} color="#284361" />
        </ActionIcon>
        <ActionIcon variant="default" aria-label="Zoom out" onClick={handleZoomOut} style={{ width: 40, height: 40 }}>
          <IconZoomOut size={20} color="#284361" />
        </ActionIcon>
        <ActionIcon variant="default" aria-label="Reset" onClick={handleReset} style={{ width: 40, height: 40 }}>
          <IconMaximize size={20} color="#284361" />
        </ActionIcon>
      </Stack>
    </Box>
  );
}