'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

interface InteractiveButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'glow';
  tooltip?: string;
  className?: string;
  href?: string;
  target?: ComponentPropsWithoutRef<'a'>['target'];
  rel?: ComponentPropsWithoutRef<'a'>['rel'];
}

export default function InteractiveButton({
  children,
  onClick,
  variant = 'primary',
  tooltip,
  className = '',
  href,
  target,
  rel,
}: InteractiveButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sparkleOffsets = useMemo(
    () =>
      Array.from({ length: 6 }, (_, i) => ({
        x: (i % 2 === 0 ? 1 : -1) * (40 + i * 15),
        y: -(80 + i * 20),
      })),
    []
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const baseVariants = {
    primary: 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 shadow-lg shadow-cyan-500/50',
    secondary: 'border-2 border-cyan-400 text-cyan-400 hover:text-slate-900',
    glow: 'bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500 text-white',
  };

  const content = (
    <>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.5, scale: 2 }}
            exit={{ opacity: 0 }}
            className="absolute rounded-full bg-white/20 pointer-events-none"
            style={{
              width: 100,
              height: 100,
              left: mousePosition.x - 50,
              top: mousePosition.y - 50,
            }}
          />
        )}
      </AnimatePresence>

      <motion.div
        animate={isHovered ? { opacity: 0.2 } : { opacity: 0 }}
        className="absolute inset-0 bg-white pointer-events-none"
      />

      {isHovered && (
        <>
          {sparkleOffsets.map((offset, i) => (
            <motion.div
              key={i}
              animate={{
                x: [0, offset.x],
                y: [0, offset.y],
                opacity: [1, 0],
                scale: [1, 0],
              }}
              transition={{ duration: 1, delay: i * 0.1 }}
              className="absolute w-1 h-1 bg-white rounded-full pointer-events-none"
              style={{
                left: mousePosition.x,
                top: mousePosition.y,
              }}
            />
          ))}
        </>
      )}

      <span className="relative z-10 block">{children}</span>

      <AnimatePresence>
        {isHovered && tooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: -40 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute left-1/2 -translate-x-1/2 -top-12 whitespace-nowrap px-4 py-2 rounded-lg text-xs font-bold text-white z-50 pointer-events-none"
            style={{
              backgroundColor: 'color-mix(in srgb, var(--primary) 80%, black)',
            }}
          >
            {tooltip}
            <div
              className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 transform rotate-45"
              style={{ backgroundColor: 'color-mix(in srgb, var(--primary) 80%, black)' }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );

  const baseClassName = `relative px-8 py-4 font-black text-lg tracking-wider rounded-xl overflow-hidden group transition-all duration-300 ${baseVariants[variant]} ${className}`;

  if (href) {
    return (
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        whileHover={{ scale: 1.08, y: -4 }}
        whileTap={{ scale: 0.95 }}
        className={baseClassName}
      >
        <Link href={href} target={target} rel={rel} className="block h-full w-full">
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      whileHover={{ scale: 1.08, y: -4 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={baseClassName}
    >
      {content}
    </motion.button>
  );
}
