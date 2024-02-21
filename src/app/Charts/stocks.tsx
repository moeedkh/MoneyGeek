import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { CategoryScale, Chart } from 'chart.js';
Chart.register(CategoryScale);

interface Props {
  symbol: string;
  onSymbolChange: (newSymbol: string) => void;
}

interface StockData {
  'Meta Data': {
    '1. Information': string;
    '2. Symbol': string;
    '3. Last Refreshed': string;
    '4. Output Size': string;
    '5. Time Zone': string;
  };
  'Time Series (Daily)': {
    [date: string]: {
      '1. open': string;
      '2. high': string;
      '3. low': string;
      '4. close': string;
      '5. volume': string;
    };
  };
}

async function getData(symbol: string) {
  const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&outputsize=compact&apikey=6GGYG3DU8XAEGHIC&datatype=json`);
  const data: StockData = await response.json();
  return data;
}

const FwdData: React.FC<Props> = ({ symbol, onSymbolChange }) => {
  const [stockData, setStockData] = useState<StockData | null>(null);

  useEffect(() => {
    async function fetchStockData() {
      try { 
        const data = await getData(symbol);
        setStockData(data);
      } catch (error) {
        console.error("Error fetching stock data:", error);
      }
    }
    fetchStockData();
  }, [symbol]);

  if (!stockData) {
    return <div>Loading...</div>;
  }

  const timeSeries = stockData['Time Series (Daily)'];
  
  if (!timeSeries) {
    return <div>No stock data available.</div>;
  }

  const sortedDates = Object.keys(timeSeries).sort(); // Sort dates in ascending order

  const chartData = sortedDates.map(date => ({
    date: new Date(date), // Convert date string to Date object
    closingPrice: parseFloat(timeSeries[date]['4. close'])
  }));

  return (
    <div className="flex flex-col items-center justify-center">
      <h2>{stockData['Meta Data']['2. Symbol']} Stock Closing Prices</h2>
      <LineChart width={600} height={300} data={chartData}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="date" type="category" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="closingPrice" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default FwdData;
