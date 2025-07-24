"use client";

import { useState, useEffect } from "react";

interface RiskMetric {
  name: string;
  value: number;
  status: "low" | "medium" | "high";
  description: string;
}

interface AIRecommendation {
  id: string;
  type: "rebalance" | "hedge" | "optimize";
  title: string;
  description: string;
  impact: string;
  confidence: number;
}

export default function AIRiskDashboard() {
  const [riskScore, setRiskScore] = useState(0);
  const [riskMetrics, setRiskMetrics] = useState<RiskMetric[]>([]);
  const [recommendations, setRecommendations] = useState<AIRecommendation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const mockMetrics: RiskMetric[] = [
      { name: "Volatility Risk", value: 7.2, status: "medium", description: "Portfolio volatility over 30 days" },
      { name: "Concentration Risk", value: 8.4, status: "high", description: "Asset concentration analysis" },
      { name: "Liquidity Risk", value: 4.1, status: "low", description: "Asset liquidity assessment" },
      { name: "Market Risk", value: 6.8, status: "medium", description: "Overall market exposure" },
    ];

    const mockRecommendations: AIRecommendation[] = [
      {
        id: "1",
        type: "rebalance",
        title: "Reduce BTC Concentration",
        description: "Consider reducing BTC allocation from 37% to 28% to lower concentration risk",
        impact: "Reduce risk by 1.2 points",
        confidence: 94
      },
      {
        id: "2", 
        type: "hedge",
        title: "Add Stablecoin Hedge",
        description: "Allocate 15% to USDC to hedge against market volatility",
        impact: "Reduce volatility by 23%",
        confidence: 87
      },
      {
        id: "3",
        type: "optimize",
        title: "Cross-Chain Yield Opportunity",
        description: "Move 20% ETH to Solana DeFi for 12% additional yield",
        impact: "Increase returns by 8.4%",
        confidence: 78
      }
    ];

    setTimeout(() => {
      setRiskScore(7.2);
      setRiskMetrics(mockMetrics);
      setRecommendations(mockRecommendations);
      setLoading(false);
    }, 1200);
  }, []);

  const getRiskColor = (status: string) => {
    switch (status) {
      case "low": return "text-green-600 dark:text-green-400";
      case "medium": return "text-yellow-600 dark:text-yellow-400";
      case "high": return "text-red-600 dark:text-red-400";
      default: return "text-gray-600";
    }
  };

  const getRecommendationIcon = (type: string) => {
    switch (type) {
      case "rebalance": return "⚖️";
      case "hedge": return "🛡️";
      case "optimize": return "📈";
      default: return "💡";
    }
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-48 rounded-lg"></div>
        <div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-64 rounded-lg"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            AI Risk Analysis
          </h2>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-500">Live Analysis</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="text-center">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray={`${riskScore * 10}, 100`}
                  className="text-yellow-500"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-gray-200 dark:text-gray-700"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  {riskScore}
                </span>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Overall Risk Score
            </h3>
            <p className="text-yellow-600 dark:text-yellow-400">Moderate Risk</p>
          </div>
          
          <div className="space-y-4">
            {riskMetrics.map((metric) => (
              <div key={metric.name} className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {metric.name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {metric.description}
                  </p>
                </div>
                <div className="text-right">
                  <p className={`font-bold ${getRiskColor(metric.status)}`}>
                    {metric.value}
                  </p>
                  <p className={`text-sm capitalize ${getRiskColor(metric.status)}`}>
                    {metric.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <div className="p-6 border-b dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            AI Recommendations
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Powered by Vertex AI Analysis
          </p>
        </div>
        <div className="p-6 space-y-4">
          {recommendations.map((rec) => (
            <div key={rec.id} className="border dark:border-gray-700 rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">{getRecommendationIcon(rec.type)}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {rec.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                      {rec.description}
                    </p>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className="text-sm text-green-600 dark:text-green-400">
                        {rec.impact}
                      </span>
                      <div className="flex items-center space-x-1">
                        <span className="text-sm text-gray-500">Confidence:</span>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {rec.confidence}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Execute
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}