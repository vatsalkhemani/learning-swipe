'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

/**
 * Renders one card. Pure markdown rendering — no stateful tricks.
 * Section headings (`##`) and bullets get their visual hierarchy
 * from CSS in globals.css.
 */
export default function ArticleView({ card }) {
  return (
    <article className="prose-card max-w-xl mx-auto px-5 pt-8 pb-6">
      {card.subtopic && (
        <p className="font-mono-sm text-mute mb-3 no-select">
          {card.subtopic}
        </p>
      )}

      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {card.body}
      </ReactMarkdown>
    </article>
  );
}
