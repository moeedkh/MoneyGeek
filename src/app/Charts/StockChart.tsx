
"use client"
import React from 'react';
import { Line } from 'react-chartjs-2';
import { ChartOptions, CategoryScale } from 'chart.js';

interface StockData {
  date: string;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
}

interface StockChartProps {
  stockData: StockData[];
}

const StockChart: React.FC<StockChartProps> = ({ stockData }) => {
  // Extract labels (dates) and data points for chart
  const labels = stockData.map(stock => stock.date);
  const closingPrices = stockData.map(stock => parseFloat(stock.close));

  // Chart data
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Closing Price',
        data: closingPrices,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  // Chart options
  const options: ChartOptions<'line'> = {
    scales: {
      x: {
        type: 'category',
        labels: labels
      },
      y: {
        type: 'linear'
      }
    }
  };

  return (
    <div>
      <h2>Stock Closing Prices</h2>
      <Line data={data} options={options} />
    </div>
  );
};

// Sample stock data
const sampleStockData: StockData[] = [
  { date: '2024-02-01', open: '120', high: '125', low: '118', close: '123', volume: '100000' },
  { date: '2024-02-02', open: '123', high: '126', low: '120', close: '125', volume: '110000' },
  { date: '2024-02-03', open: '125', high: '128', low: '122', close: '127', volume: '120000' },
  { date: '2024-02-04', open: '127', high: '130', low: '124', close: '129', volume: '130000' },
  { date: '2024-02-05', open: '129', high: '132', low: '126', close: '131', volume: '140000' }
];

// Test component to display the StockChart with sample data
const TestComponent: React.FC = () => {
  return (
    <div>
      <h1>Test Stock Chart</h1>
      <StockChart stockData={sampleStockData} />
    </div>
  );
};

export default TestComponent;
