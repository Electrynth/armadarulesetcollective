import React, { useState, useEffect } from 'react';

// FORM SCHEMA

const fieldsToIndexSchema = {
  formSubmissionDate: 0,
  eventName: 1,
  eventStartDate: 2,
  eventCountry: 3,
  ticketURL: 4,
  standingsURL: 5,
  emailPOC: 6,
  inPersonOrOnline: 7,
  submitterEmail: 8,
  eventFormat: 9,
  numDays: 10
};


// External link icon component
const ExternalLinkIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className="h-4 w-4 ml-1" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
    />
  </svg>
);

const OrganizedPlay = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [timeFilter, setTimeFilter] = useState('future'); // 'past' or 'future'
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const SPREADSHEET_ID = '19vv-Z-YFxlP0ZqVe4vAMXSjBTQhB_DmX1ARLZiufYw4';
        const RANGE = 'Sheet1!A2:Z';

        // Using the public visualization API instead
        const response = await fetch(
          `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/gviz/tq?tqx=out:csv&range=${RANGE}`,
          {
            headers: {
              'Accept': 'text/csv',
            },
          }
        );

        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }

        const csvText = await response.text();
        const rows = csvText.split('\n').map(row => row.split(',').map(cell => cell.replace(/^"|"$/g, '')));
        
        // Transform the data into the expected format and filter out rows without event names
        const transformedEvents = rows
          .map((row, index) => ({
            id: index,
            eventName: row[fieldsToIndexSchema.eventName] || '',
            eventDate: row[fieldsToIndexSchema.eventStartDate] || '',
            city: row[fieldsToIndexSchema.eventCountry] || '',
            country: row[fieldsToIndexSchema.eventCountry] || '',
            type: row[fieldsToIndexSchema.inPersonOrOnline]?.toLowerCase() || 'in-person',
            format: row[fieldsToIndexSchema.eventFormat] || '',
            ticketLink: row[fieldsToIndexSchema.ticketURL] || '',
            standingsLink: row[fieldsToIndexSchema.standingsURL] || '',
            emailPOC: row[fieldsToIndexSchema.emailPOC] || '',
            submitterEmail: row[fieldsToIndexSchema.submitterEmail] || '',
            numDays: row[fieldsToIndexSchema.numDays] || '1'
          }))
          .filter(event => event.eventName.trim() !== ''); // Filter out events without names

        setEvents(transformedEvents);
      } catch (err) {
        console.error('Error fetching events:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // Filter events based on timeFilter
  useEffect(() => {
    const now = new Date();
    const filtered = events.filter(event => {
      const eventDate = new Date(event.eventDate);
      const numDays = parseInt(event.numDays) || 1;
      const eventEndDate = new Date(eventDate);
      eventEndDate.setDate(eventDate.getDate() + numDays - 1);

      if (timeFilter === 'future') {
        // Include events that are ongoing or haven't started yet
        return eventEndDate >= now;
      } else {
        // Past events are those that have completely ended
        return eventEndDate < now;
      }
    });
    setFilteredEvents(filtered);
  }, [events, timeFilter]);

  if (loading) {
    return (
      <div className="min-h-screen p-8 font-montserrat">
        <div className="max-w-6xl mx-auto mt-8">
          <div className="bg-gray-800/90 backdrop-blur-sm p-6 rounded-xl ring-1 ring-gray-700/50 text-center">
            <p className="text-gray-300 text-lg">Loading events...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen p-8 font-montserrat">
        <div className="max-w-6xl mx-auto mt-8">
          <div className="bg-red-900/90 backdrop-blur-sm p-6 rounded-xl ring-1 ring-red-700/50 text-center">
            <p className="text-red-200 text-lg">Error loading events: {error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 font-montserrat">
      <div className="max-w-6xl mx-auto mt-8">
        <h1 className="text-5xl font-bold mb-6 text-white text-center">
          Organized Play
        </h1>
      </div>
      <div className="max-w-6xl mx-auto mt-8">
        {/* Events Table */}
        <div className="bg-gray-800/90 backdrop-blur-sm p-6 rounded-xl ring-1 ring-gray-700/50">
          {/* Controls */}
          <div className="mb-6 flex justify-between items-center">
            <div className="flex gap-2">
              <button
                onClick={() => setTimeFilter('past')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  timeFilter === 'past'
                    ? 'bg-gray-600 text-white'
                    : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
                }`}
              >
                Past Events
              </button>
              <button
                onClick={() => setTimeFilter('future')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  timeFilter === 'future'
                    ? 'bg-gray-600 text-white'
                    : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
                }`}
              >
                Upcoming & Current Events
              </button>
            </div>
            <a
              href="#" // TODO: Replace with actual form link
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-[#C14949] hover:bg-[#D15A5A] text-white rounded-lg transition-colors"
            >
                Submission Form
              <ExternalLinkIcon />
            </a>
          </div>

          {/* Table Header */}
          <div className="hidden md:grid grid-cols-12 gap-4 px-4 py-3 bg-gray-800/50 rounded-xl text-gray-300 font-semibold text-sm mb-4">
            <div className="col-span-4 text-left">Event Name</div>
            <div className="col-span-2 text-left">Date</div>
            <div className="col-span-2 text-left">Location</div>
            <div className="col-span-2 text-left">Format</div>
            <div className="col-span-2 text-left">Links</div>
          </div>

          {/* Events List */}
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-gray-700/50 rounded-xl ring-1 ring-gray-600/50 hover:ring-gray-500/50 transition-all mb-4"
            >
              {/* Mobile Layout */}
              <div className="md:hidden p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <div className="font-bold text-white">{event.eventName}</div>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    event.format === 'Standard' 
                      ? 'bg-blue-500/20 text-blue-200' 
                      : 'bg-purple-500/20 text-purple-200'
                  }`}>
                    {event.format}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex flex-col justify-center">
                    <div className="text-gray-400">Date</div>
                    <div className="text-white">
                      {new Date(event.eventDate).toLocaleDateString()}
                    </div>
                    {event.numDays > 1 && (
                      <div className="text-sm text-gray-400">
                        {event.numDays} day{event.numDays > 1 ? 's' : ''}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="text-gray-400">Location</div>
                    {event.type === 'in-person' ? (
                      <div className="text-white">{event.country}</div>
                    ) : (
                      <div className="text-white">{event.type}</div>
                    )}
                  </div>
                </div>

                <div className="flex flex-col space-y-2 pt-2">
                  {event.ticketLink && (
                    <a
                      href={event.ticketLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center bg-[#C14949] hover:bg-[#D15A5A] text-white px-2 py-1.5 rounded-lg transition-colors text-xs"
                    >
                      Tickets
                      <ExternalLinkIcon />
                    </a>
                  )}
                  {event.standingsLink && (
                    <a
                      href={event.standingsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center bg-gray-600 hover:bg-gray-500 text-white px-3 py-2 rounded-lg transition-colors text-sm"
                    >
                      Standings
                      <ExternalLinkIcon />
                    </a>
                  )}
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:grid grid-cols-12 gap-4 px-4 py-3">
                {/* Event Name */}
                <div className="col-span-4 flex items-center">
                  <div className="font-bold text-white">{event.eventName}</div>
                </div>

                {/* Date */}
                <div className="col-span-2 flex flex-col justify-center">
                  <div className="text-white">
                    {new Date(event.eventDate).toLocaleDateString()}
                  </div>
                  {event.numDays > 1 && (
                    <div className="text-sm text-gray-400">
                      {event.numDays} day{event.numDays > 1 ? 's' : ''}
                    </div>
                  )}
                </div>

                {/* Location */}
                <div className="col-span-2 flex items-center">
                  {event.type === 'in-person' ? (
                    <div className="text-white">{event.country}</div>
                  ) : (
                    <div className="text-white">{event.type}</div>
                  )}
                </div>

                {/* Format */}
                <div className="col-span-2 flex items-center">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    event.format === 'Standard' 
                      ? 'bg-blue-500/20 text-blue-200' 
                      : 'bg-purple-500/20 text-purple-200'
                  }`}>
                    {event.format}
                  </span>
                </div>

                {/* Links */}
                <div className="col-span-2 flex flex-col justify-center space-y-2">
                  {event.ticketLink && (
                    <a
                      href={event.ticketLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-[#C14949] hover:bg-[#D15A5A] text-white px-2 py-1 rounded-lg transition-colors text-xs"
                    >
                      Tickets
                      <ExternalLinkIcon />
                    </a>
                  )}
                  {event.standingsLink && (
                    <a
                      href={event.standingsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-gray-600 hover:bg-gray-500 text-white px-3 py-1.5 rounded-lg transition-colors text-sm"
                    >
                      Standings
                      <ExternalLinkIcon />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Container */}
        <div className="mt-12 bg-gray-800/90 backdrop-blur-sm p-8 rounded-xl ring-1 ring-gray-700/50">
          <h2 className="text-3xl font-semibold text-white mb-6">Contact Us</h2>
          
          <p className="text-xl text-gray-300 mb-6 leading-relaxed">
            Have questions or suggestions? Reach out to us through the ARC Discussion channel on the Armada Hub Discord or send us an email.
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

export default OrganizedPlay; 