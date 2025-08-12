import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import BlogPost from '../components/BlogPost';
import { fetchBlogPostBySlug } from '../services/contentful';

const BlogPostDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // Scroll to top when the component mounts or slug changes
    window.scrollTo(0, 0);
    
    const getBlogPost = async () => {
      try {
        setLoading(true);
        const fetchedPost = await fetchBlogPostBySlug(slug);
        
        if (fetchedPost) {
          setPost(fetchedPost);
          setError(null);
        } else {
          setError('Post not found');
        }
      } catch (err) {
        console.error('Error fetching blog post:', err);
        setError('Failed to load blog post. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    getBlogPost();
  }, [slug]);
  
  // If loading, show loading state
  if (loading) {
    return (
      <div className="min-h-screen p-8 font-montserrat">
        <div className="max-w-4xl mx-auto mt-8">
          <div className="bg-gray-800/90 backdrop-blur-sm p-6 rounded-lg ring-1 ring-gray-700/50 text-center">
            <p className="text-gray-300">Loading blog post...</p>
          </div>
        </div>
      </div>
    );
  }
  
  // If error or post not found, show error state
  if (error || !post) {
    return (
      <div className="min-h-screen p-8 font-montserrat">
        <div className="max-w-4xl mx-auto mt-8">
          <div className="bg-gray-800/90 backdrop-blur-sm p-6 rounded-lg ring-1 ring-gray-700/50 text-center">
            <h1 className="text-3xl font-bold text-white mb-4">Post Not Found</h1>
            <p className="text-gray-300 mb-6">The blog post you're looking for doesn't exist or has been removed.</p>
            <Link 
              to="/news" 
              className="text-white hover:text-gray-300 transition-colors font-medium"
            >
              ← Back to News
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen p-8 font-montserrat">
      <div className="max-w-4xl mx-auto mt-8">
        <div className="mb-6">
          <Link 
            to="/news" 
            className="text-white hover:text-gray-300 transition-colors font-medium"
          >
            ← Back to News
          </Link>
        </div>
        
        {/* Main post */}
        <BlogPost post={post} isPreview={false} />
      </div>
    </div>
  );
};

export default BlogPostDetail; 