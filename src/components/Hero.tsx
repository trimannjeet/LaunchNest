'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import InteractiveButton from './InteractiveButton';

type TimerState = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const INITIAL_TIMER: TimerState = {
  days: 45,
  hours: 12,
  minutes: 30,
  seconds: 25,
};

const highlights = [
  'Idea validation',
  'Brand positioning',
  'Website and product build',
  'Instagram and social growth',
];

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState<TimerState>(INITIAL_TIMER);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        seconds -= 1;

        if (seconds < 0) {
          seconds = 59;
          minutes -= 1;
        }
        if (minutes < 0) {
          minutes = 59;
          hours -= 1;
        }
        if (hours < 0) {
          hours = 23;
          days -= 1;
        }

        return { days: Math.max(days, 0), hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (num: number) => String(num).padStart(2, '0');

  return (
    <section id="home-hero" className="relative overflow-hidden pt-12 pb-16 sm:pt-16 sm:pb-20">
      <div className="starfield" />
      <div className="absolute inset-0 bg-tech-canvas opacity-20" />

      <motion.div
        animate={{ opacity: [0.1, 0.2, 0.1], y: [0, -16, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute right-[-6rem] top-[-3rem] h-64 w-64 rounded-full blur-3xl"
        style={{ backgroundColor: 'color-mix(in srgb, var(--accent) 18%, transparent)' }}
      />

      <div className="section-shell relative z-10">
        <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.9fr]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-5 inline-flex rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] panel-muted"
              style={{ color: 'var(--primary)' }}
            >
              LaunchNest Startup Enabler
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="mb-4 text-[clamp(2.4rem,5.4vw,4.8rem)] font-black leading-[1.02] md:whitespace-nowrap"
              style={{ color: 'var(--foreground)' }}
            >
              Launch Smarter. Scale Faster.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-7 max-w-2xl text-lg sm:text-xl"
              style={{ color: 'var(--text)' }}
            >
              LaunchNest helps entrepreneurs and early stage teams transform ideas into sustainable startups with strategy, branding, digital marketing, and technical execution.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <InteractiveButton href="/contact" className="btn btn-primary px-8 py-4 text-base">
                Book Strategy Call
              </InteractiveButton>
              <InteractiveButton href="/services" variant="secondary" className="btn btn-secondary px-8 py-4 text-base">
                Explore Services
              </InteractiveButton>
            </motion.div>

            <div className="flex flex-wrap gap-2">
              {highlights.map((item) => (
                <span key={item} className="rounded-full border px-3 py-1 text-xs font-semibold panel-muted" style={{ color: 'var(--muted)' }}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="panel rounded-3xl p-6 sm:p-7"
          >
            <p className="text-xs font-bold uppercase tracking-[0.24em]" style={{ color: 'var(--primary)' }}>
              Founder Sprint Window
            </p>
            <h3 className="mt-2 text-3xl font-black" style={{ color: 'var(--foreground)' }}>
              Applications Close Soon
            </h3>
            <p className="mt-2 text-sm" style={{ color: 'var(--muted)' }}>
              Onboarding is limited so every startup gets hands-on execution support.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3">
              {[
                { value: timeLeft.days, label: 'Days' },
                { value: timeLeft.hours, label: 'Hours' },
                { value: timeLeft.minutes, label: 'Min' },
                { value: timeLeft.seconds, label: 'Sec' },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border p-4 text-center panel-muted">
                  <p className="text-3xl font-black" style={{ color: 'var(--foreground)' }}>
                    {formatTime(item.value)}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em]" style={{ color: 'var(--muted)' }}>
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border p-4 panel-muted">
              <p className="text-xs uppercase tracking-[0.18em]" style={{ color: 'var(--muted)' }}>
                What you get in first 30 days
              </p>
              <ul className="mt-2 space-y-1 text-sm" style={{ color: 'var(--text)' }}>
                <li>- Positioning and startup messaging</li>
                <li>- Conversion focused website framework</li>
                <li>- Digital growth action plan</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
