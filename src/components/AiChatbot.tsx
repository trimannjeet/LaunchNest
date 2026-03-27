'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiClock, FiMessageCircle, FiRefreshCw, FiSend, FiStar, FiX } from 'react-icons/fi';

type ChatMessage = {
  from: 'user' | 'bot';
  text: string;
  time: string;
};

const QUICK_PROMPTS = [
  'Create a launch plan for my startup idea',
  'How can LaunchNest help with Instagram growth?',
  'What is included in website and branding support?',
  'Give me a 30 day go to market roadmap',
];

const FALLBACK_REPLIES = [
  'LaunchNest can help you validate your idea, define positioning, and build your first traction loop.',
  'For digital marketing, we can handle Instagram strategy, creatives, content calendar, and performance reporting.',
  'For product execution, we support website development, landing pages, and scalable technical implementation.',
  'If you share your startup stage and niche, I can suggest a customized support roadmap.',
];

const nowLabel = () =>
  new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

function getFallbackReply(input: string) {
  const normalized = input.toLowerCase();

  if (normalized.includes('instagram') || normalized.includes('social')) {
    return 'Great question. We build Instagram growth systems using content pillars, reel strategy, hooks, and weekly analytics.';
  }
  if (normalized.includes('website') || normalized.includes('landing page')) {
    return 'We design conversion focused websites with clear messaging, fast performance, strong SEO structure, and conversion tracking.';
  }
  if (normalized.includes('brand') || normalized.includes('branding')) {
    return 'LaunchNest builds brand identity from positioning and tone to visual language so your startup looks consistent and credible.';
  }
  if (normalized.includes('price') || normalized.includes('cost') || normalized.includes('package')) {
    return 'We customize engagement by stage and goals. Share your startup type, current traction, and budget range for the best plan.';
  }
  if (normalized.includes('roadmap') || normalized.includes('plan')) {
    return 'A strong roadmap has four phases: validate, position, build, and scale. I can draft this for your specific startup.';
  }

  const index = normalized.length % FALLBACK_REPLIES.length;
  return FALLBACK_REPLIES[index];
}

export default function AiChatbot() {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      from: 'bot',
      text: 'Hi, I am your LaunchNest assistant. Tell me your startup idea and I will help with strategy, brand, product, and growth.',
      time: nowLabel(),
    },
  ]);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const raw = localStorage.getItem('launchnest_chat_history');
    if (!raw) return;
    try {
      const parsed = JSON.parse(raw) as ChatMessage[];
      if (Array.isArray(parsed) && parsed.length > 0) {
        setMessages(parsed.slice(-40));
      }
    } catch {
      localStorage.removeItem('launchnest_chat_history');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('launchnest_chat_history', JSON.stringify(messages.slice(-40)));
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async (value?: string) => {
    const content = (value ?? draft).trim();
    if (!content) return;

    setDraft('');
    const userMessage: ChatMessage = { from: 'user', text: content, time: nowLabel() };
    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    try {
      const res = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: content }),
      });

      if (!res.ok) {
        throw new Error('AI request failed');
      }

      const data = await res.json();
      const answer = (data?.answer as string) || getFallbackReply(content);
      setMessages((prev) => [...prev, { from: 'bot', text: answer, time: nowLabel() }]);
    } catch {
      setMessages((prev) => [...prev, { from: 'bot', text: getFallbackReply(content), time: nowLabel() }]);
    } finally {
      setIsTyping(false);
    }
  };

  const clearChat = () => {
    const intro: ChatMessage = {
      from: 'bot',
      text: 'Chat reset. Share your startup stage and I will create a focused LaunchNest action plan.',
      time: nowLabel(),
    };
    setMessages([intro]);
  };

  const messageNodes = useMemo(() => messages, [messages]);

  return (
    <div className="fixed bottom-5 right-5 z-50 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ opacity: 0, y: 20, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.92 }}
            transition={{ duration: 0.2 }}
            className="mb-3 w-[calc(100vw-2.5rem)] max-w-[390px] rounded-2xl border panel"
          >
            <header className="flex items-center justify-between border-b p-3" style={{ borderColor: 'var(--border)' }}>
              <div className="flex items-center gap-2">
                <div className="rounded-lg p-2 panel-muted">
                  <FiStar style={{ color: 'var(--primary)' }} />
                </div>
                <div>
                  <p className="text-sm font-bold" style={{ color: 'var(--foreground)' }}>
                    LaunchNest Assistant
                  </p>
                  <p className="text-xs" style={{ color: 'var(--muted)' }}>
                    Strategy + Marketing + Product Help
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={clearChat}
                  className="rounded-md p-2 transition-colors hover:bg-white/5"
                  aria-label="Reset chat"
                  style={{ color: 'var(--muted)' }}
                >
                  <FiRefreshCw size={15} />
                </button>
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-md p-2 transition-colors hover:bg-white/5"
                  aria-label="Close chat"
                  style={{ color: 'var(--muted)' }}
                >
                  <FiX size={16} />
                </button>
              </div>
            </header>

            <div className="border-b px-3 py-2" style={{ borderColor: 'var(--border)' }}>
              <div className="flex flex-wrap gap-2">
                {QUICK_PROMPTS.map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => sendMessage(prompt)}
                    className="rounded-full border px-3 py-1 text-[11px] font-medium transition-all hover:scale-[1.02]"
                    style={{
                      borderColor: 'var(--border)',
                      color: 'var(--text)',
                      backgroundColor: 'color-mix(in srgb, var(--surface-2) 85%, transparent)',
                    }}
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>

            <div ref={listRef} className="h-[340px] space-y-3 overflow-y-auto p-3">
              {messageNodes.map((msg, idx) => (
                <motion.div
                  key={`${msg.from}-${msg.time}-${idx}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`max-w-[90%] rounded-xl px-3 py-2 ${msg.from === 'user' ? 'ml-auto' : ''}`}
                  style={{
                    color: msg.from === 'user' ? '#04182f' : 'var(--foreground)',
                    background:
                      msg.from === 'user'
                        ? 'linear-gradient(120deg, var(--primary), var(--accent))'
                        : 'color-mix(in srgb, var(--surface-2) 92%, transparent)',
                    border: msg.from === 'user' ? 'none' : '1px solid var(--border)',
                  }}
                >
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                  <p className="mt-1 flex items-center gap-1 text-[10px] opacity-80">
                    <FiClock size={10} />
                    {msg.time}
                  </p>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-xs"
                  style={{
                    borderColor: 'var(--border)',
                    color: 'var(--muted)',
                    backgroundColor: 'color-mix(in srgb, var(--surface-2) 92%, transparent)',
                  }}
                >
                  Thinking
                  <span className="animate-pulse">...</span>
                </motion.div>
              )}
            </div>

            <footer className="border-t p-3" style={{ borderColor: 'var(--border)' }}>
              <div className="flex items-center gap-2">
                <input
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      void sendMessage();
                    }
                  }}
                  placeholder="Ask anything about your startup growth..."
                  className="flex-1 rounded-xl border px-3 py-2 text-sm"
                  style={{
                    borderColor: 'var(--border)',
                    color: 'var(--foreground)',
                    backgroundColor: 'color-mix(in srgb, var(--surface-2) 90%, transparent)',
                  }}
                />
                <button onClick={() => void sendMessage()} aria-label="Send message" className="btn btn-primary px-3 py-2">
                  <FiSend size={16} />
                </button>
              </div>
            </footer>
          </motion.aside>
        )}
      </AnimatePresence>

      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="btn btn-primary rounded-full px-5 py-3 shadow-glow"
          aria-label="Open LaunchNest assistant"
        >
          <FiMessageCircle size={18} />
          Ask Assistant
        </button>
      )}
    </div>
  );
}
