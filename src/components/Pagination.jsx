import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Don't render if there's only one page
  if (totalPages <= 1) return null;
  
  // Generate page numbers to display
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    
    // Always show first page
    pageNumbers.push(1);
    
    // Calculate start and end of visible page range
    let startPage = Math.max(2, currentPage - 1);
    let endPage = Math.min(totalPages - 1, currentPage + 1);
    
    // Adjust if we're near the beginning
    if (currentPage <= 3) {
      endPage = Math.min(totalPages - 1, 4);
    }
    
    // Adjust if we're near the end
    if (currentPage >= totalPages - 2) {
      startPage = Math.max(2, totalPages - 3);
    }
    
    // Add ellipsis after first page if needed
    if (startPage > 2) {
      pageNumbers.push('...');
    }
    
    // Add middle pages
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    
    // Add ellipsis before last page if needed
    if (endPage < totalPages - 1) {
      pageNumbers.push('...');
    }
    
    // Always show last page if there's more than one page
    if (totalPages > 1) {
      pageNumbers.push(totalPages);
    }
    
    return pageNumbers;
  };
  
  const pageNumbers = getPageNumbers();
  
  return (
    <div className="flex justify-center items-center mt-8 mb-4">
      <nav className="flex items-center space-x-2">
        {/* Previous button */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded-lg transition-colors ${
            currentPage === 1
              ? 'bg-gray-800/50 text-gray-500 cursor-not-allowed'
              : 'bg-gray-800/90 text-white hover:bg-gray-700/90'
          }`}
          aria-label="Previous page"
        >
          ←
        </button>
        
        {/* Page numbers */}
        {pageNumbers.map((page, index) => (
          <React.Fragment key={index}>
            {page === '...' ? (
              <span className="px-2 py-1 text-gray-400">...</span>
            ) : (
              <button
                onClick={() => onPageChange(page)}
                className={`px-3 py-1 rounded-lg transition-colors ${
                  currentPage === page
                    ? 'bg-[#C14949] text-white'
                    : 'bg-gray-800/90 text-white hover:bg-gray-700/90'
                }`}
                aria-label={`Page ${page}`}
                aria-current={currentPage === page ? 'page' : undefined}
              >
                {page}
              </button>
            )}
          </React.Fragment>
        ))}
        
        {/* Next button */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded-lg transition-colors ${
            currentPage === totalPages
              ? 'bg-gray-800/50 text-gray-500 cursor-not-allowed'
              : 'bg-gray-800/90 text-white hover:bg-gray-700/90'
          }`}
          aria-label="Next page"
        >
          →
        </button>
      </nav>
    </div>
  );
};

export default Pagination; 