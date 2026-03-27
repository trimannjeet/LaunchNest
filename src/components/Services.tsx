'use client';

import { motion, Variants } from 'framer-motion';
import { useMemo, useState } from 'react';
import PopupCard from './PopupCard';

type ServiceCategory = 'Strategy' | 'Brand' | 'Marketing' | 'Development';

type ServiceItem = {
  icon: string;
  title: string;
  description: string;
  stats: Array<{ label: string; value: string }>;
  color: string;
  category: ServiceCategory;
};

const services: ServiceItem[] = [
  {
    icon: '💡',
    title: 'Idea Validation and Strategy',
    description: 'Customer interviews, market mapping, and practical launch strategy so founders avoid expensive guesswork.',
    stats: [
      { label: 'Validation Sprints', value: '500+' },
      { label: 'Avg Delivery', value: '10 days' },
      { label: 'Success Rate', value: '85%' },
    ],
    color: 'from-amber-400 to-orange-500',
    category: 'Strategy',
  },
  {
    icon: '🎯',
    title: 'Brand Positioning and Messaging',
    description: 'Clear value proposition, founder story, and messaging framework that helps your startup stand out.',
    stats: [
      { label: 'Brand Kits', value: '300+' },
      { label: 'Clarity Score', value: '9.4/10' },
      { label: 'Revisions', value: 'Iterative' },
    ],
    color: 'from-violet-400 to-fuchsia-500',
    category: 'Brand',
  },
  {
    icon: '📈',
    title: 'Instagram and Social Growth',
    description: 'Content pillars, reel hooks, publishing cadence, and analytics-driven growth loops for consistent traction.',
    stats: [
      { label: 'Posts / Month', value: '120+' },
      { label: 'Avg Reach Lift', value: '3.8x' },
      { label: 'Engagement', value: '12-18%' },
    ],
    color: 'from-pink-400 to-rose-500',
    category: 'Marketing',
  },
  {
    icon: '🌐',
    title: 'Conversion Website Development',
    description: 'Fast custom websites and landing funnels designed to convert visitors into leads and qualified calls.',
    stats: [
      { label: 'Sites Launched', value: '200+' },
      { label: 'Core Web Vitals', value: 'A Grade' },
      { label: 'Avg Page Load', value: '<2s' },
    ],
    color: 'from-cyan-400 to-blue-500',
    category: 'Development',
  },
  {
    icon: '🎬',
    title: 'Creative Content Production',
    description: 'Posters, short videos, and ad creatives that stay on-brand and optimized for social performance.',
    stats: [
      { label: 'Creatives / Month', value: '300+' },
      { label: 'Formats', value: 'Reels + Ads' },
      { label: 'Turnaround', value: '48-72h' },
    ],
    color: 'from-indigo-400 to-sky-500',
    category: 'Marketing',
  },
  {
    icon: '⚙️',
    title: 'Technical Product Execution',
    description: 'Frontend, backend, integrations, and scalable architecture for startup products that must ship quickly.',
    stats: [
      { label: 'Products Built', value: '80+' },
      { label: 'Deployment Uptime', value: '99.9%' },
      { label: 'Tech Stacks', value: '20+' },
    ],
    color: 'from-emerald-400 to-teal-500',
    category: 'Development',
  },
];

const processSteps = [
  { title: 'Discover', detail: 'Understand goals, audience, and startup stage' },
  { title: 'Design Strategy', detail: 'Build roadmap, positioning, and channel plan' },
  { title: 'Execute', detail: 'Launch website, campaigns, and branded content' },
  { title: 'Scale', detail: 'Track performance and optimize for growth' },
];

const filters: Array<ServiceCategory | 'All'> = ['All', 'Strategy', 'Brand', 'Marketing', 'Development'];

export default function Services() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>('All');

  const filteredServices = useMemo(() => {
    if (activeFilter === 'All') return services;
    return services.filter((service) => service.category === activeFilter);
  }, [activeFilter]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.09 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative py-20">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em]" style={{ color: 'var(--primary)' }}>
            End To End Startup Enablement
          </p>
          <h2 className="mb-4 text-4xl font-black sm:text-5xl" style={{ color: 'var(--foreground)' }}>
            Services Built For Real Startup Growth
          </h2>
          <p className="text-lg" style={{ color: 'var(--muted)' }}>
            LaunchNest combines strategy, digital marketing, creative production, and technical execution in one coordinated team.
          </p>
        </motion.div>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {filters.map((filter) => {
            const active = filter === activeFilter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className="rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200"
                style={{
                  borderColor: active ? 'transparent' : 'var(--border)',
                  color: active ? '#051426' : 'var(--foreground)',
                  background: active
                    ? 'linear-gradient(120deg, var(--primary), var(--accent))'
                    : 'color-mix(in srgb, var(--surface-2) 88%, transparent)',
                }}
              >
                {filter}
              </button>
            );
          })}
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredServices.map((service) => (
            <motion.div key={service.title} variants={itemVariants}>
              <PopupCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                color={service.color}
                stats={service.stats}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="panel mt-14 rounded-3xl p-6 sm:p-8"
        >
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.24em]" style={{ color: 'var(--primary)' }}>
            How We Work
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={step.title} className="rounded-2xl border p-4 panel-muted">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em]" style={{ color: 'var(--muted)' }}>
                  Step {index + 1}
                </p>
                <h3 className="mb-1 text-lg font-black" style={{ color: 'var(--foreground)' }}>
                  {step.title}
                </h3>
                <p className="text-sm" style={{ color: 'var(--text)' }}>
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
