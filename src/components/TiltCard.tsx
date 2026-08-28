import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import type { ReactNode } from "react";

type TiltCardProps = {
  className?: string;
  children: ReactNode;
  /**
   * Max tilt angle in degrees. Set to 0 to disable the tilt for a card.
   * @default 8
   */
  maxTilt?: number;
};

const TiltCard = ({ className, children, maxTilt = 8 }: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  // Mouse position relative to card centre, in -1..1 range
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springX = useSpring(rotateX, { stiffness: 250, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 250, damping: 20 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (maxTilt <= 0) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    rotateY.set((px - 0.5) * maxTilt * 2);
    rotateX.set(-(py - 0.5) * maxTilt * 2);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 900 }}
    >
      <motion.div
        style={{ rotateX: springX, rotateY: springY }}
        className="relative h-full"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default TiltCard;
