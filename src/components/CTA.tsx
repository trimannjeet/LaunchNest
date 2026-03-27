'use client';

import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import InteractiveButton from './InteractiveButton';

const highlights = ['Startup Strategy', 'Brand + Content', 'Web + Product', 'Growth Execution'];

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="panel rounded-3xl p-8 text-center sm:p-12"
        >
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em]" style={{ color: 'var(--primary)' }}>
            Ready To Build With LaunchNest
          </p>
          <h2 className="mb-5 text-4xl font-black sm:text-5xl" style={{ color: 'var(--foreground)' }}>
            <AnimatedText text="Turn Your Idea Into A Scalable Startup" variant="typewriter" />
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-lg" style={{ color: 'var(--text)' }}>
            From validation to execution, LaunchNest gives founders a complete growth partner for digital presence, product delivery, and market traction.
          </p>

          <div className="mb-9 flex flex-wrap justify-center gap-2">
            {highlights.map((item) => (
              <span key={item} className="rounded-full border px-3 py-1 text-xs font-semibold panel-muted" style={{ color: 'var(--muted)' }}>
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <InteractiveButton href="/contact" className="btn btn-primary px-8 py-4 text-base">
              Start My Launch Plan
            </InteractiveButton>
            <InteractiveButton href="/contact" variant="secondary" className="btn btn-secondary px-8 py-4 text-base">
              Book Discovery Session
            </InteractiveButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
