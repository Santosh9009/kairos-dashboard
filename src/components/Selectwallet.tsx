import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X, Check, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import solanadull from '../../public/solana-dull.png'
import Image from 'next/image';
import cat from '../../public/Icon.png'

interface Wallet {
  id: string;
  balance: number;
  isActive: boolean;
  name: string;
}

interface WalletSelectionPanelProps {
  onClose: () => any;
}

const WalletSelectionPanel: React.FC<WalletSelectionPanelProps> = ({ onClose }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState<'wallet' | 'tokens'>('wallet');

  const dummyWallets: Wallet[] = [
    { id: '1', balance: 0.5251, isActive: true, name: 'K' },
    ...Array(7).fill(null).map((_, i) => ({
      id: `w${i}`,
      balance: 0,
      isActive: false,
      name: `W${37 + i}`
    }))
  ];

  const handleSelect = (wallet: Wallet) => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      onClose();
    }, 500);
  };

  return (
    <div className="w-full overflow-x-hidden">
      <Card className="bg-[#1a1a1a] border-[#2a2a2a] h-full shadow-xl w-full">
        <CardContent className="space-y-4 p-4">
          <div className="flex justify-between items-center mb-6">
            <span className="text-white text-lg font-medium">Select Wallet</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-white hover:bg-[#2a2a2a] hover:text-white rounded-full"
              aria-label="Close"
            >
             <X/>
            </Button>
          </div>

          <div className="w-full">
            <div className="flex w-full bg-[#242424] rounded-lg p-1">
              <button
                onClick={() => setActiveTab('wallet')}
                className={`flex-1 py-2 px-4 rounded-md transition-all duration-200 ${
                  activeTab === 'wallet'
                    ? 'bg-[#2a2a2a] text-white'
                    : 'text-[#888888] hover:text-white'
                }`}
              >
                Wallet
              </button>
              <button
                onClick={() => setActiveTab('tokens')}
                className={`flex-1 py-2 px-4 rounded-md transition-all duration-200 ${
                  activeTab === 'tokens'
                    ? 'bg-[#2a2a2a] text-white'
                    : 'text-[#888888] hover:text-white'
                }`}
              >
                Tokens
              </button>
            </div>

            <div className="mt-4">
              {activeTab === 'wallet' ? (
                <div className="space-y-2 max-h-[400px] overflow-y-auto overflow-x-hidden custom-scrollbar">
                  {dummyWallets.map((wallet) => (
                    <div
                      key={wallet.id}
                      className={`
                        flex justify-between items-center p-3 rounded-lg cursor-pointer
                        ${wallet.isActive ? 'bg-[#2a2a2a]' : 'bg-[#242424]'}
                        hover:bg-[#2a2a2a] transition-colors duration-200
                      `}
                      onClick={() => handleSelect(wallet)}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`
                          flex items-center justify-center w-4 h-4 rounded
                          ${wallet.isActive ? 'bg-green-500' : 'bg-[#4a4a4a]'}
                        `}>
                          {wallet.isActive && <Check className="w-3 h-3 text-white" />}
                        </div>
                        <span className="text-white font-medium">{wallet.name}</span>
                        <Image src={solanadull} alt="sonaladull" />
                        <span className="text-[#888888]">{wallet.balance.toString()}</span>
                      </div>
                      <div className='flex justify-center items-center space-x-2'>
                      <Image src={cat} alt="sonaladull" />
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="hover:text-white hover:bg-[#3a3a3a] rounded-full text-gray-400"
                          >
                            <ChevronDown className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-[#1a1a1a] text-white border-[#2a2a2a]">
                          <DropdownMenuItem className="focus:bg-[#2a2a2a] cursor-pointer">
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem className="focus:bg-[#2a2a2a] cursor-pointer">
                            Copy Address
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-2 max-h-[400px] overflow-y-auto overflow-x-hidden custom-scrollbar">
                  <div className="text-[#888888] text-center py-8">
                    No tokens available
                  </div>
                </div>
              )}
            </div>
          </div>

          <Button 
            className="w-full bg-green-500 hover:bg-green-600 transition-colors duration-200 h-12 mt-4"
            disabled={isLoading}
          >
            {isLoading ? 'Connecting...' : 'Select wallet'}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default WalletSelectionPanel;