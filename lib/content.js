import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const CONTENT_DIR = path.join(process.cwd(), 'content');

export function getCardsByCategory(categorySlug) {
  const dir = path.join(CONTENT_DIR, categorySlug);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));
  const cards = files.map(filename => {
    const filepath = path.join(dir, filename);
    const raw = fs.readFileSync(filepath, 'utf8');
    const { data, content } = matter(raw);
    return {
      slug: filename.replace(/\.md$/, ''),
      category: categorySlug,
      title: data.title || filename.replace(/\.md$/, ''),
      hook: data.hook || '',
      subtopic: data.subtopic || '',
      order: data.order ?? 999,
      body: content,
    };
  });

  return cards.sort((a, b) => a.order - b.order);
}

export function getCard(categorySlug, cardSlug) {
  const cards = getCardsByCategory(categorySlug);
  return cards.find(c => c.slug === cardSlug);
}

export function getAllCardSlugsByCategory() {
  const result = {};
  if (!fs.existsSync(CONTENT_DIR)) return result;

  const categories = fs.readdirSync(CONTENT_DIR);
  for (const cat of categories) {
    const catPath = path.join(CONTENT_DIR, cat);
    if (!fs.statSync(catPath).isDirectory()) continue;
    result[cat] = fs.readdirSync(catPath)
      .filter(f => f.endsWith('.md'))
      .map(f => f.replace(/\.md$/, ''));
  }
  return result;
}
