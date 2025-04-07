import ARC_Logo_No_Text from '../assets/ARC Logo no text Circle.png';
import ARC_Logo_No_Text_Transparent from '../assets/ARC Logo no text Transparent.png';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchBlogPosts } from '../services/contentful';

const Home = () => {
  const [imageError, setImageError] = useState(false);
  const [latestPost, setLatestPost] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Fetch the latest blog post
  useEffect(() => {
    const getLatestPost = async () => {
      try {
        setLoading(true);
        const posts = await fetchBlogPosts();
        
        if (posts && posts.length > 0) {
          // Sort by date (newest first) and get the first one
          const sortedPosts = [...posts].sort((a, b) => 
            new Date(b.date) - new Date(a.date)
          );
          setLatestPost(sortedPosts[0]);
        } else {
          setLatestPost(null);
        }
      } catch (err) {
        console.error('Error fetching latest blog post:', err);
        setLatestPost(null);
      } finally {
        setLoading(false);
      }
    };

    getLatestPost();
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
      <div className="max-w-2xl mx-auto mt-8">
        <div className="bg-[#C14949]/20 backdrop-blur-sm p-4 rounded-lg ring-1 ring-[#C14949]/50 mb-8 text-center">
          <p className="text-[#C14949] font-semibold">
            🚧 Under Construction - This site is actively being developed. Many features are incomplete and/or subject to change. 🚧
          </p>
        </div>
        
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
          Your central hub for Star Wars: Armada rules, resources, and community updates.
        </p>

        {/* Latest Blog Post */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold text-white">Latest Update</h2>
            <Link 
              to="/news" 
              className="text-white hover:text-gray-300 transition-colors font-medium"
            >
              View All Updates →
            </Link>
          </div>
          
          {loading ? (
            <div className="bg-gray-800/90 backdrop-blur-sm p-6 rounded-lg ring-1 ring-gray-700/50 text-center">
              <p className="text-gray-300">Loading latest update...</p>
            </div>
          ) : latestPost ? (
            <article className="bg-gray-800/90 backdrop-blur-sm p-6 rounded-lg ring-1 ring-gray-700/50">
              <div className="mb-4 overflow-hidden rounded-lg">
                <img 
                  src={imageError ? ARC_Logo_No_Text : (latestPost.image || ARC_Logo_No_Text)} 
                  alt={latestPost.title} 
                  className={`w-full h-48 ${imageError || !latestPost.image ? 'object-contain bg-gray-900/50 p-4' : 'object-cover'}`}
                  onError={handleImageError}
                />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#C14949] text-sm font-medium">{latestPost.category}</span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-400 text-sm">{formatDate(latestPost.date)}</span>
              </div>
              <h2 className="text-2xl font-semibold text-white mb-2">
                <Link to={`/news/${latestPost.id}`} className="hover:text-[#C14949] transition-colors">
                  {latestPost.title}
                </Link>
              </h2>
              <p className="text-gray-300">{latestPost.summary}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {latestPost.tags && latestPost.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="bg-gray-700/50 text-gray-300 text-xs px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4">
                <Link 
                  to={`/news/${latestPost.id}`} 
                  className="text-[#C14949] hover:text-[#D15A5A] transition-colors font-medium"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ) : (
            <div className="bg-gray-800/90 backdrop-blur-sm p-6 rounded-lg ring-1 ring-gray-700/50 text-center">
              <p className="text-gray-300">No updates available at this time.</p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800/90 backdrop-blur-sm p-6 rounded-lg ring-1 ring-gray-700/50 md:col-span-2">
            <h2 className="text-2xl font-semibold text-white mb-3">Join Our Discord Community</h2>
            <p className="text-gray-300 mb-4">Connect with fellow Armada players, discuss strategies, and stay updated with the latest news.</p>
            <div className="flex justify-center">
              <iframe
                src="https://discord.com/widget?id=219608175333081088&theme=dark"
                width="100%"
                height="350"
                className="rounded-lg h-[350px] md:h-[500px] w-full max-w-xl"
                allowTransparency="true"
                frameBorder="0"
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
            Star Wars: Armada is a trademark of Fantasy Flight Games, Atomic Mass Games, and Lucasfilm Ltd. This website is not affiliated with, endorsed by, or connected to Fantasy Flight Games, Atomic Mass Games, or Lucasfilm Ltd. All Star Wars: Armada content, including but not limited to rules, card text, and game mechanics, is the property of Fantasy Flight Games, Atomic Mass Games, and Lucasfilm Ltd.
          </p>
          
          <p>
            The content provided on this website is for informational and community purposes only. While we strive to maintain accuracy, we make no representations or warranties of any kind about the completeness, accuracy, reliability, suitability, or availability of the information contained on this website.
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