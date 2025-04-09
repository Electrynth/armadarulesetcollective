import React from 'react';
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
      title: "Communities",
      description: "Connect with Star Wars: Armada players and join vibrant community spaces.",
      icon: "👥",
      items: [
        { title: "The Armada Hub Discord", link: "https://discord.gg/WRMbfNkeMM", description: "Primary Discord server for the Star Wars: Armada community." },
        { title: "Armada Vassal Discord", link: "https://discord.gg/EGN54CtwrK", description: "Discord server dedicated to playing Armada on Vassal." },
        { title: "Armada Legacy Discord", link: "https://discord.gg/qJ5VvupY4j", description: "Discord server for the Legacy format of Star Wars: Armada." },
        { title: "Armada Legends Discord", link: "https://discord.gg/PFj2xHGYvq", description: "Discord server for the Legends format of Star Wars: Armada." },
        { title: "Reddit Community", link: "https://www.reddit.com/r/StarWarsArmada/", description: "Reddit community for Star Wars: Armada discussion and content." }
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
      title: "Podcasts",
      description: "Audio content from the Star Wars: Armada community discussing strategy, news, and community events.",
      icon: "🎙️",
      items: [
        { title: "The Armada Podcast", link: "https://the-armada-podcast.simplecast.com", description: "Long-running podcast discussing Star Wars: Armada strategy, news, and community." }
      ]
    },
    {
      title: "Blog Sites",
      description: "In-depth articles, strategy guides, and community content from Star Wars: Armada bloggers.",
      icon: "📝",
      items: [
        { title: "Cannot Get Your Ship Out", link: "https://cannotgetyourshipout.blogspot.com", description: "Strategy articles, battle reports, and community content." }
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
          Resources
        </h1>
        
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          Welcome to the ARC Resources page. Here you'll find a comprehensive collection of tools, guides, and information to help you get the most out of Star Wars: Armada.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resourceCategories.map((category, index) => (
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
          <h2 className="text-2xl font-semibold text-white mb-4 text-center">Suggest a Resource</h2>
          <p className="text-gray-300 mb-6 text-center">
            Know of a great resource that should be included here? We'd love to hear about it! Please reach out to us through our community channels.
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

export default Resources; 