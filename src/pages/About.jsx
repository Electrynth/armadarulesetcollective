const About = () => {
  return (
    <div className="min-h-screen p-8 font-montserrat">
      <div className="max-w-4xl mx-auto mt-12">
        <h1 className="text-5xl font-bold mb-6 text-white hover:text-[#666666] transition-all">
          About Us
        </h1>
        <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg ring-1 ring-gray-800">
          <p className="text-xl text-gray-300 mb-6 leading-relaxed">
            The Armada Ruleset Collective is dedicated to providing accurate, up-to-date rules and resources
            for Star Wars: Armada players worldwide.
          </p>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Our mission is to support the Armada community by maintaining a comprehensive rules database
            and providing tools to enhance the gaming experience.
          </p>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-[#C14949] mb-4">Contact Us</h2>
            <p className="text-gray-300 mb-4">
              Have questions or suggestions? Reach out to us through our community channels.
            </p>
            <div className="flex space-x-4">
              <button className="bg-[#C14949]/20 text-[#C14949] px-4 py-2 rounded-full ring-1 ring-[#C14949]/50 hover:bg-[#C14949]/30 transition-all">
                Discord
              </button>
              <button className="bg-[#C14949]/20 text-[#C14949] px-4 py-2 rounded-full ring-1 ring-[#C14949]/50 hover:bg-[#C14949]/30 transition-all">
                Twitter
              </button>
              <button className="bg-[#C14949]/20 text-[#C14949] px-4 py-2 rounded-full ring-1 ring-[#C14949]/50 hover:bg-[#C14949]/30 transition-all">
                Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 