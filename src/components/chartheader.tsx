import React from "react";
import { Button } from "@/components/ui/button";
import dog from "../../public/dogimage.png";
import copy from "../../public/copy2.png";
import Image from "next/image";

interface MetricProps {
  label: string;
  value: string;
}

const Metric: React.FC<MetricProps> = ({ label, value }) => (
  <div>
    <h3 className="text-gray-500 text-xs">{label}</h3>
    <span className="text-sm">{value}</span>
  </div>
);

const TokenInfo = () => (
  <div className="flex items-center space-x-3">
    <Image
      alt="dog"
      src={dog}
      className="w-8 h-8 object-contain rounded-full"
    />
    <div className="flex flex-col">
      <span className="text-sm font-semibold">dogwifhat</span>
    </div>
  </div>
);

const AddressInfo = ({ label, address }: { label: string; address: string }) => (
  <div className="flex justify-center items-center gap-2">
    <span className="text-sm">{label}</span>
    <div className="flex gap-1 border border-gray-700 px-1.5 py-0.5 bg-transparent rounded text-gray-400 text-xs">
      {address}
      <Image alt="copy" src={copy} className="cursor-pointer w-3 h-3" />
    </div>
  </div>
);

const TokenMetrics = () => (
  <div className="flex justify-center items-center gap-4">
    <Metric label="PRICE USD" value="$0.911" />
    <Metric label="PRICE SOL" value="0.0074" />
    <Metric label="SUPPLY" value="1B" />
    <Metric label="LIQUIDITY" value="$2.45M" />
    <Metric label="MKT CAP" value="$911.2K" />
  </div>
);

const TradingHeader = () => {
  return (
    <div className="bg-[#1a1a1a] flex items-center justify-between p-2 border-b border-gray-800 text-white">
      <TokenInfo />
      <div className="flex gap-2">
        <AddressInfo label="Token" address="EK..cjm" />
        <AddressInfo label="Pair" address="EK..cjm" />
      </div>
      <TokenMetrics />
    </div>
  );
};

export default TradingHeader;
