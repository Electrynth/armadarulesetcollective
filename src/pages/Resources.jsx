import React from 'react';
import { Link } from 'react-router-dom';
import resourcesData from '../data/resources.json';

const Resources = () => {
  const renderItem = (item, index) => (
    <div key={index} className="bg-gray-800/50 p-4 rounded-lg flex flex-col h-full">
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
        {item.description && (
          <p className="text-gray-300 mb-3">{item.description}</p>
        )}
      </div>
      <div className="mt-6 pt-4 border-t border-gray-700/50">
        <a 
          href={item.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-[#C14949] hover:text-[#D15A5A] transition-colors"
        >
          {item.linkText}
        </a>
      </div>
    </div>
  );

  const renderSubsection = (subsection, index) => (
    <div key={index} className="mb-8">
      <h3 className="text-xl font-semibold text-white mb-4">{subsection.title}</h3>
      <div className={`grid md:grid-cols-2 ${subsection.title === "YouTube Channels" ? "lg:grid-cols-3" : ""} ${subsection.title === "Community Links" ? "lg:grid-cols-4" : ""} gap-4`}>
        {subsection.items.map((item, itemIndex) => (
          <div key={itemIndex} className={`bg-gray-800/50 p-4 rounded-lg flex flex-col h-full ${subsection.title === "Community Links" ? "text-center" : ""}`}>
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
              {item.description && (
                <p className="text-gray-300 mb-3">{item.description}</p>
              )}
            </div>
            <div className="mt-6 pt-4 border-t border-gray-700/50">
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#C14949] hover:text-[#D15A5A] transition-colors"
              >
                {item.linkText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSection = (section) => (
    <section key={section.id} className="mb-4">
      <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl ring-1 ring-gray-700/50">
        <h2 className="text-2xl font-bold text-white mb-4">
          <span className="mr-3">{section.icon}</span>
          {section.title}
        </h2>
        
        {section.subsections ? (
          // Community Content section with subsections
          <div>
            {section.subsections.map((subsection, index) => renderSubsection(subsection, index))}
          </div>
        ) : (
          // Regular sections with items
          <div className={`grid md:grid-cols-2 ${section.items.length > 4 ? "lg:grid-cols-3" : ""} gap-4`}>
            {section.items.map((item, index) => renderItem(item, index))}
          </div>
        )}
      </div>
    </section>
  );

  return (
    <div className="min-h-screen p-8 font-montserrat">
      <div className="max-w-6xl mx-auto mt-8">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-5xl font-bold mb-6 text-white text-center">Resources</h1>
        </div>

        {/* Find Community Button */}
        <div className="flex flex-col items-center mb-8">
          <Link
            to="/communities"
            className="inline-block bg-[#C14949] hover:bg-[#D15A5A] text-white font-semibold py-2 px-6 rounded-lg shadow transition-colors duration-200"
          >
            Find community contacts near me!
          </Link>
          <p className="text-gray-400 text-sm mt-2 text-center">Browse our directory of community contacts and organizers</p>
        </div>

        {/* Sections */}
        {resourcesData.sections.map(section => renderSection(section))}

        {/* Contact Section */}
        <div className="bg-gray-800/90 backdrop-blur-sm p-8 rounded-xl ring-1 ring-gray-700/50">
          <h2 className="text-3xl font-semibold text-white mb-6">Contact Us</h2>
          
          <p className="text-xl text-gray-300 mb-6 leading-relaxed">
            Have a resource you'd like to see added or information that needs updating? Reach out to us through the ARC Discussion channel on the Armada Hub Discord or send us an email.
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
    </div>
  );
};

export default Resources; 