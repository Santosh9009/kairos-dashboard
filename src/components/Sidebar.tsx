"use client";
import Image from "next/image";
import Link from "next/link";
import { useSidebar } from "@/context/SidebarContext";
import home from "../../public/home.png";
import charts from "../../public/charts.png";
import chart from "../../public/chart.png";
import wallet from "../../public/wallet.png";
import funcIcon from "../../public/func.png";
import Logo from "../../public/Elemento.png";
import Left from "../../public/leftarrow.png";
import Tracker from "../../public/Tracker.png";
import userIcon from "../../public/user.png";
import settingsIcon from "../../public/settings.png";

const Sidebar = () => {
  const { isExpanded, setIsExpanded } = useSidebar();

  return (
    <aside
      className={`${
        isExpanded ? "w-64" : "w-16"
      } p-4 bg-[#121212] border-r border-gray-800 transition-all duration-300 ease-in-out fixed top-0 left-0 h-screen flex flex-col z-50`}
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-[#121212] border border-gray-800 rounded-full p-1.5 w-10"
      >
        <Image 
          src={Left} 
          alt="left" 
        />
      </button>

      <div
        className={`flex items-center ${
          isExpanded ? "justify-start" : "justify-center"
        } transition-all duration-300 mt-3 mb-3`}
      >
        <div className="h-12 w-12"> {/* Increased from h-8 w-8 to h-12 w-12 */}
          <Image src={Logo} alt="KairosLogo" className="w-full h-full object-cover" />
        </div>
        {isExpanded && (
          <span className="ml-3 text-white font-medium text-lg">
            Kairos Terminal
          </span>
        )}
      </div>

      <nav className="flex flex-col space-y-6 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent">
        <Link
          href="/trading-desk"
          className="flex items-center space-x-2 text-gray-400 hover:text-white"
        >
          <Image src={home} alt="Home" width={20} height={20} />
          {isExpanded && <span>Trading Desk</span>}
        </Link>
        <Link
          href="/new-pairs"
          className="flex items-center space-x-2 text-gray-400 hover:text-white"
        >
          <Image src={chart} alt="Chart" width={20} height={20} />
          {isExpanded && <span>New Pairs</span>}
        </Link>
        <Link
          href="/positions"
          className="flex items-center space-x-2 text-gray-400 hover:text-white"
        >
          <Image src={wallet} alt="Wallet" width={20} height={20} />
          {isExpanded && <span>Positions</span>}
        </Link>
        <Link
          href="/functions"
          className="flex items-center space-x-2 text-gray-400 hover:text-white"
        >
          <Image src={funcIcon} alt="Settings" width={20} height={20} />
          {isExpanded && <span>Functions</span>}
        </Link>
        <Link
          href="/functions"
          className="flex items-center space-x-2 text-gray-400 hover:text-white"
        >
          <Image src={Tracker} alt="Settings" width={20} height={20} />
          {isExpanded && <span>Tracker</span>}
        </Link>
      </nav>

      {/* Bottom section */}
      <div className="border-t border-gray-800 pt-4 mt-auto">
        <div className="flex flex-col space-y-6"> {/* Changed from space-y-4 to space-y-6 */}
          <Link href="/settings" className="flex items-center space-x-2 text-gray-400 hover:text-white">
            <Image src={settingsIcon} alt="Settings" width={30} height={30} />
            {isExpanded && <span>Settings</span>}
          </Link>
          <Link href="/profile" className="flex items-center space-x-2 text-gray-400 hover:text-white">
            <Image src={userIcon} alt="Profile" width={30} height={30} />
            {isExpanded && <span>Profile</span>}
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
