"use client";
import { Button } from "./ui/button";
import { useSidebar } from "@/context/SidebarContext";
import notify from "../../public/notification.png";
import wallet from "../../public/wallet2.png";
import Image from "next/image";
import { ChevronDown, Search } from "lucide-react";
import solana from '../../public/solana.png'

const Topbar = () => {
  const { isExpanded } = useSidebar();

  return (
    <header
      className={` font-space-grotesk
      flex items-center flex-grow justify-between px-4 py-2 bg-[#181818] border-b border-gray-800
      transition-all duration-300
      ${isExpanded ? "" : ""}
    `}
    >
      
      <span>Terminal</span>
      <div className="h-[60%] w-[2px] bg-white/10 mx-2"></div>
      <div className="flex items-center space-x-4">
        <Button
          className="border border-white/10 bg-gradient-to-r from-[#2a2a2a] via-[#323232] to-[#272727] hover:from-[#353535] hover:via-[#3a3a3a] hover:to-[#303030] text-white transition-all duration-200 rounded-xl shadow-lg"
          variant="ghost"
        >
          Trading Desk
        </Button>
        <Button
          className="text-gray-400 hover:text-white hover:bg-[#2a2a2a] transition-colors duration-200"
          variant="ghost"
        >
          New Pairs
        </Button>
        <Button
          className="text-gray-400 hover:text-white hover:bg-[#2a2a2a] transition-colors duration-200"
          variant="ghost"
        >
          Trending
        </Button>
        <Button
          className="text-gray-400 hover:text-white hover:bg-[#2a2a2a] transition-colors duration-200"
          variant="ghost"
        >
          Positions
        </Button>
        <Button
          className="text-gray-400 hover:text-white hover:bg-[#2a2a2a] transition-colors duration-200"
          variant="ghost"
        >
          Memescope
        </Button>
      </div>
      <div className="relative max-w-sm w-full">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
        <input
          type="text"
          placeholder="Search by token or LP contract"
          className="px-10 py-3 bg-black text-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 w-full"
        />
      </div>
      <button className="flex items-center space-x-2 bg-gray-900 text-white px-2 py-1 rounded-md border-[.25m] border-white">
      
        <Image src={solana} alt="solana"/>
        <span className="text-gray-500">  SOL</span>
      <span className="font-bold">137.14439</span>
      <ChevronDown className="text-gray-700"/>
    </button>
      <div className="flex space-x-4">
        <div>
          <Image src={wallet} alt="" />
        </div>
        <div>
          <Image src={notify} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Topbar;
