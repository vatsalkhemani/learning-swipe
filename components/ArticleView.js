'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

/**
 * Renders one card. Convention: any `<ul>` that immediately follows
 * a `<h2>` gets wrapped in a `.highlight-tile` (the bullet preview).
 * Subsequent `<ul>`s in the same section render as normal bullets.
 *
 * We handle this with a small renderer that tracks whether the
 * previous emitted element was an h2.
 */
export default function ArticleView({ card }) {
  return (
    <article className="prose-card max-w-xl mx-auto px-5 pt-8 pb-6">
      {card.subtopic && (
        <p className="font-mono-sm text-mute mb-3 no-select">
          {card.subtopic}
        </p>
      )}

      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={buildComponents()}
      >
        {card.body}
      </ReactMarkdown>
    </article>
  );
}

/**
 * The trick: we use a stateful flag stored on a closure variable
 * `lastHeading` so that the first `<ul>` after every `<h2>` becomes
 * a highlight tile.
 */
function buildComponents() {
  let pendingTile = false;

  return {
    h1: ({ children }) => <h1>{children}</h1>,
    h2: ({ children }) => {
      pendingTile = true;
      return <h2>{children}</h2>;
    },
    p: ({ children }) => {
      pendingTile = false;
      return <p>{children}</p>;
    },
    ul: ({ children }) => {
      if (pendingTile) {
        pendingTile = false;
        return (
          <div className="highlight-tile">
            <ul>{children}</ul>
          </div>
        );
      }
      return <ul>{children}</ul>;
    },
    blockquote: ({ children }) => {
      pendingTile = false;
      return <blockquote>{children}</blockquote>;
    },
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
  };
}
