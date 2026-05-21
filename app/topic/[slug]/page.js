import { notFound } from 'next/navigation';
import { getCategory, CATEGORIES } from '@/lib/categories';
import { getCardsByCategory } from '@/lib/content';
import SwipeReader from '@/components/SwipeReader';

export function generateStaticParams() {
  return CATEGORIES.map(c => ({ slug: c.slug }));
}

export default function TopicPage({ params }) {
  const category = getCategory(params.slug);
  if (!category) return notFound();

  const cards = getCardsByCategory(params.slug);

  if (cards.length === 0) {
    return (
      <main className="min-h-screen px-6 pt-12 pb-20 max-w-xl mx-auto">
        <a href="/" className="font-mono-sm text-mute mb-6 inline-block">← back</a>
        <h1 className="font-display text-2xl font-semibold mb-3">{category.name}</h1>
        <p className="text-soft">No cards in this topic yet. They are being written.</p>
      </main>
    );
  }

  return <SwipeReader category={category} cards={cards} />;
}
