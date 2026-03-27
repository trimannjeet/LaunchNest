'use client';

import { useEffect, useState } from 'react';
import { FiMoon, FiSun, FiZap } from 'react-icons/fi';

const themes = [
  { id: 'neon', label: 'Neon', icon: FiZap },
  { id: 'night', label: 'Night', icon: FiMoon },
  { id: 'light', label: 'Light', icon: FiSun },
] as const;

type Theme = (typeof themes)[number]['id'];

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'neon';
    const saved = localStorage.getItem('launchnest-theme') as Theme | null;
    return saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'neon' : 'light');
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('launchnest-theme', theme);
  }, [theme]);

  const nextTheme = () => {
    const nextIndex = (themes.findIndex((t) => t.id === theme) + 1) % themes.length;
    const next = themes[nextIndex].id;
    setTheme(next);
  };

  const ActiveIcon = themes.find((t) => t.id === theme)?.icon || FiZap;

  return (
    <button
      onClick={nextTheme}
      className="flex items-center gap-2 rounded-lg border px-3 py-2 transition-colors"
      style={{
        borderColor: 'var(--border)',
        color: 'var(--foreground)',
        backgroundColor: 'color-mix(in srgb, var(--surface-2) 88%, transparent)',
      }}
      aria-label="Toggle theme"
      title={`Theme: ${theme}`}
    >
      <ActiveIcon size={18} />
      <span className="hidden sm:inline text-xs uppercase tracking-widest">{theme}</span>
    </button>
  );
}
