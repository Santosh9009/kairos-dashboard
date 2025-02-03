"use client";
import Image from "next/image";
import Link from "next/link";
import { useSidebar } from "@/context/SidebarContext";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  return (
    <aside
      className={`${
        isExpanded ? "w-64" : "w-16"
      } p-3 bg-[#1a1a1a] border-r border-gray-800 transition-all duration-300 ease-in-out fixed top-0 left-0 h-screen flex flex-col z-50`}
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-[#1a1a1a] border border-gray-800 rounded-full w-10 min-w-[2.5rem]"
      >
        <Image 
          src={Left} 
          alt="left"
          className="h-6 object-contain" 
        />
      </button>

      <div
        className={`flex items-center ${
          isExpanded ? "justify-start" : "justify-center"
        } transition-all duration-300 mt-3 mb-3`}
      >
        <div className="h-12 w-12 min-w-[3rem]">
          <Image src={Logo} alt="KairosLogo" className="w-full h-full object-contain" />
        </div>
        {isExpanded && (
          <span className="ml-3 text-white font-medium text-lg">
            Kairos Terminal
          </span>
        )}
      </div>

      <nav className="flex flex-col space-y-6 flex-1">
        <Link
          href="/trading-desk"
          className="flex items-center text-gray-400 hover:text-white"
        >
          <div className="p-2 bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-xl w-10 h-10 min-w-[2.5rem] flex items-center justify-center">
            <Image 
              src={home} 
              alt="Home" 
              width={24} 
              height={24}
              className="w-6 h-6 object-contain" 
            />
          </div>
          {isExpanded && <span className="ml-3">Trading Desk</span>}
        </Link>

        <Link
          href="/new-pairs"
          className="flex items-center text-gray-400 hover:text-white"
        >
          <div className="w-10 h-10 min-w-[2.5rem] flex items-center justify-center">
            <Image 
              src={chart} 
              alt="Chart" 
              width={24} 
              height={24}
              className="w-6 h-6 object-contain" 
            />
          </div>
          {isExpanded && <span className="ml-3">New Pairs</span>}
        </Link>

        <Link
          href="/positions"
          className="flex items-center text-gray-400 hover:text-white"
        >
          <div className="w-10 h-10 min-w-[2.5rem] flex items-center justify-center">
            <Image 
              src={wallet} 
              alt="Wallet" 
              width={24} 
              height={24}
              className="w-6 h-6 object-contain" 
            />
          </div>
          {isExpanded && <span className="ml-3">Positions</span>}
        </Link>

        <Link
          href="/functions"
          className="flex items-center text-gray-400 hover:text-white"
        >
          <div className="w-10 h-10 min-w-[2.5rem] flex items-center justify-center">
            <Image 
              src={funcIcon} 
              alt="Settings" 
              width={24} 
              height={24}
              className="w-6 h-6 object-contain" 
            />
          </div>
          {isExpanded && <span className="ml-3">Functions</span>}
        </Link>

        <Link
          href="/functions"
          className="flex items-center text-gray-400 hover:text-white"
        >
          <div className="w-10 h-10 min-w-[2.5rem] flex items-center justify-center">
            <Image 
              src={Tracker} 
              alt="Settings" 
              width={24} 
              height={24}
              className="w-6 h-6 object-contain" 
            />
          </div>
          {isExpanded && <span className="ml-3">Tracker</span>}
        </Link>
      </nav>

      {/* Bottom section */}
      <div className="border-t border-gray-800 pt-4 mt-auto">
        <div className="flex flex-col space-y-6"> {/* Changed from space-y-4 to space-y-6 */}
          <Link href="/settings" className="flex items-center text-gray-400 hover:text-white">
            <div className="w-10 h-10 min-w-[2.5rem] flex items-center justify-center">
              <Image 
                src={settingsIcon} 
                alt="Settings" 
                width={24} 
                height={24}
                className="w-6 h-6 object-contain" 
              />
            </div>
            {isExpanded && <span className="ml-3">Settings</span>}
          </Link>
          <Link href="/profile" className="flex items-center text-gray-400 hover:text-white">
            <div className="w-10 h-10 min-w-[2.5rem] flex items-center justify-center">
              <Image 
                src={userIcon} 
                alt="Profile" 
                width={24} 
                height={24}
                className="w-6 h-6 object-contain" 
              />
            </div>
            {isExpanded && <span className="ml-3">Profile</span>}
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
