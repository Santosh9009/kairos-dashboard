"use client";

import React, { useEffect, useRef } from "react";
import TradingHeader from "./chartheader";

const TradingViewChart = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => {
      new (window as any).TradingView.widget({
        container_id: containerRef.current?.id,
        symbol: "WIFUSD",
        interval: "15",
        timezone: "Etc/UTC",
        theme: "dark",
        style: "1",
        locale: "en",
        toolbar_bg: "#000",
        enable_publishing: false,
        hide_side_toolbar: false,
        allow_symbol_change: true,
        studies: ["Volume@tv-basicstudies"],
        width: "100%",
        height: 400,
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <TradingHeader />
      <div
        id="tradingview_chart"
        ref={containerRef}
        className="w-full h-[400px] z-20"
      />
    </div>
  );
};

export default TradingViewChart;
