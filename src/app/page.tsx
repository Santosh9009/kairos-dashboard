"use client";
import { useState } from "react";
import TradingViewChart from "@/components/Chart";
import TransactionsTable from "@/components/Table";
import RightPanel from "@/components/RightPanel";
import Coindetail from "@/components/Coindetail";
import Buysell from "@/components/Buysell";
import SocialActivityPanel from "@/components/SocialActivity";
import TradingControlsPanel from "@/components/TradingControlPanel";
import WalletSelectionPanel from "@/components/Selectwallet";

export default function Home() {
  const [isWalletOpen, setIsWalletOpen] = useState(false);

  return (
    <div className="flex min-h-screen space-x-5">
      <div className="flex-1 flex flex-col items-start space-y-6">
        <TradingViewChart />
        <TransactionsTable />
      </div>
      <div id="dialog also" className="w-[40%] space-y-4">
        {isWalletOpen ? (
          <WalletSelectionPanel onClose={() => setIsWalletOpen(false)} />
        ) : (
          <>
            <Coindetail />
            <div className="flex space-x-5">
              <Buysell />
              <TradingControlsPanel onWalletClick={() => setIsWalletOpen(true)} />
            </div>
            <SocialActivityPanel />
          </>
        )}
      </div>
    </div>
  );
}
