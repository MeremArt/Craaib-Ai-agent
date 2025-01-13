import React from "react";
import { ArrowRight, Zap, Cpu, Shield } from "lucide-react";

const CTASection = () => {
  return (
    <div className="bg-gradient-to-b from-black/20 to-primary/10 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Start Building Your AI Agents Today
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join the future of automated trading and analytics on SUI. Deploy
            your first agent in minutes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: <Zap className="w-8 h-8 text-primary" />,
              title: "Lightning Fast",
              description:
                "Deploy agents that respond to market conditions in milliseconds",
            },
            {
              icon: <Cpu className="w-8 h-8 text-primary" />,
              title: "AI-Powered",
              description:
                "Leverage advanced machine learning for superior market analysis",
            },
            {
              icon: <Shield className="w-8 h-8 text-primary" />,
              title: "Battle-Tested",
              description:
                "Built with enterprise-grade security and reliability",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-primary/20 rounded-xl p-6 backdrop-blur-sm"
            >
              <div className="flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center space-y-6">
          <button className="bg-primary hover:bg-white hover:text-primary text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center space-x-2 transition-all duration-200 transform hover:scale-105">
            <span>Get Early Access</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <p className="text-gray-400 text-sm">
            Limited spots available. Join 1000+ developers already building on
            Craaib.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
