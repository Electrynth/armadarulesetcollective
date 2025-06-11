import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen p-8 font-montserrat">
      <div className="max-w-6xl mx-auto mt-8">
        <h1 className="text-5xl font-bold mb-6 text-white text-center">
          About ARC
        </h1>
      </div>
      {/* Mission & Values Section */}
      <div className="bg-gray-800/90 backdrop-blur-sm p-8 rounded-xl ring-1 ring-gray-700/50 mb-8">
          {/* Purpose Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-white mb-4">Our Purpose</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-700/50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-3">Living Ruleset</h3>
                <p className="text-gray-300">
                  We will ensure Star Wars: Armada has a living ruleset so Tournament Organizers and players will always have access to the most up-to-date and accurate information on rules.
                </p>
              </div>
              
              <div className="bg-gray-700/50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-3">Competitive Balance</h3>
                <p className="text-gray-300">
                  We will keep the Star Wars: Armada competitive scene vibrant and interesting by ensuring balanced and varied gameplay.
                </p>
              </div>
              
              <div className="bg-gray-700/50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-3">Tournament Support</h3>
                <p className="text-gray-300">
                  We will work with Tournament Organizers to continue an organized play structure, encouraging consistency, coordination, and collaboration of Star Wars: Armada events worldwide.
                </p>
              </div>
            </div>
          </div>

          {/* Structure Section */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-white mb-4">Our Structure</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-700/50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-3">Core Executive</h3>
                <p className="text-gray-300">
                  Our Core Executive is composed of 3-5 people, whom are charged with setting organizational goals, guiding ARC towards those goals, and making personnel decisions about ARC membership.
                </p>
              </div>
              
              <div className="bg-gray-700/50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-3">Project Manager</h3>
                <p className="text-gray-300">
                  Our Project Manager attends to the details of keeping an organization running smoothly. They are usually a non-voting member of the Core Executive, but may cast a tiebreaking vote if the Core Executive is deadlocked.
                </p>
              </div>
              
              <div className="bg-gray-700/50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-3">Playtesting</h3>
                <p className="text-gray-300">
                  Our Playtest Manager coordinates amongst playtest leads, organizing internal test tournaments, and collecting feedback. Additionally, playtesters are drawn from various geographic regions to maintain feedback diversity.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <a 
              href="/assets/ARC TOR v1.01.md"
              download="ARC_Terms_of_Reference_v1.01.md"
              className="inline-flex items-center gap-2 bg-[#C14949] hover:bg-[#D15A5A] text-white px-6 py-3 rounded-xl transition-colors font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
              </svg>
              Download Terms of Reference
            </a>
          </div>
        </div>

        {/* Guiding Principles Section */}
        <div className="bg-gray-800/90 backdrop-blur-sm p-8 rounded-xl ring-1 ring-gray-700/50 mb-8">
          <h2 className="text-3xl font-semibold text-white mb-6">Guiding Principles</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-700/50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-3">Systems Approach</h3>
              <p className="text-gray-300">
                We examine gameplay at both systems level (squadrons, objectives, fleet archetypes) and individual card level, with careful consideration of the complexity and impact of changes.
              </p>
            </div>

            <div className="bg-gray-700/50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-3">Balance Philosophy</h3>
              <p className="text-gray-300">
                We prefer buffing underperforming elements over nerfing overperforming ones, while maintaining a wide variety of viable fleet archetypes across all factions.
              </p>
            </div>

            <div className="bg-gray-700/50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-3">Update Schedule</h3>
              <p className="text-gray-300">
                We maintain a balanced pace of rules releases, currently planning for biannual updates to allow players time to adapt while keeping the game fresh and engaging.
              </p>
            </div>

            <div className="bg-gray-700/50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-3">Core Principles</h3>
              <p className="text-gray-300">
                We take a conservative approach to changes while recognizing the need for evolution. All changes will made with clear intentions and transparent communication.
              </p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <a 
              href="/assets/ARC Guiding Principles v1.0.md"
              download="ARC_Guiding_Principles_v1.0.md"
              className="inline-flex items-center gap-2 bg-[#C14949] hover:bg-[#D15A5A] text-white px-6 py-3 rounded-xl transition-colors font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
              </svg>
              Download Guiding Principles
            </a>
          </div>
        </div>

        {/* Core Members Section */}
        <div className="bg-gray-800/90 backdrop-blur-sm p-8 rounded-xl ring-1 ring-gray-700/50 mb-8">
          <h2 className="text-3xl font-semibold text-white mb-6">Core Executive Members</h2>
          <div className="bg-gray-700/50 p-6 rounded-xl mb-6">
            <div className="flex items-center justify-center gap-3 text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
              </svg>
              <p className="text-lg">This section is currently under construction</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Member 1 */}
            <div className="bg-gray-700/50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-1">Nick Brown</h3>
              <p className="text-gray-400 text-sm mb-1">@nick</p>
              <p className="text-gray-400 text-sm mb-4">📍 California, USA</p>
            </div>
            
            {/* Member 2 */}
            <div className="bg-gray-700/50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-1">Mackenzie Dalla Lana</h3>
              <p className="text-gray-400 text-sm mb-1">@largepackage</p>
              <p className="text-gray-400 text-sm mb-4">📍 BC, Canada</p>
              <p className="text-gray-300">
                
              </p>
            </div>
            
            
            {/* Member 3 */}
            <div className="bg-gray-700/50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-1">Nick Larson</h3>
              <p className="text-gray-400 text-sm mb-1">@unskilledfirstofficer</p>
              <p className="text-gray-400 text-sm mb-4">📍 California, USA</p>
            </div>
            
            {/* Member 4 */}
            <div className="bg-gray-700/50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-1">Lewis Wright</h3>
              <p className="text-gray-400 text-sm mb-1">@lark</p>
              <p className="text-gray-400 text-sm mb-4">📍 England, UK</p>
              <p className="text-gray-300">
                
              </p>
            </div>
            
            {/* Member 5 */}
            <div className="bg-gray-700/50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-1">James Chen</h3>
              <p className="text-gray-400 text-sm mb-1">@maturin</p>
              <p className="text-gray-400 text-sm mb-4">📍 BC, Canada</p>
            </div>
          </div>
        </div>

        {/* Supporting Members Section */}
        <div className="bg-gray-800/90 backdrop-blur-sm p-8 rounded-xl ring-1 ring-gray-700/50 mb-8">
          <h2 className="text-3xl font-semibold text-white mb-6">Supporting Members</h2>
          
          <div className="bg-gray-700/50 p-6 rounded-xl mb-6">
            <div className="flex items-center justify-center gap-3 text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
              </svg>
              <p className="text-lg">This section is currently under construction</p>
            </div>
          </div>
          
          <p className="text-gray-300 text-center">
            We are in the process of recognizing our supporting members who contribute to the Armada community.
            Check back soon for updates!
          </p>
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
              href="mailto:contact@armadarulesetcollective.com"
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
  );
};

export default About; 