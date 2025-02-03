"use client"
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useState } from 'react';

interface TimeframeData {
  label: string;
  percentage: number;
  selected?: boolean;
}

interface BuysellProps {
  buyTransactions: number;
  sellTransactions: number;
  buyVolume: number;
  sellVolume: number;
  buyMakers: number;
  sellMakers: number;
  timeframes: TimeframeData[];
}

const formatCurrency = (value: number) => 
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);

const formatPercentage = (value: number) => 
  `${value.toFixed(2)}%`;

const defaultTimeframes: TimeframeData[] = [
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
          className="h-full bg-green-400" 
          style={{ width: `${leftPercentage}%` }} 
        />
        <div 
          className="h-full bg-red-400" 
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
  formatValue = (v: number) => v.toLocaleString() 
}: { 
  label: string;
  buyValue: number;
  sellValue: number;
  formatValue?: (value: number) => string;
}) => (
  <div className="space-y-2">
    <div className="flex justify-between items-center">
      <div className="space-y-1">
        <span className="text-gray-400 font-medium text-sm">{label}</span>
        <span className="block text-green-400 text-sm">{formatValue(buyValue)}</span>
      </div>
      <span className="text-red-400 text-sm">{formatValue(sellValue)}</span>
    </div>
    <RangeLine leftValue={buyValue} rightValue={sellValue} />
  </div>
);

const Buysell = ({
  buyTransactions = 28472,
  sellTransactions = 12711,
  buyVolume = 14.6e6,
  sellVolume = 7.3e6,
  buyMakers = 6564,
  sellMakers = 5014,
  timeframes = defaultTimeframes,
}: BuysellProps) => {
  const [selectedTimeframes, setSelectedTimeframes] = 
    useState<TimeframeData[]>(timeframes);

  const handleTimeframeClick = (clickedLabel: string) => {
    setSelectedTimeframes(prev => prev.map(tf => ({
      ...tf,
      selected: tf.label === clickedLabel
    })));
  };

  return (
    <Card className="bg-[#1a1a1a] border-none">
      <CardHeader className="pb-2">
        <CardTitle>
          <div className="flex items-center justify-between mb-4">
           
          </div>
          <div className="grid grid-cols-4 gap-4 text-sm">
            {selectedTimeframes.map((tf) => (
              <button
                key={tf.label}
                onClick={() => handleTimeframeClick(tf.label)}
                className={`flex flex-col items-center rounded-full py-2 px-4 transition-all
                  ${tf.selected 
                    ? 'bg-gradient-to-b from-white/10 to-transparent border border-white/20' 
                    : 'text-gray-400 hover:bg-gray-800/30'
                  }`}
              >
                <span className={`text-xs ${tf.selected ? 'text-white' : 'text-gray-400'}`}>
                  {tf.label}
                </span>
                <span className={tf.selected ? 'text-white' : 'text-green-400'}>
                  {formatPercentage(tf.percentage)}
                </span>
              </button>
            ))}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <StatRow 
          label="VOLUME"
          buyValue={buyVolume}
          sellValue={sellVolume}
          formatValue={formatCurrency}
        />
        <StatRow 
          label="MAKERS"
          buyValue={buyMakers}
          sellValue={sellMakers}
        />
        <StatRow 
          label="TXNS"
          buyValue={buyTransactions}
          sellValue={sellTransactions}
        />
      </CardContent>
    </Card>
  );
};

export default Buysell;