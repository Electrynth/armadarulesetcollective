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
        
        <div className="flex flex-col items-center mb-8">
          <img 
            src={ARC_Logo_No_Text} 
            alt="Armada Ruleset Collective Logo" 
            className="w-56 h-56 md:w-88 md:h-88 object-contain mb-2"
          />
          <h1 className="text-[72px] md:text-[108px] lg:text-[130px] font-black text-white tracking-tighter mb-2">
            ARC
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
            Armada Ruleset Collective
          </h2>
        </div>
        
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          Your central hub for Star Wars: Armada rules, resources, and community updates.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="bg-gray-800/90 backdrop-blur-sm p-6 rounded-lg ring-1 ring-gray-700/50">
            <h2 className="text-2xl font-semibold text-white mb-3">Latest Updates</h2>
            <p className="text-gray-300">Stay informed with the latest rules clarifications and community news.</p>
          </div>
          <div className="bg-gray-800/90 backdrop-blur-sm p-6 rounded-lg ring-1 ring-gray-700/50">
            <h2 className="text-2xl font-semibold text-white mb-3">Resources</h2>
            <p className="text-gray-300">Access comprehensive guides, fleet builders, and strategy resources.</p>
          </div>
          <div className="bg-gray-800/90 backdrop-blur-sm p-6 rounded-lg ring-1 ring-gray-700/50 md:col-span-2">
            <h2 className="text-2xl font-semibold text-white mb-3">Join Our Discord Community</h2>
            <p className="text-gray-300 mb-4">Connect with fellow Armada players, discuss strategies, and stay updated with the latest news.</p>
            <div className="flex justify-center">
              <iframe
                src="https://discord.com/widget?id=219608175333081088&theme=dark"
                width="100%"
                height="350"
                className="rounded-lg h-[350px] md:h-[500px] w-full max-w-2xl"
                allowTransparency="true"
                frameBorder="0"
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 