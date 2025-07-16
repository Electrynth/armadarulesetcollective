import React, { useState, useEffect } from 'react';

const fieldsToIndexSchema = {
  timestamp: 0,
  name: 1,
  discord: 2,
  country: 3,
  state: 4,
  link: 5
};

const Communities = () => {
  const [communities, setCommunities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [popupLink, setPopupLink] = useState(null); // For mobile modal
  const [sortByCountryAsc, setSortByCountryAsc] = useState(true);
  // Remove popupLink state, not needed anymore

  useEffect(() => {
    const fetchCommunities = async () => {
      try {
        // Placeholder spreadsheet and range
        const SPREADSHEET_ID = '1-bgwGFEEm4HkKgl4T5aRMjZk4SXk925f8mF2n7zn200';
        const RANGE = 'Responses!A2:Z';
        const response = await fetch(
          `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/gviz/tq?tqx=out:csv&range=${RANGE}`,
          {
            headers: {
              'Accept': 'text/csv',
            },
          }
        );
        if (!response.ok) {
          throw new Error('Failed to fetch communities');
        }
        const csvText = await response.text();
        const rows = csvText.split('\n').map(row => row.split(',').map(cell => cell.replace(/^"|"$/g, '')));
        const transformed = rows
          .map((row, index) => {
            // Parse timestamp and determine if active
            const timestampStr = row[fieldsToIndexSchema.timestamp] || '';
            let active = false;
            if (timestampStr) {
              const timestampDate = new Date(timestampStr);
              const now = new Date();
              const twelveMonthsAgo = new Date(now.getFullYear(), now.getMonth() - 12, now.getDate());
              if (!isNaN(timestampDate.getTime()) && timestampDate > twelveMonthsAgo) {
                active = true;
              }
            }
            return {
              id: index,
              name: row[fieldsToIndexSchema.name] || '',
              country: row[fieldsToIndexSchema.country] || '',
              state: row[fieldsToIndexSchema.state] || '',
              discord: row[fieldsToIndexSchema.discord] || '',
              link: row[fieldsToIndexSchema.link] || '',
              active,
              timestamp: timestampStr,
            };
          })
          .filter(community => community.name.trim() !== '' && community.country.trim() !== '' && community.discord.trim() !== '');
        setCommunities(transformed);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCommunities();
  }, []);

  // Sorting handler
  const handleSortByCountry = () => {
    setSortByCountryAsc((asc) => !asc);
    setCommunities((prev) =>
      [...prev].sort((a, b) => {
        const countryA = a.country.toLowerCase();
        const countryB = b.country.toLowerCase();
        if (countryA < countryB) return sortByCountryAsc ? 1 : -1;
        if (countryA > countryB) return sortByCountryAsc ? -1 : 1;
        // If countries are equal, sort by state
        const stateA = (a.state || '').toLowerCase();
        const stateB = (b.state || '').toLowerCase();
        if (stateA < stateB) return sortByCountryAsc ? 1 : -1;
        if (stateA > stateB) return sortByCountryAsc ? -1 : 1;
        return 0;
      })
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-white mb-6">Find a Community Near You!</h1>
      <div className="mb-6 flex flex-col md:flex-row gap-4 justify-center items-center">
        <a
          href="https://forms.gle/WWXp27qD8zyhwGM88"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#C14949] hover:bg-[#D15A5A] text-white font-semibold py-2 px-6 rounded-lg shadow transition-colors duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M17 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 18H7V4h10v16zm-2-8H9v-2h6v2zm0 4H9v-2h6v2z"/>
          </svg>
          Submit a Contact
        </a>
        <a
          href="https://discord.gg/WRMbfNkeMM"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#5865F2] hover:bg-[#6A77F7] text-white font-semibold py-2 px-6 rounded-lg shadow transition-colors duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M20.317 4.369A19.791 19.791 0 0 0 16.885 3.1a.077.077 0 0 0-.082.038c-.357.63-.755 1.453-1.037 2.104a18.524 18.524 0 0 0-5.466 0 12.683 12.683 0 0 0-1.05-2.104.077.077 0 0 0-.082-.038A19.736 19.736 0 0 0 3.684 4.369a.069.069 0 0 0-.032.027C.533 9.09-.32 13.579.099 18.021a.082.082 0 0 0 .031.056c2.104 1.547 4.13 2.488 6.102 3.115a.077.077 0 0 0 .084-.027c.472-.65.893-1.34 1.248-2.063a.076.076 0 0 0-.041-.104c-.662-.25-1.294-.549-1.904-.892a.077.077 0 0 1-.008-.128c.128-.096.256-.197.378-.299a.074.074 0 0 1 .077-.01c4.014 1.827 8.36 1.827 12.313 0a.073.073 0 0 1 .078.009c.122.102.25.203.378.299a.077.077 0 0 1-.007.128c-.61.344-1.242.642-1.905.892a.076.076 0 0 0-.04.105c.36.722.782 1.412 1.247 2.062a.076.076 0 0 0 .084.028c1.978-.627 4.004-1.568 6.107-3.115a.077.077 0 0 0 .03-.055c.5-5.177-.838-9.637-3.548-13.625a.061.061 0 0 0-.03-.028zM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.175 1.094 2.157 2.418 0 1.334-.955 2.419-2.157 2.419zm7.974 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.175 1.094 2.157 2.418 0 1.334-.947 2.419-2.157 2.419z" />
          </svg>
          Join the Armada Hub Discord
        </a>
        <a
          href="https://docs.google.com/spreadsheets/d/1-bgwGFEEm4HkKgl4T5aRMjZk4SXk925f8mF2n7zn200/edit?resourcekey=&gid=753233091#gid=753233091"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#0F9D58] hover:bg-[#34A853] text-white font-semibold py-2 px-6 rounded-lg shadow transition-colors duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="currentColor" className="w-5 h-5">
            <path d="M6 8a2 2 0 0 1 2-2h20l10 10v24a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8zm22 0v8h8l-8-8z"/>
            <rect x="13" y="22" width="22" height="2" rx="1"/>
            <rect x="13" y="28" width="22" height="2" rx="1"/>
            <rect x="13" y="34" width="14" height="2" rx="1"/>
          </svg>
           View Contact Spreadsheet
        </a>
      </div>
      {loading && <p className="text-gray-300">Loading communities...</p>}
      {error && <p className="text-red-400">{error}</p>}
      {!loading && !error && (
        <div className="overflow-x-auto bg-gray-800/90 backdrop-blur-sm p-8 rounded-xl ring-1 ring-gray-700/50">
          <h2 className="text-2xl font-semibold text-white mb-4 text-center">Armada Phonebook</h2>
          <table className="w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left text-white w-auto cursor-pointer select-none" onClick={handleSortByCountry}>
                  <span className="flex items-center gap-1">
                    Country (State)
                    <svg className="w-4 h-4 inline" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      {sortByCountryAsc ? (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      )}
                    </svg>
                  </span>
                </th>
                <th className="px-4 py-2 text-left text-white w-auto">Discord Handle</th>
                <th className="px-4 py-2 text-left text-white min-w-[120px] whitespace-nowrap">Active</th>
                <th className="px-4 py-2 text-left text-white min-w-[120px]">Description</th>
              </tr>
            </thead>
            <tbody>
              {communities.length === 0 && (
                <tr>
                  <td colSpan="3" className="px-4 py-2 text-gray-300">No communities found.</td>
                </tr>
              )}
              {communities.map(community => (
                <tr key={community.id} className="border-t border-gray-700">
                  <td className="px-4 py-2 text-gray-300 text-left w-auto">
                    {community.country}
                    {community.state && (
                      <span className="text-gray-400"> ({community.state})</span>
                    )}
                  </td>
                  <td className="px-4 py-2 text-gray-300 text-left w-auto">{community.discord}</td>
                  <td className="px-4 py-2 text-gray-300 text-left min-w-[120px] whitespace-nowrap">
                    <span className="block font-semibold">{community.active ? 'Yes' : 'No'}</span>
                    {(() => {
                      // Format timestamp as (YYYY MMM) if available
                      const timestampStr = community.timestamp || '';
                      if (timestampStr) {
                        const d = new Date(timestampStr);
                        if (!isNaN(d.getTime())) {
                          const year = d.getFullYear();
                          const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                          const month = monthNames[d.getMonth()];
                          return <span className="block text-base text-gray-400 mt-1">As of {year} {month}</span>;
                        }
                      }
                      return '';
                    })()}
                  </td>
                  <td className="px-4 py-2 text-left min-w-[120px] break-words break-all">
                    {/* Desktop/tablet: show link text directly */}
                    <span className="hidden sm:inline break-all text-gray-200">
                      {community.link ? community.link : <span className="text-gray-400">—</span>}
                    </span>
                    {/* Mobile: show button to open modal */}
                    <span className="inline sm:hidden">
                      {community.link ? (
                        <>
                          <button
                            className="bg-[#C14949] hover:bg-[#D15A5A] text-white font-medium px-2 py-0.5 rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#C14949]"
                            onClick={() => setPopupLink(community.link)}
                            type="button"
                          >
                            Show
                          </button>
                          {popupLink === community.link && (
                            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60">
                              <div className="bg-gray-900 p-8 rounded-2xl shadow-2xl max-w-lg w-11/12 sm:w-3/4 md:w-1/2 flex flex-col items-center relative border border-gray-700">
                                <button
                                  className="absolute top-4 right-4 text-gray-400 hover:text-white text-4xl font-extrabold focus:outline-none p-2"
                                  onClick={() => setPopupLink(null)}
                                  aria-label="Close"
                                >
                                  &times;
                                </button>
                                <div className="text-white text-lg font-semibold mb-4 text-center">Community Links</div>
                                <div className="text-gray-200 break-all text-base bg-gray-800 rounded p-4 w-full text-center select-all">
                                  {community.link}
                                </div>
                              </div>
                            </div>
                          )}
                        </>
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Communities; 