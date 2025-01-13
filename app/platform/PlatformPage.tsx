import React from "react";
import {
  Zap,
  TrendingUp,
  Shield,
  Cpu,
  Robot,
  BarChart2,
  Search,
  GitBranch,
} from "lucide-react";

const PlatformPage = () => {
  const agents = [
    {
      name: "MarketSense AI",
      description:
        "Advanced market analysis and trend detection agent powered by machine learning",
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      features: [
        "Real-time price movement detection",
        "Sentiment analysis across social platforms",
        "Custom alert configurations",
        "Historical trend analysis",
      ],
      status: "Live",
      category: "Trading",
    },
    {
      name: "GuardianBot",
      description:
        "24/7 security monitoring and threat detection for your SUI assets",
      icon: <Shield className="w-8 h-8 text-primary" />,
      features: [
        "Smart contract vulnerability scanning",
        "Suspicious transaction detection",
        "Real-time threat alerts",
        "Automated risk assessment",
      ],
      status: "Live",
      category: "Security",
    },
    {
      name: "NFT Scout",
      description: "Intelligent NFT market analysis and opportunity detection",
      icon: <Search className="w-8 h-8 text-primary" />,
      features: [
        "Floor price tracking",
        "Rarity analysis",
        "Collection momentum detection",
        "Whale wallet monitoring",
      ],
      status: "Beta",
      category: "NFT",
    },
    {
      name: "ArbitrageBot",
      description:
        "Automated cross-DEX arbitrage opportunity detection and execution",
      icon: <GitBranch className="w-8 h-8 text-primary" />,
      features: [
        "Multi-DEX price monitoring",
        "Gas-optimized execution",
        "Custom profit thresholds",
        "Risk management controls",
      ],
      status: "Coming Soon",
      category: "Trading",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header Section */}
      <div className="bg-gradient-to-b from-primary/20 to-transparent py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            AI Agent Platform
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            Deploy powerful AI agents to automate your trading, analysis, and
            security on the SUI network
          </p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap gap-4 justify-center">
          {["All", "Trading", "Security", "NFT"].map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full bg-purple-900/20 text-primary hover:bg-primary/40 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Agents Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {agents.map((agent, index) => (
            <div
              key={index}
              className="bg-purple-900/10 backdrop-blur-sm border border-primary/20 rounded-xl p-6 hover:border-white/40 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  {agent.icon}
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {agent.name}
                    </h3>
                    <span className="text-sm text-primary">
                      {agent.category}
                    </span>
                  </div>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    agent.status === "Live"
                      ? "bg-green-500/20 text-primary"
                      : agent.status === "Beta"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-blue-500/20 text-primary"
                  }`}
                >
                  {agent.status}
                </span>
              </div>

              <p className="text-gray-300 mb-6">{agent.description}</p>

              <div className="space-y-3 mb-6">
                {agent.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-2 text-gray-400"
                  >
                    <Zap className="w-4 h-4 text-primary" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
                  agent.status === "Coming Soon"
                    ? "bg-gray-700/50 text-gray-400 cursor-not-allowed"
                    : "bg-primary text-white hover:bg-white hover:text-primary transform hover:scale-105"
                }`}
                disabled={agent.status === "Coming Soon"}
              >
                {agent.status === "Coming Soon" ? "Coming Soon" : "Launch Now"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlatformPage;
