export const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center px-4 py-16 max-w-6xl mx-auto">
      <div className="inline-flex items-center px-4 py-2 rounded-full bg-opacity-20 bg-blue-500 mb-8">
        <span className="text-primary text-sm"> Introducing Craaib 🦀</span>
      </div>

      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 max-w-4xl">
        AI Agents for the Future of SUI
      </h1>

      <p className="text-gray-400 text-xl mb-12 max-w-3xl">
        Create intelligent agents that monitor markets, analyze trends, and
        execute strategies across the SUI ecosystem.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-white hover:text-primary transition-colors">
          Launch Platform
        </button>
        <button className="px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center gap-2">
          Watch Demo ▶
        </button>
      </div>
    </section>
  );
};
