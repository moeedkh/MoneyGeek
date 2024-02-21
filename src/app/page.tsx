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
      


<div>
<nav className = "Flex " >

      <h1 className ="bg-blue-900 border border-blue-900 col-span-4 row-span-6">
            <div className="menu flex  flex-col flex-wrap  justify-between   my-10  py-10 gap-20">
            
              <p className=" flex justify-around">
              <img src="/crypto.jpg " alt="Photo" height = {300} width={300}    />
              </p>

              <p className="flex justify-around">
              <img src="/stock.jpg " alt="Photo" height = {300} width={300} />
              </p>
              
            </div>
      </h1>

      <aside className ="bg-white  col-span-8 row-span-6">
        <a className="font-bold flex justify-center"> Top Picks </a>
      </aside>


      </nav>

      </div>
  )
}
  