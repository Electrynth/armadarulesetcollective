import { Link } from 'react-router-dom';
import ARC_Logo_No_Text from '../assets/ARC Logo no text Circle.png';
import { useState, useCallback, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import RichTextContent from './RichTextContent';

// Utility function to parse basic markdown links
const parseMarkdownLinks = (text) => {
  if (!text) return text;
  
  // Regular expression to match markdown links: [text](url "title")
  const linkRegex = /\[([^\]]+)\]\(([^)]+)(?:\s+"([^"]+)")?\)/g;
  
  const parts = [];
  let lastIndex = 0;
  let match;
  
  while ((match = linkRegex.exec(text)) !== null) {
    // Add text before the link
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    
    // Extract link components
    const linkText = match[1];
    const linkUrl = match[2];
    const linkTitle = match[3] || '';
    
    // Create the link element
    parts.push(
      <a 
        key={`link-${match.index}`}
        href={linkUrl}
        title={linkTitle}
        className="text-[#C14949] hover:text-[#D15A5A] underline break-all"
        target={linkUrl.startsWith('http') ? '_blank' : undefined}
        rel={linkUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {linkText}
      </a>
    );
    
    lastIndex = match.index + match[0].length;
  }
  
  // Add remaining text after the last link
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  
  return parts.length > 0 ? parts : text;
};

const BlogPost = ({ post, isPreview = false }) => {
  const [imageError, setImageError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalImageRef = useRef(null);

  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Modal close on ESC
  useEffect(() => {
    if (!isModalOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isModalOpen]);

  // Modal close on click outside image
  const handleModalClick = useCallback((e) => {
    if (modalImageRef.current && !modalImageRef.current.contains(e.target)) {
      setIsModalOpen(false);
    }
  }, []);

  // Render tags
  const renderTags = () => {
    if (!post.tags || post.tags.length === 0) return null;
    
    return (
      <div className="flex flex-wrap gap-2 mt-4">
        {post.tags.map((tag, index) => (
          <span 
            key={index} 
            className="bg-gray-700/50 text-gray-300 text-xs px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    );
  };

  // Render content based on preview mode
  const renderContent = () => {
    if (isPreview) {
      return <div className="text-gray-300"><RichTextContent content={post.summary} /></div>;
    }
    
    return <RichTextContent content={post.content} />;
  };

  // Handle image error
  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <article
      className="bg-gray-800/90 backdrop-blur-sm p-4 sm:p-6 rounded-xl ring-1 ring-gray-700/50 flex flex-col h-full"
      aria-hidden={isModalOpen ? 'true' : undefined}
    >
      <div className="mb-4 overflow-hidden rounded-xl bg-gray-900/50 flex items-center justify-center h-48 sm:h-64">
        <img 
          src={imageError ? ARC_Logo_No_Text : (post.image || ARC_Logo_No_Text)} 
          alt={post.title} 
          className={`w-full h-full object-contain ${imageError || !post.image ? 'p-4' : ''} cursor-pointer`}
          onError={handleImageError}
          onClick={() => !imageError && post.image && setIsModalOpen(true)}
          tabIndex={post.image && !imageError ? 0 : -1}
          aria-label="Enlarge image"
          onKeyDown={e => {
            if ((e.key === 'Enter' || e.key === ' ') && post.image && !imageError) {
              setIsModalOpen(true);
            }
          }}
        />
      </div>
      {/* Modal for enlarged image */}
      {isModalOpen && post.image && !imageError &&
        ReactDOM.createPortal(
          <div
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm animate-fade-in"
            onClick={handleModalClick}
            role="dialog"
            aria-modal="true"
          >
            <div className="relative flex flex-col items-center w-full h-full p-4 sm:p-8 overflow-auto">
              <button
                className="absolute top-4 right-4 text-gray-300 hover:text-white text-3xl font-bold focus:outline-none bg-black/60 rounded-full w-10 h-10 flex items-center justify-center z-10"
                onClick={() => setIsModalOpen(false)}
                aria-label="Close image modal"
                tabIndex={0}
                style={{lineHeight: 1}}
              >
                &times;
              </button>
              <div className="flex items-center justify-center w-full h-full">
                <img
                  ref={modalImageRef}
                  src={post.image}
                  alt={post.title}
                  className="rounded-xl shadow-lg border border-gray-700 bg-gray-900"
                  style={{
                    maxWidth: '100vw',
                    maxHeight: '80vh',
                    width: 'auto',
                    height: 'auto',
                    boxSizing: 'border-box',
                    padding: '1rem',
                    background: 'rgba(24,24,24,0.95)'
                  }}
                />
              </div>
            </div>
          </div>,
          document.body
        )
      }
      
      <div className="flex flex-wrap items-center gap-2 mb-2 text-sm">
        <span className="text-[#C14949] font-medium">{post.category}</span>
        <span className="text-gray-500">•</span>
        <span className="text-gray-400">{formatDate(post.date)}</span>
        {post.author && (
          <>
            <span className="text-gray-500">•</span>
            <span className="text-gray-400">By {post.author}</span>
          </>
        )}
      </div>
      
      <h2 className="text-xl sm:text-2xl font-semibold mb-2">
        {isPreview ? (
          <Link to={`/news/${post.slug}`} className="hover:text-[#C14949] transition-colors">
            {post.title}
          </Link>
        ) : (
          post.title
        )}
      </h2>
      
      <div className="flex-grow text-left text-grey indent-10">
        {renderContent()}
      </div>
      
      {renderTags()}
      
      {isPreview && (
        <div className="mt-6 pt-4 border-t border-gray-700/50">
          <Link 
            to={`/news/${post.slug}`} 
            className="text-[#C14949] hover:text-[#D15A5A] transition-colors font-medium"
          >
            Read more →
          </Link>
        </div>
      )}
    </article>
  );
};

export default BlogPost; 