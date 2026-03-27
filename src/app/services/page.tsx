'use client'

import { motion } from 'framer-motion';
import Services from '@/components/Services';
import CTA from '@/components/CTA';
import HoverCard from '@/components/HoverCard';
import InteractiveButton from '@/components/InteractiveButton';

const serviceData = [
  {
    title: 'Idea Validation',
    description: 'Market research, customer interviews, MVP testing to de-risk your startup from day one.',
    icon: 'Brain',
    gradient: 'from-pink-500 to-orange-500',
  },
  {
    title: 'Web Development',
    description: 'Full-stack development with Next.js, React, and Node.js for production-ready apps.',
    icon: 'Code',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'UI/UX Design',
    description: 'Conversion-focused experiences that are both premium and easy to use.',
    icon: 'Design',
    gradient: 'from-amber-500 to-yellow-500',
  },
  {
    title: 'Branding and Marketing',
    description: 'Brand system, content engine, and channel strategy for sustainable awareness.',
    icon: 'Brand',
    gradient: 'from-blue-500 to-indigo-500',
  },
  {
    title: 'Business Strategy',
    description: 'Go-to-market planning, pricing experiments, and growth systems.',
    icon: 'Growth',
    gradient: 'from-rose-500 to-fuchsia-500',
  },
  {
    title: 'DevOps and Scaling',
    description: 'Cloud deployment, observability, and reliability foundations for scale.',
    icon: 'Cloud',
    gradient: 'from-cyan-500 to-sky-500',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden py-32" style={{ backgroundColor: 'var(--background)' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-shell text-center"
        >
          <motion.div
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="mb-6 inline-block text-xs font-bold tracking-[0.4em] uppercase"
            style={{ color: 'var(--primary)' }}
          >
            Our Services
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mb-6 text-5xl font-black tracking-tight md:text-7xl"
            style={{ color: 'var(--foreground)' }}
          >
            Complete Startup Stack
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mx-auto mb-12 max-w-3xl text-xl md:text-2xl"
            style={{ color: 'var(--text)' }}
          >
            End-to-end execution across strategy, design, development, and growth.
          </motion.p>
        </motion.div>
      </section>

      <section className="stagger-children py-24">
        <div className="section-shell">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {serviceData.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <HoverCard>
                  <div className="flex h-full flex-col p-8">
                    <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl text-sm font-black uppercase shadow-2xl ${service.gradient} shadow-[var(--primary)]`}>
                      {service.icon}
                    </div>
                    <h3 className="mb-4 text-2xl font-black" style={{ color: 'var(--foreground)' }}>
                      {service.title}
                    </h3>
                    <p className="mb-8 flex-grow leading-relaxed text-[var(--text)]">{service.description}</p>
                    <InteractiveButton href="/contact" className="btn btn-secondary w-full justify-center">
                      Learn More
                    </InteractiveButton>
                  </div>
                </HoverCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Services />

      <section className="bg-gradient-to-b from-[var(--surface)] to-transparent py-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="section-shell max-w-4xl text-center"
        >
          <h2 className="mb-6 text-4xl font-black md:text-5xl" style={{ color: 'var(--foreground)' }}>
            Ready to Build Your Future?
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-xl" style={{ color: 'var(--text)' }}>
            Get the complete startup execution package from validation to scale.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <InteractiveButton href="/contact" className="btn btn-primary px-8 py-4 text-lg shadow-glow">
              Start Project
            </InteractiveButton>
            <InteractiveButton href="/posts" variant="secondary" className="btn px-8 py-4 text-lg">
              View Portfolio
            </InteractiveButton>
          </div>
        </motion.div>
      </section>

      <CTA />
    </div>
  );
}
