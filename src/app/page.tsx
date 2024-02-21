import React from 'react';
import Card from "../../component/Card"
import image from "../../public/Shazil.jpg"

import Link from 'next/link'
import { Menu } from 'lucide-react';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"




const App = () => {
  return (
    <Menu />
  );
};



export default function Home() {

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
    <div className="grid grid-cols-2 gap-8">
    <Link href="/Charts">
      <div className="bg-blue-700 border border-blue-800 text-white rounded-lg shadow-lg">
        <div className="text-center py-4">
          <p className="font-bold">Crypto</p>
        </div>
        <div className="flex justify-center">
          <img src="/crypto.jpg" alt="Crypto" className="h-64 w-64 object-cover rounded-t-lg" />
        </div>
      </div>
      </Link>
      <Link href="/Charts">
      <div className="bg-blue-700 border border-blue-800 text-white rounded-lg shadow-lg">
        <div className="text-center py-4">
          <p className="font-bold">Stocks</p>
        </div>
        <div className="flex justify-center">
          <img src="/stock.jpg" alt="Stocks" className="h-64 w-64 object-cover rounded-t-lg" />
        </div>
      </div>
      </Link>

    </div>
  </div>
  )
}
  
