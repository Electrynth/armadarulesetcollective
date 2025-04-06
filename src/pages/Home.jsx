import ARC_Logo_No_Text from '../assets/ARC Logo no text Transparent.png';

const Home = () => {
  return (
    <div className="min-h-screen p-8 font-montserrat">
      <div className="max-w-4xl mx-auto mt-12">
        <div className="bg-[#C14949]/20 backdrop-blur-sm p-4 rounded-lg ring-1 ring-[#C14949]/50 mb-8 text-center">
          <p className="text-[#C14949] font-semibold">
            🚧 Under Construction - This site is actively being developed. Some features may be incomplete or subject to change. 🚧
          </p>
        </div>
        
        <div className="flex flex-col items-center mb-8 space-y-[-1.5rem]">
          <img 
            src={ARC_Logo_No_Text} 
            alt="Armada Ruleset Collective Logo" 
            className="w-64 h-64 md:w-96 md:h-96 object-contain"
          />
          <h1 className="text-[80px] md:text-[120px] lg:text-[144px] font-bold text-white">
            ARC
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mt-4 md:mt-0">
            Armada Ruleset Collective
          </h2>
        </div>
        
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