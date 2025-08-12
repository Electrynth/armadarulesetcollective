import { Link } from 'react-router-dom';
import { useState } from 'react';

const EmbeddedBlogPost = ({ post }) => {
  const [imageError, setImageError] = useState(false);

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Create slug from title
  const createSlug = (title) => {
    if (!title) return '';
    return title
      .toLowerCase()
      .trim()
      .replace(/&/g, 'and')
      .replace(/\+/g, 'plus')
      .replace(/=/g, 'equals')
      .replace(/@/g, 'at')
      .replace(/#/g, 'hash')
      .replace(/\$/g, 'dollar')
      .replace(/%/g, 'percent')
      .replace(/\*/g, 'star')
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  // Handle image error
  const handleImageError = () => {
    setImageError(true);
  };

  // Get image URL
  const getImageUrl = () => {
    if (post.image?.fields?.file?.url) {
      return `https:${post.image.fields.file.url}`;
    }
    return '/blog-images/default.jpg';
  };

  // Get image alt text
  const getImageAlt = () => {
    return post.image?.fields?.description || post.image?.fields?.title || post.title || 'Blog post image';
  };

  return (
    <div className="my-6 p-4 bg-gray-700/30 rounded-lg border border-gray-600/50 hover:border-gray-500/50 transition-colors">
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Image */}
        <div className="flex-shrink-0 w-full sm:w-48 h-32 sm:h-24 overflow-hidden rounded-lg bg-gray-800/50">
          <img
            src={imageError ? '/blog-images/default.jpg' : getImageUrl()}
            alt={getImageAlt()}
            className="w-full h-full object-cover"
            onError={handleImageError}
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Meta information */}
          <div className="flex flex-wrap items-center gap-2 mb-2 text-sm">
            <span className="text-[#C14949] font-medium">{post.category || 'Uncategorized'}</span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-400">{formatDate(post.date)}</span>
            {post.author && (
              <>
                <span className="text-gray-500">•</span>
                <span className="text-gray-400">By {post.author}</span>
              </>
            )}
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
            <Link 
              to={`/news/${createSlug(post.title)}`}
              className="hover:text-[#C14949] transition-colors"
            >
              {post.title}
            </Link>
          </h3>

          {/* Summary */}
          {post.summary && (
            <p className="text-gray-300 text-sm mb-3 line-clamp-2">
              {post.summary}
            </p>
          )}

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-3">
              {post.tags.slice(0, 3).map((tag, index) => (
                <span 
                  key={index} 
                  className="bg-gray-600/50 text-gray-300 text-xs px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
              {post.tags.length > 3 && (
                <span className="text-gray-500 text-xs px-2 py-1">
                  +{post.tags.length - 3} more
                </span>
              )}
            </div>
          )}

          {/* Read more link */}
          <Link 
            to={`/news/${createSlug(post.title)}`}
            className="inline-flex items-center text-[#C14949] hover:text-[#D15A5A] transition-colors font-medium text-sm"
          >
            Read full article →
          </Link>
        </div>
      </div>

      {/* Featured badge */}
      {post.featured && (
        <div className="absolute top-2 right-2">
          <span className="bg-[#C14949] text-white text-xs px-2 py-1 rounded-full">
            Featured
          </span>
        </div>
      )}
    </div>
  );
};

export default EmbeddedBlogPost; 