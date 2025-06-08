import React, { useState } from 'react';

function Rules() {
  const pdfFiles = [
    { name: 'Cover', path: '/pdfs/Cover.pdf', isCover: true, size: '1.5MB' },
    { name: 'Titles', compressedPath: '/pdfs/compressed/Titles_min_0.8.pdf', rawPath: '/pdfs/raw/Titles.pdf', compressedSize: '6.5MB', rawSize: '17MB' },
    { name: 'Commanders', compressedPath: '/pdfs/compressed/Commanders_min_0.8.pdf', rawPath: '/pdfs/raw/Commanders.pdf', compressedSize: '4.5MB', rawSize: '24MB' },
    { name: 'Officers', compressedPath: '/pdfs/compressed/Officers_min_0.8.pdf', rawPath: '/pdfs/raw/Officers.pdf', compressedSize: '2.8MB', rawSize: '14MB' },
    { name: 'Boarding Teams', compressedPath: '/pdfs/compressed/Boarding Teams_min_0.8.pdf', rawPath: '/pdfs/raw/Boarding Teams.pdf', compressedSize: '780KB', rawSize: '2.2MB' },
    { name: 'Weapon Teams', compressedPath: '/pdfs/compressed/Weapon Teams_min_0.8.pdf', rawPath: '/pdfs/raw/Weapon Teams.pdf', compressedSize: '1.5MB', rawSize: '4.2MB' },
    { name: 'Support Teams', compressedPath: '/pdfs/compressed/Support Teams_min_0.8.pdf', rawPath: '/pdfs/raw/Support Teams.pdf', compressedSize: '985KB', rawSize: '4.2MB' },
    { name: 'Offensive Retrofits', compressedPath: '/pdfs/compressed/Offensive Retrofits_min_0.8.pdf', rawPath: '/pdfs/raw/Offensive Retrofits.pdf', compressedSize: '2.0MB', rawSize: '11MB' },
    { name: 'Defensive Retrofits', compressedPath: '/pdfs/compressed/Defensive Retrofits_min_0.8.pdf', rawPath: '/pdfs/raw/Defensive Retrofits.pdf', compressedSize: '738KB', rawSize: '3.7MB' },
    { name: 'Fleet Commands', compressedPath: '/pdfs/compressed/Fleet Commands_min_0.8.pdf', rawPath: '/pdfs/raw/Fleet Commands.pdf', compressedSize: '1023KB', rawSize: '5.4MB' },
    { name: 'Fleet Support', compressedPath: '/pdfs/compressed/Fleet Support_min_0.8.pdf', rawPath: '/pdfs/raw/Fleet Support.pdf', compressedSize: '779KB', rawSize: '2.6MB' },
    { name: 'Ordnance', compressedPath: '/pdfs/compressed/Ordnance_min_0.8.pdf', rawPath: '/pdfs/raw/Ordnance.pdf', compressedSize: '788KB', rawSize: '2.4MB' },
    { name: 'Ion Cannons', compressedPath: '/pdfs/compressed/Ion Cannons_min_0.8.pdf', rawPath: '/pdfs/raw/Ion Cannons.pdf', compressedSize: '768KB', rawSize: '4.0MB' },
    { name: 'Turbolasers', compressedPath: '/pdfs/compressed/Turbolasers_min_0.8.pdf', rawPath: '/pdfs/raw/Turbolasers.pdf', compressedSize: '1.6MB', rawSize: '4.3MB' },
    { name: 'Experimental Retrofits', compressedPath: '/pdfs/compressed/Experimental Retrofits_min_0.8.pdf', rawPath: '/pdfs/raw/Experimental Retrofits.pdf', compressedSize: '538KB', rawSize: '2.8MB' },
    { name: 'Super Weapons', compressedPath: '/pdfs/compressed/Super Weapons_min_0.8.pdf', rawPath: '/pdfs/raw/Super Weapons.pdf', compressedSize: '362KB', rawSize: '1.1MB' },
    { name: 'Squadrons', compressedPath: '/pdfs/compressed/Squadrons_min_0.8.pdf', rawPath: '/pdfs/raw/Squadrons.pdf', compressedSize: '5.8MB', rawSize: '15MB' },
    { name: 'Damage Cards', compressedPath: '/pdfs/compressed/Damage Cards_min_0.8.pdf', rawPath: '/pdfs/raw/Damage Cards.pdf', compressedSize: '1.6MB', rawSize: '7.9MB' }
  ];

  const [selectedPdf, setSelectedPdf] = useState(pdfFiles[0]);

  const getPdfUrl = (path) => {
    return `${path}#toolbar=0&navpanes=0&view=FitH`;
  };

  const getDisplayPath = (pdf) => {
    if (pdf.isCover) return pdf.path;
    return pdf.compressedPath;
  };

  return (
    <div className="h-[calc(100vh)] flex flex-col p-2 md:p-4 font-montserrat overflow-y-hidden pt-4" style={{ marginTop: '-2rem' }}>
      <div className="max-w-6xl mx-auto w-full flex flex-col flex-grow mt-4 md:mt-6" style={{ marginTop: '3rem' }}>
        <div className="bg-gray-800/90 backdrop-blur-sm p-4 rounded-xl ring-1 ring-gray-700/50 flex flex-col flex-grow min-h-0">
          <div className="flex flex-col md:flex-row gap-2 mb-4">
            <select
              id="pdf-selector"
              value={getDisplayPath(selectedPdf)}
              onChange={(e) => {
                const selected = pdfFiles.find(pdf => getDisplayPath(pdf) === e.target.value);
                setSelectedPdf(selected);
              }}
              className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-3 py-1.5 text-white focus:outline-none focus:ring-2 focus:ring-[#C14949] text-sm md:text-base"
            >
              {pdfFiles.map((pdf, index) => (
                <option key={index} value={getDisplayPath(pdf)}>
                  {pdf.name}
                </option>
              ))}
            </select>
            {selectedPdf.isCover && (
              <div className="flex gap-2">
                <a
                  href="/pdfs/ARM v1.0 Text Only.pdf"
                  download
                  className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded-xl transition-colors flex items-center gap-2"
                  title="Download Text Only Version"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  <div className="flex flex-col items-start">
                    <span>Text Only</span>
                    <span className="text-sm text-gray-200">4.5MB</span>
                  </div>
                </a>
                <a
                  href="https://d2j4aq9mja0i3a.cloudfront.net/armada-reference-manual/ARM%20v1.02.pdf"
                  className="bg-[#C14949] hover:bg-[#D15A5A] text-white px-3 py-2 rounded-xl transition-colors flex items-center gap-2"
                  title="Download Full Document"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                  <div className="flex flex-col items-start">
                    <span>External Link</span>
                    <span className="text-sm text-gray-200">88MB</span>
                  </div>
                </a>
              </div>
            )}
            {!selectedPdf.isCover && (
              <div className="flex gap-2">
                <a
                  href={selectedPdf.compressedPath}
                  download
                  className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded-xl transition-colors flex items-center gap-2"
                  title="Download Compressed PDF"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  <div className="flex flex-col items-start">
                    <span>Compressed</span>
                    <span className="text-sm text-gray-200">{selectedPdf.compressedSize}</span>
                  </div>
                </a>
                <a
                  href={selectedPdf.rawPath}
                  download
                  className="bg-[#C14949] hover:bg-[#D15A5A] text-white px-3 py-2 rounded-xl transition-colors flex items-center gap-2"
                  title="Download Raw PDF"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  <div className="flex flex-col items-start">
                    <span>Raw</span>
                    <span className="text-sm text-gray-200">{selectedPdf.rawSize}</span>
                  </div>
                </a>
              </div>
            )}
          </div>
          <p className="text-xs md:text-sm text-gray-400 mb-4">
            Tip: Use Ctrl+F (Windows/Linux) or Cmd+F (Mac) to search within the PDF document.
          </p>

          <div className="flex-grow min-h-0">
            <object
              data={getPdfUrl(getDisplayPath(selectedPdf))}
              type="application/pdf"
              className="w-full h-full rounded-lg"
            >
              <p>Browser does not support PDF files. <a href={getDisplayPath(selectedPdf)}><b>Download</b></a> instead.</p>
            </object>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rules; 