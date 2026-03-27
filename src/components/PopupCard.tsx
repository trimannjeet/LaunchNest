'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface PopupCardProps {
  title: string;
  description: string;
  icon?: string;
  color?: string;
  gradient?: string;
  stats?: Array<{ label: string; value: string }>;
}

export default function PopupCard({
  title,
  description,
  icon = '✨',
  color = 'from-cyan-400 to-blue-500',
  stats = [],
}: PopupCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; duration: number }>>([]);

  const handleHover = () => {
    if (!isHovered) {
      setIsHovered(true);
      // Generate random particles
      const newParticles = [...Array(15)].map((_, i) => ({
        id: i,
        x: Math.random() * 400 - 200,
        y: Math.random() * 400 - 200,
        duration: Math.random() * 1 + 1,
      }));
      setParticles(newParticles);
    }
  };

  return (
    <motion.div
      onMouseEnter={handleHover}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.12, rotate: 2 }}
      className="relative overflow-hidden rounded-3xl cursor-pointer group"
      style={{
        background: `linear-gradient(135deg, color-mix(in srgb, var(--primary) 20%, var(--surface)), var(--surface-2))`,
        border: '2px solid var(--border)',
      }}
    >
      {/* Animated background glow */}
      <motion.div
        animate={{
          scale: isHovered ? [1, 1.5] : 1,
          opacity: isHovered ? [0.3, 0.1] : 0.1,
        }}
        className={`absolute -inset-10 bg-gradient-to-r ${color} blur-2xl rounded-full`}
      />

      {/* Content wrapper */}
      <div className="relative z-10 p-8">
        {/* Icon */}
        <motion.div
          animate={{
            y: isHovered ? [-5, 5, -5] : 0,
            scale: isHovered ? 1.3 : 1,
          }}
          transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
          className="text-6xl mb-4 inline-block"
        >
          {icon}
        </motion.div>

        {/* Title */}
        <motion.h3
          animate={{
            color: isHovered ? 'var(--primary)' : 'var(--foreground)',
          }}
          className="text-3xl font-black mb-3 transition-colors duration-300"
        >
          {title}
        </motion.h3>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isHovered ? 1 : 0.7,
            height: isHovered ? 'auto' : 60,
          }}
          style={{ color: 'var(--muted)' }}
          className="text-sm leading-relaxed overflow-hidden mb-6"
        >
          {description}
        </motion.p>

        {/* Stats popup */}
        <AnimatePresence>
          {isHovered && stats.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="grid grid-cols-3 gap-4 pt-4 border-t border-cyan-400/20"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl font-black" style={{ color: 'var(--primary)' }}>
                    {stat.value}
                  </div>
                  <div className="text-xs" style={{ color: 'var(--muted)' }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Particle effects */}
      <AnimatePresence>
        {isHovered &&
          particles.map((particle) => (
            <motion.div
              key={particle.id}
              initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              animate={{
                opacity: 0,
                x: particle.x,
                y: particle.y,
                scale: 0,
              }}
              transition={{
                duration: particle.duration,
                ease: 'easeOut',
              }}
              className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full pointer-events-none"
              style={{
                left: '50%',
                top: '50%',
                marginLeft: -4,
                marginTop: -4,
              }}
            />
          ))}
      </AnimatePresence>

      {/* Border glow animation */}
      <motion.div
        animate={{
          boxShadow: isHovered
            ? [
                'inset 0 0 0 1px rgba(0, 212, 255, 0)',
                'inset 0 0 30px 10px rgba(0, 212, 255, 0.3)',
                'inset 0 0 0 1px rgba(0, 212, 255, 0)',
              ]
            : 'none',
        }}
        transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
        className="absolute inset-0 rounded-3xl pointer-events-none"
      />
    </motion.div>
  );
}
