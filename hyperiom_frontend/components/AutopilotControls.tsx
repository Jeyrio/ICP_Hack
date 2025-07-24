"use client";

import { useState, useEffect } from "react";

interface AutopilotStrategy {
  id: string;
  name: string;
  description: string;
  riskLevel: "low" | "medium" | "high";
  expectedReturn: number;
  active: boolean;
  performance: number;
}

interface RebalanceAction {
  id: string;
  from: string;
  to: string;
  amount: number;
  reason: string;
  estimatedGas: number;
  status: "pending" | "executing" | "completed" | "failed";
}

export default function AutopilotControls() {
  const [autopilotEnabled, setAutopilotEnabled] = useState(false);
  const [selectedStrategy, setSelectedStrategy] = useState<string>("");
  const [strategies, setStrategies] = useState<AutopilotStrategy[]>([]);
  const [pendingActions, setPendingActions] = useState<RebalanceAction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const mockStrategies: AutopilotStrategy[] = [
      {
        id: "conservative",
        name: "Conservative Growth",
        description: "Low-risk strategy focusing on stable returns with minimal volatility",
        riskLevel: "low",
        expectedReturn: 8.5,
        active: false,
        performance: 12.3
      },
      {
        id: "balanced",
        name: "Balanced Portfolio",
        description: "Moderate risk with balanced allocation across major assets",
        riskLevel: "medium", 
        expectedReturn: 15.2,
        active: true,
        performance: 18.7
      },
      {
        id: "aggressive",
        name: "Aggressive Growth",
        description: "High-risk, high-reward strategy targeting maximum returns",
        riskLevel: "high",
        expectedReturn: 28.4,
        active: false,
        performance: 34.2
      }
    ];

    const mockActions: RebalanceAction[] = [
      {
        id: "1",
        from: "BTC",
        to: "ETH", 
        amount: 0.05,
        reason: "Reduce concentration risk",
        estimatedGas: 0.0023,
        status: "pending"
      },
      {
        id: "2",
        from: "SOL",
        to: "USDC",
        amount: 15.2,
        reason: "Volatility hedge",
        estimatedGas: 0.001,
        status: "pending"
      }
    ];

    setTimeout(() => {
      setStrategies(mockStrategies);
      setPendingActions(mockActions);
      setSelectedStrategy("balanced");
      setAutopilotEnabled(true);
      setLoading(false);
    }, 600);
  }, []);

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "low": return "text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900";
      case "medium": return "text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900";
      case "high": return "text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending": return "text-yellow-600 dark:text-yellow-400";
      case "executing": return "text-blue-600 dark:text-blue-400";
      case "completed": return "text-green-600 dark:text-green-400";
      case "failed": return "text-red-600 dark:text-red-400";
      default: return "text-gray-600";
    }
  };

  const executeAllActions = () => {
    setPendingActions(actions => 
      actions.map(action => ({ ...action, status: "executing" as const }))
    );
    
    setTimeout(() => {
      setPendingActions([]);
    }, 3000);
  };

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
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Autopilot Controls
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              AI-powered portfolio management
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Autopilot {autopilotEnabled ? "ON" : "OFF"}
            </span>
            <button
              onClick={() => setAutopilotEnabled(!autopilotEnabled)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                autopilotEnabled ? "bg-blue-600" : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  autopilotEnabled ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>

        {autopilotEnabled && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {strategies.map((strategy) => (
              <div
                key={strategy.id}
                className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                  selectedStrategy === strategy.id
                    ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                    : "border-gray-200 dark:border-gray-700 hover:border-gray-300"
                }`}
                onClick={() => setSelectedStrategy(strategy.id)}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {strategy.name}
                  </h3>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getRiskColor(strategy.riskLevel)}`}>
                    {strategy.riskLevel} risk
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {strategy.description}
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Expected Return:</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {strategy.expectedReturn}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Performance:</span>
                    <span className="text-sm font-medium text-green-600 dark:text-green-400">
                      +{strategy.performance}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {pendingActions.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
          <div className="p-6 border-b dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Pending Rebalance Actions
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {pendingActions.length} actions ready for execution
                </p>
              </div>
              <button
                onClick={executeAllActions}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Execute All
              </button>
            </div>
          </div>
          <div className="p-6 space-y-4">
            {pendingActions.map((action) => (
              <div key={action.id} className="flex items-center justify-between p-4 border dark:border-gray-700 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="text-2xl">🔄</div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Swap {action.amount} {action.from} → {action.to}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {action.reason}
                    </p>
                    <p className="text-xs text-gray-500">
                      Est. Gas: {action.estimatedGas} ETH
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`text-sm capitalize ${getStatusColor(action.status)}`}>
                    {action.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Autopilot Settings
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Rebalance Frequency
            </label>
            <select className="w-full p-3 border dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
              <option>Daily</option>
              <option>Weekly</option>
              <option>Monthly</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Max Gas Fee (USD)
            </label>
            <input
              type="number"
              defaultValue={50}
              className="w-full p-3 border dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="emergency-stop"
              className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
            />
            <label htmlFor="emergency-stop" className="text-sm text-gray-700 dark:text-gray-300">
              Enable emergency stop on 10%+ portfolio loss
            </label>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
}