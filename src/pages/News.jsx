import { useState } from 'react';
import BlogPost from '../components/BlogPost';
import blogPosts from '../data/blogPosts';

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
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
  
  return (
    <div className="min-h-screen p-8 font-montserrat">
      <div className="max-w-4xl mx-auto mt-8">
        <div className="bg-[#C14949]/20 backdrop-blur-sm p-4 rounded-lg ring-1 ring-[#C14949]/50 mb-8 text-center">
          <p className="text-[#C14949] font-semibold">
            🚧 Under Construction - This site is actively being developed. Some features may be incomplete or subject to change. 🚧
          </p>
        </div>
        
        <h1 className="text-5xl font-bold mb-6 text-white">
          Latest News
        </h1>
        
        {/* Filters */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search posts..."
              className="w-full bg-gray-800/90 backdrop-blur-sm p-3 rounded-lg ring-1 ring-gray-700/50 text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === category
                    ? 'bg-[#C14949] text-white'
                    : 'bg-gray-800/90 text-gray-300 hover:bg-gray-700/90'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        {/* Blog posts */}
        <div className="space-y-6">
          {sortedPosts.length > 0 ? (
            sortedPosts.map(post => (
              <BlogPost key={post.id} post={post} isPreview={true} />
            ))
          ) : (
            <div className="bg-gray-800/90 backdrop-blur-sm p-6 rounded-lg ring-1 ring-gray-700/50 text-center">
              <p className="text-gray-300">No posts found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default News; 