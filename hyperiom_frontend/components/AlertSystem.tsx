"use client";

import { useState, useEffect } from "react";

interface Alert {
  id: string;
  type: "security" | "risk" | "opportunity" | "system";
  severity: "low" | "medium" | "high" | "critical";
  title: string;
  message: string;
  timestamp: Date;
  acknowledged: boolean;
  actionRequired: boolean;
  data?: any;
}

interface AnomalyDetection {
  score: number;
  factors: string[];
  recommendation: string;
}

export default function AlertSystem() {
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [filterType, setFilterType] = useState<string>("all");
  const [anomalyData, setAnomalyData] = useState<AnomalyDetection | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAlerts();
    loadAnomalyData();
  }, []);

  const loadAlerts = () => {
    const mockAlerts: Alert[] = [
      {
        id: "1",
        type: "security",
        severity: "critical",
        title: "Unusual Transaction Pattern Detected",
        message: "Multiple large transactions from your BTC wallet detected outside normal hours. Immediate verification required.",
        timestamp: new Date(Date.now() - 5 * 60 * 1000),
        acknowledged: false,
        actionRequired: true,
        data: { amount: "0.25 BTC", address: "bc1qxy2...x0wlh" }
      },
      {
        id: "2", 
        type: "risk",
        severity: "high",
        title: "Portfolio Risk Threshold Exceeded",
        message: "Your portfolio risk score has increased to 8.4/10, exceeding your configured threshold of 7.5.",
        timestamp: new Date(Date.now() - 15 * 60 * 1000),
        acknowledged: false,
        actionRequired: true,
        data: { currentRisk: 8.4, threshold: 7.5 }
      },
      {
        id: "3",
        type: "opportunity",
        severity: "medium", 
        title: "Arbitrage Opportunity Available",
        message: "ETH price difference detected: 3.2% between Ethereum and Solana DEXs. Potential profit: $347",
        timestamp: new Date(Date.now() - 30 * 60 * 1000),
        acknowledged: true,
        actionRequired: false,
        data: { profit: 347, chains: ["Ethereum", "Solana"] }
      },
      {
        id: "4",
        type: "system",
        severity: "low",
        title: "Chain Key Integration Updated",
        message: "Bitcoin Chain Key integration successfully updated to v2.1.3 with improved security features.",
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
        acknowledged: true,
        actionRequired: false
      }
    ];

    setAlerts(mockAlerts);
  };

  const loadAnomalyData = () => {
    setTimeout(() => {
      setAnomalyData({
        score: 2.3,
        factors: [
          "Transaction timing outside normal patterns",
          "Unusual gas fee spending (45% above average)",
          "New DeFi protocol interactions detected"
        ],
        recommendation: "Monitor closely but no immediate action required"
      });
      setLoading(false);
    }, 800);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical": return "text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900";
      case "high": return "text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900";
      case "medium": return "text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900";
      case "low": return "text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "security": return "🔒";
      case "risk": return "⚠️";
      case "opportunity": return "💰";
      case "system": return "⚙️";
      default: return "📢";
    }
  };

  const acknowledgeAlert = (id: string) => {
    setAlerts(alerts => 
      alerts.map(alert => 
        alert.id === id ? { ...alert, acknowledged: true } : alert
      )
    );
  };

  const filteredAlerts = filterType === "all" 
    ? alerts 
    : alerts.filter(alert => alert.type === filterType);

  const unacknowledgedCount = alerts.filter(alert => !alert.acknowledged).length;

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
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Alert System
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Real-time security monitoring and notifications
          </p>
        </div>
        <div className="flex items-center space-x-4">
          {unacknowledgedCount > 0 && (
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-red-600 dark:text-red-400 font-medium">
                {unacknowledgedCount} unread
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Anomaly Detection Status
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                <span className="text-2xl">🛡️</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Anomaly Score: {anomalyData?.score}/10
                </h4>
                <p className="text-green-600 dark:text-green-400">Normal Activity</p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">
              Detection Factors:
            </h4>
            <ul className="space-y-1">
              {anomalyData?.factors.map((factor, index) => (
                <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  {factor}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>AI Recommendation:</strong> {anomalyData?.recommendation}
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <div className="p-6 border-b dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Active Alerts
            </h3>
            <div className="flex space-x-2">
              {["all", "security", "risk", "opportunity", "system"].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilterType(type)}
                  className={`px-3 py-1 text-sm rounded-full capitalize transition-colors ${
                    filterType === type
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="p-6 space-y-4">
          {filteredAlerts.length === 0 ? (
            <div className="text-center py-8">
              <span className="text-4xl mb-4 block">🎉</span>
              <p className="text-gray-500 dark:text-gray-400">No alerts found</p>
            </div>
          ) : (
            filteredAlerts.map((alert) => (
              <div
                key={alert.id}
                className={`border rounded-lg p-4 ${
                  alert.acknowledged 
                    ? "border-gray-200 dark:border-gray-700 opacity-75" 
                    : "border-red-200 dark:border-red-800"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">{getTypeIcon(alert.type)}</span>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {alert.title}
                        </h4>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getSeverityColor(alert.severity)}`}>
                          {alert.severity}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-2">
                        {alert.message}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                        <span>{alert.timestamp.toLocaleTimeString()}</span>
                        <span>•</span>
                        <span className="capitalize">{alert.type}</span>
                        {alert.actionRequired && (
                          <>
                            <span>•</span>
                            <span className="text-red-600 dark:text-red-400">Action Required</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    {!alert.acknowledged && (
                      <button
                        onClick={() => acknowledgeAlert(alert.id)}
                        className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                      >
                        Acknowledge
                      </button>
                    )}
                    {alert.actionRequired && (
                      <button className="px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700 transition-colors">
                        Take Action
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Alert Preferences
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700 dark:text-gray-300">Security Alerts</span>
              <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700 dark:text-gray-300">Risk Threshold Alerts</span>
              <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700 dark:text-gray-300">Opportunity Notifications</span>
              <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded" />
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Notification Method
              </label>
              <select className="w-full p-2 border dark:border-gray-700 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                <option>Dashboard Only</option>
                <option>Email + Dashboard</option>
                <option>Push + Dashboard</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}