import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';

const RichTextContent = ({ content }) => {
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
        [BLOCKS.PARAGRAPH]: (node, children) => <p className="mb-3 sm:mb-4 text-base sm:text-lg">{children}</p>,
        [BLOCKS.HEADING_1]: (node, children) => <h1 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">{children}</h1>,
        [BLOCKS.HEADING_2]: (node, children) => <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{children}</h2>,
        [BLOCKS.HEADING_3]: (node, children) => <h3 className="text-lg sm:text-xl font-bold mb-2">{children}</h3>,
        [BLOCKS.UL_LIST]: (node, children) => <ul className="list-disc pl-4 sm:pl-5 mb-3 sm:mb-4">{children}</ul>,
        [BLOCKS.OL_LIST]: (node, children) => <ol className="list-decimal pl-4 sm:pl-5 mb-3 sm:mb-4">{children}</ol>,
        [BLOCKS.LIST_ITEM]: (node, children) => <li className="mb-1 text-base sm:text-lg">{children}</li>,
        [BLOCKS.QUOTE]: (node, children) => <blockquote className="border-l-4 border-gray-600 pl-3 sm:pl-4 italic my-3 sm:my-4 text-base sm:text-lg">{children}</blockquote>,
        [BLOCKS.HR]: () => <hr className="my-4 sm:my-6 border-gray-700" />,
        [INLINES.HYPERLINK]: (node, children) => {
          const { uri } = node.data;
          return (
            <a 
              href={uri} 
              className="text-[#C14949] hover:text-[#D15A5A] underline break-all"
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
        [MARKS.ITALIC]: text => <em className="italic font-style-italic" style={{ fontFamily: "'Montserrat', sans-serif", fontStyle: 'italic' }}>{text}</em>,
        [MARKS.CODE]: text => <code className="bg-gray-800 px-1 py-0.5 rounded text-sm sm:text-base">{text}</code>,
      },
    };
    
    return (
      <div className="prose prose-invert max-w-none prose-sm sm:prose-base">
        {documentToReactComponents(content, options)}
      </div>
    );
  }
  
  // If content is null or undefined, return null
  return null;
};

export default RichTextContent; 