"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Asset {
  symbol: string;
  name: string;
  balance: number;
  value: number;
  change24h: number;
  chain: string;
  logoSrc?: string;
}

export default function PortfolioOverview() {
  const [totalValue, setTotalValue] = useState(0);
  const [assets, setAssets] = useState<Asset[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const mockAssets: Asset[] = [
      { symbol: "BTC", name: "Bitcoin", balance: 0.25, value: 10250, change24h: 2.4, chain: "Bitcoin", logoSrc: "/bitcoin-logo-svgrepo-com.svg" },
      { symbol: "ETH", name: "Ethereum", balance: 5.8, value: 11600, change24h: -1.2, chain: "Ethereum", logoSrc: "/eth-svgrepo-com.svg" },
      { symbol: "SOL", name: "Solana", balance: 45.2, value: 4520, change24h: 5.7, chain: "Solana", logoSrc: "/solana-svgrepo-com.svg" },
      { symbol: "ICP", name: "Internet Computer", balance: 120, value: 1440, change24h: 3.1, chain: "ICP", logoSrc: "/icp-svgrepo-com.svg" },
    ];
    
    setTimeout(() => {
      setAssets(mockAssets);
      setTotalValue(mockAssets.reduce((sum, asset) => sum + asset.value, 0));
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-32 rounded-lg"></div>
        <div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-64 rounded-lg"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-2xl border border-green-200/50 dark:border-green-700/50 shadow-xl backdrop-blur-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-green-700 dark:text-green-300 uppercase tracking-wide">
              Total Portfolio Value
            </h3>
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white text-lg">💰</span>
            </div>
          </div>
          <p className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            ${totalValue.toLocaleString()}
          </p>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/50 px-2 py-1 rounded-full">
              +2.8% (24h)
            </span>
            <span className="text-green-500">📈</span>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-8 rounded-2xl border border-yellow-200/50 dark:border-yellow-700/50 shadow-xl backdrop-blur-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-yellow-700 dark:text-yellow-300 uppercase tracking-wide">
              AI Risk Score
            </h3>
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white text-lg">🧠</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <p className="text-4xl font-bold text-yellow-600 dark:text-yellow-400">7.2</p>
            <span className="text-lg text-gray-500 dark:text-gray-400">/10</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900/50 px-2 py-1 rounded-full">
              Moderate Risk
            </span>
            <span className="text-yellow-500">⚠️</span>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-8 rounded-2xl border border-blue-200/50 dark:border-blue-700/50 shadow-xl backdrop-blur-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-blue-700 dark:text-blue-300 uppercase tracking-wide">
              Active Chains
            </h3>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white text-lg">⛓️</span>
            </div>
          </div>
          <p className="text-4xl font-bold text-gray-900 dark:text-white mb-2">4</p>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/50 px-2 py-1 rounded-full">
              Cross-chain enabled
            </span>
            <span className="text-blue-500">🔗</span>
          </div>
        </div>
      </div>

      <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 dark:border-gray-700/50">
        <div className="p-8 border-b border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Asset Holdings
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                Real-time portfolio breakdown
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Live Data</span>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-gray-50/80 to-gray-100/80 dark:from-gray-700/50 dark:to-gray-800/50 backdrop-blur-sm">
              <tr>
                <th className="px-8 py-4 text-left text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Asset
                </th>
                <th className="px-8 py-4 text-left text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Balance
                </th>
                <th className="px-8 py-4 text-left text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Value
                </th>
                <th className="px-8 py-4 text-left text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  24h Change
                </th>
                <th className="px-8 py-4 text-left text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Chain
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200/50 dark:divide-gray-700/50">
              {assets.map((asset, index) => (
                <tr key={asset.symbol} className="hover:bg-white/40 dark:hover:bg-gray-700/30 transition-colors">
                  <td className="px-8 py-6 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-white dark:bg-gray-700 rounded-xl flex items-center justify-center mr-4 shadow-lg p-2">
                        {asset.logoSrc ? (
                          <Image
                            src={asset.logoSrc}
                            alt={asset.name}
                            width={32}
                            height={32}
                            className="w-full h-full object-contain"
                          />
                        ) : (
                          <span className="text-gray-600 dark:text-gray-300 text-sm font-bold">
                            {asset.symbol.charAt(0)}
                          </span>
                        )}
                      </div>
                      <div>
                        <div className="text-lg font-bold text-gray-900 dark:text-white">
                          {asset.symbol}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {asset.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6 whitespace-nowrap">
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">
                      {asset.balance.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {asset.symbol}
                    </div>
                  </td>
                  <td className="px-8 py-6 whitespace-nowrap">
                    <div className="text-lg font-bold text-gray-900 dark:text-white">
                      ${asset.value.toLocaleString()}
                    </div>
                  </td>
                  <td className="px-8 py-6 whitespace-nowrap">
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      asset.change24h >= 0 
                        ? "bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300" 
                        : "bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300"
                    }`}>
                      <span className="mr-1">
                        {asset.change24h >= 0 ? "↗️" : "↘️"}
                      </span>
                      {asset.change24h >= 0 ? "+" : ""}{asset.change24h}%
                    </div>
                  </td>
                  <td className="px-8 py-6 whitespace-nowrap">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${
                      asset.chain === 'Bitcoin' ? 'bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-700' :
                      asset.chain === 'Ethereum' ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700' :
                      asset.chain === 'Solana' ? 'bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-700' :
                      'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-700'
                    }`}>
                      {asset.chain}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}