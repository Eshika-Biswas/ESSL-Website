// Shared data file for News & Events entries.
// Add new entries here — each gets its own detail page at /about/news-events/[slug].

export interface NewsEvent {
  slug: string;
  title: string;
  excerpt: string;
  date: string;           // ISO date string, e.g. '2026-08-10'
  category: string;       // e.g. 'Company News', 'Events'
  heroImage: string;      // path under /public, e.g. '/news/summit-2026-hero.jpeg'
  // Body is an array of content blocks for rich layout
  body: ContentBlock[];
}

export type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'image'; src: string; caption?: string }
  | { type: 'heading'; text: string };

export const newsEvents: NewsEvent[] = [
  {
    slug: 'ess-business-excellence-summit-2026',
    title: 'ESS Business Excellence Summit–2026',
    excerpt:
      'Ensure Support Services Ltd. (ESSL) successfully hosted its annual leadership and business conference at Ramada by Wyndham, Cox\'s Bazar, under the theme "Stronger Teams, Greater Impact."',
    date: '2026-08-10',
    category: 'Company News',
    heroImage: '/news/summit-2026-hero.jpeg',
    body: [
      {
        type: 'paragraph',
        text: 'Ensure Support Services Ltd. (ESSL) successfully hosted the ESS Business Excellence Summit–2026, a two-day residential leadership and business conference at Ramada by Wyndham, Cox\'s Bazar, under the inspiring theme "Stronger Teams, Greater Impact." The summit brought together the company\'s management, department heads, team leaders, and employees to celebrate achievements, align strategic priorities, and reinforce ESSL\'s commitment to sustainable business growth.',
      },
      {
        type: 'paragraph',
        text: 'The summit featured a series of business presentations, strategic discussions, leadership addresses, and employee recognition programs, creating a collaborative platform for sharing ideas, reviewing organizational performance, and shaping the company\'s future direction.',
      },
      {
        type: 'paragraph',
        text: 'The event was inaugurated with a welcome session followed by presentations highlighting ESSL\'s business journey, achievements, and future aspirations. Throughout the two-day program, participants actively engaged in strategic planning sessions, leadership discussions, and interactive knowledge-sharing activities.',
      },
      {
        type: 'paragraph',
        text: 'Addressing the summit, Honorable Managing Director Mr. Md. Golam Mostafa shared his vision for ESSL\'s future, emphasizing innovation, customer-centric solutions, operational excellence, and the importance of building a resilient organization capable of adapting to evolving market demands. He encouraged every employee to embrace collaboration, accountability, and continuous learning as the foundation for long-term success.',
      },
      {
        type: 'paragraph',
        text: 'Honorable Director Mr. Partha Sharathe Biswas presented a comprehensive review of the company\'s Fiscal Year 2025 business performance, showcasing key sales achievements, business growth, major project successes, and organizational milestones. He also unveiled ESSL\'s upcoming business strategy and growth roadmap, outlining future opportunities, expansion initiatives, and strategic priorities to accelerate the company\'s next phase of development.',
      },
      {
        type: 'paragraph',
        text: 'Delivering another inspiring keynote, Honorable Director Mr. Sarker Mohammad Faisal emphasized the significance of business excellence, innovation, and customer satisfaction in maintaining sustainable growth. He encouraged employees to strengthen teamwork, enhance professional capabilities, and remain committed to delivering exceptional value to clients and partners.',
      },
      {
        type: 'paragraph',
        text: 'Adding valuable perspectives to the summit, Team Leaders from different business and operational units presented their departmental achievements, shared business insights, discussed ongoing challenges, and outlined future action plans. Their presentations reflected ESSL\'s collaborative culture and reinforced the importance of cross-functional alignment in achieving organizational objectives.',
      },
      {
        type: 'image',
        src: '/news/summit-2026-award-ceremony.jpeg',
        caption: 'Photo: Award Ceremony',
      },
      {
        type: 'paragraph',
        text: 'A key highlight of the summit was the Business Excellence Award Ceremony, where outstanding employees and high-performing teams were recognized for their exceptional contributions, dedication, and commitment to excellence. The recognition program celebrated the achievements of individuals who have played a significant role in driving ESSL\'s continued success.',
      },
      {
        type: 'paragraph',
        text: 'Beyond business discussions, the summit also featured networking sessions, team-building activities, cultural entertainment, a magic show, lucky draw, and interactive engagements, strengthening professional relationships and fostering a greater sense of unity across the organization.',
      },
      {
        type: 'paragraph',
        text: 'The ESS Business Excellence Summit–2026 concluded with renewed enthusiasm and a shared commitment to achieving the organization\'s strategic goals. Reflecting the spirit of its theme, "Stronger Teams, Greater Impact," the summit reaffirmed ESSL\'s belief that empowered people, visionary leadership, and collaborative teamwork are the driving forces behind sustained business excellence and long-term growth.',
      },
    ],
  },
];
