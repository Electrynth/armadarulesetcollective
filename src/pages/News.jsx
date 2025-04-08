import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import BlogPost from '../components/BlogPost';
import Pagination from '../components/Pagination';
import { fetchBlogPosts } from '../services/contentful';

const News = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const postsPerPage = 5; // Number of posts to display per page
  
  // Fetch blog posts from Contentful
  useEffect(() => {
    const getBlogPosts = async () => {
      try {
        setLoading(true);
        const posts = await fetchBlogPosts();
        setBlogPosts(posts);
        setError(null);
      } catch (err) {
        console.error('Error fetching blog posts:', err);
        setError('Failed to load blog posts. Please try again later.');
        setBlogPosts([]);
      } finally {
        setLoading(false);
      }
    };

    getBlogPosts();
  }, []);
  
  // Get page from URL or default to 1
  useEffect(() => {
    const pageParam = searchParams.get('page');
    if (pageParam) {
      const page = parseInt(pageParam, 10);
      if (!isNaN(page) && page > 0) {
        setCurrentPage(page);
      }
    }
  }, [searchParams]);
  
  // Get unique categories
  const categories = ['all', ...new Set(blogPosts.map(post => post.category))];
  
  // Filter posts based on category and search query
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  // Sort posts by date (newest first)
  const sortedPosts = [...filteredPosts].sort((a, b) => 
    new Date(b.date) - new Date(a.date)
  );
  
  // Calculate pagination
  const totalPages = Math.ceil(sortedPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);
  
  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Update URL with new page number
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('page', pageNumber.toString());
    setSearchParams(newSearchParams);
    // Scroll to top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    // Reset to first page when changing category
    setCurrentPage(1);
    // Update URL
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('page', '1');
    setSearchParams(newSearchParams);
  };
  
  // Handle search change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    // Reset to first page when searching
    setCurrentPage(1);
    // Update URL
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('page', '1');
    setSearchParams(newSearchParams);
  };
  
  return (
    <div className="min-h-screen p-8 font-montserrat">
      <div className="max-w-4xl mx-auto mt-8">
        <div className="bg-[#C14949]/20 backdrop-blur-sm p-4 rounded-xl ring-1 ring-[#C14949]/50 mb-8 text-center">
          <p className="text-[#C14949] font-semibold">
            🚧 Under Construction - This site is actively being developed. Some features may be incomplete or subject to change. 🚧
          </p>
        </div>
        
        <h1 className="text-5xl font-bold mb-6 text-white">
          Latest News
        </h1>
        
        {/* Error message */}
        {error && (
          <div className="bg-red-900/50 backdrop-blur-sm p-4 rounded-xl ring-1 ring-red-700/50 mb-8 text-center">
            <p className="text-red-300">{error}</p>
          </div>
        )}
        
        {/* Filters */}
        <div className="mb-8 space-y-4">
          {/* Search bar - always on top in desktop */}
          <div className="w-full">
            <input
              type="text"
              placeholder="Search posts..."
              className="w-full bg-gray-800/90 backdrop-blur-sm p-3 rounded-xl ring-1 ring-gray-700/50 text-white"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
          
          {/* Category buttons */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-xl transition-colors ${
                  selectedCategory === category
                    ? 'bg-[#C14949] text-white'
                    : 'bg-gray-800/90 text-gray-300 hover:bg-gray-700/90'
                }`}
                onClick={() => handleCategoryChange(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        {/* Loading state */}
        {loading ? (
          <div className="bg-gray-800/90 backdrop-blur-sm p-6 rounded-xl ring-1 ring-gray-700/50 text-center">
            <p className="text-gray-300">Loading blog posts...</p>
          </div>
        ) : (
          <>
            {/* Results count */}
            <div className="mb-4 text-gray-300">
              Showing {indexOfFirstPost + 1}-{Math.min(indexOfLastPost, sortedPosts.length)} of {sortedPosts.length} posts
            </div>
            
            {/* Blog posts */}
            <div className="space-y-6">
              {currentPosts.length > 0 ? (
                currentPosts.map(post => (
                  <BlogPost key={post.id} post={post} isPreview={true} />
                ))
              ) : (
                <div className="bg-gray-800/90 backdrop-blur-sm p-6 rounded-xl ring-1 ring-gray-700/50 text-center">
                  <p className="text-gray-300">No posts found matching your criteria.</p>
                </div>
              )}
            </div>
            
            {/* Pagination */}
            <Pagination 
              currentPage={currentPage} 
              totalPages={totalPages} 
              onPageChange={handlePageChange} 
            />
          </>
        )}
      </div>
    </div>
  );
};

export default News; 