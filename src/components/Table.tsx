"use client"
import { useState } from "react";

const transactions = [
  { date: "Aug 27 11:58:35", type: "Buy", totalUSD: 480.57, priceUSD: 0.14, priceSOL: 2, amount: "15M", maker: "5yLvEA...25QF" },
  { date: "Aug 27 11:55:40", type: "Sell", totalUSD: 17.01, priceUSD: 0.14, priceSOL: 0.041, amount: "5M", maker: "Fxbyb5...muCB" },
  { date: "Aug 27 11:49:04", type: "Buy", totalUSD: 13.23, priceUSD: 0.347, priceSOL: 0.033, amount: "3.8M", maker: "zfg3dj...Zy6p" },
  { date: "Aug 27 10:56:16", type: "Sell", totalUSD: 7.97, priceUSD: 0.357, priceSOL: 0.23, amount: "2.3M", maker: "CZpQwE...EGsh" },
  { date: "Aug 27 10:53:54", type: "Sell", totalUSD: 13.24, priceUSD: 0.356, priceSOL: 0.033, amount: "430K", maker: "8iX7Js...oBBY" }
];

const mainTabs = ["Transactions", "My Position", "Holders", "Signals", "Degen Calls", "Liquidity", "Dev Tracker"];
const subTabs = ["All", "Smart", "KOL/LC", "Whale", "Fresh", "Top", "Following"];

export default function TransactionsTable() {
  const [activeMainTab, setActiveMainTab] = useState("Transactions");
  const [activeSubTab, setActiveSubTab] = useState("All");

  return (
    <div className="w-full p-4 bg-[#141414] text-white rounded-lg shadow-md">
      {/* Main Tabs */}
      <div className="flex space-x-4 border-b border-gray-700 pb-2 overflow-x-auto">
        {mainTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveMainTab(tab)}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 outline-none ${
              activeMainTab === tab 
                ? "bg-white/5 text-white shadow-[0_0_10px_rgba(255,255,255,0.3)] border border-white/20" 
                : "text-gray-400 hover:bg-white/5 hover:text-white hover:border-white/10 border border-transparent"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeMainTab === "Transactions" && (
        <>
          {/* Sub Tabs */}
          <div className="mt-3 flex space-x-2 border-b border-gray-700 pb-2 overflow-x-auto">
            {subTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveSubTab(tab)}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-all duration-300 outline-none relative ${
                  activeSubTab === tab 
                    ? "text-white after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[3px] after:bg-green-500 after:rounded-full" 
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Transactions Table */}
          <table className="w-full border-collapse text-sm mt-4">
            <thead>
              <tr className="text-left text-gray-400 border-b border-gray-700">
                <th className="py-2">Date</th>
                <th>Type</th>
                <th>Total USD</th>
                <th>Price USD</th>
                <th>Price SOL</th>
                <th>Amount</th>
                <th>Makers</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx, index) => (
                <tr key={index} className="border-b border-gray-800 hover:bg-gray-900">
                  <td className={`py-2 ${tx.type === "Buy" ? "text-green-400" : "text-red-400"}`}>{tx.date}</td>
                  <td>
                    <span className={`inline-block px-3 py-1 rounded-md font-medium text-xs ${
                      tx.type === "Buy" 
                        ? "bg-green-300 text-black" 
                        : "bg-red-300 text-black"
                    }`}>
                      {tx.type}
                    </span>
                  </td>
                  <td className={tx.type === "Buy" ? "text-green-400" : "text-red-400"}>${tx.totalUSD.toFixed(2)}</td>
                  <td className={tx.type === "Buy" ? "text-green-400" : "text-red-400"}>${tx.priceUSD.toFixed(3)}</td>
                  <td className={tx.type === "Buy" ? "text-green-400" : "text-red-400"}>{tx.priceSOL}</td>
                  <td className={tx.type === "Buy" ? "text-green-400" : "text-red-400"}>{tx.amount}</td>
                  <td>{tx.maker}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}