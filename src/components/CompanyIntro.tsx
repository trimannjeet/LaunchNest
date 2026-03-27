'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CompanyIntro() {
  return (
    <section className="relative flex min-h-[calc(100vh-72px)] items-center overflow-hidden py-8">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 18% 30%, color-mix(in srgb, var(--primary) 18%, transparent) 0%, transparent 44%), radial-gradient(circle at 84% 22%, color-mix(in srgb, var(--accent) 14%, transparent) 0%, transparent 38%), linear-gradient(180deg, color-mix(in srgb, var(--surface) 70%, transparent) 0%, color-mix(in srgb, var(--background) 94%, #000) 100%)',
        }}
      />

      <div className="section-shell relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em]" style={{ color: 'var(--primary)' }}>
              Welcome To
            </p>

            <h1
              className="text-[clamp(3.1rem,9vw,7rem)] font-black leading-[0.9] md:whitespace-nowrap"
              style={{ color: 'var(--foreground)' }}
            >
              LaunchNest
            </h1>

            <p className="mt-4 max-w-2xl text-lg sm:text-xl" style={{ color: 'var(--text)' }}>
              Company-first startup execution across strategy, brand, product, and growth.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#home-hero" className="btn btn-primary px-7 py-3">
                Explore LaunchNest
              </Link>
              <Link href="/contact" className="btn btn-secondary px-7 py-3">
                Book Intro Call
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.08, duration: 0.5 }}
            className="panel relative hidden rounded-3xl p-6 lg:block"
          >
            <div
              className="absolute -right-10 -top-10 h-28 w-28 rounded-full blur-2xl"
              style={{ backgroundColor: 'color-mix(in srgb, var(--primary) 30%, transparent)' }}
            />
            <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--primary)' }}>
              Why LaunchNest
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight" style={{ color: 'var(--foreground)' }}>
              Built for fast founder execution
            </h2>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                ['500+', 'Founders'],
                ['4', 'Tracks'],
                ['7 days', 'Kickoff'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border p-3 panel-muted">
                  <p className="text-lg font-black" style={{ color: 'var(--foreground)' }}>
                    {value}
                  </p>
                  <p className="text-xs uppercase tracking-[0.13em]" style={{ color: 'var(--muted)' }}>
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
