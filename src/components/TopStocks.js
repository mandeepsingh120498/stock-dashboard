"use client";
import React from 'react';
import { getRandomColor } from '@/utils/helperFunctions';

const TopStocks = ({ stocks, selectedStock, setSelectedStock }) => {
  const handleStockClick = (stock) => {
    setSelectedStock(stock)
  }
  const handleAnalysisClick = (stock, e) => {
    e.stopPropagation();
    setSelectedStock(stock)
  }
  return (
    <div className="bg-white shadow-md rounded-lg overflow-auto max-h-screen md:max-h-96">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">Symbol</th>
            <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">Name</th>
            <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">Current Price</th>
            <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">Daily Change</th>
            <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">Analysis</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {stocks.map((stock) => (
            <tr
              key={stock.id}
              className={`hover:bg-gray-100 cursor-pointer ${selectedStock?.id === stock.id ? 'bg-blue-100 border-blue-500' : 'border-transparent'}`}
              onClick={() => handleStockClick(stock)}
            >
              <td className={`px-4 py-2 whitespace-nowrap ${getRandomColor()}`}>{stock.symbol}</td>
              <td className="px-4 py-2 whitespace-nowrap">{stock.name}</td>
              <td className="px-4 py-2 whitespace-nowrap">{stock.currentPrice}</td>
              <td className={`px-4 py-2 whitespace-nowrap ${stock.change > 0 ? 'text-green-500' : 'text-red-500'}`}>{stock.change}%</td>
              <td className="px-4 py-2 whitespace-nowrap text-center">
                <i className={`fas fa-chart-line ${selectedStock?.id === stock.id ? 'text-blue-600':'text-black-500'} cursor-pointer hover:text-blue-700`} onClick={(e) => handleAnalysisClick(stock, e)}></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopStocks;
