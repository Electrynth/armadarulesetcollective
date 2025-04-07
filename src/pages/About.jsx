import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen p-8 font-montserrat">
      <div className="max-w-4xl mx-auto mt-8">
        <div className="bg-[#C14949]/20 backdrop-blur-sm p-4 rounded-lg ring-1 ring-[#C14949]/50 mb-8 text-center">
          <p className="text-[#C14949] font-semibold">
            🚧 Under Construction - This site is actively being developed. Some features may be incomplete or subject to change. 🚧
          </p>
        </div>
        
        <h1 className="text-5xl font-bold mb-6 text-white">
          About Us
        </h1>
        
        {/* Introduction Section */}
        <div className="bg-gray-800/90 backdrop-blur-sm p-8 rounded-lg ring-1 ring-gray-700/50 mb-8">
          <p className="text-xl text-gray-300 mb-6 leading-relaxed">
            The Armada Ruleset Collective is dedicated to providing accurate, up-to-date rules and resources
            for Star Wars: Armada players worldwide.
          </p>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Our mission is to support the Armada community by maintaining a comprehensive rules database
            and providing tools to enhance the gaming experience.
          </p>
        </div>
        
        {/* Mission & Values Section */}
        <div className="bg-gray-800/90 backdrop-blur-sm p-8 rounded-lg ring-1 ring-gray-700/50 mb-8">
          <h2 className="text-3xl font-semibold text-white mb-6">Our Mission & Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-700/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Accuracy</h3>
              <p className="text-gray-300">
                We are committed to providing the most accurate and up-to-date rules information for Star Wars: Armada players.
              </p>
            </div>
            
            <div className="bg-gray-700/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Community</h3>
              <p className="text-gray-300">
                We believe in fostering a supportive and inclusive community where players can learn, grow, and enjoy the game together.
              </p>
            </div>
            
            <div className="bg-gray-700/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Transparency</h3>
              <p className="text-gray-300">
                We are open about our processes, decisions, and the reasoning behind rule interpretations and clarifications.
              </p>
            </div>
            
            <div className="bg-gray-700/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Education</h3>
              <p className="text-gray-300">
                We are dedicated to helping players of all skill levels understand the game better through clear explanations and learning resources.
              </p>
            </div>
            
            <div className="bg-gray-700/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Collaboration</h3>
              <p className="text-gray-300">
                We work together with players, organizers, and the broader community to develop and refine our resources and rules interpretations.
              </p>
            </div>
            
            <div className="bg-gray-700/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Balance</h3>
              <p className="text-gray-300">
                We are committed to fostering a balanced competitive environment where all factions have a chance to succeed with various strategies.
              </p>
            </div>
          </div>
          
          <p className="text-gray-300">
            These core values guide everything we do at ARC, from rule clarifications to community engagement and future development.
          </p>
        </div>
        
        {/* Future Vision Section */}
        <div className="bg-gray-800/90 backdrop-blur-sm p-8 rounded-lg ring-1 ring-gray-700/50 mb-8">
          <h2 className="text-3xl font-semibold text-white mb-6">Our Future Vision</h2>
          
          <p className="text-xl text-gray-300 mb-6 leading-relaxed">
            ARC is constantly evolving to better serve the Star Wars: Armada community. Here's what we're working towards:
          </p>
          
          <ul className="list-disc list-inside text-gray-300 space-y-3 mb-6">
            <li>Expanding our rules database with more comprehensive clarifications and examples</li>
            <li>Developing new tools to help players learn and master the game</li>
            <li>Creating a more robust competitive scene with standardized rules and formats</li>
            <li>Building a stronger global community of Armada players</li>
            <li>Introducing ARC-approved content to enhance the competitive experience</li>
            <li>Implementing a more interactive platform for community feedback and discussion</li>
          </ul>
          
          <p className="text-gray-300">
            We believe that by working together with the community, we can create an even better experience for Star Wars: Armada players worldwide.
          </p>
        </div>
        
        {/* FAQ Integration Section */}
        <div className="bg-gray-800/90 backdrop-blur-sm p-8 rounded-lg ring-1 ring-gray-700/50 mb-8">
          <h2 className="text-3xl font-semibold text-white mb-6">Common Questions</h2>
          
          <p className="text-xl text-gray-300 mb-6 leading-relaxed">
            Have questions about ARC? Check out our frequently asked questions for quick answers to common inquiries.
          </p>
          
          <div className="bg-gray-700/50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold text-white mb-3">What is ARC?</h3>
            <p className="text-gray-300 mb-4">
              ARC is a community-driven initiative dedicated to providing accurate, up-to-date rules and resources for Star Wars: Armada players worldwide.
            </p>
            <Link to="/faq" className="text-[#C14949] hover:text-[#D15A5A] transition-colors font-medium">
              Learn more about ARC →
            </Link>
          </div>
          
          <div className="bg-gray-700/50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold text-white mb-3">How often are rules updated?</h3>
            <p className="text-gray-300 mb-4">
              ARC will update the rules and/or make changes to the competitive ruleset approximately twice a year, with possible minor changes throughout the year.
            </p>
            <Link to="/faq" className="text-[#C14949] hover:text-[#D15A5A] transition-colors font-medium">
              See all FAQ answers →
            </Link>
          </div>
          
          <div className="text-center">
            <Link 
              to="/faq" 
              className="inline-block bg-[#C14949] hover:bg-[#D15A5A] text-white px-6 py-3 rounded-lg transition-colors font-medium"
            >
              View All FAQs
            </Link>
          </div>
        </div>
        
        {/* Contact Section */}
        <div className="bg-gray-800/90 backdrop-blur-sm p-8 rounded-lg ring-1 ring-gray-700/50">
          <h2 className="text-3xl font-semibold text-white mb-6">Contact Us</h2>
          
          <p className="text-xl text-gray-300 mb-6 leading-relaxed">
            Have questions or suggestions? Reach out to us through our community channels.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-gray-700/50 text-white px-6 py-3 rounded-lg ring-1 ring-gray-600/50 hover:bg-gray-600/50 transition-all">
              Discord
            </button>
            <button className="bg-gray-700/50 text-white px-6 py-3 rounded-lg ring-1 ring-gray-600/50 hover:bg-gray-600/50 transition-all">
              Facebook
            </button>
            <button className="bg-gray-700/50 text-white px-6 py-3 rounded-lg ring-1 ring-gray-600/50 hover:bg-gray-600/50 transition-all">
              Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 