import { FaChartLine, FaShieldAlt, FaRocket } from "react-icons/fa";

export const SpecializedAgents = () => {
  return (
    <section className="px-8 py-8 max-w-7xl mx-auto flex flex-col items-center justify-center mt-10">
      <h2 className="text-3xl font-bold text-white mb-4">Specialized Agents</h2>
      <p className="text-lg text-white text-opacity-70 mb-8">
        Deploy custom AI agents tailored to your specific needs in the SUI
        ecosystem
      </p>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex flex-col bg-black bg-opacity-80 p-4 rounded-lg w-full md:w-1/3  shadow-lg border border-gray-200 hover:border-primary hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition transform duration-300 cursor-pointer">
          <FaChartLine className="text-primary text-4xl mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">
            Market Watch
          </h3>
          <p className="text-white text-opacity-70">
            Monitor token trends, detect price movements, and analyze market
            sentiment in real-time.
          </p>
        </div>

        <div className="flex flex-col bg-black bg-opacity-80 p-4 rounded-lg w-full md:w-1/3  shadow-lg border border-gray-200 hover:border-primary hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition transform duration-300 cursor-pointer">
          <FaShieldAlt className="text-primary text-4xl mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">
            Security Analysis
          </h3>
          <p className="text-white text-opacity-70">
            Detect potential risks, analyze contracts, and identify suspicious
            patterns automatically.
          </p>
        </div>

        <div className="flex flex-col bg-black bg-opacity-80 p-4 rounded-lg w-full md:w-1/3  shadow-lg border border-gray-200 hover:border-primary hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition transform duration-300 cursor-pointer">
          <FaRocket className="text-primary text-4xl mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">
            NFT Intelligence
          </h3>
          <p className="text-white text-opacity-70">
            Track NFT drops, monitor floor prices, and identify trending
            collections early.
          </p>
        </div>
      </div>
    </section>
  );
};
