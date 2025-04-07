// Blog post data structure
const blogPosts = [
  {
    id: 'latest-rules-update',
    title: 'Latest Rules Update',
    date: '2024-04-06',
    author: 'ARC Team',
    category: 'Rules',
    summary: 'Stay tuned for the latest rules updates and clarifications.',
    content: `
      <p>The Armada Ruleset Collective is pleased to announce the latest rules update for Star Wars: Armada.</p>
      <p>This update includes clarifications on several frequently asked questions and resolves some ambiguities in the current ruleset.</p>
      <h3>Key Updates:</h3>
      <ul>
        <li>Clarification on squadron activation during the Squadron Phase</li>
        <li>Updated rules for critical effects on ships</li>
        <li>Revised guidelines for tournament play</li>
      </ul>
      <p>For the complete details, please refer to our <a href="/resources">Rules Reference</a> section.</p>
    `,
    tags: ['rules', 'update', 'clarification'],
    featured: true,
    image: '/blog-images/rules-update.jpg'
  },
  {
    id: 'community-tournament-results',
    title: 'Community Tournament Results',
    date: '2024-04-05',
    author: 'ARC Team',
    category: 'Tournaments',
    summary: 'Check out the latest tournament results and winning strategies.',
    content: `
      <p>The latest community tournament has concluded, and we're excited to share the results with you.</p>
      <p>This tournament featured 32 players competing with diverse fleet compositions and strategies.</p>
      <h3>Top 3 Players:</h3>
      <ol>
        <li>Player Name - Imperial Fleet</li>
        <li>Player Name - Rebel Fleet</li>
        <li>Player Name - Imperial Fleet</li>
      </ol>
      <p>Stay tuned for detailed fleet lists and battle reports in the coming weeks.</p>
    `,
    tags: ['tournament', 'results', 'community'],
    featured: true,
    image: '/blog-images/tournament-results.jpg'
  },
  {
    id: 'new-ship-reviews',
    title: 'New Ship Reviews: Imperial Light Cruiser',
    date: '2024-03-28',
    author: 'ARC Team',
    category: 'Reviews',
    summary: 'An in-depth analysis of the Imperial Light Cruiser and its impact on fleet building.',
    content: `
      <p>The Imperial Light Cruiser has been a game-changer for Imperial fleets since its release.</p>
      <p>In this review, we'll analyze its strengths, weaknesses, and how it fits into various fleet archetypes.</p>
      <h3>Key Points:</h3>
      <ul>
        <li>Cost-effectiveness compared to other Imperial ships</li>
        <li>Versatility in different fleet compositions</li>
        <li>Recommended upgrades and squadron combinations</li>
      </ul>
      <p>Whether you're a new player or a veteran, this review will help you maximize the potential of this versatile ship.</p>
    `,
    tags: ['review', 'imperial', 'light-cruiser'],
    featured: false,
    image: '/blog-images/light-cruiser.jpg'
  }
];

export default blogPosts; 