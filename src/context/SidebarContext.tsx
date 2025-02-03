"use client";
import { createContext, useContext, useState, ReactNode } from "react";

export const SidebarContext = createContext<{
  isExpanded: boolean;
  setIsExpanded: (value: boolean) => void;
}>({
  isExpanded: true,
  setIsExpanded: () => {},
});

export const useSidebar = () => {
  return useContext(SidebarContext);
};

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [isExpanded, setIsExpanded] = useState(true);
  return (
    <SidebarContext.Provider value={{ isExpanded, setIsExpanded }}>
      {children}
    </SidebarContext.Provider>
  );
}
