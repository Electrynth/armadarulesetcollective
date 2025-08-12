import { createClient } from 'contentful';

// Initialize the Contentful client
const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

// Helper function to create URL-friendly slugs
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

// Helper function to handle content
const processContent = (content) => {
  if (!content) return '';
  
  // If it's already a string, return it
  if (typeof content === 'string') {
    return content;
  }
  
  // If it's a Rich Text object, return it as is without modification
  // The rich text renderer will handle embedded entries and assets
  if (typeof content === 'object') {
    // Check if it's a Contentful Rich Text document
    if (content.nodeType === 'document' && Array.isArray(content.content)) {
      return content;
    }
    
    // Check if it has a content field that might be rich text
    if (content.content && typeof content.content === 'object' && content.content.nodeType === 'document') {
      return content.content;
    }
    
    // If it's some other object, return it as is
    return content;
  }
  
  // If we can't process it, return an empty string
  return '';
};

// Fetch all blog posts
export const fetchBlogPosts = async () => {
  try {
    // Check if environment variables are set
    if (!import.meta.env.VITE_CONTENTFUL_SPACE_ID || !import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN) {
      console.warn('Contentful credentials are not set. Please check your .env file.');
      return [];
    }

    const response = await client.getEntries({
      content_type: 'blogPost',
      order: '-fields.date',
      include: 10, // Include up to 10 levels of embedded entries and assets
    });
    
    // Transform Contentful data to match your current blog post structure
    return response.items.map(item => ({
      id: item.sys.id,
      title: item.fields.title || 'Untitled',
      slug: createSlug(item.fields.title || 'Untitled', item.sys.id),
      date: item.fields.date || new Date().toISOString().split('T')[0],
      author: item.fields.author || 'ARC Team',
      category: item.fields.category || 'Uncategorized',
      summary: item.fields.summary || '',
      content: processContent(item.fields.content),
      tags: item.fields.tags || [],
      featured: item.fields.featured || false,
      image: item.fields.image?.fields?.file?.url || '/blog-images/default.jpg',
    }));
  } catch (error) {
    console.error('Error fetching blog posts from Contentful:', error);
    return [];
  }
};

// Fetch a single blog post by ID
export const fetchBlogPostById = async (id) => {
  try {
    // Check if environment variables are set
    if (!import.meta.env.VITE_CONTENTFUL_SPACE_ID || !import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN) {
      console.warn('Contentful credentials are not set. Please check your .env file.');
      return null;
    }

    const response = await client.getEntry(id, {
      include: 10, // Include up to 10 levels of embedded entries and assets
    });
    
    return {
      id: response.sys.id,
      title: response.fields.title || 'Untitled',
      slug: createSlug(response.fields.title || 'Untitled', response.sys.id),
      date: response.fields.date || new Date().toISOString().split('T')[0],
      author: response.fields.author || 'ARC Team',
      category: response.fields.category || 'Uncategorized',
      summary: response.fields.summary || '',
      content: processContent(response.fields.content),
      tags: response.fields.tags || [],
      featured: response.fields.featured || false,
      image: response.fields.image?.fields?.file?.url || '/blog-images/default.jpg',
    };
  } catch (error) {
    console.error(`Error fetching blog post with ID ${id} from Contentful:`, error);
    return null;
  }
};

// Fetch a single blog post by slug
export const fetchBlogPostBySlug = async (slug) => {
  try {
    // Check if environment variables are set
    if (!import.meta.env.VITE_CONTENTFUL_SPACE_ID || !import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN) {
      console.warn('Contentful credentials are not set. Please check your .env file.');
      return null;
    }

    // First, fetch all posts and find the one with matching slug
    const posts = await fetchBlogPosts();
    const post = posts.find(p => p.slug === slug);
    
    if (post) {
      // Fetch the full post data by ID to ensure we have all content
      return await fetchBlogPostById(post.id);
    }
    
    // If not found by slug, try to find by ID (for backward compatibility)
    // This handles cases where someone might have bookmarked an old ID-based URL
    const postById = posts.find(p => p.id === slug);
    if (postById) {
      return await fetchBlogPostById(postById.id);
    }
    
    return null;
  } catch (error) {
    console.error(`Error fetching blog post with slug ${slug} from Contentful:`, error);
    return null;
  }
}; 