'use client';

import { motion, Variants } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  variant?: 'glow' | 'gradient' | 'bounce' | 'typewriter' | 'glitch';
  delay?: number;
  className?: string;
}

export default function AnimatedText({
  text,
  variant = 'gradient',
  delay = 0,
  className = '',
}: AnimatedTextProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay,
      },
    },
  };

  const typewriterVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { type: 'spring', damping: 12, stiffness: 200, delay: (custom as number) * 0.05 },
    }),
  };

  const glowVariants: Variants = {
    hidden: { opacity: 0, filter: 'blur(10px)' },
    visible: (custom: number) => ({
      opacity: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.8, delay: (custom as number) * 0.05 },
    }),
  };

  const bounceVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 10,
        stiffness: 100,
        delay: (custom as number) * 0.05,
      },
    }),
  };

  const glitchVariants: Variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  const text_array = text.split('');

  if (variant === 'glitch') {
    return (
      <motion.div
        className={`relative ${className}`}
        initial="initial"
        animate="animate"
        variants={glitchVariants}
      >
        {text}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={`inline whitespace-pre-wrap ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {text_array.map((char, i) => {
        let charVariants: Variants;
        
        switch (variant) {
          case 'typewriter':
            charVariants = typewriterVariants;
            break;
          case 'glow':
            charVariants = glowVariants;
            break;
          case 'bounce':
            charVariants = bounceVariants;
            break;
          default:
            charVariants = bounceVariants;
        }

        return (
          <motion.span
            key={i}
            custom={i}
            variants={charVariants}
            className={`inline-block ${variant === 'glow' ? 'font-bold' : ''}`}
            style={
              variant === 'gradient'
                ? {
                    backgroundImage: `linear-gradient(90deg, var(--primary), var(--accent), var(--primary))`,
                    backgroundSize: '200% auto',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    animation: `slide 3s linear infinite`,
                  }
                : {}
            }
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        );
      })}

      <style>{`
        @keyframes slide {
          to {
            background-position: 200% center;
          }
        }
      `}</style>
    </motion.div>
  );
}
