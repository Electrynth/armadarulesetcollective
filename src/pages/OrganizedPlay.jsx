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
  topCut: 9,
  numDays: 10
};

// Sort direction enum
const SortDirection = {
  ASC: 'asc',
  DESC: 'desc'
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
  const [sortField, setSortField] = useState('date'); // 'date' or 'location'
  const [sortDirection, setSortDirection] = useState(SortDirection.ASC);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const SPREADSHEET_ID = '19vv-Z-YFxlP0ZqVe4vAMXSjBTQhB_DmX1ARLZiufYw4';
        const RANGE = 'Approved Events!A2:Z';

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
            topCut: row[fieldsToIndexSchema.topCut] || '',
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

  // Filter and sort events based on timeFilter and sort settings
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

    // Sort events
    const sorted = filtered.sort((a, b) => {
      let comparison = 0;
      
      if (sortField === 'date') {
        const dateA = new Date(a.eventDate);
        const dateB = new Date(b.eventDate);
        comparison = dateA - dateB;
      } else if (sortField === 'location') {
        const locationA = (a.type === 'in-person' ? a.country : a.type).toLowerCase();
        const locationB = (b.type === 'in-person' ? b.country : b.type).toLowerCase();
        comparison = locationA.localeCompare(locationB);
      }
      
      // Apply sort direction
      return sortDirection === SortDirection.ASC ? comparison : -comparison;
    });

    setFilteredEvents(sorted);
  }, [events, timeFilter, sortField, sortDirection]);

  // Handle sort button clicks
  const handleSort = (field) => {
    if (sortField === field) {
      // Toggle direction if same field
      setSortDirection(sortDirection === SortDirection.ASC ? SortDirection.DESC : SortDirection.ASC);
    } else {
      // Set new field with ascending direction
      setSortField(field);
      setSortDirection(SortDirection.ASC);
    }
  };

  // Handle info button click
  const handleInfoClick = (event) => {
    setSelectedEvent(event);
    setShowPopup(true);
  };

  // Handle popup close
  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedEvent(null);
  };

  // Sort button component
  const SortButton = ({ field, label }) => (
    <button
      onClick={() => handleSort(field)}
      className={`inline-flex items-center gap-1 px-3 py-1 rounded-lg transition-colors text-sm ${
        sortField === field
          ? 'bg-gray-600 text-white'
          : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
      }`}
    >
      {label}
      {sortField === field && (
        <svg 
          className={`w-4 h-4 transition-transform ${sortDirection === SortDirection.DESC ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
        </svg>
      )}
    </button>
  );

  // Popup component
  const InfoPopup = () => {
    if (!showPopup || !selectedEvent) return null;

    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="bg-gray-800 rounded-xl ring-1 ring-gray-700 max-w-md w-full p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-white">{selectedEvent.eventName}</h3>
            <button
              onClick={handleClosePopup}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="space-y-4 text-gray-300">
            <div>
              <h4 className="font-semibold text-white mb-2">Event Details</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Date:</span>
                  <span>{new Date(selectedEvent.eventDate).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}</span>
                </div>
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span>{selectedEvent.numDays} day{selectedEvent.numDays > 1 ? 's' : ''}</span>
                </div>
                <div className="flex justify-between">
                  <span>Type:</span>
                  <span className="capitalize">{selectedEvent.type}</span>
                </div>
                {selectedEvent.topCut && selectedEvent.topCut !== 'TBD' && (
                  <div className="flex justify-between">
                    <span>Top Cut:</span>
                    <span>Top {selectedEvent.topCut}</span>
                  </div>
                )}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-2">Links</h4>
              <div className="space-y-2">
                {selectedEvent.ticketLink && (
                  <a
                    href={selectedEvent.ticketLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-[#C14949] hover:bg-[#D15A5A] text-white px-4 py-2 rounded-lg transition-colors text-center text-sm"
                  >
                    Get Tickets
                  </a>
                )}
                {selectedEvent.standingsLink && selectedEvent.standingsLink !== 'TBD' && (
                  <a
                    href={selectedEvent.standingsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded-lg transition-colors text-center text-sm"
                  >
                    View Standings
                  </a>
                )}
              </div>
            </div>

            {selectedEvent.type !== 'in-person' && (
              <div className="pt-2 border-t border-gray-600">
                <p className="text-sm text-gray-400 italic">
                  Online events are typically organized through the Armada Hub Discord.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

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
      {/* WIP Banner - styled to match other pages */}
      <div className="max-w-6xl mx-auto mt-8">
        <div className="bg-yellow-900/90 backdrop-blur-sm p-6 rounded-xl ring-1 ring-yellow-700/50 mb-8 text-center">
          <h2 className="text-3xl font-bold text-yellow-200 mb-2">🚧 Work In Progress 🚧</h2>
          <p className="text-yellow-100 text-lg">
            This page is currently under development. Content and features may change. Email contact@armadarulesetcollective.com for questions, comments, or concerns regarding the functionality and display of this page.
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8">
        <h1 className="text-5xl font-bold mb-6 text-white text-center">
          Organized Play
        </h1>
      </div>
      <div className="max-w-6xl mx-auto mt-8">
        {/* Events Table */}
        <div className="bg-gray-800/90 backdrop-blur-sm p-6 rounded-xl ring-1 ring-gray-700/50">
          {/* Controls */}
          <div className="mb-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfd8SNOg9VsVf_gvtStgvqRniaUmOOyO3nu_jytMkBfaGxKbA/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-[#C14949] hover:bg-[#D15A5A] text-white rounded-lg transition-colors md:order-2"
            >
              Submission Form
              <ExternalLinkIcon />
            </a>
            <div className="flex flex-col md:flex-row gap-2 md:order-1">
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
          </div>

          {/* Table Header */}
          <div className="hidden md:grid grid-cols-12 gap-4 px-4 py-3 bg-gray-800/50 rounded-xl text-gray-300 font-semibold text-sm mb-4">
            <div className="col-span-4 text-left">Event Name</div>
            <div className="col-span-2 text-left flex items-center gap-2">
              Date
              <SortButton field="date" label="Sort" />
            </div>
            <div className="col-span-2 text-left flex items-center gap-2">
              Location
              <SortButton field="location" label="Sort" />
            </div>
            <div className="col-span-2 text-left">Cut</div>
            <div className="col-span-2 text-left">Links</div>
          </div>

          {/* Events List */}
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              onClick={() => handleInfoClick(event)}
              className="bg-gray-700/50 rounded-xl ring-1 ring-gray-600/50 hover:ring-gray-500/50 hover:bg-gray-700/70 transition-all mb-4 cursor-pointer"
            >
              {/* Mobile Layout */}
              <div className="md:hidden p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <div className="font-bold text-white">{event.eventName}</div>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    isNaN(event.topCut) || event.topCut === '0'
                      ? 'bg-blue-500/20 text-blue-200' 
                      : 'bg-purple-500/20 text-purple-200'
                  }`}>
                    {event.numDays > 1 ? (
                      event.topCut && event.topCut !== 'TBD' ? `Top ${event.topCut} Cut` : 'Cut TBD'
                    ) : (
                      '1 Day Event'
                    )}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex flex-col items-start justify-center">
                    <div className="text-gray-400">Date</div>
                    <div className="text-white">
                      {new Date(event.eventDate).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </div>
                    {event.numDays > 1 && (
                      <div className="text-sm text-gray-400">
                        {event.numDays} day{event.numDays > 1 ? 's' : ''}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="text-gray-400">Location</div>
                    <div className="text-white">{event.type === 'in-person' ? event.country : event.type}</div>
                  </div>
                </div>

                <div className="flex flex-col space-y-2 pt-2">
                  {event.ticketLink && (
                    <a
                      href={event.ticketLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-full inline-flex items-center justify-center bg-[#C14949] hover:bg-[#D15A5A] text-white px-2 py-1.5 rounded-lg transition-colors text-xs"
                    >
                      Tickets
                      <ExternalLinkIcon />
                    </a>
                  )}
                  {event.standingsLink && event.standingsLink !== 'TBD' && (
                    <a
                      href={event.standingsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-full inline-flex items-center justify-center bg-gray-600 hover:bg-gray-500 text-white px-2 py-1.5 rounded-lg transition-colors text-xs"
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
                  <div className="font-bold text-white text-left">{event.eventName}</div>
                </div>

                {/* Date */}
                <div className="col-span-2 flex flex-col justify-center">
                  <div className="text-white text-left">
                    {new Date(event.eventDate).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </div>
                  {event.numDays > 1 && (
                    <div className="text-sm text-gray-400 text-left">
                      {event.numDays} day{event.numDays > 1 ? 's' : ''}
                    </div>
                  )}
                </div>

                {/* Location */}
                <div className="col-span-2 flex items-center">
                  <div className="text-white text-left">{event.type === 'in-person' ? event.country : event.type}</div>
                </div>

                {/* Top Cut */}
                <div className="col-span-2 flex items-center">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    isNaN(event.topCut) || event.topCut === '0'
                      ? 'bg-blue-500/20 text-blue-200' 
                      : 'bg-purple-500/20 text-purple-200'
                  }`}>
                    {event.numDays > 1 ? (
                      event.topCut && event.topCut !== 'TBD' ? `Top ${event.topCut} Cut` : 'Cut TBD'
                    ) : (
                      '1 Day Event'
                    )}
                  </span>
                </div>

                {/* Links */}
                <div className="col-span-2 flex flex-col justify-center space-y-2">
                  {event.ticketLink && (
                    <a
                      href={event.ticketLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center justify-center bg-[#C14949] hover:bg-[#D15A5A] text-white px-2 py-1 rounded-lg transition-colors text-xs"
                    >
                      Tickets
                      <ExternalLinkIcon />
                    </a>
                  )}
                  {event.standingsLink && event.standingsLink !== 'TBD' && (
                    <a
                      href={event.standingsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center justify-center bg-gray-600 hover:bg-gray-500 text-white px-2 py-1 rounded-lg transition-colors text-xs"
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

        {/* Info Popup */}
        <InfoPopup />

        {/* Contact Container */}
        <div className="mt-12 bg-gray-800/90 backdrop-blur-sm p-8 rounded-xl ring-1 ring-gray-700/50">
          <h2 className="text-3xl font-semibold text-white mb-6">Contact Us</h2>
          
          <p className="text-xl text-gray-300 mb-6 leading-relaxed">
            Have questions regarding Organized Play or want more information on any of these events? Reach out to us through our dedicated Organized Play email!
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
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