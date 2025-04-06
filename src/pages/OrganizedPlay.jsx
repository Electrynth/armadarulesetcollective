import React from 'react';

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
        
        <div className="bg-gray-800/90 backdrop-blur-sm p-6 rounded-lg ring-1 ring-gray-700/50 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Tournament Information</h2>
          <p className="text-gray-300 mb-4">
            Find information about upcoming Star Wars: Armada tournaments, organized play events, and competitive play resources.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-800/90 p-4 rounded-lg ring-1 ring-gray-700/50">
              <h3 className="text-xl font-semibold text-white mb-2">Upcoming Events</h3>
              <p className="text-gray-300">No upcoming events scheduled at this time.</p>
            </div>
            <div className="bg-gray-800/90 p-4 rounded-lg ring-1 ring-gray-700/50">
              <h3 className="text-xl font-semibold text-white mb-2">Tournament Rules</h3>
              <p className="text-gray-300">Official tournament rules and guidelines for Star Wars: Armada organized play.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-800/90 backdrop-blur-sm p-6 rounded-lg ring-1 ring-gray-700/50">
          <h2 className="text-2xl font-semibold text-white mb-4">Tournament Results</h2>
          <p className="text-gray-300 mb-4">
            View results from past tournaments and see which fleets and strategies performed well.
          </p>
          <div className="overflow-x-auto">
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
      </div>
    </div>
  );
};

export default OrganizedPlay; 