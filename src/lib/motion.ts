import type { Variants } from "framer-motion";

/** Gentle easing curve used across reveals */
export const EASE = [0.22, 1, 0.36, 1] as const;

/** Fade + rise for whole-block or single element reveals */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

/** Fade only (opacity + slight scale) */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: EASE } },
};

/** For grids: each child cascades in with a delay based on its index */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

/** Reveal helpers to wire into `whileInView` */
export const viewportOnce = { once: true, amount: 0.2 } as const;
export const viewportMargin = { once: true, margin: "0px 0px -80px 0px" } as const;
