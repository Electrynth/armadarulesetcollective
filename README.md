# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Armada Ruleset Collective (ARC)

Your source for Star Wars: Armada rules, resources, and community updates.

## Features

- **News & Updates**: Latest blog posts and community updates
- **Rules Reference**: Comprehensive Star Wars: Armada rules
- **Resources**: Community resources and tools
- **Organized Play**: Tournament information and results
- **FAQ**: Frequently asked questions
- **About**: Information about ARC

## URL Structure

### Blog Posts
Blog posts now use SEO-friendly URLs based on the post title:

- **Old format**: `/news/1234567890abcdef` (Contentful ID)
- **New format**: `/news/your-post-title-here-abc123` (Title-based slug with unique identifier)

The slug generation:
- Converts the post title to lowercase
- Replaces special characters with word equivalents (e.g., `&` → `and`)
- Removes punctuation and special characters
- Replaces spaces with hyphens
- Appends a short unique identifier to prevent conflicts
- Ensures backward compatibility with old ID-based URLs

### Examples
- Title: "New Tournament Rules & Updates!"
- URL: `/news/new-tournament-rules-and-updates-abc123`

- Title: "ARC Community Spotlight #1"
- URL: `/news/arc-community-spotlight-hash-1-def456`

## Development

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup
1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env` file with your Contentful credentials:
   ```
   VITE_CONTENTFUL_SPACE_ID=your_space_id
   VITE_CONTENTFUL_ACCESS_TOKEN=your_access_token
   ```
4. Start the development server: `npm run dev`

### Building for Production
```bash
npm run build
```

## Content Management

This site uses Contentful as a headless CMS. Blog posts are managed through the Contentful dashboard and automatically appear on the site.

### Blog Post Fields
- **Title**: The post title (used for slug generation)
- **Date**: Publication date
- **Author**: Post author
- **Category**: Post category
- **Summary**: Brief description (shown in previews)
- **Content**: Full post content (Rich Text)
- **Tags**: Array of tags
- **Featured**: Boolean for featured posts
- **Image**: Featured image

## Deployment

The site is deployed on Vercel and automatically updates when changes are pushed to the main branch.

## Legal

Star Wars: Armada is a trademark of Fantasy Flight Games, Atomic Mass Games, and Lucasfilm Ltd. This website is not affiliated with, endorsed by, or connected to these companies.
