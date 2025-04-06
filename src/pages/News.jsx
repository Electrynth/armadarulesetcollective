const News = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8 font-montserrat">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#C14949] to-purple-500 text-transparent bg-clip-text">
          Latest News
        </h1>
        <div className="space-y-6">
          <article className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg ring-1 ring-gray-800 hover:ring-[#C14949]/50 transition-all">
            <h2 className="text-2xl font-semibold text-[#C14949] mb-2">Latest Rules Update</h2>
            <p className="text-gray-300">Stay tuned for the latest rules updates and clarifications.</p>
            <div className="mt-4 text-sm text-gray-400">Posted on April 6, 2024</div>
          </article>
          <article className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg ring-1 ring-gray-800 hover:ring-[#C14949]/50 transition-all">
            <h2 className="text-2xl font-semibold text-[#C14949] mb-2">Community Tournament Results</h2>
            <p className="text-gray-300">Check out the latest tournament results and winning strategies.</p>
            <div className="mt-4 text-sm text-gray-400">Posted on April 5, 2024</div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default News; 