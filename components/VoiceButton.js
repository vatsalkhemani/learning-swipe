'use client';

import { useState, useEffect, useRef } from 'react';

/**
 * Reads aloud the card body using the Web Speech API.
 * Strips markdown to prose first, queues per-section utterances
 * so the voice flows naturally and can be paused/resumed.
 */
export default function VoiceButton({ card }) {
  const [state, setState] = useState('idle'); // idle | playing | paused
  const utteranceQueueRef = useRef([]);

  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const start = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      alert('Speech is not supported in this browser.');
      return;
    }

    const text = markdownToProse(card.body);
    const chunks = chunkText(text, 240); // ~240 chars per utterance for smooth chunking
    window.speechSynthesis.cancel();

    const voices = window.speechSynthesis.getVoices();
    const preferredVoice =
      voices.find(v => /en[-_](US|GB)/i.test(v.lang) && /(Samantha|Daniel|Karen|Google)/i.test(v.name)) ||
      voices.find(v => v.lang && v.lang.startsWith('en')) ||
      null;

    utteranceQueueRef.current = chunks.map((chunk, i) => {
      const u = new SpeechSynthesisUtterance(chunk);
      u.rate = 1.0;
      u.pitch = 1.0;
      u.volume = 1.0;
      if (preferredVoice) u.voice = preferredVoice;
      if (i === chunks.length - 1) {
        u.onend = () => setState('idle');
      }
      return u;
    });

    utteranceQueueRef.current.forEach(u => window.speechSynthesis.speak(u));
    setState('playing');
  };

  const pause = () => {
    window.speechSynthesis.pause();
    setState('paused');
  };

  const resume = () => {
    window.speechSynthesis.resume();
    setState('playing');
  };

  const stop = () => {
    window.speechSynthesis.cancel();
    setState('idle');
  };

  const onClick = () => {
    if (state === 'idle') start();
    else if (state === 'playing') pause();
    else if (state === 'paused') resume();
  };

  const onDoubleClick = () => {
    if (state !== 'idle') stop();
  };

  return (
    <button
      className="voice-btn no-select"
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      data-playing={state === 'playing'}
      aria-label={state === 'idle' ? 'Read aloud' : state === 'playing' ? 'Pause' : 'Resume'}
      title={state === 'idle' ? 'Tap to read aloud · double-tap to stop' : state === 'playing' ? 'Pause' : 'Resume'}
    >
      {state === 'playing' ? <PauseIcon /> : <PlayIcon />}
    </button>
  );
}

function PlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <rect x="6" y="5" width="4" height="14" rx="1" />
      <rect x="14" y="5" width="4" height="14" rx="1" />
    </svg>
  );
}

/**
 * Strip markdown formatting and convert to clean prose for TTS.
 */
function markdownToProse(md) {
  return md
    // strip frontmatter (defensive — shouldn't be in body but just in case)
    .replace(/^---[\s\S]*?---\n/, '')
    // headings → "Section: <text>." for slight pause + structure
    .replace(/^##\s+(.+)$/gm, 'Section: $1.')
    .replace(/^#\s+(.+)$/gm, '$1.')
    // bold + italic markers
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/\*(.+?)\*/g, '$1')
    .replace(/_(.+?)_/g, '$1')
    // bullets: turn into sentences with a small pause via period
    .replace(/^\s*[-*]\s+(.+)$/gm, '$1.')
    // blockquotes
    .replace(/^>\s+(.+)$/gm, '$1.')
    // links: keep text, drop url
    .replace(/\[(.+?)\]\(.+?\)/g, '$1')
    // collapse multiple newlines
    .replace(/\n{2,}/g, '\n\n')
    .trim();
}

/**
 * Split long text into smaller utterances so the Web Speech API
 * stays responsive and can be paused mid-card without losing place.
 */
function chunkText(text, maxLen) {
  const sentences = text.split(/(?<=[.!?])\s+/);
  const chunks = [];
  let current = '';

  for (const sentence of sentences) {
    if ((current + ' ' + sentence).length > maxLen && current.length > 0) {
      chunks.push(current.trim());
      current = sentence;
    } else {
      current = current ? current + ' ' + sentence : sentence;
    }
  }
  if (current.trim()) chunks.push(current.trim());
  return chunks;
}
