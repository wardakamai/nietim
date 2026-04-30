import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '../utils/animations';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

interface FadeUpProps extends SectionProps {
  delay?: number;
  fromLeft?: boolean;
  fromRight?: boolean;
}

export function StaggerSection({ children, className = '' }: SectionProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeUpSection({ children, className = '', delay = 0, fromLeft = false, fromRight = false }: FadeUpProps) {
  const initial = fromLeft
    ? { opacity: 0, x: -40 }
    : fromRight
    ? { opacity: 0, x: 40 }
    : { opacity: 0, y: 32 };

  const animate = fromLeft || fromRight ? { opacity: 1, x: 0 } : { opacity: 1, y: 0 };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export { staggerItem };
