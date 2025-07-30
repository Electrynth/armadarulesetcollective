import ARC_Logo_No_Text_Transparent from '../assets/ARC Logo no text Transparent.png';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchBlogPosts } from '../services/contentful';
import BlogPost from '../components/BlogPost';

const Home = () => {
  const [imageError, setImageError] = useState(false);
  const [latestPost, setLatestPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [featuredPost, setFeaturedPost] = useState(null);
  
  // Fetch the latest blog posts
  useEffect(() => {
    const getPosts = async () => {
      try {
        setLoading(true);
        const posts = await fetchBlogPosts();
        
        if (posts && posts.length > 0) {
          // Sort all posts by date (newest first)
          const sortedAllPosts = [...posts].sort((a, b) => 
            new Date(b.date) - new Date(a.date)
          );
          
          // The most recent post by date
          const latest = sortedAllPosts[0];
          setLatestPost(latest);

          // The 3 most recent posts by date
          const combinedRecent = sortedAllPosts.slice(0, 3);
          setRecentPosts(combinedRecent);

          // Find the most recent featured post by date
          const featuredPosts = posts.filter(post => post.featured);
          const sortedFeaturedPosts = [...featuredPosts].sort((a, b) => 
            new Date(b.date) - new Date(a.date)
          );
          
          setFeaturedPost(sortedFeaturedPosts[0] || null);
        } else {
          setLatestPost(null);
          setRecentPosts([]);
        }
      } catch (err) {
        console.error('Error fetching blog posts:', err);
        setLatestPost(null);
        setRecentPosts([]);
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, []);

  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Handle image error
  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="min-h-screen p-8 font-montserrat">
      <div className="max-w-6xl mx-auto mt-8">
        <div className="flex flex-col items-center mb-4">
          <img 
            src={ARC_Logo_No_Text_Transparent} 
            alt="Armada Ruleset Collective Logo" 
            className="w-56 h-56 md:w-88 md:h-88 object-contain mb-1"
          />
          <h1 className="text-[72px] md:text-[108px] lg:text-[130px] font-black text-white tracking-tighter mb-1">
            ARC
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
            Armada Ruleset Collective
          </h2>
        </div>
        
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          Your source for rules, resources, and community updates.
        </p>
        <div className="flex justify-center mb-6">
          <Link
            to="/communities"
            className="inline-block bg-[#C14949] hover:bg-[#D15A5A] text-white font-semibold py-2 px-6 rounded-lg shadow transition-colors duration-200"
          >
            Find a community near me!
          </Link>
        </div>

        {/* Recent Updates */}
        {recentPosts.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold text-white">Recent Updates</h2>
              <Link 
                to="/news" 
                className="text-white hover:text-gray-300 transition-colors font-medium"
              >
                View All Updates →
              </Link>
            </div>
            <div className={`grid gap-6 ${
              recentPosts.length === 1 
                ? 'grid-cols-1 max-w-3xl mx-auto' 
                : recentPosts.length === 2 
                  ? 'grid-cols-1 md:grid-cols-2' 
                  : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            }`}>
              {recentPosts.map(post => (
                <BlogPost key={post.id} post={post} isPreview={true} />
              ))}
            </div>
          </div>
        )}

        {/* Featured Blog Post */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold text-white">Featured Update</h2>
            <Link 
              to="/news" 
              className="text-white hover:text-gray-300 transition-colors font-medium"
            >
              View All Updates →
            </Link>
          </div>
          
          {loading ? (
            <div className="bg-gray-800/90 backdrop-blur-sm p-6 rounded-xl ring-1 ring-gray-700/50 text-center">
              <p className="text-gray-300">Loading featured update...</p>
            </div>
          ) : featuredPost ? (
            <BlogPost post={featuredPost} isPreview={true} />
          ) : (
            <div className="bg-gray-800/90 backdrop-blur-sm p-6 rounded-xl ring-1 ring-gray-700/50 text-center">
              <p className="text-gray-300">No featured updates available at this time.</p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800/90 backdrop-blur-sm p-6 rounded-xl ring-1 ring-gray-700/50 md:col-span-2">
            <h2 className="text-2xl font-semibold text-white mb-3">Join the Discord Community</h2>
            <p className="text-gray-300 mb-4">The Armada Hub is the central Discord server for Armada. It's the gateway to all other Armada communities and resources.</p>
            <div className="flex justify-center">
              <iframe
                src="https://discord.com/widget?id=219608175333081088&theme=dark"
                width="100%"
                height="350"
                className="rounded-xl h-[350px] md:h-[500px] w-full max-w-xl"
                allowTransparency="true"
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Disclaimers */}
      <div className="max-w-2xl mx-auto mt-12 mb-8 text-sm text-gray-400">
        <div className="space-y-4">
          <p>
            © {new Date().getFullYear()} Armada Ruleset Collective. All rights reserved.
          </p>
          
          <p>
            Star Wars: Armada is a trademark of Fantasy Flight Games, Atomic Mass Games, and Lucasfilm Ltd. This website is NOT affiliated with, endorsed by, or connected to Fantasy Flight Games, Atomic Mass Games, or Lucasfilm Ltd. All Star Wars: Armada™ content, including but not limited to rules, card text, and game mechanics, is the property of Fantasy Flight Games, Atomic Mass Games, and Lucasfilm Ltd.
          </p>
          
          <p>
            The content provided on this website is for personal use only, and is forbidden from being used for any commercial purposes. While we strive to maintain accuracy, we make no representations or warranties of any kind about the completeness, accuracy, reliability, suitability, or availability of the information contained on this website.
          </p>
          
          <p>
            By using this website, you agree to our <Link to="/privacy" className="text-[#C14949] hover:text-[#D15A5A]">Privacy Policy</Link> and acknowledge that you have read and understood our terms of use.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home; 