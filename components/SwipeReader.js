'use client';

import { useState, useEffect, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import Link from 'next/link';
import ArticleView from './ArticleView';
import VoiceButton from './VoiceButton';

export default function SwipeReader({ category, cards }) {
  const [index, setIndex] = useState(0);
  const [transition, setTransition] = useState(null); // 'next' | 'prev' | null
  const scrollContainerRef = useRef(null);

  const card = cards[index];

  const go = (direction) => {
    if (direction === 'next' && index < cards.length - 1) {
      setTransition('next');
      setTimeout(() => {
        setIndex(i => i + 1);
        setTransition(null);
        if (scrollContainerRef.current) scrollContainerRef.current.scrollTop = 0;
      }, 200);
    } else if (direction === 'prev' && index > 0) {
      setTransition('prev');
      setTimeout(() => {
        setIndex(i => i - 1);
        setTransition(null);
        if (scrollContainerRef.current) scrollContainerRef.current.scrollTop = 0;
      }, 200);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => go('next'),
    onSwipedRight: () => go('prev'),
    preventScrollOnSwipe: false,
    trackMouse: true,
    delta: 60,
  });

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') go('next');
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') go('prev');
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [index, cards.length]);

  return (
    <div className="min-h-screen flex flex-col" {...swipeHandlers}>
      {/* Top bar: category, back link, position */}
      <header className="sticky top-0 z-20 bg-[var(--bg)] border-b border-[var(--rule)]">
        <div className="max-w-xl mx-auto px-5 pt-4 pb-2 flex items-center justify-between">
          <Link href="/" className="font-mono-sm text-mute no-select">
            ← {category.name.toLowerCase()}
          </Link>
          <span className="font-mono-sm text-mute no-select">
            {String(index + 1).padStart(2, '0')} / {String(cards.length).padStart(2, '0')}
          </span>
        </div>
        <div className="max-w-xl mx-auto progress-bar">
          {cards.map((_, i) => (
            <div key={i} className="progress-dot" data-active={i === index} />
          ))}
        </div>
      </header>

      {/* Article */}
      <div
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto"
        style={{
          opacity: transition ? 0 : 1,
          transform: transition === 'next' ? 'translateX(-16px)' : transition === 'prev' ? 'translateX(16px)' : 'translateX(0)',
          transition: 'opacity 180ms ease, transform 180ms ease',
        }}
      >
        <ArticleView card={card} />

        {/* Navigation pad at bottom */}
        <div className="max-w-xl mx-auto px-5 pb-32 pt-6 flex items-center justify-between gap-3">
          <button
            onClick={() => go('prev')}
            disabled={index === 0}
            className="flex-1 py-3 border border-[var(--rule)] rounded-md font-mono-sm text-mute disabled:opacity-30 hover:border-[var(--ink-mute)] transition-colors no-select"
          >
            ← previous
          </button>
          <button
            onClick={() => go('next')}
            disabled={index === cards.length - 1}
            className="flex-1 py-3 border border-[var(--ink)] bg-[var(--ink)] text-[var(--bg)] rounded-md font-mono-sm disabled:opacity-30 no-select"
          >
            next →
          </button>
        </div>
      </div>

      <VoiceButton card={card} key={card.slug} />
    </div>
  );
}
