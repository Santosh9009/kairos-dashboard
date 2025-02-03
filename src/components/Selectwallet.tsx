import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface Wallet {
  id: string;
  balance: number;
  isActive: boolean;
  name: string;
}

interface WalletSelectionPanelProps {
  onClose: () => void;
  onSelect: (wallet: Wallet) => void;
  selectedWallet?: Wallet;
}

const WalletSelectionPanel: React.FC<WalletSelectionPanelProps> = ({ onClose, onSelect, selectedWallet }) => {
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
      onSelect(wallet);
      setIsLoading(false);
      onClose();
    }, 500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="w-full overflow-x-hidden"
    >
      <Card className="bg-[#1a1a1a] border-[#2a2a2a] h-full shadow-xl w-full">
        <CardContent className="space-y-4 p-4">
          <div className="flex justify-between items-center mb-6">
            <span className="text-white text-lg font-medium">Select Wallet</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-white hover:bg-[#2a2a2a] rounded-full"
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
                    <motion.div
                      key={wallet.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`
                        flex justify-between items-center p-3 rounded-lg cursor-pointer
                        ${wallet.isActive ? 'bg-[#2a2a2a]' : 'bg-[#242424]'}
                        hover:bg-[#2a2a2a] transition-colors duration-200
                      `}
                      onClick={() => handleSelect(wallet)}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`
                          rounded-full w-2 h-2
                          ${wallet.isActive ? 'bg-green-500' : 'bg-[#4a4a4a]'}
                        `}/>
                        <span className="text-white font-medium">{wallet.name}</span>
                        <span className="text-[#888888]">{wallet.balance.toFixed(4)}</span>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:bg-[#2a2a2a] rounded-full"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </Button>
                    </motion.div>
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
    </motion.div>
  );
};

export default WalletSelectionPanel;