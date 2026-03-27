'use client';

import { useLayoutEffect } from 'react';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  useLayoutEffect(() => {
    const saved = localStorage.getItem('launchnest-theme');
    const resolved = saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'neon' : 'light');
    document.documentElement.setAttribute('data-theme', resolved);
  }, []);

  return <>{children}</>;
}
