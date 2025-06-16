import { useState } from 'react';
import React from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen p-8 font-montserrat">
      <div className="max-w-6xl mx-auto mt-8">
        <h1 className="text-5xl font-bold mb-6 text-white text-center">
          Frequently Asked Questions
        </h1>
        
        <div className="space-y-4">
          <div className="bg-gray-800/90 backdrop-blur-sm rounded-xl ring-1 ring-gray-700/50 overflow-hidden">
            <button
              className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-700/50 transition-colors"
              onClick={() => toggleFAQ(0)}
              aria-expanded={openIndex === 0}
            >
              <h2 className="text-xl font-semibold text-white">What is the Armada Ruleset Collective (ARC)?</h2>
              <span className="text-white text-2xl">{openIndex === 0 ? '−' : '+'}</span>
            </button>
            <div 
              className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === 0 ? 'max-h-[2000px] py-4' : 'max-h-0'
              }`}
            >
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                ARC is an initiative by Armada players who have come together to ensure Star Wars Armada continues to thrive after AMG withdrew support for this game. Our team includes national and international tournament winners, Tournament Organizers, former FFG playtesters, and prominent community members.
                <br /><br />
                ARC has 3 main goals:
                <ul>1) Ensure Armada rules are maintained, FAQ's are issued, and players are supported.</ul>
                <ul>2) Coordinate an Organized Play environment for Armada events, with support for Tournament Organizers and players.</ul>
                <ul>3) Ensure gameplay for Armada remains balanced and fresh, with balance changes for existing cards if needed, and occasional new content if we see appropriate opportunities.</ul>
                <br />
                Our Terms of Reference document is available to download on <b><u><a href="https://armadarulesetcollective.com/about" target="_blank">this page</a></u></b>.
              </p>
            </div>
          </div>

          <div className="bg-gray-800/90 backdrop-blur-sm rounded-xl ring-1 ring-gray-700/50 overflow-hidden">
            <button
              className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-700/50 transition-colors"
              onClick={() => toggleFAQ(1)}
              aria-expanded={openIndex === 1}
            >
              <h2 className="text-xl font-semibold text-white">What is ARC's philosophy and approach towards sustaining Armada?</h2>
              <span className="text-white text-2xl">{openIndex === 1 ? '−' : '+'}</span>
            </button>
            <div 
              className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === 1 ? 'max-h-[2000px] py-4' : 'max-h-0'
              }`}
            >
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                ARC takes a long-term holistic view when considering the actions needed to ensure Armada flourishes. We will need to ensure that our approach to Rules, Organized Play, and balance remains open and sustainable, and that any changes to the game are measured and appropriately paced. New content for Armada has historically been introduced relatively slowly and the pace of change should be actively managed. We are in a time of transition for Armada, and the change from a store-purchased game to a community-sourced one will be a learning process. This is one reason why our first content release will not require a purchase of new models or ship tokens; until widespread 3D printing is more easily available the content should be accessible to as many players as possible.
                <br /><br />
                Our Guiding Principles document is also available on <b><u><a href="https://armadarulesetcollective.com/about" target="_blank">this page</a></u></b>.
              </p>
            </div>
          </div>

          <div className="bg-gray-800/90 backdrop-blur-sm rounded-xl ring-1 ring-gray-700/50 overflow-hidden">
            <button
              className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-700/50 transition-colors"
              onClick={() => toggleFAQ(2)}
              aria-expanded={openIndex === 2}
            >
              <h2 className="text-xl font-semibold text-white">Has ARC changed the game? I heard something about rules changes last fall?</h2>
              <span className="text-white text-2xl">{openIndex === 2 ? '−' : '+'}</span>
            </button>
            <div 
              className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === 2 ? 'max-h-[2000px] py-4' : 'max-h-0'
              }`}
            >
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                No, ARC has not made any changes to the game rules. The Armada you know and love is the Armada we intend to support and continue. The rules interpretations in the ARC-ARM (our errata document) are 99.9% the same as before, with a few obscure rulings tweaked for internal rules consistency. In the future we may alter some basic rules if we feel the need arises, but we will do so with utmost caution. At this time we have no plans to do so; the suggested changes in a previous fall tournament were an experiment and have no relation to our current plans.
              </p>
            </div>
          </div>

          <div className="bg-gray-800/90 backdrop-blur-sm rounded-xl ring-1 ring-gray-700/50 overflow-hidden">
            <button
              className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-700/50 transition-colors"
              onClick={() => toggleFAQ(3)}
              aria-expanded={openIndex === 3}
            >
              <h2 className="text-xl font-semibold text-white">Does this mean there will be no changes to current cards or rules then?</h2>
              <span className="text-white text-2xl">{openIndex === 3 ? '−' : '+'}</span>
            </button>
            <div 
              className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === 3 ? 'max-h-[2000px] py-4' : 'max-h-0'
              }`}
            >
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                No, cards have been altered and changed throughout the history of Armada for errata and balance purposes. We intend to continue this tradition, adjusting point values and providing erratas to encourage a variety of viable play styles and fleet compositions. As stated in our Guiding Principles in Dec. 2024, we will strive to buff rather than nerf, and will make changes with the goal of keeping the game lively and balanced. To quote the Guiding Principles, "...stagnation is deadly for a modern game system with a competitive scene. Injecting interest via point changes, errata, and some new content will help keep interest alive."
              </p>
            </div>
          </div>

          <div className="bg-gray-800/90 backdrop-blur-sm rounded-xl ring-1 ring-gray-700/50 overflow-hidden">
            <button
              className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-700/50 transition-colors"
              onClick={() => toggleFAQ(4)}
              aria-expanded={openIndex === 4}
            >
              <h2 className="text-xl font-semibold text-white">So ARC will be releasing new content?</h2>
              <span className="text-white text-2xl">{openIndex === 4 ? '−' : '+'}</span>
            </button>
            <div 
              className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === 4 ? 'max-h-[2000px] py-4' : 'max-h-0'
              }`}
            >
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                ARC will release new content when necessary to keep the game fresh and maintain balance and interest for the community. Our focus will always include considerations of how new content will affect faction identity, future design space, and the state of the game as a whole.
              </p>
            </div>
          </div>

          <div className="bg-gray-800/90 backdrop-blur-sm rounded-xl ring-1 ring-gray-700/50 overflow-hidden">
            <button
              className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-700/50 transition-colors"
              onClick={() => toggleFAQ(5)}
              aria-expanded={openIndex === 5}
            >
              <h2 className="text-xl font-semibold text-white">What is the difference between ARC and other community project such as Legacy or Nexus?</h2>
              <span className="text-white text-2xl">{openIndex === 5 ? '−' : '+'}</span>
            </button>
            <div 
              className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === 5 ? 'max-h-[2000px] py-4' : 'max-h-0'
              }`}
            >
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                The primary goal of ARC is to steward the rules and mechanics of this game we all love—that's why we chose the name <em>Ruleset Collective</em>. ARC was founded on the idea of maintaining balance and supporting organized play. The means of achieving that goal might involve new content or balance patches, but also includes creating resources like the <b><u><a href="https://armadarulesetcollective.com/rules" target="_blank">Armada Reference Manual</a></u></b> to help tournament organizers and community leaders run events smoothly. In addition ARC is organizing an exciting Organized Play season for the coming year, continuing the best traditions established by FFG and AMG. ARC is communicating with Legacy and Nexus to see where we can align our goals and operations, and support Armada cooperatively.
              </p>
            </div>
          </div>

          <div className="bg-gray-800/90 backdrop-blur-sm rounded-xl ring-1 ring-gray-700/50 overflow-hidden">
            <button
              className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-700/50 transition-colors"
              onClick={() => toggleFAQ(6)}
              aria-expanded={openIndex === 6}
            >
              <h2 className="text-xl font-semibold text-white">What will organized play look like in the future?</h2>
              <span className="text-white text-2xl">{openIndex === 6 ? '−' : '+'}</span>
            </button>
            <div 
              className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === 6 ? 'max-h-[2000px] py-4' : 'max-h-0'
              }`}
            >
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                ARC is partnering with major events around the world and online, including significant European, North American, and Australian tournaments. We are committed to continuing the Organized Play circuit that the community has come to love, culminating in a major event at the end of each season.

                Stay tuned for more details on Organized Play events near you, including a list of ARC-Partnered events.
              </p>
            </div>
          </div>

          <div className="bg-gray-800/90 backdrop-blur-sm rounded-xl ring-1 ring-gray-700/50 overflow-hidden">
            <button
              className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-700/50 transition-colors"
              onClick={() => toggleFAQ(7)}
              aria-expanded={openIndex === 7}
            >
              <h2 className="text-xl font-semibold text-white">Will there be new prize support or tournament kits available?</h2>
              <span className="text-white text-2xl">{openIndex === 7 ? '−' : '+'}</span>
            </button>
            <div 
              className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === 7 ? 'max-h-[2000px] py-4' : 'max-h-0'
              }`}
            >
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                Yes! We've partnered with creators from around the world to develop new and exciting tournament kits for organizers. These updated kits are designed to be even more engaging than those from previous Organized Play seasons.
              </p>
            </div>
          </div>

          <div className="bg-gray-800/90 backdrop-blur-sm rounded-xl ring-1 ring-gray-700/50 overflow-hidden">
            <button
              className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-700/50 transition-colors"
              onClick={() => toggleFAQ(8)}
              aria-expanded={openIndex === 8}
            >
              <h2 className="text-xl font-semibold text-white">What is an ARC Partnered event?</h2>
              <span className="text-white text-2xl">{openIndex === 8 ? '−' : '+'}</span>
            </button>
            <div 
              className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === 8 ? 'max-h-[2000px] py-4' : 'max-h-0'
              }`}
            >
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                An ARC Partnered Event is an Armada Organized Play event that follows the latest ARC ruleset. This includes rulings from the <b><u><a href="https://armadarulesetcollective.com/rules" target="_blank">Armada Reference Manual</a></u></b> and any new content released during the event's eligibility window. These events will be listed on our website and are designed to offer a consistent play experience across the ARC Organized Play Circuit. Additionally, ARC Partnered Events will have access to that season's ARC tournament kits, ensuring a high-quality, standardized tournament experience.
              </p>
            </div>
          </div>

          <div className="bg-gray-800/90 backdrop-blur-sm rounded-xl ring-1 ring-gray-700/50 overflow-hidden">
            <button
              className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-700/50 transition-colors"
              onClick={() => toggleFAQ(9)}
              aria-expanded={openIndex === 9}
            >
              <h2 className="text-xl font-semibold text-white">Can I host an ARC Partnered event?</h2>
              <span className="text-white text-2xl">{openIndex === 9 ? '−' : '+'}</span>
            </button>
            <div 
              className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === 9 ? 'max-h-[2000px] py-4' : 'max-h-0'
              }`}
            >
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                The application process is still in development; we are working toward providing a clear and accessible system for tournament organizers interested in hosting ARC Organized Play events. In the meantime please reach out to us at <b><u><a href="mailto:op@armadarulesetcollective.com">op@armadarulesetcollective.com</a></u></b> with any questions related to Organized Play or to express your interest in hosting an event.
              </p>
            </div>
          </div>

          <div className="bg-gray-800/90 backdrop-blur-sm rounded-xl ring-1 ring-gray-700/50 overflow-hidden">
            <button
              className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-700/50 transition-colors"
              onClick={() => toggleFAQ(10)}
              aria-expanded={openIndex === 10}
            >
              <h2 className="text-xl font-semibold text-white">Will ARC approve or use community content for the competitive ruleset?</h2>
              <span className="text-white text-2xl">{openIndex === 10 ? '−' : '+'}</span>
            </button>
            <div 
              className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === 10 ? 'max-h-[2000px] py-4' : 'max-h-0'
              }`}
            >
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                With the creator's approval, ARC may incorporate or endorse community content in the competitive ruleset if it fills an identified need in the game. Cards will be evaluated for balance and usability, and will undergo rigorous playtesting and review.
              </p>
            </div>
          </div>

          <div className="bg-gray-800/90 backdrop-blur-sm rounded-xl ring-1 ring-gray-700/50 overflow-hidden">
            <button
              className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-700/50 transition-colors"
              onClick={() => toggleFAQ(11)}
              aria-expanded={openIndex === 11}
            >
              <h2 className="text-xl font-semibold text-white">How will ARC ensure new content is balanced and fair for both competitive and casual players?</h2>
              <span className="text-white text-2xl">{openIndex === 11 ? '−' : '+'}</span>
            </button>
            <div 
              className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === 11 ? 'max-h-[2000px] py-4' : 'max-h-0'
              }`}
            >
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                ARC conducts thorough playtesting with a committed team of testers and community members. This includes multiple testing rounds across various skill levels, factions, and playstyles. Our team features former FFG employees and testers, world class players, and casual players alike. Many have been playing since the game was released and some are relatively new to Armada. We always evaluate both the item in question and its potential impact on the game as a whole. This diversity is the key to our confidence in the balance and fairness of our content.
              </p>
            </div>
          </div>

          <div className="bg-gray-800/90 backdrop-blur-sm rounded-xl ring-1 ring-gray-700/50 overflow-hidden">
            <button
              className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-700/50 transition-colors"
              onClick={() => toggleFAQ(12)}
              aria-expanded={openIndex === 12}
            >
              <h2 className="text-xl font-semibold text-white">How can I stay updated with ARC news?</h2>
              <span className="text-white text-2xl">{openIndex === 12 ? '−' : '+'}</span>
            </button>
            <div 
              className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === 12 ? 'max-h-[2000px] py-4' : 'max-h-0'
              }`}
            >
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                You can stay informed by visiting our website's <b><u><a href="https://armadarulesetcollective.com/news" target="_blank">news page</a></u></b>, joining the Armada Hub Discord server, or following us on Facebook and Reddit. We regularly post updates about new features, rule clarifications, and community events. Come check us out!
              </p>
            </div>
          </div>

          <div className="bg-gray-800/90 backdrop-blur-sm rounded-xl ring-1 ring-gray-700/50 overflow-hidden">
            <button
              className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-700/50 transition-colors"
              onClick={() => toggleFAQ(13)}
              aria-expanded={openIndex === 13}
            >
              <h2 className="text-xl font-semibold text-white">Is ARC affiliated with Fantasy Flight Games or Atomic Mass Games?</h2>
              <span className="text-white text-2xl">{openIndex === 13 ? '−' : '+'}</span>
            </button>
            <div 
              className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === 13 ? 'max-h-[2000px] py-4' : 'max-h-0'
              }`}
            >
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                No. ARC is an independent community initiative and is not affiliated with Fantasy Flight Games, Atomic Mass Games, Lucasfilm Ltd., or any other company. We are a not-for-profit organization built by and for the community.
              </p>
            </div>
          </div>
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

export default FAQ; 