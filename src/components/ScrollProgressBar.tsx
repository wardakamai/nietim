import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-0.5 origin-left pointer-events-none"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, #c9a84c, #e2c06e)',
      }}
    />
  );
}
