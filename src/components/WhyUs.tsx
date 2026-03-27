'use client';

import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import InteractiveButton from './InteractiveButton';

const pillars = [
  {
    title: 'Customized Over Generic',
    description: 'Every startup has a unique market and message. We shape your strategy around your exact context.',
  },
  {
    title: 'Execution + Accountability',
    description: 'We do not just advise. We execute and track outcomes with clear weekly progress checkpoints.',
  },
  {
    title: 'Marketing + Product Alignment',
    description: 'Branding, social growth, websites, and technical development all move in one coordinated direction.',
  },
  {
    title: 'Founder First Partnership',
    description: 'You get a real growth partner focused on sustainable traction, not vanity metrics.',
  },
];

const proofCards = [
  { label: 'Founder Programs Delivered', value: '500+' },
  { label: 'Average Success Rate', value: '85%' },
  { label: 'Creative Assets Delivered', value: '10K+' },
  { label: 'Web Products Shipped', value: '200+' },
];

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ opacity: [0.08, 0.18, 0.08], x: [0, 20, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute right-0 top-16 h-72 w-72 rounded-full blur-3xl"
          style={{ backgroundColor: 'color-mix(in srgb, var(--primary) 22%, transparent)' }}
        />
        <motion.div
          animate={{ opacity: [0.08, 0.16, 0.08], y: [0, -16, 0] }}
          transition={{ duration: 8, repeat: Infinity, delay: 0.4 }}
          className="absolute bottom-0 left-0 h-96 w-96 rounded-full blur-3xl"
          style={{ backgroundColor: 'color-mix(in srgb, var(--accent) 18%, transparent)' }}
        />
      </div>

      <div className="section-shell relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-4xl text-center"
        >
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em]" style={{ color: 'var(--primary)' }}>
            Why Founders Choose LaunchNest
          </p>
          <h2 className="mb-6 text-4xl font-black sm:text-5xl" style={{ color: 'var(--foreground)' }}>
            <AnimatedText text="A Startup Enabler, Not Just A Service Vendor" variant="glow" />
          </h2>
          <p className="text-lg" style={{ color: 'var(--muted)' }}>
            LaunchNest helps entrepreneurs transform ideas into sustainable startups through strategic guidance, creative marketing, and technical execution under one roof.
          </p>
        </motion.div>

        <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {pillars.map((pillar) => (
            <motion.article
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="panel rounded-2xl p-6"
            >
              <h3 className="mb-2 text-2xl font-black" style={{ color: 'var(--foreground)' }}>
                {pillar.title}
              </h3>
              <p style={{ color: 'var(--text)' }}>{pillar.description}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="panel mb-12 rounded-3xl p-6 sm:p-8"
        >
          <h3 className="mb-6 text-2xl font-black" style={{ color: 'var(--foreground)' }}>
            Proof That Our Model Works
          </h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {proofCards.map((card) => (
              <div key={card.label} className="rounded-2xl border p-4 text-center panel-muted">
                <p className="text-3xl font-black" style={{ color: 'var(--primary)' }}>
                  {card.value}
                </p>
                <p className="mt-1 text-sm" style={{ color: 'var(--muted)' }}>
                  {card.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="mx-auto mb-6 max-w-2xl text-base" style={{ color: 'var(--text)' }}>
            If you are building a startup and need strategic clarity plus hands-on execution, LaunchNest is built for you.
          </p>
          <InteractiveButton href="/contact" className="btn btn-primary px-8 py-4 text-base">
            Book Founder Session
          </InteractiveButton>
        </motion.div>
      </div>
    </section>
  );
}
