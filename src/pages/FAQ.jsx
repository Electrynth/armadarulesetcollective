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
      answer: "ARC will update the rules and/or make changes to the competitive ruleset approximately twice a year. There may be minor changes throughout the year. We also strive to update our rules database as soon as official clarifications are released by Fantasy Flight Games/Atomic Mass Games. Our team regularly reviews and updates content to ensure accuracy and relevance."
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
      <div className="max-w-4xl mx-auto mt-8">
        <div className="bg-[#C14949]/20 backdrop-blur-sm p-4 rounded-xl ring-1 ring-[#C14949]/50 mb-8 text-center">
          <p className="text-[#C14949] font-semibold">
            🚧 Under Construction - This site is actively being developed. Some features may be incomplete or subject to change. 🚧
          </p>
        </div>
        
        <h1 className="text-5xl font-bold mb-6 text-white">
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
            If you couldn't find the answer you're looking for, please reach out to our community through one of these channels:
          </p>
          <div className="flex space-x-4">
            <button className="bg-gray-800/90 backdrop-blur-sm text-white px-4 py-2 rounded-full ring-1 ring-gray-700/50 hover:bg-gray-700/90 transition-all">
              Discord
            </button>
            <button className="bg-gray-800/90 backdrop-blur-sm text-white px-4 py-2 rounded-full ring-1 ring-gray-700/50 hover:bg-gray-700/90 transition-all">
              Facebook
            </button>
            <button className="bg-gray-800/90 backdrop-blur-sm text-white px-4 py-2 rounded-full ring-1 ring-gray-700/50 hover:bg-gray-700/90 transition-all">
              Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ; 