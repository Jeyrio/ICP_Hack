"use client";

import { useState, useEffect } from "react";

interface ChainBalance {
  chain: string;
  symbol: string;
  logo: string;
  balance: number;
  usdValue: number;
  address: string;
  status: "connected" | "connecting" | "error";
  gasPrice?: number;
  blockHeight?: number;
}

export default function ChainBalances() {
  const [chains, setChains] = useState<ChainBalance[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    loadChainData();
  }, []);

  const loadChainData = async () => {
    setRefreshing(true);
    
    setTimeout(() => {
      const mockChains: ChainBalance[] = [
        {
          chain: "Bitcoin",
          symbol: "BTC",
          logo: "₿",
          balance: 0.25487,
          usdValue: 10458.32,
          address: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
          status: "connected",
          gasPrice: 15,
          blockHeight: 834562
        },
        {
          chain: "Ethereum", 
          symbol: "ETH",
          logo: "Ξ",
          balance: 5.847,
          usdValue: 11694.23,
          address: "0x742d35Cc6B45C0532B4C2c7b35C1234567890123",
          status: "connected",
          gasPrice: 25,
          blockHeight: 19234567
        },
        {
          chain: "Solana",
          symbol: "SOL", 
          logo: "◎",
          balance: 45.23,
          usdValue: 4523.45,
          address: "DsV4VhPtGw8kKx7QJCPRHPNJRGy6xKgWNKFQd9s8Q2mX",
          status: "connected",
          gasPrice: 0.00001,
          blockHeight: 234567890
        },
        {
          chain: "Internet Computer",
          symbol: "ICP",
          logo: "∞",
          balance: 120.45,
          usdValue: 1445.4,
          address: "rrkah-fqaaa-aaaaa-aaaaq-cai",
          status: "connected",
          gasPrice: 0,
          blockHeight: 45678901
        },
        {
          chain: "Polygon",
          symbol: "MATIC",
          logo: "⬟",
          balance: 2847.23,
          usdValue: 2278.56,
          address: "0x847d35Cc6B45C0532B4C2c7b35C9876543210987",
          status: "connecting",
        },
        {
          chain: "Avalanche",
          symbol: "AVAX", 
          logo: "🔺",
          balance: 0,
          usdValue: 0,
          address: "",
          status: "error",
        }
      ];
      
      setChains(mockChains);
      setLoading(false);
      setRefreshing(false);
    }, 800);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "connected": return "text-green-600 dark:text-green-400";
      case "connecting": return "text-yellow-600 dark:text-yellow-400";
      case "error": return "text-red-600 dark:text-red-400";
      default: return "text-gray-600";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "connected": return "🟢";
      case "connecting": return "🟡";
      case "error": return "🔴";
      default: return "⚪";
    }
  };

  const truncateAddress = (address: string) => {
    if (!address) return "Not connected";
    return `${address.slice(0, 6)}...${address.slice(-6)}`;
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-16 rounded-lg"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="animate-pulse bg-gray-200 dark:bg-gray-700 h-48 rounded-lg"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Chain Balances
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Real-time balances across all connected chains
          </p>
        </div>
        <button
          onClick={loadChainData}
          disabled={refreshing}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
        >
          <span className={refreshing ? "animate-spin" : ""}>🔄</span>
          <span>Refresh</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {chains.map((chain) => (
          <div key={chain.chain} className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">{chain.logo}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {chain.chain}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {chain.symbol}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <span>{getStatusIcon(chain.status)}</span>
                <span className={`text-sm capitalize ${getStatusColor(chain.status)}`}>
                  {chain.status}
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Balance</p>
                <p className="text-xl font-bold text-gray-900 dark:text-white">
                  {chain.balance.toLocaleString()} {chain.symbol}
                </p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">USD Value</p>
                <p className="text-lg font-semibold text-green-600 dark:text-green-400">
                  ${chain.usdValue.toLocaleString()}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Address</p>
                <p className="text-sm font-mono text-gray-700 dark:text-gray-300">
                  {truncateAddress(chain.address)}
                </p>
              </div>

              {chain.status === "connected" && (
                <div className="grid grid-cols-2 gap-4 pt-3 border-t dark:border-gray-700">
                  {chain.gasPrice !== undefined && (
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Gas Price</p>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {chain.gasPrice} {chain.symbol === "SOL" ? "SOL" : "gwei"}
                      </p>
                    </div>
                  )}
                  {chain.blockHeight && (
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Block Height</p>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {chain.blockHeight.toLocaleString()}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {chain.status === "error" && (
                <button className="w-full mt-3 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                  Reconnect
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Chain Key Integration Status
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-green-600 dark:text-green-400 text-2xl">🔐</span>
            </div>
            <p className="font-medium text-gray-900 dark:text-white">Threshold Signatures</p>
            <p className="text-sm text-green-600 dark:text-green-400">Active</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-blue-600 dark:text-blue-400 text-2xl">⛓️</span>
            </div>
            <p className="font-medium text-gray-900 dark:text-white">Cross-Chain TX</p>
            <p className="text-sm text-blue-600 dark:text-blue-400">Enabled</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-purple-600 dark:text-purple-400 text-2xl">🛡️</span>
            </div>
            <p className="font-medium text-gray-900 dark:text-white">Security Protocol</p>
            <p className="text-sm text-purple-600 dark:text-purple-400">Verified</p>
          </div>
        </div>
      </div>
    </div>
  );
}