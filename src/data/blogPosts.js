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
  },
  {
    id: 'fleet-building-tips',
    title: 'Fleet Building Tips for Beginners',
    date: '2024-03-20',
    author: 'ARC Team',
    category: 'Strategy',
    summary: 'Essential tips and strategies for building effective fleets in Star Wars: Armada.',
    content: `
      <p>Building an effective fleet in Star Wars: Armada can be daunting for new players.</p>
      <p>In this guide, we'll cover the fundamentals of fleet building and provide tips to help you create balanced and effective fleets.</p>
      <h3>Key Concepts:</h3>
      <ul>
        <li>Understanding ship roles and synergies</li>
        <li>Balancing offense and defense</li>
        <li>Choosing the right upgrades</li>
        <li>Adapting your fleet to different objectives</li>
      </ul>
      <p>Whether you're playing Imperials or Rebels, these tips will help you build more effective fleets.</p>
    `,
    tags: ['strategy', 'fleet-building', 'beginners'],
    featured: true,
    image: '/blog-images/fleet-building.jpg'
  },
  {
    id: 'squadron-composition-guide',
    title: 'Squadron Composition Guide',
    date: '2024-03-15',
    author: 'ARC Team',
    category: 'Strategy',
    summary: 'A comprehensive guide to building effective squadron groups for your fleet.',
    content: `
      <p>Squadrons are a crucial component of many successful fleets in Star Wars: Armada.</p>
      <p>This guide will help you understand how to build effective squadron groups that complement your fleet strategy.</p>
      <h3>Topics Covered:</h3>
      <ul>
        <li>Understanding squadron roles and capabilities</li>
        <li>Building balanced squadron groups</li>
        <li>Synergies between different squadron types</li>
        <li>Countering enemy squadrons</li>
      </ul>
      <p>Whether you're running a squadron-heavy fleet or just using them for defense, this guide will help you maximize their effectiveness.</p>
    `,
    tags: ['strategy', 'squadrons', 'composition'],
    featured: false,
    image: '/blog-images/squadrons.jpg'
  },
  {
    id: 'tournament-preparation',
    title: 'Preparing for Your First Tournament',
    date: '2024-03-10',
    author: 'ARC Team',
    category: 'Tournaments',
    summary: 'Everything you need to know to prepare for your first Star Wars: Armada tournament.',
    content: `
      <p>Tournaments are a great way to test your skills and meet fellow Armada players.</p>
      <p>This guide will help you prepare for your first tournament experience, from choosing a fleet to tournament etiquette.</p>
      <h3>Preparation Tips:</h3>
      <ul>
        <li>Choosing and practicing with your fleet</li>
        <li>Understanding tournament rules and formats</li>
        <li>What to bring to the tournament</li>
        <li>Tournament etiquette and sportsmanship</li>
      </ul>
      <p>With these tips, you'll be ready to take on your first tournament with confidence.</p>
    `,
    tags: ['tournament', 'preparation', 'beginners'],
    featured: false,
    image: '/blog-images/tournament-prep.jpg'
  },
  {
    id: 'objective-guide',
    title: 'Understanding Objectives in Armada',
    date: '2024-03-05',
    author: 'ARC Team',
    category: 'Rules',
    summary: 'A detailed guide to understanding and using objectives effectively in Star Wars: Armada.',
    content: `
      <p>Objectives are a crucial part of Star Wars: Armada, providing additional ways to score points and shape the battlefield.</p>
      <p>This guide will help you understand how objectives work and how to use them to your advantage.</p>
      <h3>Key Concepts:</h3>
      <ul>
        <li>How objectives are selected and used</li>
        <li>Understanding objective types and their effects</li>
        <li>Choosing objectives that complement your fleet</li>
        <li>Countering your opponent's objectives</li>
      </ul>
      <p>Mastering objectives can give you a significant advantage in your games.</p>
    `,
    tags: ['rules', 'objectives', 'strategy'],
    featured: false,
    image: '/blog-images/objectives.jpg'
  },
  {
    id: 'ship-comparison',
    title: 'Ship Comparison: Victory vs. Gladiator',
    date: '2024-02-28',
    author: 'ARC Team',
    category: 'Reviews',
    summary: 'A detailed comparison of the Victory-class Star Destroyer and the Gladiator-class Star Destroyer.',
    content: `
      <p>Both the Victory and Gladiator are popular choices for Imperial fleets, but they serve different roles.</p>
      <p>This comparison will help you understand the strengths and weaknesses of each ship and when to use them.</p>
      <h3>Comparison Points:</h3>
      <ul>
        <li>Cost and efficiency</li>
        <li>Combat capabilities</li>
        <li>Defensive characteristics</li>
        <li>Command value and dials</li>
        <li>Upgrade slots and flexibility</li>
      </ul>
      <p>Whether you're building a new fleet or refining an existing one, this comparison will help you make informed decisions.</p>
    `,
    tags: ['review', 'imperial', 'comparison'],
    featured: false,
    image: '/blog-images/ship-comparison.jpg'
  },
  {
    id: 'community-spotlight',
    title: 'Community Spotlight: Tournament Organizers',
    date: '2024-02-20',
    author: 'ARC Team',
    category: 'Community',
    summary: 'Highlighting the dedicated tournament organizers who make the Armada community thrive.',
    content: `
      <p>The Star Wars: Armada community is made up of passionate players who organize tournaments and events.</p>
      <p>In this spotlight, we highlight some of the dedicated tournament organizers who help bring players together.</p>
      <h3>Featured Organizers:</h3>
      <ul>
        <li>Organizer Name - Region</li>
        <li>Organizer Name - Region</li>
        <li>Organizer Name - Region</li>
      </ul>
      <p>These organizers are the backbone of the Armada community, creating opportunities for players to compete and connect.</p>
    `,
    tags: ['community', 'tournaments', 'organizers'],
    featured: true,
    image: '/blog-images/community-spotlight.jpg'
  },
  {
    id: 'upcoming-events',
    title: 'Upcoming Armada Events',
    date: '2024-02-15',
    author: 'ARC Team',
    category: 'Events',
    summary: 'A roundup of upcoming Star Wars: Armada events and tournaments around the world.',
    content: `
      <p>There are many exciting Star Wars: Armada events coming up in the next few months.</p>
      <p>This roundup highlights some of the most anticipated tournaments and events for Armada players.</p>
      <h3>Featured Events:</h3>
      <ul>
        <li>Event Name - Location, Date</li>
        <li>Event Name - Location, Date</li>
        <li>Event Name - Location, Date</li>
      </ul>
      <p>Whether you're looking to compete or just meet fellow players, these events offer great opportunities to engage with the Armada community.</p>
    `,
    tags: ['events', 'tournaments', 'community'],
    featured: false,
    image: '/blog-images/upcoming-events.jpg'
  }
];

export default blogPosts; 