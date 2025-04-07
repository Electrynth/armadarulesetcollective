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
      description: "Tools to help you build your fleets.",
      icon: "🚀",
      items: [
        { title: "Ryan Kingston's Fleet Builder", link: "https://armada.ryankingston.com", description: "Fleet builder by Ryan Kingston with comprehensive features." },
        { title: "Armada Warlords Fleet Builder", link: "https://armadawarlords.com/fleet-builder", description: "Fleet builder offering a visual card-style interface." },
        { title: "Star Forge", link: "https://star-forge.tools", description: "Modern fleet builder designed for speed, ease of use, and integration with community formats and content." },
        { title: "HoloFoundry", link: "https://holofoundry.com", description: "Fleet builder that hosts custom content, tools, and resources." },
        { title: "Armada Fleets Designer", link: "https://dmborque.eu/swm", description: "Fleet designer with unique visualization features and Android mobile app." }
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
        { title: "Tournament Web Platform", link: "#", description: "Websites for hosting and recording tournaments." },
        { title: "Tournament Formats", link: "#", description: "Different tournament formats and their rules." },
        { title: "Tournament Preparation", link: "#", description: "Guides to help you prepare for tournaments." },
        { title: "Scoring Systems", link: "#", description: "Information about different scoring systems used in tournaments." },
        { title: "Tournament Organizer Guide", link: "#", description: "Resources for organizing your own tournaments." }
      ]
    },
    {
      title: "Card Database",
      description: "Comprehensive information about all Star Wars: Armada cards.",
      icon: "📋",
      items: [
        { title: "Ship Cards", link: "#", description: "Database of all ship cards and their abilities." },
        { title: "Squadron Cards", link: "#", description: "Database of all squadron cards and their abilities." },
        { title: "Upgrade Cards", link: "#", description: "Database of all upgrade cards and their effects." },
        { title: "Commander Cards", link: "#", description: "Database of all commander cards and their abilities." }
      ]
    },
    {
      title: "Print & Play Resources",
      description: "Templates for cards, tokens, markers, and other game components.",
      icon: "🖨️",
      items: [
        { title: "Custom Cards", link: "#", description: "Printable templates for custom cards." },
        { title: "Token Templates", link: "#", description: "Printable templates for game tokens and markers." },
        { title: "Custom Components", link: "#", description: "Templates for custom game components." },
        { title: "Card Sleeves", link: "#", description: "Information about card sleeves and protection." }
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
      title: "Podcasts",
      description: "Audio content from the Star Wars: Armada community discussing strategy, news, and community events.",
      icon: "🎙️",
      items: [
        { title: "The Armada Podcast", link: "https://the-armada-podcast.simplecast.com", description: "Long-running podcast discussing Star Wars: Armada strategy, news, and community." }
      ]
    },
    {
      title: "YouTubers",
      description: "Video content creators specializing in Star Wars: Armada gameplay, strategy, and community content.",
      icon: "📺",
      items: [
        { title: "Crabbok", link: "https://www.youtube.com/c/Crabbok", description: "Popular YouTube channel with battle reports, strategy guides, and fleet reviews." },
        { title: "Master of the Fleet", link: "https://www.youtube.com/@motf7552", description: "YouTube channel with battle reports, strategy guides, and ship reviews." },
        { title: "Ion Radio", link: "https://www.youtube.com/c/IonRadio", description: "YouTube channel with strategy discussions, meta analysis, and community content." },
        { title: "DownsizeIt", link: "https://www.youtube.com/@DownsizeIt", description: "YouTube channel with battle reports, strategy guides, and fleet reviews." }
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
          Welcome to the ARC Resources page. Here you'll find a comprehensive collection of tools, guides, and information to help you get the most out of Star Wars: Armada.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resourceCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-gray-800/90 backdrop-blur-sm rounded-lg ring-1 ring-gray-700/50 overflow-hidden"
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