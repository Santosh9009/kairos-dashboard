import React from 'react';
import { StaticImageData } from 'next/image';
import coin1 from '../../public/trending/Coin1.png';
import coin2 from '../../public/trending/Coin2.png';
import coin3 from '../../public/trending/Coin3.png';
import coin4 from '../../public/trending/Coin4.png';
import coin5 from '../../public/trending/Coin5.png';
import coin6 from '../../public/trending/Coin6.png';

interface Token {
  id: number;
  name: string;
  change: string;
  time: string;
  image: StaticImageData;
}

const TrendingTokensBar = () => {
  const tokens: Token[] = [
    { id: 1, name: 'dogwifhat', change: '+120%', time: '9h', image: coin1 },
    { id: 2, name: 'STARCAT', change: '+89%', time: '9h', image: coin2 },
    { id: 3, name: 'MQGB', change: '+78%', time: '9h', image: coin3 },
    { id: 4, name: 'TRUMP', change: '+25%', time: '9h', image: coin4 },
    { id: 5, name: 'PUMPMAM', change: '+25%', time: '9h', image: coin5 },
    { id: 6, name: 'TARGETDOG', change: '+25%', time: '9h', image: coin6 }
  ];

  return (
    <div className="flex items-center bg-[#1a1a1a] p-2 overflow-x-hidden w-full">
      {tokens.map((token) => (
        <div
          key={token.id}
          className="flex items-center space-x-2 px-3 py-1 rounded-md"
        >
          <span className="text-gray-500 text-sm">#{token.id}</span>
          <img src={token.image.src} alt={token.name} className="w-6 h-6 rounded-full object-cover" />
          <span className="text-white text-sm font-medium">{token.name}</span>
          <span className="text-green-400 text-sm">{token.change}</span>
          <div className="flex items-center space-x-1">
            <svg
              className="w-4 h-4 text-green-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
            <span className="text-gray-400 text-sm">{token.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrendingTokensBar;