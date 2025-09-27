import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target;
      if (target && target instanceof HTMLElement && typeof target.closest === 'function') {
        if (target.closest('button') || target.closest('a') || target.closest('.hover-effect')) {
          setIsHovering(true);
        }
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-64 h-64 pointer-events-none z-0 mix-blend-screen"
      style={{
        background: `radial-gradient(circle, hsl(var(--portfolio-accent) / ${isHovering ? '0.15' : '0.08'}) 0%, transparent 70%)`,
      }}
      animate={{
        x: mousePosition.x - 128,
        y: mousePosition.y - 128,
        scale: isHovering ? 1.2 : 1,
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 200,
        mass: 0.5,
      }}
    />
  );
};