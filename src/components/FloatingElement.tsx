'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FloatingElementProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
}

export default function FloatingElement({
  children,
  delay = 0,
  duration = 4,
}: FloatingElementProps) {
  return (
    <motion.div
      className="inline-block"
      animate={{
        y: [0, -30, 0],
        x: [0, 15, 0],
        rotateZ: [0, 5, 0],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        delay: delay,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  );
}
