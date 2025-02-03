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
import TrendingTokensBar from "@/components/TrendingBar";

interface WalletSelectionPanelProps {
  onClose: () => void;
}

interface TradingControlsPanelProps {
  onWalletClick: () => void;
}

export default function Home() {
  const [isWalletOpen, setIsWalletOpen] = useState<boolean>(false);

  return (
    <main className="min-h-screen space-y-4 p-4 max-w-full">
      <section className="w-full">
        <TrendingTokensBar />
      </section>

      <div className="flex gap-6 w-full">
        <section className="flex-1 space-y-4 min-w-0">
          <TradingViewChart />
          <TransactionsTable />
        </section>

        <section className="w-[480px] space-y-4">
          {isWalletOpen ? (
            <WalletSelectionPanel onClose={() => setIsWalletOpen(false)} />
          ) : (
            <>
              <Coindetail />
              <div className="flex gap-4">
                <Buysell />
                <TradingControlsPanel onWalletClick={() => setIsWalletOpen(true)} />
              </div>
              <SocialActivityPanel />
            </>
          )}
        </section>
      </div>
    </main>
  );
}
