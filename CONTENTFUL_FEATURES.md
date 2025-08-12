# Contentful Features for Blog Posts

Your blog posts now support a wide range of advanced Contentful features. Here's what you can use:

## 🖼️ Embedded Assets

### Images
- **Supported formats**: JPG, PNG, GIF, WebP, SVG
- **Features**: 
  - Click to enlarge in modal
  - Automatic alt text from description
  - Responsive sizing
  - Hover effects

### Videos
- **Supported formats**: MP4, WebM, OGV
- **Features**:
  - Native HTML5 video player
  - Controls (play, pause, volume, fullscreen)
  - Responsive sizing

### PDFs
- **Features**:
  - Custom PDF viewer card
  - "View PDF" button opens in new tab
  - Shows title and description
  - PDF icon indicator

### Other Files
- **Supported**: Any file type
- **Features**:
  - Download button
  - File type indicator
  - Title and description display

## 🔗 Embedded Entries

### Code Blocks
- **Content Type**: `codeBlock`
- **Fields**:
  - `code`: The code content
  - `language`: Programming language (optional)
- **Features**:
  - Syntax highlighting ready
  - Scrollable overflow
  - Dark theme styling

### Callouts
- **Content Type**: `callout`
- **Fields**:
  - `title`: Callout title (optional)
  - `content`: Callout content
  - `type`: `info`, `warning`, `error`, or default
- **Features**:
  - Color-coded borders
  - Different background colors per type
  - Responsive design

### Image Galleries
- **Content Type**: `imageGallery`
- **Fields**:
  - `title`: Gallery title (optional)
  - `images`: Array of image assets
- **Features**:
  - Grid layout (1-3 columns responsive)
  - Click to enlarge individual images
  - Hover effects

### Embedded Blog Posts
- **Content Type**: `blogPost`
- **Fields**: All standard blog post fields (title, date, author, category, summary, content, tags, featured, image)
- **Features**:
  - Card-style display with image and metadata
  - Responsive layout (image + content side-by-side on desktop)
  - Clickable title linking to full article
  - Tags display (shows first 3, with "+X more" indicator)
  - Featured badge for featured posts
  - Proper slug generation for navigation

## 🔗 Hyperlinks

### External Links
- **Features**:
  - Opens in new tab
  - Security attributes (noopener, noreferrer)
  - Hover effects
  - Break-all for long URLs

### Internal Links
- **Blog Post Links**: Automatically generates slugs and links to other blog posts
- **Features**:
  - SEO-friendly URLs
  - Proper routing

### Asset Links
- **Features**:
  - Clickable images that open in new tab
  - Hover effects
  - Responsive sizing

## 📝 Rich Text Formatting

### Text Marks
- **Bold**: `**text**` or Ctrl+B
- **Italic**: `*text*` or Ctrl+I (with custom Montserrat font)
- **Code**: `code` (inline code with background)
- **Underline**: Underlined text
- **Superscript**: Raised text
- **Subscript**: Lowered text

### Block Elements
- **Headings**: H1, H2, H3 with proper hierarchy
- **Paragraphs**: Responsive spacing
- **Lists**: Ordered and unordered lists
- **Quotes**: Blockquotes with left border
- **Horizontal Rules**: Divider lines

## 🎨 Styling Features

### Responsive Design
- All elements adapt to screen size
- Mobile-first approach
- Touch-friendly interactions

### Dark Theme
- Consistent with your site's dark theme
- Proper contrast ratios
- Accessible color choices

### Interactive Elements
- Hover effects on clickable items
- Smooth transitions
- Keyboard navigation support

## 📱 Modal System

### Image Modal
- **Features**:
  - Full-screen overlay
  - ESC key to close
  - Click outside to close
  - Image title display
  - Responsive sizing
  - Background scroll prevention

## 🔧 Content Type Setup

To use these features in Contentful, you'll need to create the following content types:

### Code Block Content Type
```json
{
  "name": "Code Block",
  "id": "codeBlock",
  "fields": [
    {
      "name": "Code",
      "id": "code",
      "type": "Text",
      "required": true
    },
    {
      "name": "Language",
      "id": "language",
      "type": "Symbol",
      "required": false
    }
  ]
}
```

### Callout Content Type
```json
{
  "name": "Callout",
  "id": "callout",
  "fields": [
    {
      "name": "Title",
      "id": "title",
      "type": "Symbol",
      "required": false
    },
    {
      "name": "Content",
      "id": "content",
      "type": "Text",
      "required": true
    },
    {
      "name": "Type",
      "id": "type",
      "type": "Symbol",
      "required": false,
      "validations": [
        {
          "in": ["info", "warning", "error"]
        }
      ]
    }
  ]
}
```

### Image Gallery Content Type
```json
{
  "name": "Image Gallery",
  "id": "imageGallery",
  "fields": [
    {
      "name": "Title",
      "id": "title",
      "type": "Symbol",
      "required": false
    },
    {
      "name": "Images",
      "id": "images",
      "type": "Array",
      "items": {
        "type": "Link",
        "linkType": "Asset"
      },
      "required": true
    }
  ]
}
```

## 🚀 Usage Examples

### Adding an Image
1. In your Rich Text field, click the "+" button
2. Select "Embedded Asset"
3. Choose an image from your assets
4. Add title and description for accessibility

### Creating a Callout
1. In your Rich Text field, click the "+" button
2. Select "Embedded Entry"
3. Choose "Callout" content type
4. Fill in title, content, and type
5. Save and publish

### Embedding Another Blog Post
1. In your Rich Text field, click the "+" button
2. Select "Embedded Entry"
3. Choose "Blog Post" content type
4. Select the blog post you want to embed
5. The post will display as a card with image, title, and metadata

### Linking to Another Blog Post
1. Select text in your Rich Text field
2. Click the link button
3. Choose "Entry Hyperlink"
4. Select the target blog post
5. The link will automatically generate the correct URL

## 🔍 Performance Considerations

- **Image Optimization**: Contentful automatically provides optimized image URLs
- **Lazy Loading**: Consider implementing for large galleries
- **Caching**: Embedded entries are cached with the main content
- **Bundle Size**: Only loads what's needed

## 🛠️ Customization

You can easily customize the styling by modifying the CSS classes in the `RichTextContent.jsx` component. The component uses Tailwind CSS classes that match your existing design system.

## 📚 Additional Resources

- [Contentful Rich Text Renderer Documentation](https://github.com/contentful/rich-text/tree/master/packages/rich-text-react-renderer)
- [Contentful Content Types](https://www.contentful.com/developers/docs/concepts/content-types/)
- [Contentful Assets](https://www.contentful.com/developers/docs/concepts/assets/) 