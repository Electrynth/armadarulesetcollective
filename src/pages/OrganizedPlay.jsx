import React from 'react';

const OrganizedPlay = () => {
  return (
    <div className="min-h-screen p-8 font-montserrat">
      <div className="max-w-4xl mx-auto mt-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Organized Play</h1>
        
        <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg ring-1 ring-gray-800 mb-8">
          <h2 className="text-2xl font-semibold text-[#C14949] mb-4">Tournament Information</h2>
          <p className="text-gray-300 mb-4">
            Find information about upcoming Star Wars: Armada tournaments, organized play events, and competitive play resources.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">Upcoming Events</h3>
              <p className="text-gray-300">No upcoming events scheduled at this time.</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">Tournament Rules</h3>
              <p className="text-gray-300">Official tournament rules and guidelines for Star Wars: Armada organized play.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg ring-1 ring-gray-800 mb-8">
          <h2 className="text-2xl font-semibold text-[#C14949] mb-4">Tournament Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">Fleet Building</h3>
              <p className="text-gray-300 mb-3">Tools and guidelines for building competitive fleets for tournaments.</p>
              <button className="px-4 py-2 bg-gray-700/80 text-white rounded hover:bg-gray-600/80 transition-colors">
                Fleet Builder
              </button>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">Strategy Guides</h3>
              <p className="text-gray-300 mb-3">Advanced strategy guides and tips for competitive play.</p>
              <button className="px-4 py-2 bg-gray-700/80 text-white rounded hover:bg-gray-600/80 transition-colors">
                View Guides
              </button>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg ring-1 ring-gray-800">
          <h2 className="text-2xl font-semibold text-[#C14949] mb-4">Tournament Results</h2>
          <p className="text-gray-300 mb-4">
            View results from past tournaments and see which fleets and strategies performed well.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-gray-300">
              <thead className="text-xs uppercase bg-gray-800/50">
                <tr>
                  <th className="px-4 py-3">Tournament</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Winner</th>
                  <th className="px-4 py-3">Fleet</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800">
                  <td className="px-4 py-3">No tournaments recorded yet</td>
                  <td className="px-4 py-3">-</td>
                  <td className="px-4 py-3">-</td>
                  <td className="px-4 py-3">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizedPlay; 