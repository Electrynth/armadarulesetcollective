import { Link } from 'react-router-dom';
import { useState } from 'react';

const EmbeddedBlogPost = ({ post }) => {
  const [imageError, setImageError] = useState(false);

  // Debug: Log the embedded post data structure
  console.log('EmbeddedBlogPost Data:', post);

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Create slug from title (using the same logic as contentful.js)
  const createSlug = (title, id = '') => {
    if (!title) return '';
    
    let baseSlug = title
      .toLowerCase()
      .trim()
      // Replace common special characters with their word equivalents
      .replace(/&/g, 'and')
      .replace(/\+/g, 'plus')
      .replace(/=/g, 'equals')
      .replace(/@/g, 'at')
      .replace(/#/g, 'hash')
      .replace(/\$/g, 'dollar')
      .replace(/%/g, 'percent')
      .replace(/\*/g, 'star')
      .replace(/\(/g, '')
      .replace(/\)/g, '')
      .replace(/\[/g, '')
      .replace(/\]/g, '')
      .replace(/\{/g, '')
      .replace(/\}/g, '')
      .replace(/</g, '')
      .replace(/>/g, '')
      .replace(/"/g, '')
      .replace(/'/g, '')
      .replace(/`/g, '')
      .replace(/~/g, '')
      .replace(/!/g, '')
      .replace(/\?/g, '')
      .replace(/\./g, '')
      .replace(/,/g, '')
      .replace(/;/g, '')
      .replace(/:/g, '')
      .replace(/\|/g, '')
      .replace(/\\/g, '')
      .replace(/\//g, '')
      // Remove any remaining special characters except spaces, hyphens, and alphanumeric
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
      .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
    
    // If we have an ID and the base slug is too short or empty, use a fallback
    if (!baseSlug || baseSlug.length < 3) {
      baseSlug = 'post';
    }
    
    // If we have an ID, append a short version to ensure uniqueness
    if (id && baseSlug) {
      const shortId = id.slice(-6); // Use last 6 characters of ID
      baseSlug = `${baseSlug}-${shortId}`;
    }
    
    return baseSlug;
  };

  // Handle image error
  const handleImageError = () => {
    setImageError(true);
  };

  // Get image URL
  const getImageUrl = () => {
    const image = post.fields?.image || post.image;
    if (image?.fields?.file?.url) {
      return `https:${image.fields.file.url}`;
    }
    return '/blog-images/default.jpg';
  };

  // Get image alt text
  const getImageAlt = () => {
    const image = post.fields?.image || post.image;
    return image?.fields?.description || image?.fields?.title || (post.fields?.title || post.title) || 'Blog post image';
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
            <span className="text-[#C14949] font-medium">{post.fields?.category || post.category || 'Uncategorized'}</span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-400">{formatDate(post.fields?.date || post.date)}</span>
            {(post.fields?.author || post.author) && (
              <>
                <span className="text-gray-500">•</span>
                <span className="text-gray-400">By {post.fields?.author || post.author}</span>
              </>
            )}
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
            <Link 
              to={`/news/${createSlug(post.fields?.title || post.title, post.sys?.id || '')}`}
              className="hover:text-[#C14949] transition-colors"
            >
              {post.fields?.title || post.title}
            </Link>
          </h3>

          {/* Summary */}
          {(post.fields?.summary || post.summary) && (
            <p className="text-gray-300 text-sm mb-3 line-clamp-2">
              {post.fields?.summary || post.summary}
            </p>
          )}

          {/* Tags */}
          {(post.fields?.tags || post.tags) && (post.fields?.tags || post.tags).length > 0 && (
            <div className="flex flex-wrap gap-1 mb-3">
              {(post.fields?.tags || post.tags).slice(0, 3).map((tag, index) => (
                <span 
                  key={index} 
                  className="bg-gray-600/50 text-gray-300 text-xs px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
              {(post.fields?.tags || post.tags).length > 3 && (
                <span className="text-gray-500 text-xs px-2 py-1">
                  +{(post.fields?.tags || post.tags).length - 3} more
                </span>
              )}
            </div>
          )}

          {/* Read more link */}
          <Link 
            to={`/news/${createSlug(post.fields?.title || post.title, post.sys?.id || '')}`}
            className="inline-flex items-center text-[#C14949] hover:text-[#D15A5A] transition-colors font-medium text-sm"
          >
            Read full article →
          </Link>
        </div>
      </div>

      {/* Featured badge */}
      {(post.fields?.featured || post.featured) && (
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