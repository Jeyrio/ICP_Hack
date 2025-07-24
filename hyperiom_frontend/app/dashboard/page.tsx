"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import PortfolioOverview from "@/components/PortfolioOverview";
import AIRiskDashboard from "@/components/AIRiskDashboard";
import ChainBalances from "@/components/ChainBalances";
import AutopilotControls from "@/components/AutopilotControls";
import AlertSystem from "@/components/AlertSystem";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = "Hyperion Dashboard";

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (!isDeleting && displayText.length < fullText.length) {
      timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, 150);
    } else if (!isDeleting && displayText.length === fullText.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(displayText.slice(0, -1));
      }, 100);
    } else if (isDeleting && displayText.length === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
      }, 500);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, fullText]);

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return <PortfolioOverview />;
      case "risk":
        return <AIRiskDashboard />;
      case "chains":
        return <ChainBalances />;
      case "autopilot":
        return <AutopilotControls />;
      case "alerts":
        return <AlertSystem />;
      default:
        return <PortfolioOverview />;
    }
  };

  return (
    <div className="flex min-h-screen bg-white dark:bg-gray-900">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 p-8 bg-gray-50 dark:bg-gray-900">
        <header className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white min-h-[3rem] flex items-center">
                {displayText}
                <span className="animate-pulse text-blue-600">|</span>
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-lg mt-2">
                AI-Powered Chain-Agnostic Wealth Management
              </p>
            </div>
            <div className="flex items-center space-x-4 bg-white dark:bg-gray-800 px-6 py-3 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
              <div className="relative">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-20"></div>
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Connected to ICP Network
              </span>
            </div>
          </div>
        </header>
        
        <div className="min-h-[calc(100vh-200px)] bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm p-8">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}