const Resources = () => {
  return (
    <div className="min-h-screen p-8 font-montserrat">
      <div className="max-w-4xl mx-auto mt-8">
        <div className="bg-[#C14949]/20 backdrop-blur-sm p-4 rounded-lg ring-1 ring-[#C14949]/50 mb-8 text-center">
          <p className="text-[#C14949] font-semibold">
            🚧 Under Construction - This site is actively being developed. Some features may be incomplete or subject to change. 🚧
          </p>
        </div>
        
        <h1 className="text-5xl font-bold mb-6 text-white">
          Resources
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800/90 backdrop-blur-sm p-6 rounded-lg ring-1 ring-gray-700/50">
            <h2 className="text-2xl font-semibold text-white mb-3">Rules Reference</h2>
            <p className="text-gray-300 mb-4">Access the complete rules reference guide.</p>
            <button className="bg-gray-800/90 backdrop-blur-sm text-white px-4 py-2 rounded-full ring-1 ring-gray-700/50 hover:bg-gray-700/90 transition-all">
              View Rules
            </button>
          </div>
          <div className="bg-gray-800/90 backdrop-blur-sm p-6 rounded-lg ring-1 ring-gray-700/50">
            <h2 className="text-2xl font-semibold text-white mb-3">Fleet Builder</h2>
            <p className="text-gray-300 mb-4">Build and share your fleets.</p>
            <button className="bg-gray-800/90 backdrop-blur-sm text-white px-4 py-2 rounded-full ring-1 ring-gray-700/50 hover:bg-gray-700/90 transition-all">
              Build Fleet
            </button>
          </div>
          <div className="bg-gray-800/90 backdrop-blur-sm p-6 rounded-lg ring-1 ring-gray-700/50">
            <h2 className="text-2xl font-semibold text-white mb-3">Strategy Guides</h2>
            <p className="text-gray-300 mb-4">Learn advanced strategies and tactics.</p>
            <button className="bg-gray-800/90 backdrop-blur-sm text-white px-4 py-2 rounded-full ring-1 ring-gray-700/50 hover:bg-gray-700/90 transition-all">
              View Guides
            </button>
          </div>
          <div className="bg-gray-800/90 backdrop-blur-sm p-6 rounded-lg ring-1 ring-gray-700/50">
            <h2 className="text-2xl font-semibold text-white mb-3">Community Resources</h2>
            <p className="text-gray-300 mb-4">Connect with the Armada community.</p>
            <button className="bg-gray-800/90 backdrop-blur-sm text-white px-4 py-2 rounded-full ring-1 ring-gray-700/50 hover:bg-gray-700/90 transition-all">
              Join Community
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources; 