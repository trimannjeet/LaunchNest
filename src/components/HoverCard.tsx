'use client';

import { motion } from 'framer-motion';
import { ReactNode, useMemo } from 'react';

interface HoverCardProps {
  children: ReactNode;
  title?: string;
  icon?: ReactNode;
  gradient?: string;
}

export default function HoverCard({
  children,
  title,
  icon,
  gradient = 'from-cyan-400 to-blue-500',
}: HoverCardProps) {
  const particles = useMemo(
    () =>
      Array.from({ length: 5 }, (_, i) => ({
        id: i,
        xOffset: (i % 2 === 0 ? 1 : -1) * (18 + i * 9),
        left: `${10 + i * 20}%`,
        delay: i * 0.2,
      })),
    []
  );

  return (
    <motion.div
      whileHover={{ scale: 1.08, rotate: 1 }}
      className="group relative overflow-hidden rounded-2xl p-8 backdrop-blur-xl cursor-pointer"
      style={{
        backgroundColor: 'color-mix(in srgb, var(--surface) 70%, transparent)',
        border: '2px solid var(--border)',
      }}
    >
      {/* Animated gradient background */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
      />

      {/* Animated border glow */}
      <motion.div
        animate={{
          boxShadow: [
            'inset 0 0 0 0px rgba(0, 212, 255, 0)',
            'inset 0 0 20px 5px rgba(0, 212, 255, 0.3)',
            'inset 0 0 0 0px rgba(0, 212, 255, 0)',
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 rounded-2xl pointer-events-none group-hover:animate-pulse"
      />

      {/* Floating particles on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 overflow-hidden rounded-2xl"
      >
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            animate={{
              y: [-20, -100],
              opacity: [1, 0],
              x: particle.xOffset,
            }}
            transition={{
              duration: 2,
              delay: particle.delay,
              repeat: Infinity,
            }}
            className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
            style={{
              left: particle.left,
              bottom: 0,
            }}
          />
        ))}
      </motion.div>

      {/* Content */}
      <div className="relative z-10">
        {icon && (
          <motion.div
            whileHover={{ rotate: 360, scale: 1.2 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="mb-4 text-4xl inline-block"
          >
            {icon}
          </motion.div>
        )}
        {title && (
          <h3 className="text-2xl font-black mb-4" style={{ color: 'var(--primary)' }}>
            {title}
          </h3>
        )}
        {children}
      </div>
    </motion.div>
  );
}
