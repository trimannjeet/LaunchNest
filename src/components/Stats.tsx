'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const metrics = [
  { number: '180+', label: 'Projects Delivered' },
  { number: '85%', label: 'Avg Success Rate' },
  { number: '2M+', label: 'Funding Support Influence' },
  { number: '120+', label: 'Monthly Campaign Launches' },
];

const caseStudies = [
  {
    name: 'TechFlow',
    role: 'SaaS Founder',
    result: 'From idea to MVP launch in 6 weeks',
    details: 'Positioning, landing page funnel, onboarding UX, and lead generation sprint delivered as one package.',
    impact: ['Leads: +320%', 'CAC: -38%', 'Signups: +4.1x'],
  },
  {
    name: 'GreenStart',
    role: 'D2C Startup',
    result: 'Built digital brand presence from zero',
    details: 'Instagram growth system, content production, and conversion website rollout with weekly optimization.',
    impact: ['Reach: +6.2x', 'Revenue: +240%', 'Retention: +31%'],
  },
  {
    name: 'HealthHub',
    role: 'HealthTech Founder',
    result: 'Scaled traction with strategic content + product improvements',
    details: 'Go to market messaging, social storytelling, and customer journey improvements for conversion lift.',
    impact: ['MQL: +280%', 'Demo Bookings: +190%', 'NPS: +22'],
  },
];

export default function Stats() {
  const [activeCase, setActiveCase] = useState(0);

  const currentCase = caseStudies[activeCase];

  const nextCase = () => {
    setActiveCase((prev) => (prev + 1) % caseStudies.length);
  };

  const prevCase = () => {
    setActiveCase((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <section className="py-20">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em]" style={{ color: 'var(--primary)' }}>
            Performance Snapshot
          </p>
          <h2 className="mb-4 text-4xl font-black sm:text-5xl" style={{ color: 'var(--foreground)' }}>
            Results You Can Actually Measure
          </h2>
          <p className="mx-auto max-w-2xl text-lg" style={{ color: 'var(--muted)' }}>
            LaunchNest combines strategic thinking, creative execution, and technical delivery to generate measurable startup growth.
          </p>
        </motion.div>

        <div className="mb-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {metrics.map((metric) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="panel rounded-2xl p-5 text-center"
            >
              <p className="text-3xl font-black sm:text-4xl" style={{ color: 'var(--primary)' }}>
                {metric.number}
              </p>
              <p className="mt-1 text-sm" style={{ color: 'var(--muted)' }}>
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="panel rounded-3xl p-6 sm:p-8">
          <div className="mb-5 flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: 'var(--primary)' }}>
                Case Highlight
              </p>
              <h3 className="text-2xl font-black sm:text-3xl" style={{ color: 'var(--foreground)' }}>
                Founder Outcomes
              </h3>
            </div>
            <div className="flex gap-2">
              <button onClick={prevCase} className="btn btn-ghost px-3 py-2" aria-label="Previous case">
                <FiChevronLeft />
              </button>
              <button onClick={nextCase} className="btn btn-ghost px-3 py-2" aria-label="Next case">
                <FiChevronRight />
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.article
              key={currentCase.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.24 }}
              className="grid grid-cols-1 gap-5 md:grid-cols-[1.4fr_1fr]"
            >
              <div className="rounded-2xl border p-5 panel-muted">
                <h4 className="text-2xl font-black" style={{ color: 'var(--foreground)' }}>
                  {currentCase.name}
                </h4>
                <p className="mb-3 text-sm" style={{ color: 'var(--muted)' }}>
                  {currentCase.role}
                </p>
                <p className="mb-3 text-lg font-semibold" style={{ color: 'var(--primary)' }}>
                  {currentCase.result}
                </p>
                <p style={{ color: 'var(--text)' }}>{currentCase.details}</p>
              </div>

              <div className="rounded-2xl border p-5 panel-muted">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--muted)' }}>
                  Growth Impact
                </p>
                <ul className="space-y-2">
                  {currentCase.impact.map((item) => (
                    <li key={item} className="rounded-xl border px-3 py-2 text-sm" style={{ borderColor: 'var(--border)', color: 'var(--foreground)' }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
