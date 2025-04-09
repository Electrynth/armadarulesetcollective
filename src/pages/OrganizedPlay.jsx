import React from 'react';
import { Link } from 'react-router-dom';

const OrganizedPlay = () => {
  return (
    <div className="min-h-screen p-8 font-montserrat">
      <div className="max-w-4xl mx-auto mt-8">
        <div className="bg-[#C14949]/20 backdrop-blur-sm p-4 rounded-lg ring-1 ring-[#C14949]/50 mb-8 text-center">
          <p className="text-[#C14949] font-semibold">
            🚧 Under Construction - This site is actively being developed. Some features may be incomplete or subject to change. 🚧
          </p>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Organized Play</h1>
        
        {/* Tournament Information Section */}
        <div className="bg-gray-800/90 backdrop-blur-sm p-6 rounded-lg ring-1 ring-gray-700/50 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Tournament Information</h2>
          <p className="text-gray-300 mb-4">
            Find information about upcoming Star Wars: Armada tournaments, organized play events, and competitive play resources.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-800/90 p-4 rounded-lg ring-1 ring-gray-700/50">
              <h3 className="text-xl font-semibold text-white mb-2">Upcoming Events</h3>
              <p className="text-gray-300 mb-4">No upcoming events scheduled at this time.</p>
              <Link to="/resources" className="text-[#C14949] hover:text-[#D15A5A] transition-colors font-medium">
                View Event Calendar →
              </Link>
            </div>
            <div className="bg-gray-800/90 p-4 rounded-lg ring-1 ring-gray-700/50">
              <h3 className="text-xl font-semibold text-white mb-2">Tournament Rules</h3>
              <p className="text-gray-300 mb-4">Official tournament rules and guidelines for Star Wars: Armada organized play.</p>
              <Link to="/resources" className="text-[#C14949] hover:text-[#D15A5A] transition-colors font-medium">
                Download Tournament Rules →
              </Link>
            </div>
          </div>
        </div>
        
        {/* Tournament Structure Section */}
        <div className="bg-gray-800/90 backdrop-blur-sm p-6 rounded-lg ring-1 ring-gray-700/50 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Tournament Structure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-800/90 p-4 rounded-lg ring-1 ring-gray-700/50">
              <h3 className="text-xl font-semibold text-white mb-2">Swiss Rounds</h3>
              <p className="text-gray-300 mb-4">Learn how Swiss rounds work in Armada tournaments and how pairings are determined.</p>
              <Link to="/resources" className="text-[#C14949] hover:text-[#D15A5A] transition-colors font-medium">
                Swiss Round Guide →
              </Link>
            </div>
            <div className="bg-gray-800/90 p-4 rounded-lg ring-1 ring-gray-700/50">
              <h3 className="text-xl font-semibold text-white mb-2">Scoring System</h3>
              <p className="text-gray-300 mb-4">Details on how tournament scoring works and how to calculate your tournament score.</p>
              <Link to="/resources" className="text-[#C14949] hover:text-[#D15A5A] transition-colors font-medium">
                Scoring Guide →
              </Link>
            </div>
            <div className="bg-gray-800/90 p-4 rounded-lg ring-1 ring-gray-700/50">
              <h3 className="text-xl font-semibold text-white mb-2">Time Management</h3>
              <p className="text-gray-300 mb-4">Guidelines for round timing and effective time management during tournaments.</p>
              <Link to="/resources" className="text-[#C14949] hover:text-[#D15A5A] transition-colors font-medium">
                Time Management Guide →
              </Link>
            </div>
            <div className="bg-gray-800/90 p-4 rounded-lg ring-1 ring-gray-700/50">
              <h3 className="text-xl font-semibold text-white mb-2">Fleet Building Rules</h3>
              <p className="text-gray-300 mb-4">Specific rules for fleet construction in tournaments and restrictions that apply.</p>
              <Link to="/resources" className="text-[#C14949] hover:text-[#D15A5A] transition-colors font-medium">
                Fleet Building Guide →
              </Link>
            </div>
          </div>
        </div>
        
        {/* Tournament Preparation Section */}
        <div className="bg-gray-800/90 backdrop-blur-sm p-6 rounded-lg ring-1 ring-gray-700/50 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Tournament Preparation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-800/90 p-4 rounded-lg ring-1 ring-gray-700/50">
              <h3 className="text-xl font-semibold text-white mb-2">Pre-Tournament Checklist</h3>
              <p className="text-gray-300 mb-4">What players should bring and prepare before attending a tournament.</p>
              <Link to="/resources" className="text-[#C14949] hover:text-[#D15A5A] transition-colors font-medium">
                Checklist →
              </Link>
            </div>
            <div className="bg-gray-800/90 p-4 rounded-lg ring-1 ring-gray-700/50">
              <h3 className="text-xl font-semibold text-white mb-2">Fleet Submission</h3>
              <p className="text-gray-300 mb-4">How and when to submit fleet lists for tournament participation.</p>
              <Link to="/resources" className="text-[#C14949] hover:text-[#D15A5A] transition-colors font-medium">
                Submission Guidelines →
              </Link>
            </div>
            <div className="bg-gray-800/90 p-4 rounded-lg ring-1 ring-gray-700/50">
              <h3 className="text-xl font-semibold text-white mb-2">Tournament Etiquette</h3>
              <p className="text-gray-300 mb-4">Best practices for competitive play and respectful tournament conduct.</p>
              <Link to="/resources" className="text-[#C14949] hover:text-[#D15A5A] transition-colors font-medium">
                Etiquette Guide →
              </Link>
            </div>
            <div className="bg-gray-800/90 p-4 rounded-lg ring-1 ring-gray-700/50">
              <h3 className="text-xl font-semibold text-white mb-2">Common Rules Questions</h3>
              <p className="text-gray-300 mb-4">Frequently asked rules questions specific to tournaments and competitive play.</p>
              <Link to="/faq" className="text-[#C14949] hover:text-[#D15A5A] transition-colors font-medium">
                Rules FAQ →
              </Link>
            </div>
          </div>
        </div>
        
        {/* Tournament Results Section */}
        <div className="bg-gray-800/90 backdrop-blur-sm p-6 rounded-lg ring-1 ring-gray-700/50 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Tournament Results</h2>
          <p className="text-gray-300 mb-4">
            View results from past tournaments and see which fleets and strategies performed well.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-left text-gray-300">
              <thead className="text-xs uppercase bg-gray-800/90">
                <tr>
                  <th className="px-4 py-3">Tournament</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Winner</th>
                  <th className="px-4 py-3">Fleet</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700/50">
                  <td className="px-4 py-3">No tournaments recorded yet</td>
                  <td className="px-4 py-3">-</td>
                  <td className="px-4 py-3">-</td>
                  <td className="px-4 py-3">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Organized Play Programs Section */}
        <div className="bg-gray-800/90 backdrop-blur-sm p-6 rounded-lg ring-1 ring-gray-700/50 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Organized Play Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-800/90 p-4 rounded-lg ring-1 ring-gray-700/50">
              <h3 className="text-xl font-semibold text-white mb-2">ARC Championship Series</h3>
              <p className="text-gray-300 mb-4">Information about the ARC Championship Series and how to qualify.</p>
              <Link to="/resources" className="text-[#C14949] hover:text-[#D15A5A] transition-colors font-medium">
                Championship Series →
              </Link>
            </div>
            <div className="bg-gray-800/90 p-4 rounded-lg ring-1 ring-gray-700/50">
              <h3 className="text-xl font-semibold text-white mb-2">Regional Championships</h3>
              <p className="text-gray-300 mb-4">Details about regional qualifying events and their importance in the championship circuit.</p>
              <Link to="/resources" className="text-[#C14949] hover:text-[#D15A5A] transition-colors font-medium">
                Regional Events →
              </Link>
            </div>
            <div className="bg-gray-800/90 p-4 rounded-lg ring-1 ring-gray-700/50">
              <h3 className="text-xl font-semibold text-white mb-2">Store Championship Program</h3>
              <p className="text-gray-300 mb-4">Guidelines for store-level tournaments and how to participate in the store championship program.</p>
              <Link to="/resources" className="text-[#C14949] hover:text-[#D15A5A] transition-colors font-medium">
                Store Championships →
              </Link>
            </div>
            <div className="bg-gray-800/90 p-4 rounded-lg ring-1 ring-gray-700/50">
              <h3 className="text-xl font-semibold text-white mb-2">Seasonal Events</h3>
              <p className="text-gray-300 mb-4">Special tournaments tied to seasons or new releases with unique formats and prizes.</p>
              <Link to="/resources" className="text-[#C14949] hover:text-[#D15A5A] transition-colors font-medium">
                Seasonal Events →
              </Link>
            </div>
          </div>
        </div>
        
        {/* Tournament Organizer Tools Section */}
        <div className="bg-gray-800/90 backdrop-blur-sm p-6 rounded-lg ring-1 ring-gray-700/50 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Tournament Organizer Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-800/90 p-4 rounded-lg ring-1 ring-gray-700/50">
              <h3 className="text-xl font-semibold text-white mb-2">Tournament Software</h3>
              <p className="text-gray-300 mb-4">Links to software for managing tournaments, tracking scores, and generating pairings.</p>
              <Link to="/resources" className="text-[#C14949] hover:text-[#D15A5A] transition-colors font-medium">
                Software Tools →
              </Link>
            </div>
            <div className="bg-gray-800/90 p-4 rounded-lg ring-1 ring-gray-700/50">
              <h3 className="text-xl font-semibold text-white mb-2">Score Sheets</h3>
              <p className="text-gray-300 mb-4">Printable score sheets for tournament use and digital alternatives.</p>
              <Link to="/resources" className="text-[#C14949] hover:text-[#D15A5A] transition-colors font-medium">
                Download Score Sheets →
              </Link>
            </div>
            <div className="bg-gray-800/90 p-4 rounded-lg ring-1 ring-gray-700/50">
              <h3 className="text-xl font-semibold text-white mb-2">Pairings Generator</h3>
              <p className="text-gray-300 mb-4">Tools for generating tournament pairings based on Swiss round principles.</p>
              <Link to="/resources" className="text-[#C14949] hover:text-[#D15A5A] transition-colors font-medium">
                Pairings Tools →
              </Link>
            </div>
            <div className="bg-gray-800/90 p-4 rounded-lg ring-1 ring-gray-700/50">
              <h3 className="text-xl font-semibold text-white mb-2">Prize Support Guidelines</h3>
              <p className="text-gray-300 mb-4">Information about tournament prizes and how to obtain prize support for your events.</p>
              <Link to="/resources" className="text-[#C14949] hover:text-[#D15A5A] transition-colors font-medium">
                Prize Support →
              </Link>
            </div>
          </div>
        </div>
        
        {/* Community Tournaments Section */}
        <div className="bg-gray-800/90 backdrop-blur-sm p-6 rounded-lg ring-1 ring-gray-700/50 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Community Tournaments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-800/90 p-4 rounded-lg ring-1 ring-gray-700/50">
              <h3 className="text-xl font-semibold text-white mb-2">Community Tournament Directory</h3>
              <p className="text-gray-300 mb-4">List of community-run tournaments and how to find events in your area.</p>
              <Link to="/resources" className="text-[#C14949] hover:text-[#D15A5A] transition-colors font-medium">
                Find Events →
              </Link>
            </div>
            <div className="bg-gray-800/90 p-4 rounded-lg ring-1 ring-gray-700/50">
              <h3 className="text-xl font-semibold text-white mb-2">Submit a Tournament</h3>
              <p className="text-gray-300 mb-4">Process for adding community tournaments to the ARC calendar and directory.</p>
              <Link to="/resources" className="text-[#C14949] hover:text-[#D15A5A] transition-colors font-medium">
                Submit Event →
              </Link>
            </div>
            <div className="bg-gray-800/90 p-4 rounded-lg ring-1 ring-gray-700/50">
              <h3 className="text-xl font-semibold text-white mb-2">Tournament Report Templates</h3>
              <p className="text-gray-300 mb-4">Templates for submitting tournament reports and sharing results with the community.</p>
              <Link to="/resources" className="text-[#C14949] hover:text-[#D15A5A] transition-colors font-medium">
                Report Templates →
              </Link>
            </div>
            <div className="bg-gray-800/90 p-4 rounded-lg ring-1 ring-gray-700/50">
              <h3 className="text-xl font-semibold text-white mb-2">Community Tournament Support</h3>
              <p className="text-gray-300 mb-4">How ARC supports community tournaments and resources available to organizers.</p>
              <Link to="/resources" className="text-[#C14949] hover:text-[#D15A5A] transition-colors font-medium">
                Community Support →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizedPlay; 