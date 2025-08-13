import { useState, useEffect, useMemo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import BlogPost from '../components/BlogPost';
import Pagination from '../components/Pagination';
import { fetchBlogPosts } from '../services/contentful';

// Debounce hook for search input
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const News = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const postsPerPage = 5; // Number of posts to display per page
  
  // Debounce search query to avoid excessive filtering
  const debouncedSearchQuery = useDebounce(searchQuery, 300);
  
  // Initialize search query from URL
  useEffect(() => {
    const queryParam = searchParams.get('search');
    if (queryParam) {
      setSearchQuery(queryParam);
    }
  }, [searchParams]);
  
  // Initialize category from URL
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);
  
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
  const categories = useMemo(() => {
    return ['all', ...new Set(blogPosts.map(post => post.category))];
  }, [blogPosts]);
  
  // Enhanced search function that searches through multiple fields
  const searchInPost = useCallback((post, query) => {
    if (!query.trim()) return true;
    
    const searchTerms = query.toLowerCase().trim().split(/\s+/);
    const searchableText = [
      post.title || '',
      post.summary || '',
      post.author || '',
      post.category || '',
      (post.tags || []).join(' '),
      // Search in content if it's a string (for plain text content)
      typeof post.content === 'string' ? post.content : ''
    ].join(' ').toLowerCase();
    
    // Check if all search terms are found in the searchable text
    return searchTerms.every(term => searchableText.includes(term));
  }, []);
  
  // Filter posts based on category and search query
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
      const matchesSearch = searchInPost(post, debouncedSearchQuery);
      return matchesCategory && matchesSearch;
    });
  }, [blogPosts, selectedCategory, debouncedSearchQuery, searchInPost]);
  
  // Sort posts by date (newest first)
  const sortedPosts = useMemo(() => {
    return [...filteredPosts].sort((a, b) => 
      new Date(b.date) - new Date(a.date)
    );
  }, [filteredPosts]);
  
  // Calculate pagination
  const totalPages = Math.ceil(sortedPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);
  
  // Update URL with all parameters
  const updateURL = useCallback((updates) => {
    const newSearchParams = new URLSearchParams(searchParams);
    
    Object.entries(updates).forEach(([key, value]) => {
      if (value === null || value === undefined || value === '') {
        newSearchParams.delete(key);
      } else {
        newSearchParams.set(key, value.toString());
      }
    });
    
    setSearchParams(newSearchParams);
  }, [searchParams, setSearchParams]);
  
  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    updateURL({ page: pageNumber });
    // Scroll to top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    // Reset to first page when changing category
    setCurrentPage(1);
    updateURL({ category: category === 'all' ? null : category, page: 1 });
  };
  
  // Handle search change
  const handleSearchChange = (e) => {
    const newQuery = e.target.value;
    setSearchQuery(newQuery);
    // Reset to first page when searching
    setCurrentPage(1);
    updateURL({ search: newQuery || null, page: 1 });
  };
  
  // Clear search
  const handleClearSearch = () => {
    setSearchQuery('');
    setCurrentPage(1);
    updateURL({ search: null, page: 1 });
  };
  
  return (
    <div className="min-h-screen p-8 font-montserrat">
      <div className="max-w-6xl mx-auto mt-8">
        <h1 className="text-5xl font-bold mb-6 text-white text-center">
          News
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
          <div className="w-full relative">
            <input
              type="text"
              placeholder="Search posts by title, content, author, tags, or category..."
              className="w-full bg-gray-800/90 backdrop-blur-sm p-3 pr-10 rounded-xl ring-1 ring-gray-700/50 text-white"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            {searchQuery && (
              <button
                onClick={handleClearSearch}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
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
              {debouncedSearchQuery && (
                <span className="mr-2">
                  Search results for "{debouncedSearchQuery}":
                </span>
              )}
              Showing {indexOfFirstPost + 1}-{Math.min(indexOfLastPost, sortedPosts.length)} of {sortedPosts.length} posts
              {selectedCategory !== 'all' && (
                <span className="ml-2">in {selectedCategory}</span>
              )}
            </div>
            
            {/* Blog posts */}
            <div className="space-y-6">
              {currentPosts.length > 0 ? (
                currentPosts.map(post => (
                  <BlogPost key={post.id} post={post} isPreview={true} />
                ))
              ) : (
                <div className="bg-gray-800/90 backdrop-blur-sm p-6 rounded-xl ring-1 ring-gray-700/50 text-center">
                  <p className="text-gray-300">
                    {debouncedSearchQuery 
                      ? `No posts found matching "${debouncedSearchQuery}"${selectedCategory !== 'all' ? ` in ${selectedCategory}` : ''}.`
                      : `No posts found${selectedCategory !== 'all' ? ` in ${selectedCategory}` : ''}.`
                    }
                  </p>
                  {(debouncedSearchQuery || selectedCategory !== 'all') && (
                    <button
                      onClick={() => {
                        setSearchQuery('');
                        setSelectedCategory('all');
                        setCurrentPage(1);
                        updateURL({ search: null, category: null, page: 1 });
                      }}
                      className="mt-2 text-[#C14949] hover:text-[#D15A5A] transition-colors"
                    >
                      Clear all filters
                    </button>
                  )}
                </div>
              )}
            </div>
            
            {/* Pagination */}
            {totalPages > 1 && (
              <Pagination 
                currentPage={currentPage} 
                totalPages={totalPages} 
                onPageChange={handlePageChange} 
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default News; 