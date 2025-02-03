"use client"
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
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
        <span className="text-gray-400 font-medium text-sm">{label}</span>
        <span className="block text-green-400 text-sm">{formatValue(buyValue)}</span>
      </div>
      <span className="text-red-400 text-sm">{formatValue(sellValue)}</span>
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
    <div className="flex items-center justify-center w-full h-full">
      <Card className="bg-[#1a1a1a] border-none w-full max-w-2xl">
        <CardHeader className="pb-4">
          <CardTitle>
            <div className="grid grid-cols-4 gap-x-8 justify-items-center p-4">
              {selectedTimeframes.map((tf) => (
                <button
                  key={tf.label}
                  onClick={() => handleTimeframeClick(tf.label)}
                  className={`flex flex-col items-center justify-center rounded-lg py-2 px-4 min-w-[80px] transition-all
                    ${tf.selected 
                      ? 'bg-gradient-to-b from-white/10 to-transparent border border-white/20' 
                      : 'text-gray-400 hover:bg-gray-800/30'
                    }`}
                >
                  <span className={`text-sm font-medium mb-1 ${tf.selected ? 'text-white' : 'text-gray-400'}`}>
                    {tf.label}
                  </span>
                  <span className={`${tf.selected ? 'text-white' : 'text-green-400'} text-sm`}>
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
        </CardContent>
      </Card>
    </div>
  );
};

export default Buysell;