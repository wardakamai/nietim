import { motion } from 'framer-motion';

interface AnimatedDividerProps {
  align?: 'center' | 'left';
}

export default function AnimatedDivider({ align = 'center' }: AnimatedDividerProps) {
  return (
    <motion.div
      className="section-divider"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        originX: align === 'left' ? 0 : 0.5,
        marginLeft: align === 'left' ? 0 : 'auto',
        marginRight: align === 'left' ? 0 : 'auto',
      }}
    />
  );
}
