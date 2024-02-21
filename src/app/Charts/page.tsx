"use client"
import React, { useState } from 'react';
import FwdData from './stocks';

export default function Display() {
  const [symbol, setSymbol] = useState<string>("BTCUSDT");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSymbolChange = (newSymbol: string) => {
    setSymbol(newSymbol);
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      // Fetch data for the new symbol
      // You can add any additional validation or checks here if needed
      // For simplicity, let's just call handleSymbolChange to trigger a re-fetch
      handleSymbolChange(symbol);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (  
    <div>
      <h1>Display Stock Data</h1>
      <div className="flex items-center">
        <input 
          type="text" 
          value={symbol} 
          onChange={(e) => setSymbol(e.target.value.toUpperCase())} 
          placeholder="Enter Symbol" 
          className="border p-2 rounded-md mr-2"
        />
        <button onClick={fetchData} disabled={isLoading} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {isLoading ? 'Fetching...' : 'Fetch Data'}
        </button>
      </div>
      <FwdData symbol={symbol} onSymbolChange={handleSymbolChange} />
    </div>
  );
}

