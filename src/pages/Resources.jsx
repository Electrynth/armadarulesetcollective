import { Link } from 'react-router-dom';

const Resources = () => {
  // Resource categories with their items
  const resourceCategories = [
    {
      title: "Rules Reference",
      description: "Comprehensive guides and references for Star Wars: Armada rules.",
      icon: "📚",
      items: [
        { title: "Official Rules Reference", link: "#", description: "The complete official rules reference document." },
        { title: "Rules Clarifications", link: "#", description: "Official clarifications and errata for specific rules." },
        { title: "Rule Interpretations", link: "#", description: "ARC's interpretations of complex rule interactions." },
        { title: "Rules Quiz", link: "#", description: "Test your knowledge of Star Wars: Armada rules." }
      ]
    },
    {
      title: "Fleet Builders",
      description: "Tools to help you build and optimize your fleets.",
      icon: "🚀",
      items: [
        { title: "ARC Fleet Builder", link: "#", description: "Our official fleet building tool with the latest updates." },
        { title: "Alternative Fleet Builders", link: "#", description: "Community-created fleet building tools." },
        { title: "Fleet Templates", link: "#", description: "Pre-built fleet templates for different playstyles." },
        { title: "Fleet Analysis Tools", link: "#", description: "Tools to analyze fleet strengths and weaknesses." }
      ]
    },
    {
      title: "Strategy Guides",
      description: "In-depth guides to help you improve your gameplay.",
      icon: "🎯",
      items: [
        { title: "Faction Guides", link: "#", description: "Strategy guides for each faction." },
        { title: "Ship Guides", link: "#", description: "Detailed guides for specific ships and their optimal uses." },
        { title: "Squadron Guides", link: "#", description: "Information about different squadrons and their roles." },
        { title: "Commander Guides", link: "#", description: "Strategies for using different commanders effectively." }
      ]
    },
    {
      title: "Tournament Resources",
      description: "Resources for tournament players and organizers.",
      icon: "🏆",
      items: [
        { title: "Tournament Formats", link: "#", description: "Different tournament formats and their rules." },
        { title: "Tournament Preparation", link: "#", description: "Guides to help you prepare for tournaments." },
        { title: "Scoring Systems", link: "#", description: "Information about different scoring systems used in tournaments." },
        { title: "Tournament Organizer Guide", link: "#", description: "Resources for organizing your own tournaments." }
      ]
    },
    {
      title: "Card Database",
      description: "Comprehensive information about all Star Wars: Armada cards.",
      icon: "🃏",
      items: [
        { title: "Ship Cards", link: "#", description: "Database of all ship cards and their abilities." },
        { title: "Squadron Cards", link: "#", description: "Database of all squadron cards and their abilities." },
        { title: "Upgrade Cards", link: "#", description: "Database of all upgrade cards and their effects." },
        { title: "Commander Cards", link: "#", description: "Database of all commander cards and their abilities." }
      ]
    },
    {
      title: "Scenario Guides",
      description: "Guides for playing specific scenarios or mission types.",
      icon: "🗺️",
      items: [
        { title: "Official Scenarios", link: "#", description: "Guides for official Star Wars: Armada scenarios." },
        { title: "Custom Scenarios", link: "#", description: "Community-created scenarios with rules and setup instructions." },
        { title: "Campaign Guides", link: "#", description: "Resources for running narrative campaigns." },
        { title: "Scenario Creation Guide", link: "#", description: "Guidelines for creating balanced custom scenarios." }
      ]
    },
    {
      title: "Video Tutorials",
      description: "Video content explaining game mechanics, strategies, or specific rules.",
      icon: "🎥",
      items: [
        { title: "Rules Tutorials", link: "#", description: "Videos explaining specific rules and mechanics." },
        { title: "Strategy Tutorials", link: "#", description: "Videos with strategic advice and tips." },
        { title: "Battle Reports", link: "#", description: "Recorded games with commentary and analysis." },
        { title: "Tournament Coverage", link: "#", description: "Coverage of major tournaments and matches." }
      ]
    },
    {
      title: "Print & Play Resources",
      description: "Templates for tokens, markers, or other game components.",
      icon: "🖨️",
      items: [
        { title: "Token Templates", link: "#", description: "Printable templates for game tokens and markers." },
        { title: "Card Sleeves", link: "#", description: "Information about card sleeves and protection." },
        { title: "Storage Solutions", link: "#", description: "Ideas and templates for storing your Armada collection." },
        { title: "Custom Components", link: "#", description: "Templates for custom game components." }
      ]
    },
    {
      title: "New Player Resources",
      description: "Specifically curated content for players new to Star Wars: Armada.",
      icon: "🌱",
      items: [
        { title: "Getting Started Guide", link: "#", description: "A comprehensive guide for new players." },
        { title: "Basic Strategies", link: "#", description: "Simple strategies to help you get started." },
        { title: "Faction Overview", link: "#", description: "Introduction to each faction and their playstyles." },
        { title: "Common Mistakes", link: "#", description: "Common mistakes to avoid as a new player." }
      ]
    },
    {
      title: "Meta Analysis",
      description: "Information about current competitive meta, popular fleet builds, and trends.",
      icon: "📊",
      items: [
        { title: "Current Meta Report", link: "#", description: "Analysis of the current competitive meta." },
        { title: "Popular Fleet Builds", link: "#", description: "Information about popular fleet builds in the current meta." },
        { title: "Meta Trends", link: "#", description: "Analysis of how the meta has evolved over time." },
        { title: "Counter Strategies", link: "#", description: "Strategies for countering popular fleet builds." }
      ]
    },
    {
      title: "Errata & FAQ",
      description: "Official errata and frequently asked questions about specific rules or cards.",
      icon: "❓",
      items: [
        { title: "Official Errata", link: "#", description: "Official errata from Fantasy Flight Games/Atomic Mass Games." },
        { title: "ARC FAQ", link: "#", description: "Frequently asked questions answered by the ARC team." },
        { title: "Community FAQ", link: "#", description: "Questions frequently asked by the community." },
        { title: "Rules Disputes", link: "#", description: "Resolution of common rules disputes." }
      ]
    },
    {
      title: "Community Tools",
      description: "Tools created by the community that enhance the gaming experience.",
      icon: "🛠️",
      items: [
        { title: "Community Apps", link: "#", description: "Applications created by the community for Armada players." },
        { title: "Online Tools", link: "#", description: "Online tools for various aspects of the game." },
        { title: "Discord Bots", link: "#", description: "Bots for Discord servers related to Star Wars: Armada." },
        { title: "Community Scripts", link: "#", description: "Scripts and utilities created by the community." }
      ]
    },
    {
      title: "Historical Archives",
      description: "Resources documenting the history of Star Wars: Armada.",
      icon: "📜",
      items: [
        { title: "Tournament History", link: "#", description: "Records of past tournaments and their results." },
        { title: "Meta Evolution", link: "#", description: "How the competitive meta has evolved over time." },
        { title: "Game History", link: "#", description: "History of Star Wars: Armada and its development." },
        { title: "Community Milestones", link: "#", description: "Important milestones in the Armada community." }
      ]
    },
    {
      title: "Custom Content",
      description: "Guidelines for creating balanced custom content for casual play.",
      icon: "🎨",
      items: [
        { title: "Custom Ship Guidelines", link: "#", description: "Guidelines for creating balanced custom ships." },
        { title: "Custom Squadron Guidelines", link: "#", description: "Guidelines for creating balanced custom squadrons." },
        { title: "Custom Upgrade Guidelines", link: "#", description: "Guidelines for creating balanced custom upgrades." },
        { title: "Custom Scenario Guidelines", link: "#", description: "Guidelines for creating balanced custom scenarios." }
      ]
    },
    {
      title: "Accessibility Resources",
      description: "Tools and guides to make the game more accessible to players with different needs.",
      icon: "♿",
      items: [
        { title: "Color Blind Resources", link: "#", description: "Resources for color blind players." },
        { title: "Physical Accessibility", link: "#", description: "Resources for players with physical limitations." },
        { title: "Cognitive Accessibility", link: "#", description: "Resources for players with cognitive differences." },
        { title: "Accessibility Guidelines", link: "#", description: "Guidelines for making the game more accessible." }
      ]
    },
    {
      title: "Community Resources",
      description: "Resources created by and for the Star Wars: Armada community.",
      icon: "👥",
      items: [
        { title: "Community Forums", link: "#", description: "Forums where Armada players can discuss the game." },
        { title: "Discord Servers", link: "#", description: "Discord servers dedicated to Star Wars: Armada." },
        { title: "Facebook Groups", link: "#", description: "Facebook groups for Armada players." },
        { title: "Local Communities", link: "#", description: "Information about local Armada communities and play groups." }
      ]
    }
  ];

  return (
    <div className="min-h-screen p-8 font-montserrat">
      <div className="max-w-6xl mx-auto mt-8">
        <div className="bg-[#C14949]/20 backdrop-blur-sm p-4 rounded-lg ring-1 ring-[#C14949]/50 mb-8 text-center">
          <p className="text-[#C14949] font-semibold">
            🚧 Under Construction - This site is actively being developed. Some features may be incomplete or subject to change. 🚧
          </p>
        </div>
        
        <h1 className="text-5xl font-bold mb-6 text-white">
          Resources
        </h1>
        
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          Welcome to the ARC Resources page. Here you'll find a comprehensive collection of tools, guides, and information to help you get the most out of Star Wars: Armada. Whether you're a new player or a seasoned veteran, these resources are designed to enhance your gaming experience.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resourceCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-gray-800/90 backdrop-blur-sm rounded-lg ring-1 ring-gray-700/50 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{category.icon}</span>
                  <h2 className="text-2xl font-semibold text-white">{category.title}</h2>
                </div>
                
                <p className="text-gray-300 mb-4">
                  {category.description}
                </p>
                
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="border-t border-gray-700/50 pt-3">
                      <h3 className="text-lg font-medium text-white mb-1">{item.title}</h3>
                      <p className="text-gray-400 text-sm mb-2">{item.description}</p>
                      <Link 
                        to={item.link} 
                        className="text-[#C14949] hover:text-[#D15A5A] transition-colors text-sm font-medium"
                      >
                        Learn more →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-gray-800/90 backdrop-blur-sm p-8 rounded-lg ring-1 ring-gray-700/50">
          <h2 className="text-2xl font-semibold text-white mb-4">Suggest a Resource</h2>
          <p className="text-gray-300 mb-6">
            Know of a great resource that should be included here? We'd love to hear about it! Please reach out to us through our community channels.
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

export default Resources; 