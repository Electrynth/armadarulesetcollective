const News = () => {
  return (
    <div className="min-h-screen p-8 font-montserrat">
      <div className="max-w-4xl mx-auto mt-8">
        <div className="bg-[#C14949]/20 backdrop-blur-sm p-4 rounded-lg ring-1 ring-[#C14949]/50 mb-8 text-center">
          <p className="text-[#C14949] font-semibold">
            🚧 Under Construction - This site is actively being developed. Some features may be incomplete or subject to change. 🚧
          </p>
        </div>
        
        <h1 className="text-5xl font-bold mb-6 text-white">
          Latest News
        </h1>
        <div className="space-y-6">
          <article className="bg-gray-800/90 backdrop-blur-sm p-6 rounded-lg ring-1 ring-gray-700/50">
            <h2 className="text-2xl font-semibold text-white mb-2">Latest Rules Update</h2>
            <p className="text-gray-300">Stay tuned for the latest rules updates and clarifications.</p>
            <div className="mt-4 text-sm text-gray-400">Posted on April 6, 2024</div>
          </article>
          <article className="bg-gray-800/90 backdrop-blur-sm p-6 rounded-lg ring-1 ring-gray-700/50">
            <h2 className="text-2xl font-semibold text-white mb-2">Community Tournament Results</h2>
            <p className="text-gray-300">Check out the latest tournament results and winning strategies.</p>
            <div className="mt-4 text-sm text-gray-400">Posted on April 5, 2024</div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default News; 