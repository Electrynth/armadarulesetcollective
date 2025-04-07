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
              className="text-[#C14949] hover:text-[#D15A5A] transition-colors font-medium"
            >
              ← Back to News
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  // Find related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);
  
  return (
    <div className="min-h-screen p-8 font-montserrat">
      <div className="max-w-4xl mx-auto mt-8">
        <div className="mb-6">
          <Link 
            to="/news" 
            className="text-[#C14949] hover:text-[#D15A5A] transition-colors font-medium"
          >
            ← Back to News
          </Link>
        </div>
        
        {/* Main post */}
        <BlogPost post={post} isPreview={false} />
        
        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-white mb-6">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map(relatedPost => (
                <div key={relatedPost.id} className="bg-gray-800/90 backdrop-blur-sm p-4 rounded-lg ring-1 ring-gray-700/50">
                  {relatedPost.image && (
                    <div className="mb-3 overflow-hidden rounded-lg">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title} 
                        className="w-full h-32 object-cover"
                      />
                    </div>
                  )}
                  <h3 className="text-lg font-semibold text-white mb-2">
                    <Link to={`/news/${relatedPost.id}`} className="hover:text-[#C14949] transition-colors">
                      {relatedPost.title}
                    </Link>
                  </h3>
                  <p className="text-gray-300 text-sm mb-2">{relatedPost.summary}</p>
                  <div className="text-xs text-gray-400">
                    {new Date(relatedPost.date).toLocaleDateString(undefined, { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPostDetail; 