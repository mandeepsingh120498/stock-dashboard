"use client";
import React, { useState } from 'react';
import TopStocks from '../components/TopStocks';
import StockChart from '../components/StockChart';
import SectorFilter from '../components/SectorFilter';
import GlobalTopStock from '../components/GlobalTopStock';
import Header from '../components/Header'; 
import { allStocks } from '../data/stocks';
import '@fortawesome/fontawesome-free/css/all.min.css';

const sectors = [...new Set((allStocks || []).map(stock => stock.sector))];

const Home = () => {
  const [selectedSector, setSelectedSector] = useState('All');
  const [selectedStock, setSelectedStock] = useState(null);

  // Filter stocks by sector
  const filteredStocks = (allStocks || []).filter(stock => selectedSector === 'All' || stock.sector === selectedSector);

  // Get top 5 stocks for the selected sector
  const topStocksForSelectedSector = [...filteredStocks].sort((a, b) => b.currentPrice - a.currentPrice).slice(0, 5);

  // Get top 5 stocks globally (ignoring sector filter)
  const globalTopStocks = [...allStocks].sort((a, b) => b.currentPrice - a.currentPrice).slice(0, 5);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto p-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-4">
              <h2 className="text-xl font-semibold mb-2 sm:mb-0 sm:flex-1">Top 5 Stocks</h2>
              <div className="sm:flex-1">
                <SectorFilter sectors={sectors} setSelectedSector={setSelectedSector} setSelectedStock={setSelectedStock}/>
              </div>
            </div>
              <TopStocks stocks={topStocksForSelectedSector} selectedStock={selectedStock} setSelectedStock={setSelectedStock} />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-4">Global Top 5 Stocks</h2>
              <GlobalTopStock stocks={globalTopStocks} />
            </div>
          </div>
          <div className="mt-8">
            {selectedStock ? (
              <StockChart stock={selectedStock} />
            ) : (
              <p className="text-gray-500">Select a stock to view its last week performance chart.</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
