import React from 'react';
import { Select, Button } from '@mantine/core';
import { MapPin, Filter, Calendar, Search } from 'lucide-react';
export function FilterBar() {
  return <div className="bg-white shadow-lg rounded-lg p-6 -mt-12 relative z-10 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-[#374151] mb-2">
            Location
          </label>
          <Select placeholder="Select Location" leftSection={<MapPin className="w-4 h-4" />} data={['Canggu', 'Seminyak', 'Sanur', 'Nusa Penida', 'Uluwatu']} className="w-full" />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#374151] mb-2">
            Type
          </label>
          <Select placeholder="All Types" leftSection={<Filter className="w-4 h-4" />} data={['Day Pass', 'Sunset Lounge', 'VIP Table', 'Party Event']} className="w-full" />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#374151] mb-2">
            Date
          </label>
          <input type="date" placeholder="mm/dd/yyyy" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#284361]" />
        </div>
        <div className="flex items-end">
          <Button className="w-full bg-[#284361] hover:bg-[#1f3451]" leftSection={<Search className="w-4 h-4" />}>
            Search
          </Button>
        </div>
      </div>
    </div>;
}





