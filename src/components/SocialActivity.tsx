import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { TrendingUp, MessageCircle, ChevronRight } from 'lucide-react';
import dogwihat from '../../public/dogimage.png'
import Image from 'next/image';

const SocialActivityPanel = () => {
  return (
    <Card className="bg-[#1a1a1a] border-none">
      <CardHeader className="pb-2 pt-3">
        <CardTitle className="flex items-center justify-between text-base">
          <div className="flex items-center space-x-2">
            <span className="text-gray-200">Social Activity</span>
            <TrendingUp className="w-3 h-3 text-green-400" />
          </div>
          <MessageCircle className="w-3 h-3 text-gray-400" />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {/* Profile Section */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-700">
              <Image src={dogwihat} alt="dogwifhat" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-200">@dogwifhat</div>
              <div className="text-xs text-gray-400">dogwifhat</div>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="text-sm font-medium text-gray-200">
              {(100000).toLocaleString('en-US', { notation: 'compact' })}
            </div>
            <div className="text-xs text-gray-400">Total Followers</div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-2 bg-gray-800/20 rounded-lg p-2">
          <div className="flex flex-col">
            <div className="text-sm font-medium text-gray-200">2%</div>
            <div className="text-xs text-gray-400">Bot Ratio</div>
          </div>
          <div className="flex flex-col items-end">
            <div className="text-sm font-medium text-gray-200">777</div>
            <div className="text-xs text-gray-400">Power followers</div>
          </div>
        </div>

        {/* Engagement Score */}
        <div className="space-y-1">
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-400">Engagement Score</span>
            <span className="text-xs font-medium text-gray-200">85%</span>
          </div>
          <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 transition-all"
              style={{ width: '85%' }}
            />
          </div>
        </div>

        {/* Footer */}
        <button className="flex items-center text-xs text-gray-400 hover:text-gray-200 transition-colors">
          Dive Deeper
          <ChevronRight className="w-3 h-3 ml-1" />
        </button>
      </CardContent>
    </Card>
  );
};

export default SocialActivityPanel;