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

  const getPdfUrl = (path) => {
    return `${path}#toolbar=0&navpanes=0&view=FitH`;
  };

  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col p-2 md:p-4 font-montserrat overflow-y-hidden">
      <div className="max-w-6xl mx-auto w-full flex flex-col flex-grow mt-4 md:mt-6">
        <div className="bg-gray-800/90 backdrop-blur-sm p-4 rounded-xl ring-1 ring-gray-700/50 flex flex-col flex-grow min-h-0">
          <div className="flex flex-col md:flex-row gap-2 mb-4">
            <select
              id="pdf-selector"
              value={selectedPdf.path}
              onChange={(e) => {
                const selected = pdfFiles.find(pdf => pdf.path === e.target.value);
                setSelectedPdf(selected);
              }}
              className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-3 py-1.5 text-white focus:outline-none focus:ring-2 focus:ring-[#C14949] text-sm md:text-base"
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
              className="bg-[#C14949] hover:bg-[#D15A5A] text-white p-2 rounded-xl transition-colors flex items-center justify-center"
              title="Download PDF"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
            </a>
          </div>
          <p className="text-xs md:text-sm text-gray-400 mb-4">
            Tip: Use Ctrl+F (Windows/Linux) or Cmd+F (Mac) to search within the PDF document.
          </p>

          <div className="flex-grow min-h-0">
            <embed
              src={getPdfUrl(selectedPdf.path)}
              type="application/pdf"
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