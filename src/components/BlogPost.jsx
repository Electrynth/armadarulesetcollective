import { Link } from 'react-router-dom';
import ARC_Logo_No_Text from '../assets/ARC Logo no text Circle.png';
import { useState } from 'react';
import RichTextContent from './RichTextContent';

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
      return <p className="text-gray-300">{post.summary}</p>;
    }
    
    return <RichTextContent content={post.content} />;
  };

  // Handle image error
  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <article className="bg-gray-800/90 backdrop-blur-sm p-4 sm:p-6 rounded-xl ring-1 ring-gray-700/50">
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
      
      <h2 className="text-xl sm:text-2xl font-semibold text-white mb-2">
        {isPreview ? (
          <Link to={`/news/${post.id}`} className="hover:text-[#C14949] transition-colors">
            {post.title}
          </Link>
        ) : (
          post.title
        )}
      </h2>
      
      {renderContent()}
      
      {renderTags()}
      
      {isPreview && (
        <div className="mt-4">
          <Link 
            to={`/news/${post.id}`} 
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