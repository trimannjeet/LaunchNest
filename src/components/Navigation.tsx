'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FiArrowRight, FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import BrandMark from './BrandMark';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Posts', href: '/posts' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [menuRoute, setMenuRoute] = useState<string | null>(null);
  const isOpen = menuRoute === pathname;

  const toggleMenu = () => setMenuRoute(isOpen ? null : pathname);
  const closeMenu = () => setMenuRoute(null);

  return (
    <header className="sticky top-0 z-50 border-b backdrop-blur-xl" style={{ borderColor: 'var(--border)' }}>
      <nav className="section-shell h-18" style={{ backgroundColor: 'color-mix(in srgb, var(--surface) 84%, transparent)' }}>
        <div className="grid h-[72px] grid-cols-[auto_1fr_auto] items-center gap-3">
          <Link href="/" className="group flex items-center gap-3" aria-label="LaunchNest home">
            <BrandMark size={36} className="shrink-0" />
            <div>
              <p className="hidden text-[10px] uppercase tracking-[0.24em] lg:block" style={{ color: 'var(--muted)' }}>
                Launch Platform
              </p>
              <p className="text-base font-bold leading-none sm:text-lg" style={{ color: 'var(--foreground)' }}>
                LaunchNest
              </p>
            </div>
          </Link>

          <div className="hidden justify-center lg:flex">
            <div className="flex items-center gap-1 rounded-2xl p-1 panel-muted">
              {navItems.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="relative rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300"
                    style={{ color: active ? '#04172d' : 'var(--foreground)' }}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-xl"
                        style={{ background: 'linear-gradient(120deg, var(--primary), var(--accent))' }}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <Link href="/contact" className="btn btn-primary">
              Let&apos;s Talk
              <FiArrowRight size={15} />
            </Link>
          </div>

          <div className="col-start-3 flex items-center justify-end gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              className="flex h-10 w-10 items-center justify-center rounded-xl border panel-muted"
              style={{ color: 'var(--foreground)' }}
            >
              {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22 }}
              className="mb-3 rounded-2xl p-3 md:hidden panel"
            >
              <div className="space-y-1">
                {navItems.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className="block rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200"
                      style={{
                        color: active ? '#051426' : 'var(--foreground)',
                        background: active
                          ? 'linear-gradient(120deg, var(--primary), var(--accent))'
                          : 'color-mix(in srgb, var(--surface-2) 88%, transparent)',
                      }}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
              <Link href="/contact" onClick={closeMenu} className="btn btn-primary mt-3 w-full">
                Start Your Project
                <FiArrowRight size={15} />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
