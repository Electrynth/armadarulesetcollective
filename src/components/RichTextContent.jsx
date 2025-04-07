import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { useEffect } from 'react';

const RichTextContent = ({ content }) => {
  // Debug content structure
  useEffect(() => {
    if (content && typeof content === 'object') {
      console.log('RichTextContent received:', content);
    }
  }, [content]);

  // If content is a string (HTML), render it directly
  if (typeof content === 'string') {
    return (
      <div 
        className="prose prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }
  
  // If content is a Rich Text object, render it with the React renderer
  if (content && typeof content === 'object') {
    const options = {
      renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => <p className="mb-4">{children}</p>,
        [BLOCKS.HEADING_1]: (node, children) => <h1 className="text-3xl font-bold mb-4">{children}</h1>,
        [BLOCKS.HEADING_2]: (node, children) => <h2 className="text-2xl font-bold mb-3">{children}</h2>,
        [BLOCKS.HEADING_3]: (node, children) => <h3 className="text-xl font-bold mb-2">{children}</h3>,
        [BLOCKS.UL_LIST]: (node, children) => <ul className="list-disc pl-5 mb-4">{children}</ul>,
        [BLOCKS.OL_LIST]: (node, children) => <ol className="list-decimal pl-5 mb-4">{children}</ol>,
        [BLOCKS.LIST_ITEM]: (node, children) => <li className="mb-1">{children}</li>,
        [BLOCKS.QUOTE]: (node, children) => <blockquote className="border-l-4 border-gray-600 pl-4 italic my-4">{children}</blockquote>,
        [BLOCKS.HR]: () => <hr className="my-6 border-gray-700" />,
        [INLINES.HYPERLINK]: (node, children) => {
          const { uri } = node.data;
          return (
            <a 
              href={uri} 
              className="text-[#C14949] hover:text-[#D15A5A] underline"
              target={uri.startsWith('http') ? '_blank' : undefined}
              rel={uri.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {children}
            </a>
          );
        },
      },
      renderMark: {
        [MARKS.BOLD]: text => <strong>{text}</strong>,
        [MARKS.ITALIC]: text => {
          console.log('Rendering italic text:', text);
          return <em className="italic">{text}</em>;
        },
        [MARKS.CODE]: text => <code className="bg-gray-800 px-1 py-0.5 rounded">{text}</code>,
      },
    };
    
    return (
      <div className="prose prose-invert max-w-none">
        {documentToReactComponents(content, options)}
      </div>
    );
  }
  
  // If content is null or undefined, return null
  return null;
};

export default RichTextContent; 