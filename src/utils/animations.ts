import type { Variants } from 'framer-motion';

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export const wordReveal: Variants = {
  hidden: { opacity: 0, y: 40, rotateX: -15 },
  visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] } },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export const mobileMenuVariants: Variants = {
  closed: { height: 0, opacity: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
  open: {
    height: 'auto',
    opacity: 1,
    transition: {
      duration: 0.35,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.06,
      delayChildren: 0.08,
    },
  },
};

export const mobileMenuItemVariants: Variants = {
  closed: { opacity: 0, x: -16 },
  open: { opacity: 1, x: 0, transition: { duration: 0.3, ease: 'easeOut' } },
};

export const floatingOrb = {
  y: [0, -24, 0],
  x: [0, 12, 0],
  scale: [1, 1.06, 1],
  transition: { duration: 8, repeat: Infinity, ease: 'easeInOut' as const },
};

export const floatingOrbSlow = {
  y: [0, 18, 0],
  x: [0, -10, 0],
  scale: [1, 0.95, 1],
  transition: { duration: 11, repeat: Infinity, ease: 'easeInOut' as const, delay: 2 },
};
