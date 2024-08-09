"use client";
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const StockChart = ({ stock }) => {

  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold mb-2">Last week stock performance for <i>{stock.name}</i></h2>
      <div style={{ height: "400px" }}>
        <ResponsiveContainer>
          <LineChart
            data={stock.historicalData}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tickFormatter={(value) => new Date(value).toLocaleDateString()}
            />
            <YAxis
              domain={['auto', 'auto']}
              tickCount={10}
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip formatter={(value) => `$${value}`} />
            <Legend />
            <Line
              type="linear"
              dataKey="price"
              stroke="#8884d8"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StockChart;
