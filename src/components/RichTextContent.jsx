import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { useState, useCallback, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import EmbeddedBlogPost from './EmbeddedBlogPost';

const RichTextContent = ({ content }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const modalRef = useRef(null);

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

  // Modal close on click outside
  const handleModalClick = useCallback((e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsModalOpen(false);
    }
  }, []);

  // Open modal with content
  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  // If content is a string (HTML), render it directly
  if (typeof content === 'string') {
    return (
      <div 
        className="prose prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }
  
  // If content is a Rich Text object, render it with the React renderer
  if (content && typeof content === 'object') {
    // Check if this is a valid Contentful Rich Text document
    if (!content.nodeType || content.nodeType !== 'document') {
      // If it's not a valid Rich Text document, try to render as string or show error
      if (typeof content === 'string') {
        return (
          <div 
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        );
      }
      
      return (
        <div className="bg-yellow-900/20 border border-yellow-500 p-4 rounded-lg">
          <p className="text-yellow-300 font-medium">Unexpected content format</p>
          <details className="mt-2">
            <summary className="text-yellow-400 cursor-pointer text-sm">Show content structure</summary>
            <pre className="text-xs text-yellow-400 mt-2 overflow-x-auto">
              {JSON.stringify(content, null, 2)}
            </pre>
          </details>
        </div>
      );
    }
    
    const options = {
      renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => <p className="mb-3 sm:mb-4 text-base sm:text-lg indent-10">{children}</p>,
        [BLOCKS.HEADING_1]: (node, children) => <h1 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-white">{children}</h1>,
        [BLOCKS.HEADING_2]: (node, children) => <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white">{children}</h2>,
        [BLOCKS.HEADING_3]: (node, children) => <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">{children}</h3>,
        [BLOCKS.HEADING_4]: (node, children) => <h4 className="text-base sm:text-lg font-bold mb-2 text-white">{children}</h4>,
        [BLOCKS.HEADING_5]: (node, children) => <h5 className="text-sm sm:text-base font-bold mb-2 text-white">{children}</h5>,
        [BLOCKS.HEADING_6]: (node, children) => <h6 className="text-xs sm:text-sm font-bold mb-2 text-white">{children}</h6>,
        [BLOCKS.UL_LIST]: (node, children) => <ul className="list-disc pl-4 sm:pl-5 mb-3 sm:mb-4">{children}</ul>,
        [BLOCKS.OL_LIST]: (node, children) => <ol className="list-decimal pl-4 sm:pl-5 mb-3 sm:mb-4">{children}</ol>,
        [BLOCKS.LIST_ITEM]: (node, children) => <li className="mb-1 text-base sm:text-lg">{children}</li>,
        [BLOCKS.QUOTE]: (node, children) => <blockquote className="border-l-4 border-gray-600 pl-3 sm:pl-4 italic my-3 sm:my-4 text-base sm:text-lg">{children}</blockquote>,
        [BLOCKS.HR]: () => <hr className="my-4 sm:my-6 border-gray-700" />,
        
        // Embedded Assets (Images, Videos, PDFs, etc.)
        [BLOCKS.EMBEDDED_ASSET]: (node) => {
          const { title, description, file } = node.data.target.fields;
          const url = file.url.startsWith('//') ? `https:${file.url}` : file.url;
          const contentType = file.contentType;
          
          // Handle different asset types
          if (contentType.startsWith('image/')) {
            return (
              <div className="my-6 flex flex-col items-center">
                <img
                  src={url}
                  alt={description || title || 'Embedded image'}
                  className="max-w-full h-auto rounded-lg shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => openModal({ type: 'image', url, title: description || title })}
                  style={{ maxHeight: '500px' }}
                />
                {title && (
                  <p 
                    className="text-sm text-gray-400 mt-2 italic w-full" 
                    style={{ 
                      textAlign: 'center',
                      textAlignLast: 'center',
                      direction: 'ltr'
                    }}
                  >
                    {title}
                  </p>
                )}
              </div>
            );
          }
          
          if (contentType.startsWith('video/')) {
            return (
              <div className="my-6">
                <video
                  controls
                  className="w-full max-w-full rounded-lg shadow-lg"
                  style={{ maxHeight: '500px' }}
                >
                  <source src={url} type={contentType} />
                  Your browser does not support the video tag.
                </video>
                {title && (
                  <p className="text-sm text-gray-400 mt-2 italic text-center">{title}</p>
                )}
              </div>
            );
          }
          
          if (contentType === 'application/pdf') {
            return (
              <div className="my-6 p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">📄</span>
                    <div>
                      <h4 className="font-medium text-white">{title || 'PDF Document'}</h4>
                      {description && (
                        <p className="text-sm text-gray-400">{description}</p>
                      )}
                    </div>
                  </div>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#C14949] hover:bg-[#D15A5A] text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    View PDF
                  </a>
                </div>
              </div>
            );
          }
          
          // Generic file download
          return (
            <div className="my-6 p-4 bg-gray-700/50 rounded-lg border border-gray-600">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">📎</span>
                  <div>
                    <h4 className="font-medium text-white">{title || 'File'}</h4>
                    {description && (
                      <p className="text-sm text-gray-400">{description}</p>
                    )}
                    <p className="text-xs text-gray-500">{contentType}</p>
                  </div>
                </div>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#C14949] hover:bg-[#D15A5A] text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Download
                </a>
              </div>
            </div>
          );
        },
        
        // Embedded Entries (References to other content types)
        [BLOCKS.EMBEDDED_ENTRY]: (node) => {
          const entry = node.data.target;
          const contentType = entry.sys.contentType.sys.id;
          
          // Debug: Log the embedded entry structure
          console.log('Embedded Entry:', entry);
          
          // Handle different content types
          switch (contentType) {
            case 'blogPost':
              return <EmbeddedBlogPost post={entry} />;
              
            case 'codeBlock':
              return (
                <div className="my-6 p-4 bg-gray-900/80 rounded-lg border border-gray-600">
                  <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{entry.fields.code || ''}</code>
                  </pre>
                  {entry.fields.language && (
                    <div className="text-xs text-gray-500 mt-2">
                      Language: {entry.fields.language}
                    </div>
                  )}
                </div>
              );
              
            case 'callout':
              return (
                <div className={`my-6 p-4 rounded-lg border-l-4 ${
                  entry.fields.type === 'warning' ? 'bg-yellow-900/20 border-yellow-500' :
                  entry.fields.type === 'error' ? 'bg-red-900/20 border-red-500' :
                  entry.fields.type === 'info' ? 'bg-blue-900/20 border-blue-500' :
                  'bg-gray-700/50 border-gray-500'
                }`}>
                  {entry.fields.title && (
                    <h4 className="font-medium text-white mb-2">{entry.fields.title}</h4>
                  )}
                  <div className="text-gray-300">
                    {entry.fields.content}
                  </div>
                </div>
              );
              
            case 'imageGallery':
              const images = entry.fields.images || [];
              return (
                <div className="my-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {images.map((image, index) => {
                      const imageUrl = image.fields.file.url.startsWith('//') 
                        ? `https:${image.fields.file.url}` 
                        : image.fields.file.url;
                      return (
                        <img
                          key={index}
                          src={imageUrl}
                          alt={image.fields.description || image.fields.title || `Gallery image ${index + 1}`}
                          className="w-full h-48 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                          onClick={() => openModal({ 
                            type: 'image', 
                            url: imageUrl, 
                            title: image.fields.description || image.fields.title 
                          })}
                        />
                      );
                    })}
                  </div>
                  {entry.fields.title && (
                    <h4 className="text-center text-lg font-medium text-white mt-4">{entry.fields.title}</h4>
                  )}
                </div>
              );
              
            default:
              // Generic embedded entry fallback
              return (
                <div className="my-6 p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                  <p className="text-gray-400 italic">
                    Embedded content: {contentType}
                  </p>
                  <pre className="text-xs text-gray-500 mt-2 overflow-x-auto">
                    {JSON.stringify(entry.fields, null, 2)}
                  </pre>
                </div>
              );
          }
        },
        
        [INLINES.HYPERLINK]: (node, children) => {
          const { uri } = node.data;
          return (
            <a 
              href={uri} 
              className="text-[#C14949] hover:text-[#D15A5A] underline break-all"
              target={uri.startsWith('http') ? '_blank' : undefined}
              rel={uri.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {children}
            </a>
          );
        },
        
        // Asset Hyperlinks (clickable images, etc.)
        [INLINES.ASSET_HYPERLINK]: (node) => {
          const { title, description, file } = node.data.target.fields;
          const url = file.url.startsWith('//') ? `https:${file.url}` : file.url;
          
          return (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img
                src={url}
                alt={description || title || 'Linked asset'}
                className="max-w-full h-auto rounded-lg shadow-lg hover:opacity-90 transition-opacity"
                style={{ maxHeight: '300px' }}
              />
            </a>
          );
        },
        
        // Entry Hyperlinks (internal content links)
        [INLINES.ENTRY_HYPERLINK]: (node, children) => {
          const entry = node.data.target;
          const contentType = entry.sys.contentType.sys.id;
          
          // Handle different content types for internal links
          switch (contentType) {
            case 'blogPost':
              const slug = entry.fields.title 
                ? entry.fields.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
                : entry.sys.id;
              return (
                <a 
                  href={`/news/${slug}`}
                  className="text-[#C14949] hover:text-[#D15A5A] underline"
                >
                  {children}
                </a>
              );
              
            default:
              return (
                <span className="text-[#C14949] underline">
                  {children}
                </span>
              );
          }
        },
      },
      renderMark: {
        [MARKS.BOLD]: text => <strong>{text}</strong>,
        [MARKS.ITALIC]: text => <em className="italic font-style-italic" style={{ fontFamily: "'Montserrat', sans-serif", fontStyle: 'italic' }}>{text}</em>,
        [MARKS.CODE]: text => <code className="bg-gray-800 px-1 py-0.5 rounded text-sm sm:text-base">{text}</code>,
        [MARKS.UNDERLINE]: text => <u>{text}</u>,
        [MARKS.SUPERSCRIPT]: text => <sup>{text}</sup>,
        [MARKS.SUBSCRIPT]: text => <sub>{text}</sub>,
      },
    };
    
    try {
      return (
        <>
          <div className="prose prose-invert max-w-none prose-sm sm:prose-base [&>h1]:text-white [&>h2]:text-white [&>h3]:text-white [&>h4]:text-white [&>h5]:text-white [&>h6]:text-white">
            {documentToReactComponents(content, options)}
          </div>
          
          {/* Modal for enlarged images */}
          {isModalOpen && modalContent && modalContent.type === 'image' && 
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
                      ref={modalRef}
                      src={modalContent.url}
                      alt={modalContent.title}
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
                  {modalContent.title && (
                    <p className="text-white text-center mt-4 max-w-2xl">
                      {modalContent.title}
                    </p>
                  )}
                </div>
              </div>,
              document.body
            )
          }
        </>
      );
    } catch (error) {
      console.error('Error rendering rich text content:', error);
      console.log('Content that caused error:', content);
      
      // Fallback: try to render as string or show error
      if (typeof content === 'string') {
        return (
          <div 
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        );
      }
      
      return (
        <div className="bg-red-900/20 border border-red-500 p-4 rounded-lg">
          <p className="text-red-300 font-medium">Error rendering content</p>
          <details className="mt-2">
            <summary className="text-red-400 cursor-pointer text-sm">Show debug info</summary>
            <pre className="text-xs text-red-400 mt-2 overflow-x-auto">
              {JSON.stringify(content, null, 2)}
            </pre>
          </details>
        </div>
      );
    }
  }
  
  // If content is null or undefined, return null
  return null;
};

export default RichTextContent; 