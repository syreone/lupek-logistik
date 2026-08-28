import { motion, useScroll, useSpring } from "framer-motion";

/** Thin gradient bar at the very top of the page showing scroll progress */
export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[60] bg-gradient-to-r from-industrial-light via-industrial to-industrial-light"
      style={{ scaleX }}
      aria-hidden
    />
  );
};
