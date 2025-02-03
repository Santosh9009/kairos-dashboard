"use client";
import { Button } from "./ui/button";
import { useSidebar } from "@/context/SidebarContext";
import nofity from '../../public/notification.png'

const Topbar = () => {
  const { isExpanded } = useSidebar();

  return (
    <header className={`
      flex items-center flex-grow justify-between px-4 py-2 bg-[#181818] border-b border-gray-800
      transition-all duration-300
      ${isExpanded ? '' : ''}
    `}>
      <div className="flex items-center space-x-4">
        <Button 
          className="hover:shadow-[0_0_10px_rgba(255,255,255,0.15)] 
                     hover:bg-gray-900 
                     active:shadow-[0_0_12px_rgba(255,255,255,0.25)] 
                     active:bg-gray-800
                     transition-all duration-200" 
          variant="default">Terminal</Button>
        <Button 
          className="hover:shadow-[0_0_10px_rgba(255,255,255,0.15)] 
                     hover:bg-gray-900/50 
                     active:shadow-[0_0_12px_rgba(255,255,255,0.25)] 
                     active:bg-gray-800/70
                     transition-all duration-200" 
          variant="ghost">Trading Desk</Button>
        <Button 
          className="hover:shadow-[0_0_10px_rgba(255,255,255,0.15)] 
                     hover:bg-gray-900/50 
                     active:shadow-[0_0_12px_rgba(255,255,255,0.25)] 
                     active:bg-gray-800/70
                     transition-all duration-200" 
          variant="ghost">New Pairs</Button>
        <Button 
          className="hover:shadow-[0_0_10px_rgba(255,255,255,0.15)] 
                     hover:bg-gray-900/50 
                     active:shadow-[0_0_12px_rgba(255,255,255,0.25)] 
                     active:bg-gray-800/70
                     transition-all duration-200" 
          variant="ghost">Trending</Button>
        <Button 
          className="hover:shadow-[0_0_10px_rgba(255,255,255,0.15)] 
                     hover:bg-gray-900/50 
                     active:shadow-[0_0_12px_rgba(255,255,255,0.25)] 
                     active:bg-gray-800/70
                     transition-all duration-200" 
          variant="ghost">Positions</Button>
        <Button 
          className="hover:shadow-[0_0_10px_rgba(255,255,255,0.15)] 
                     hover:bg-gray-900/50 
                     active:shadow-[0_0_12px_rgba(255,255,255,0.25)] 
                     active:bg-gray-800/70
                     transition-all duration-200" 
          variant="ghost">Memescope</Button>
      </div>
      <input
        type="text"
        placeholder="Search by token or LP contract"
        className="px-3 py-1 bg-gray-900 text-gray-300 rounded-md"
      />
    </header>
  );
};

export default Topbar;
