import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { TrendingUp, MessageCircle, ChevronRight } from 'lucide-react';

interface SocialActivityProps {
  handle: string;
  name: string;
  avatarUrl: string;
  followers: number;
  botRatio: number;
  powerFollowers: number;
  engagementScore: number;
}

const SocialActivityPanel = ({
  handle = "@dogwifhat",
  name = "dogwifhat",
  avatarUrl = "/api/placeholder/40/40",
  followers = 100000,
  botRatio = 2,
  powerFollowers = 777,
  engagementScore = 85
}: SocialActivityProps) => {
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
              <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-200">{handle}</div>
              <div className="text-xs text-gray-400">{name}</div>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="text-sm font-medium text-gray-200">
              {followers.toLocaleString('en-US', { notation: 'compact' })}
            </div>
            <div className="text-xs text-gray-400">Total Followers</div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-2 bg-gray-800/20 rounded-lg p-2">
          <div className="flex flex-col">
            <div className="text-sm font-medium text-gray-200">{botRatio}%</div>
            <div className="text-xs text-gray-400">Bot Ratio</div>
          </div>
          <div className="flex flex-col items-end">
            <div className="text-sm font-medium text-gray-200">{powerFollowers}</div>
            <div className="text-xs text-gray-400">Power followers</div>
          </div>
        </div>

        {/* Engagement Score */}
        <div className="space-y-1">
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-400">Engagement Score</span>
            <span className="text-xs font-medium text-gray-200">{engagementScore}%</span>
          </div>
          <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 transition-all"
              style={{ width: `${engagementScore}%` }}
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