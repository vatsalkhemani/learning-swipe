import Link from 'next/link';
import { CATEGORIES } from '@/lib/categories';
import { getCardsByCategory } from '@/lib/content';

export default function HomePage() {
  const categoriesWithCounts = CATEGORIES.map(c => ({
    ...c,
    count: getCardsByCategory(c.slug).length,
  }));

  return (
    <main className="min-h-screen px-5 pt-10 pb-20 max-w-xl mx-auto">
      <header className="mb-10">
        <p className="font-mono-sm text-mute mb-2">learning-swipe</p>
        <h1 className="font-display text-3xl font-semibold leading-tight tracking-tight mb-2">
          Pick a topic. Read what makes you smarter.
        </h1>
        <p className="text-soft text-base leading-relaxed">
          Long-form deep dives, written to teach you from zero. Swipe one, finish it, swipe the next.
        </p>
      </header>

      <section className="space-y-3">
        {categoriesWithCounts.map(cat => (
          <Link
            key={cat.slug}
            href={`/topic/${cat.slug}`}
            className="block border border-[var(--rule)] hover:border-[var(--ink-mute)] transition-colors rounded-md px-4 py-4 no-select"
          >
            <div className="flex items-baseline justify-between mb-1">
              <h2 className="font-display text-lg font-semibold tracking-tight">
                {cat.name}
              </h2>
              <span className="font-mono-sm text-mute">
                {cat.count} {cat.count === 1 ? 'card' : 'cards'}
              </span>
            </div>
            <p className="text-soft text-[15px] leading-snug">{cat.blurb}</p>
          </Link>
        ))}
      </section>

      <footer className="mt-16 text-center">
        <p className="font-mono-sm text-mute">browse · swipe · read · listen</p>
      </footer>
    </main>
  );
}
