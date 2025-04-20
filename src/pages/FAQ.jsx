import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the Armada Ruleset Collective (ARC)?",
      answer: "ARC is a community-driven initiative dedicated to providing accurate, up-to-date rules and resources for Star Wars: Armada players worldwide. We maintain a comprehensive rules database and provide tools to enhance the gaming experience. This includes slowly introducing new content to the game to enrich the competitive scene."
    },
    {
      question: "Will ARC approve or use community content for the competitive ruleset?",
      answer: "Yes, ARC may use or approve community content to be introduced into the competitive ruleset in the future. This content will be clearly marked as ARC-friendly and will be tailored to enhance the competitive experience while maintaining game balance and rules consistency."
    },
    {
      question: "How will ARC ensure new content is balanced and fair for the competitive scene and the game?",
      answer: "ARC will conduct extensive playtesting of new content through a dedicated testing team and community volunteers. This process includes multiple rounds of testing across different skill levels, faction combinations, and playstyles. Feedback will be collected, analyzed, and incorporated before any content is introduced to the competitive scene."
    },
    {
      question: "How often are rules updated?",
      answer: "ARC will update the rules and/or make changes to the competitive ruleset as the need arises, but at most twice a year. There may be some minor rules changes throughout the year, however. We also strive to update our rules database as soon as official clarifications are released by Atomic Mass Games. Our team regularly reviews and updates content to ensure accuracy and relevance."
    },
    {
      question: "Is ARC affiliated with Fantasy Flight Games or Atomic Mass Games?",
      answer: "No, ARC is an independent community resource and is not affiliated with Fantasy Flight Games, Atomic Mass Games, Lucasfilm Ltd., or any other company."
    },
    {
      question: "How can I report errors or suggest improvements?",
      answer: "You can report errors or suggest improvements through the Armada Hub Discord server, Facebook, or by emailing our team. We appreciate all feedback that helps us improve our resources."
    },
    {
      question: "Are there any fees to use ARC resources?",
      answer: "No, all ARC resources are provided free of charge to the Star Wars: Armada community. We are committed to keeping our content as accessible as possible to all players."
    },
    {
      question: "How can I stay updated with ARC news?",
      answer: "You can stay updated by visiting our News page, joining the Armada Hub Discord server, or following us on Facebook. We regularly post updates about new features, rule clarifications, and community events."
    },
    {
      question: "Does ARC organize tournaments or events?",
      answer: "While ARC primarily focuses on providing rules and resources, we occasionally collaborate with tournament organizers and provide support for community events. Check our Organized Play page for more information."
    },
    {
      question: "How can I contribute to ARC?",
      answer: "We welcome contributions from the community! You can help by reporting rule clarifications, suggesting improvements to our resources, or participating in Discord community discussions."
    }
  ];

  return (
    <div className="min-h-screen p-8 font-montserrat">
      <div className="max-w-6xl mx-auto mt-8">
        <h1 className="text-5xl font-bold mb-6 text-white text-center">
          Frequently Asked Questions
        </h1>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-gray-800/90 backdrop-blur-sm rounded-xl ring-1 ring-gray-700/50 overflow-hidden"
            >
              <button
                className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-700/50 transition-colors"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <h2 className="text-xl font-semibold text-white">{faq.question}</h2>
                <span className="text-white text-2xl">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 py-4' : 'max-h-0'
                }`}
              >
                <p className="text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-gray-800/90 backdrop-blur-sm p-6 rounded-xl ring-1 ring-gray-700/50">
          <h2 className="text-2xl font-semibold text-white mb-4">Still Have Questions?</h2>
          <p className="text-gray-300 mb-4">
            If you couldn't find the answer you're looking for, please reach out to our community through the Discord server or our email.
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

export default FAQ; 