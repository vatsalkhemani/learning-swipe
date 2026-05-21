export const CATEGORIES = [
  { slug: 'philosophy',     name: 'Philosophy',       blurb: 'Ideas about how to live and why anything matters' },
  { slug: 'cog-science',    name: 'Cognitive Science', blurb: 'How the mind actually works' },
  { slug: 'hard-sciences',  name: 'Sciences',         blurb: 'Physics, biology, evolution, game theory' },
  { slug: 'economics',      name: 'Economics',        blurb: 'Money, markets, crises, ideologies' },
  { slug: 'tech-history',   name: 'Tech History',     blurb: 'How the modern computing world got here' },
  { slug: 'global-history', name: 'Global History',   blurb: 'Wars, decolonization, rises and falls' },
  { slug: 'india',          name: 'India',            blurb: 'Home, in conversation-ready depth' },
  { slug: 'us',             name: 'United States',    blurb: 'Where you are moving to' },
  { slug: 'geography',      name: 'Geography',        blurb: 'The map under everything' },
  { slug: 'health',         name: 'Health',           blurb: 'Sleep, food, exercise, habits, biology' },
  { slug: 'culture',        name: 'Culture',          blurb: 'Films, music, sport, the social vocabulary' },
];

export function getCategory(slug) {
  return CATEGORIES.find(c => c.slug === slug);
}
