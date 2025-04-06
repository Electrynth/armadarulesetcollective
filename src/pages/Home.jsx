const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8 font-montserrat">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#C14949] to-purple-500 text-transparent bg-clip-text">
          Armada Ruleset Collective
        </h1>
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          Your central hub for Star Wars: Armada rules, resources, and community updates.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg ring-1 ring-gray-800 hover:ring-[#C14949]/50 transition-all">
            <h2 className="text-2xl font-semibold text-[#C14949] mb-3">Latest Updates</h2>
            <p className="text-gray-300">Stay informed with the latest rules clarifications and community news.</p>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg ring-1 ring-gray-800 hover:ring-[#C14949]/50 transition-all">
            <h2 className="text-2xl font-semibold text-[#C14949] mb-3">Resources</h2>
            <p className="text-gray-300">Access comprehensive guides, fleet builders, and strategy resources.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 