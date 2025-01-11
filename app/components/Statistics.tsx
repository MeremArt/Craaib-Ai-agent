const stats = [
  { value: "1+", label: "Active Agents" },
  { value: "$10M", label: "Trading Volume" },
  { value: "99%", label: "Accuracy Rate" },
  { value: "5ms", label: "Response Time" },
];

export const Statistics = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-4 py-8">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
          <div className="text-gray-400">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};
