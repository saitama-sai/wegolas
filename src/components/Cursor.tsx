import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export interface CursorState {
  text: string;
  variant: 'default' | 'hover' | 'project' | 'close' | 'hidden';
}

export const Cursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState<CursorState>({ text: '', variant: 'default' });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;

      if (cursorTarget) {
        const text = cursorTarget.getAttribute('data-cursor') || '';
        const variant = (cursorTarget.getAttribute('data-cursor-variant') as CursorState['variant']) || 'hover';
        setCursorState({ text, variant });
      } else if (target.closest('a, button, [role="button"]')) {
        setCursorState({ text: '', variant: 'hover' });
      } else {
        setCursorState({ text: '', variant: 'default' });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 6,
      y: mousePosition.y - 6,
      width: 12,
      height: 12,
      backgroundColor: '#FFFFFF',
      mixBlendMode: 'difference' as const,
      borderRadius: '50%',
      opacity: 1,
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      width: 48,
      height: 48,
      backgroundColor: 'rgba(255, 255, 255, 0.12)',
      border: '1px solid rgba(255, 255, 255, 0.4)',
      mixBlendMode: 'normal' as const,
      borderRadius: '50%',
      opacity: 1,
    },
    project: {
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      width: 80,
      height: 80,
      backgroundColor: '#FFFFFF',
      mixBlendMode: 'normal' as const,
      borderRadius: '50%',
      opacity: 1,
    },
    close: {
      x: mousePosition.x - 28,
      y: mousePosition.y - 28,
      width: 56,
      height: 56,
      backgroundColor: '#FF0055',
      mixBlendMode: 'normal' as const,
      borderRadius: '50%',
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    }
  };

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden lg:block">
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center font-mono font-bold text-[10px] uppercase tracking-widest pointer-events-none"
        animate={cursorState.variant}
        variants={variants}
        transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.4 }}
      >
        {cursorState.text && (
          <span className={`text-center font-bold text-[11px] tracking-wider ${cursorState.variant === 'project' ? 'text-black' : 'text-white'}`}>
            {cursorState.text}
          </span>
        )}
      </motion.div>
    </div>
  );
};
