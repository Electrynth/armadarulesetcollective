import { Link } from 'react-router-dom';
import ARC_Logo_No_Text from '../assets/ARC Logo no text Circle.png';
import { useState } from 'react';
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
  
  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

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
      return <p className="text-gray-300">{parseMarkdownLinks(post.summary)}</p>;
    }
    
    return <RichTextContent content={post.content} />;
  };

  // Handle image error
  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <article className="bg-gray-800/90 backdrop-blur-sm p-4 sm:p-6 rounded-xl ring-1 ring-gray-700/50 flex flex-col h-full">
      <div className="mb-4 overflow-hidden rounded-xl bg-gray-900/50 flex items-center justify-center">
        <img 
          src={imageError ? ARC_Logo_No_Text : (post.image || ARC_Logo_No_Text)} 
          alt={post.title} 
          className={`w-full min-h-[8rem] sm:min-h-[12rem] max-h-[15rem] sm:max-h-[20rem] ${imageError || !post.image ? 'object-contain p-4' : 'object-contain'}`}
          onError={handleImageError}
        />
      </div>
      
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