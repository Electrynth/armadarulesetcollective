import { createClient } from 'contentful';

// Initialize the Contentful client
const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

// Helper function to handle content
const processContent = (content) => {
  if (!content) return '';
  
  // If it's already a string, return it
  if (typeof content === 'string') return content;
  
  // If it's a Rich Text object, return it as is
  if (typeof content === 'object') {
    // Check if the content has the expected structure for Contentful Rich Text
    if (content.nodeType === 'document' && Array.isArray(content.content)) {
      // Process the content to ensure italic marks are preserved
      const processedContent = {
        ...content,
        content: content.content.map(node => {
          // If the node has marks, ensure they're properly formatted
          if (node.marks && Array.isArray(node.marks)) {
            return {
              ...node,
              marks: node.marks.map(mark => mark)
            };
          }
          return node;
        })
      };
      
      return processedContent;
    }
    
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
    });
    
    // Transform Contentful data to match your current blog post structure
    return response.items.map(item => ({
      id: item.sys.id,
      title: item.fields.title || 'Untitled',
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

    const response = await client.getEntry(id);
    
    return {
      id: response.sys.id,
      title: response.fields.title || 'Untitled',
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