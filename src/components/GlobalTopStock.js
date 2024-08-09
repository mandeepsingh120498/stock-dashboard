"use client";
import React from 'react';
import { getRandomColor } from '@/utils/helperFunctions';

const GlobalTopStock = ({ stocks }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-auto max-h-screen md:max-h-96">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">Symbol</th>
            <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">Name</th>
            <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">Current Price</th>
            <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">Daily Change</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {stocks.map((stock) => (
            <tr key={stock.id}>
              <td className={`px-4 py-2 whitespace-nowrap ${getRandomColor()}`}>{stock.symbol}</td>
              <td className="px-4 py-2 whitespace-nowrap">{stock.name}</td>
              <td className="px-4 py-2 whitespace-nowrap">{stock.currentPrice}</td>
              <td className={`px-4 py-2 whitespace-nowrap ${stock.change > 0 ? 'text-green-500' : 'text-red-500'}`}>{stock.change}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GlobalTopStock;
