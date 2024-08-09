"use client";
import React from 'react';

const SectorFilter = ({ sectors, setSelectedSector,setSelectedStock }) => {
  const handleSectorChange = (e) => {
    setSelectedSector(e.target.value);
    setSelectedStock(null);
  }
  return (
    <div className="flex items-center gap-4">
      <label htmlFor="sector" className="text-sm flex-shrink-0">Filter by Sector:</label>
      <select
        id="sector"
        className="p-1 text-sm border border-gray-300 rounded flex-grow"
        onChange={(e) => handleSectorChange(e)}
      >
        <option value="All">All Sectors</option>
        {sectors.map((sector) => (
          <option key={sector} value={sector}>{sector}</option>
        ))}
      </select>
    </div>
  );
};

export default SectorFilter;
