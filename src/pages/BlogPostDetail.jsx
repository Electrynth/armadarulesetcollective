import { useParams, Link } from 'react-router-dom';
import BlogPost from '../components/BlogPost';
import blogPosts from '../data/blogPosts';

const BlogPostDetail = () => {
  const { id } = useParams();
  
  // Find the post by ID
  const post = blogPosts.find(post => post.id === id);
  
  // If post not found, show error
  if (!post) {
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