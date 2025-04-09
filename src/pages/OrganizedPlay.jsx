import React from 'react';
import { Link } from 'react-router-dom';

const OrganizedPlay = () => {
  // Tournament categories with their items
  const tournamentCategories = [
    {
      title: "Tournament Formats",
      description: "Information about different tournament formats for Star Wars: Armada.",
      icon: "🏆",
      items: [
        { title: "Standard Tournament Format", link: "#", description: "The standard tournament format used for most official events." },
        { title: "Custom Tournament Formats", link: "#", description: "Alternative tournament formats for special events." },
        { title: "Special Event Formats", link: "#", description: "Unique formats for themed tournaments and special occasions." },
        { title: "Tournament Rules and Guidelines", link: "#", description: "Comprehensive rules and guidelines for tournament play." }
      ]
    },
    {
      title: "Tournament Resources",
      description: "Tools and resources for tournament organizers and players.",
      icon: "🛠️",
      items: [
        { title: "Tournament Scoring Systems", link: "#", description: "Different scoring systems used in tournaments." },
        { title: "Tournament Pairings Tools", link: "#", description: "Software and tools for managing tournament pairings." },
        { title: "Tournament Management Software", link: "#", description: "Applications to help organize and run tournaments." },
        { title: "Tournament Reporting Templates", link: "#", description: "Templates for reporting tournament results and statistics." }
      ]
    },
    {
      title: "Tournament Preparation",
      description: "Guides and tips for preparing for tournaments.",
      icon: "📋",
      items: [
        { title: "Fleet Building for Tournaments", link: "#", description: "Strategies for building competitive fleets for tournaments." },
        { title: "Practice Strategies", link: "#", description: "Effective ways to practice and improve before tournaments." },
        { title: "Mental Preparation", link: "#", description: "Tips for mental preparation and maintaining focus during tournaments." },
        { title: "Tournament Day Checklist", link: "#", description: "Essential items and preparations for tournament day." }
      ]
    },
    {
      title: "Tournament Organizer Guide",
      description: "Comprehensive guide for tournament organizers.",
      icon: "👨‍💼",
      items: [
        { title: "Tournament Setup Guide", link: "#", description: "Step-by-step guide for setting up a tournament." },
        { title: "Running a Tournament", link: "#", description: "Best practices for running a smooth tournament." },
        { title: "Managing Players and Pairings", link: "#", description: "Tips for managing players and creating fair pairings." },
        { title: "Tournament Promotion", link: "#", description: "Strategies for promoting your tournament to the community." }
      ]
    },
    {
      title: "Upcoming Tournaments",
      description: "Calendar of upcoming tournaments and events for Star Wars: Armada.",
      icon: "📅",
      items: [
        { title: "Regional Tournaments", link: "#", description: "Upcoming regional tournaments across different areas." },
        { title: "National Championships", link: "#", description: "National championship events and qualifiers." },
        { title: "International Events", link: "#", description: "Major international tournaments and events." },
        { title: "Local Tournaments", link: "#", description: "Local tournament listings by region." }
      ]
    },
    {
      title: "Tournament Results",
      description: "Results from past tournaments and analysis of winning fleets.",
      icon: "📊",
      items: [
        { title: "Recent Tournament Results", link: "#", description: "Results from recently completed tournaments." },
        { title: "Historical Tournament Data", link: "#", description: "Archive of past tournament results and statistics." },
        { title: "Winning Fleet Analysis", link: "#", description: "Analysis of fleets that performed well in tournaments." },
        { title: "Meta Evolution", link: "#", description: "How the competitive meta has evolved through tournaments." }
      ]
    }
  ];

  return (
    <div className="min-h-screen p-8 font-montserrat">
      <div className="max-w-6xl mx-auto mt-8">
        {/* Under Construction Banner */}
        <div className="bg-yellow-900/90 backdrop-blur-sm p-6 rounded-xl ring-1 ring-yellow-700/50 mb-8 text-center">
          <h2 className="text-3xl font-bold text-yellow-200 mb-2">🚧 Under Construction 🚧</h2>
          <p className="text-yellow-100 text-lg">
            This page is currently under development. Content will be added soon!
          </p>
        </div>
        
        <h1 className="text-5xl font-bold mb-6 text-white text-center">
          Organized Play
        </h1>
        
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          Welcome to the ARC Organized Play page. Here you'll find information about tournaments, events, and competitive play for Star Wars: Armada.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tournamentCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-gray-800/90 backdrop-blur-sm p-6 rounded-xl ring-1 ring-gray-700/50 overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  <span className="mr-2">{category.icon}</span>
                  {category.title}
                </h2>
                
                <p className="text-gray-300 mb-4">
                  {category.description}
                </p>
                
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="border-t border-gray-700/50 pt-3">
                      <h3 className="text-lg font-medium text-white mb-1">{item.title}</h3>
                      <p className="text-gray-400 text-sm mb-2">{item.description}</p>
                      {item.link.startsWith('http') ? (
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-[#C14949] hover:text-[#D15A5A] transition-colors text-sm font-medium"
                        >
                          Visit site →
                        </a>
                      ) : (
                        <Link 
                          to={item.link} 
                          className="text-[#C14949] hover:text-[#D15A5A] transition-colors text-sm font-medium"
                        >
                          Learn more →
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-gray-800/90 backdrop-blur-sm p-8 rounded-xl ring-1 ring-gray-700/50">
          <h2 className="text-2xl font-semibold text-white mb-4 text-center">Suggest a Tournament</h2>
          <p className="text-gray-300 mb-6 text-center">
            Know of a tournament that should be included here? We'd love to hear about it! Please reach out to us through our community channels.
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

export default OrganizedPlay; 