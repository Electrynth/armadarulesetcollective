import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen p-8 font-montserrat">
      <div className="max-w-6xl mx-auto mt-8">
        <h1 className="text-5xl font-bold mb-6 text-white text-center">
          About ARC
        </h1>
        
        {/* Introduction Section */}
        <div className="bg-gray-800/90 backdrop-blur-sm p-8 rounded-xl ring-1 ring-gray-700/50 mb-8">
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
        <div className="bg-gray-800/90 backdrop-blur-sm p-8 rounded-xl ring-1 ring-gray-700/50 mb-8">
          <h2 className="text-3xl font-semibold text-white mb-6">Our Mission & Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-700/50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-3">Consistency</h3>
              <p className="text-gray-300">
                We are committed to providing the most accurate and up-to-date rules information for Star Wars: Armada players.
              </p>
            </div>
            
            <div className="bg-gray-700/50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-3">Community</h3>
              <p className="text-gray-300">
                We believe in fostering a supportive and inclusive community where players can learn, grow, and enjoy the game together.
              </p>
            </div>
            
            <div className="bg-gray-700/50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-3">Transparency</h3>
              <p className="text-gray-300">
                We are open about our processes, decisions, and the reasoning behind rule interpretations and clarifications.
              </p>
            </div>
            
            <div className="bg-gray-700/50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-3">Knowledge</h3>
              <p className="text-gray-300">
                We are dedicated to helping players of all skill levels understand the game better through clear explanations and learning resources.
              </p>
            </div>
            
            <div className="bg-gray-700/50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-3">Collaboration</h3>
              <p className="text-gray-300">
                We work together with players, organizers, and the broader community to develop and refine our resources and rules interpretations.
              </p>
            </div>
            
            <div className="bg-gray-700/50 p-6 rounded-xl">
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
        
        {/* Core Members Section */}
        <div className="bg-gray-800/90 backdrop-blur-sm p-8 rounded-xl ring-1 ring-gray-700/50 mb-8">
          <h2 className="text-3xl font-semibold text-white mb-6">Core Members</h2>
          
          <p className="text-xl text-gray-300 mb-6 leading-relaxed">
            Meet the dedicated individuals who form the heart of the Armada Ruleset Collective.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Member 1 */}
            <div className="bg-gray-700/50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-1">Nick Brown</h3>
              <p className="text-gray-400 text-sm mb-1">Discord Name: @cactus.cooler</p>
              <p className="text-gray-400 text-sm mb-1">Armada Hub Discord: @nick</p>
              <p className="text-gray-400 text-sm mb-4">📍 Los Angeles, California, USA</p>
              <p className="text-gray-300">
                I am a long-time Star Wars: Armada player, playing the game since 2015 and have extensive experience in the competitive scene. I placed 4th at the 2019 World Championship and 6th at the 2025 World Championship. I believe my experience and knowledge of the game will help me provide the community with accurate rules and balanced competitive formats.
              </p>
              <br />
              <p className="text-gray-300">
                As part of ARC I focus on the technical development of ARC's tools and resources and support the other core members in their efforts. Outside of Armada, I am software engineer who also enjoys playing other tabletop and board games.
              </p>
            </div>
            
            {/* Member 2 */}
            <div className="bg-gray-700/50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-1">John Doe #1</h3>
              <p className="text-gray-400 text-sm mb-1">@johndoe1</p>
              <p className="text-gray-400 text-sm mb-4">📍 Location</p>
              <p className="text-gray-300">
                
              </p>
            </div>
            
            {/* Member 3 */}
            <div className="bg-gray-700/50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-1">John Doe #2</h3>
              <p className="text-gray-400 text-sm mb-1">@johndoe2</p>
              <p className="text-gray-400 text-sm mb-4">📍 Location</p>
              <p className="text-gray-300">
                
              </p>
            </div>
            
            {/* Member 4 */}
            <div className="bg-gray-700/50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-1">John Doe #3</h3>
              <p className="text-gray-400 text-sm mb-1">@johndoe3</p>
              <p className="text-gray-400 text-sm mb-4">📍 Location</p>
              <p className="text-gray-300">
                
              </p>
            </div>
            
            {/* Member 5 */}
            <div className="bg-gray-700/50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-1">John Doe #4</h3>
              <p className="text-gray-400 text-sm mb-1">@johndoe4</p>
              <p className="text-gray-400 text-sm mb-4">📍 Location</p>
              <p className="text-gray-300">
                
              </p>
            </div>
          </div>
        </div>
        
        {/* FAQ Integration Section */}
        <div className="bg-gray-800/90 backdrop-blur-sm p-8 rounded-xl ring-1 ring-gray-700/50 mb-8">
          <h2 className="text-3xl font-semibold text-white mb-6">Common Questions</h2>
          
          <p className="text-xl text-gray-300 mb-6 leading-relaxed">
            Have questions about ARC? Check out our frequently asked questions for quick answers to common inquiries.
          </p>
          
          <div className="bg-gray-700/50 p-6 rounded-xl mb-6">
            <h3 className="text-xl font-semibold text-white mb-3">What is ARC?</h3>
            <p className="text-gray-300 mb-4">
              ARC is a community-driven initiative dedicated to providing accurate, up-to-date rules and resources for Star Wars: Armada players worldwide.
            </p>
            <Link to="/faq" className="text-[#C14949] hover:text-[#D15A5A] transition-colors font-medium">
              Learn more about ARC →
            </Link>
          </div>
          
          <div className="bg-gray-700/50 p-6 rounded-xl mb-6">
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
              className="inline-block bg-[#C14949] hover:bg-[#D15A5A] text-white px-6 py-3 rounded-xl transition-colors font-medium"
            >
              View All FAQs
            </Link>
          </div>
        </div>
        
        {/* Contact Section */}
        <div className="bg-gray-800/90 backdrop-blur-sm p-8 rounded-xl ring-1 ring-gray-700/50">
          <h2 className="text-3xl font-semibold text-white mb-6">Contact Us</h2>
          
          <p className="text-xl text-gray-300 mb-6 leading-relaxed">
            Have questions or suggestions? Reach out to us through the ARC Discussion channel on the Armada Hub Discord or send us an email.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://discord.gg/WRMbfNkeMM"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#5865F2] text-white px-6 py-3 rounded-xl ring-1 ring-[#4752C4] hover:bg-[#4752C4] transition-all flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              Discord
            </a>
            <a 
              href="mailto:nbrown4296@gmail.com"
              className="bg-[#4CAF50] text-white px-6 py-3 rounded-xl ring-1 ring-[#3D8B40] hover:bg-[#45A049] transition-all flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 