import React from 'react';

const OrganizedPlay = () => {
  return (
    <div className="min-h-screen p-8 font-montserrat">
      <div className="max-w-6xl mx-auto mt-8">
        {/* Coming Soon Banner */}
        <div className="bg-yellow-900/90 backdrop-blur-sm p-6 rounded-xl ring-1 ring-yellow-700/50 mb-8 text-center">
          <h2 className="text-3xl font-bold text-yellow-200 mb-2">🚧 Coming Soon 🚧</h2>
          <p className="text-yellow-100 text-lg">
            This page is currently under development. Content will be added soon!
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrganizedPlay; 