"use client"
import { useState } from 'react';

const formatCurrency = (value: number): string => 
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);

const formatPercentage = (value: number): string => 
  `${value.toFixed(2)}%`;

const defaultTimeframes = [
  { label: '5M', percentage: 0.72, selected: true },
  { label: '1H', percentage: 0.72, selected: false },
  { label: '6H', percentage: 20, selected: false },
  { label: '24H', percentage: 100, selected: false },
];

const RangeLine = ({ leftValue, rightValue }: { leftValue: number; rightValue: number }) => {
  const total = leftValue + rightValue;
  const leftPercentage = (leftValue / total) * 100;

  return (
    <div className="h-1.5 w-full rounded-full overflow-hidden bg-gray-800/50">
      <div className="h-full w-full flex">
        <div 
          className="h-full bg-green-600" 
          style={{ width: `${leftPercentage}%` }} 
        />
        <div 
          className="h-full bg-red-700" 
          style={{ width: `${100 - leftPercentage}%` }} 
        />
      </div>
    </div>
  );
};

const StatRow = ({ 
  label, 
  buyValue, 
  sellValue, 
  formatValue = (v: number): string => v.toLocaleString() 
}: { 
  label: string;
  buyValue: number;
  sellValue: number;
  formatValue?: (value: number) => string;
}) => (
  <div className="space-y-2">
    <div className="flex justify-between items-center">
      <div className="space-y-1">
        <span className="text-gray-400 font-medium text-xs">{label}</span>
        <span className="block text-green-600 text-xs">{formatValue(buyValue)}</span>
      </div>
      <span className="text-red-700 text-xs">{formatValue(sellValue)}</span>
    </div>
    <RangeLine leftValue={buyValue} rightValue={sellValue} />
  </div>
);

const Buysell = () => {
  const [selectedTimeframes, setSelectedTimeframes] = 
    useState(defaultTimeframes);

  const handleTimeframeClick = (clickedLabel: string) => {
    setSelectedTimeframes(prev => prev.map(tf => ({
      ...tf,
      selected: tf.label === clickedLabel
    })));
  };

  return (
    <div className="flex items-stretch w-[50%] h-full">
      <div className="bg-[#1a1a1a] rounded-lg w-full max-w-2xl flex flex-col">
        <div className="flex-none p-2">
          <div className="grid grid-cols-4 gap-2 px-2">
            {selectedTimeframes.map((tf) => (
              <button
                key={tf.label}
                onClick={() => handleTimeframeClick(tf.label)}
                className={`flex flex-col items-center justify-center rounded-2xl py-1 px-3
                  transition-colors duration-200 
                  ${tf.selected 
                    ? 'border border-white/10 bg-gradient-to-r from-[#232323] via-[#2a2a2a] to-[#1f1f1f] hover:from-[#2d2d2d] hover:via-[#323232] hover:to-[#2a2a2a]' 
                    : 'text-gray-400 border-transparent'
                  }`}
              >
                <span className={`text-xs font-medium mb-1.5 ${tf.selected ? 'text-white' : 'text-gray-400 font-space-grotesk'}`}>
                  {tf.label}
                </span>
                <span className={`${tf.selected ? 'text-green-600' : 'text-gray-500'} text-xs`}>
                  {formatPercentage(tf.percentage)}
                </span>
              </button>
            ))}
          </div>
        </div>
        <div className="flex-1 space-y-6 p-6 flex flex-col justify-center">
          <StatRow 
            label="VOLUME"
            buyValue={14600000}
            sellValue={7300000}
            formatValue={formatCurrency}
          />
          <StatRow 
            label="MAKERS"
            buyValue={6564}
            sellValue={5014}
          />
          <StatRow 
            label="TXNS"
            buyValue={28472}
            sellValue={12711}
          />
        </div>
      </div>
    </div>
  );
};

export default Buysell;