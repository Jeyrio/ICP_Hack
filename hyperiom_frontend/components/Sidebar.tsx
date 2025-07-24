interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const menuItems = [
    { id: "overview", label: "Portfolio", icon: "📊", gradient: "from-blue-500 to-cyan-500" },
    { id: "risk", label: "AI Risk", icon: "🧠", gradient: "from-purple-500 to-pink-500" },
    { id: "chains", label: "Chains", icon: "⛓️", gradient: "from-green-500 to-teal-500" },
    { id: "autopilot", label: "Autopilot", icon: "🚀", gradient: "from-orange-500 to-red-500" },
    { id: "alerts", label: "Alerts", icon: "🚨", gradient: "from-yellow-500 to-orange-500" },
  ];

  return (
    <aside className="w-72 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 shadow-lg">
      <div className="p-6 h-full flex flex-col">
        {/* Logo Section */}
        <div className="flex items-center space-x-4 mb-12 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 shadow-sm">
          <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-xl">H</span>
          </div>
          <div>
            <h2 className="font-bold text-xl bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Hyperion
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Wealth OS</p>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="space-y-3 flex-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`group w-full flex items-center space-x-4 px-6 py-4 rounded-xl transition-all duration-300 border ${
                activeTab === item.id
                  ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-300/50 dark:border-blue-600/50 text-blue-700 dark:text-blue-300 shadow-lg scale-105"
                  : "text-gray-700 dark:text-gray-300 hover:bg-white/40 dark:hover:bg-gray-800/40 border-transparent hover:border-white/30 dark:hover:border-gray-600/30 hover:shadow-md hover:scale-102"
              }`}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                activeTab === item.id 
                  ? `bg-gradient-to-br ${item.gradient} shadow-lg` 
                  : "bg-gray-100 dark:bg-gray-700 group-hover:bg-gray-200 dark:group-hover:bg-gray-600"
              }`}>
                <span className={`text-lg ${activeTab === item.id ? 'text-white' : 'opacity-70'}`}>
                  {item.icon}
                </span>
              </div>
              <span className="font-semibold text-base">{item.label}</span>
              {activeTab === item.id && (
                <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              )}
            </button>
          ))}
        </nav>

        {/* AI Status */}
        <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-700">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-20"></div>
            </div>
            <div>
              <p className="text-sm font-semibold text-green-700 dark:text-green-400">AI Engine Active</p>
              <p className="text-xs text-green-600 dark:text-green-500">Monitoring portfolio</p>
            </div>
          </div>
        </div>
        
        {/* User Profile */}
        <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 shadow-sm">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-sm">U</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800 dark:text-white">Anonymous</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Internet Identity</p>
            </div>
            <div className="ml-auto">
              <button className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors flex items-center justify-center">
                <span className="text-xs">⚙️</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}