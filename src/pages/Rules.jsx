import React, { useState } from 'react';

function Rules() {
  const pdfFiles = [
    { name: 'Squadrons', path: '/pdfs/Squadrons.pdf' },
    { name: 'Support Team', path: '/pdfs/Support Team.pdf' },
    { name: 'Weapons Team', path: '/pdfs/Weapons Team.pdf' },
    { name: 'Defensive Retrofit', path: '/pdfs/Defensive Retrofit.pdf' },
    { name: 'Turbolasers', path: '/pdfs/Turbolasers.pdf' },
    { name: 'Fleet Support', path: '/pdfs/Fleet Support.pdf' },
    { name: 'Fleet Command', path: '/pdfs/Fleet Command.pdf' },
    { name: 'Super Weapon', path: '/pdfs/Super Weapon.pdf' }
  ];

  const [selectedPdf, setSelectedPdf] = useState(pdfFiles[0]);

  return (
    <div className="min-h-screen p-8 font-montserrat">
      <div className="max-w-6xl mx-auto mt-8">
        <h1 className="text-5xl font-bold mb-6 text-white text-center">Rules</h1>
        <p className="text-xl text-gray-300 mb-8 leading-relaxed text-center">
          Welcome to the Rules section. Here you'll find all the official rules and guidelines for Star Wars: Armada.
        </p>

        <div className="bg-gray-800/90 backdrop-blur-sm p-4 rounded-xl ring-1 ring-gray-700/50">
          <div className="mb-4">
            <label htmlFor="pdf-selector" className="block text-base font-medium text-white mb-1">
              Select Rules Document
            </label>
            <div className="flex gap-4">
              <select
                id="pdf-selector"
                value={selectedPdf.path}
                onChange={(e) => {
                  const selected = pdfFiles.find(pdf => pdf.path === e.target.value);
                  setSelectedPdf(selected);
                }}
                className="flex-grow bg-gray-700/50 border border-gray-600 rounded-xl px-3 py-1.5 text-white focus:outline-none focus:ring-2 focus:ring-[#C14949]"
              >
                {pdfFiles.map((pdf, index) => (
                  <option key={index} value={pdf.path}>
                    {pdf.name}
                  </option>
                ))}
              </select>
              <a
                href={selectedPdf.path}
                download
                className="bg-[#C14949] hover:bg-[#D15A5A] text-white px-4 py-1.5 rounded-xl transition-colors flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download
              </a>
            </div>
            <p className="text-sm text-gray-400 mt-2">
              Tip: Use Ctrl+F (Windows/Linux) or Cmd+F (Mac) to search within the PDF document.
            </p>
          </div>

          <div className="h-[calc(100vh-24rem)]">
            <iframe
              src={selectedPdf.path}
              className="w-full h-full rounded-lg"
              title="Rules PDF Viewer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rules; 