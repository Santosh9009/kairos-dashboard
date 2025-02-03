"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import wallet from "../../public/wallet.png";
import thunder from "../../public/thunder.png";
import solana from "../../public/solana.png";
import WalletSelectionPanel from "./Selectwallet";
import Image from "next/image";

interface TradingControlsPanelProps {
  onWalletClick: () => void;
}

const TradingControlsPanel: React.FC<TradingControlsPanelProps> = ({ onWalletClick }) => {
  const [activeTab, setActiveTab] = useState<"buy" | "sell">("buy");
  const [isMarketOrder, setIsMarketOrder] = useState(false);
  const [isLimitOrder, setIsLimitOrder] = useState(false);
  const [isAdvanceOpen, setIsAdvanceOpen] = useState(false);
  const [isWalletOpen, setIsWalletOpen] = useState(false);

  return (
    <div className="bg-[#1a1a1a] border-gray-700 p-4 rounded-md relative">
      <div className="grid grid-cols-2 gap-4 mb-4">
        <button
          onClick={() => setActiveTab("buy")}
          className={`flex font-space-grotesk justify-center items-center gap-3 py-2 px-4 rounded-md transition-all ${
            activeTab === "buy"
              ? "bg-green-400 text-white"
              : "bg-gray-800 text-gray-400 hover:bg-gray-700"
          }`}
        >
          <Image src={thunder} alt="buy" />
          Buy
        </button>
        <button
          onClick={() => setActiveTab("sell")}
          className={` font-space-grotesk py-2 px-4 rounded-md transition-all ${
            activeTab === "sell"
              ? "bg-red-500 text-white"
              : "bg-gray-800 text-gray-400 hover:bg-gray-700"
          }`}
        >
          Sell
        </button>
      </div>

      <div className="mt-4 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-white text-sm">Market Order</span>
          <Switch
            checked={isMarketOrder}
            onCheckedChange={setIsMarketOrder}
            className="data-[state=checked]:bg-green-500"
          />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-white text-sm">Limit Order</span>
          <Switch
            checked={isLimitOrder}
            onCheckedChange={setIsLimitOrder}
            className="data-[state=checked]:bg-green-500"
          />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-white text-sm">Insta Buy</span>
          <button 
            onClick={onWalletClick}
            className="flex items-center space-x-2 bg-black rounded-xl p-1 hover:bg-gray-900 transition-colors"
          >
            <div className="w-4 h-4 bg- rounded-full"></div>
            <Image alt="wallet" src={wallet} />
            <span className="text-gray-400 text-sm">1</span>
            <Image src={solana} alt="solana" className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2 text-sm">
          <div className="flex items-center space-x-2">
            <Image src={solana} alt="solana" className="w-4 h-4" />
            <span className="text-white">0.25</span>
          </div>
          <div className="flex items-center space-x-2">
            <Image src={solana} alt="solana" className="w-4 h-4" />
            <span className="text-white">0.5</span>
          </div>
          <div className="flex items-center space-x-2">
            <Image src={solana} alt="solana" className="w-4 h-4" />
            <span className="text-white">1</span>
          </div>
        </div>
        <span className="text-gray-400 text-sm">Amount to buy in SOL</span>
      </div>
      <div className="mt-4">
        <button
          onClick={() => setIsAdvanceOpen(!isAdvanceOpen)}
          className="w-full flex items-center justify-between text-gray-400 hover:text-white transition-colors"
        >
          <span>Advance Settings</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 transition-transform ${isAdvanceOpen ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {isAdvanceOpen && (
          <div className="bg-[#1a1a1a] mt-2 p-3 rounded-md space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-white text-sm">Slippage Tolerance</span>
              <input 
                type="number" 
                className="bg-[#1a1a1a] text-white rounded px-2 py-1 w-20 text-sm"
                placeholder="0.5%"
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white text-sm">Transaction Deadline</span>
              <input 
                type="number" 
                className="bg-[#1a1a1a] rounded px-2 py-1 w-20 text-sm"
                placeholder="30 min"
              />
            </div>
          </div>
        )}
      </div>
      <div className="mt-4">
        <Button
          className={`flex w-full font-space-grotesk font-bold ${
            activeTab === "buy"
              ? "bg-green-400 hover:bg-green-600"
              : "bg-red-400 hover:bg-red-600"
          } text-black`}
        >
          {activeTab === "buy" && <Image src={thunder} alt="buy" />}
          Quick {activeTab === "buy" ? "Buy" : "Sell"}
        </Button>
      </div>
      <div className="mt-2 text-gray-400 text-sm">
        Once you click on Quick {activeTab === "buy" ? "Buy" : "Sell"}, your
        transaction is sent immediately.
      </div>
      {isWalletOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative">
            <WalletSelectionPanel onClose={()=>console.log('')}/>
            <button 
              onClick={() => setIsWalletOpen(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TradingControlsPanel;
