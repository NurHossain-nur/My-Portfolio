import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Tracks exact mouse position for the center dot (instant)
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // --- UPDATED PHYSICS ENGINE ---
  // Lower stiffness and higher mass makes it trail behind slowly and elegantly
  const springConfig = { stiffness: 100, damping: 25, mass: 0.8 };
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Hide custom cursor on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const moveCursor = (e) => {
      setIsVisible(true);
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      if (e.target.closest("a, button, input, textarea, select, .cursor-pointer, .proj-card, .bento-card")) {
        setIsHovered(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovered(false);
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* 1. CENTER DOT (Instant) */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: "var(--color-primary)",
        }}
        animate={{
          width: isHovered ? "20px" : "12px",
          height: isHovered ? "20px" : "12px",
        }}
        transition={{ type: "tween", duration: 0.2 }}
      />

      {/* 2. TRAILING RING (Slow & Elegant) */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998]"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? "56px" : "36px",
          height: isHovered ? "56px" : "36px",
          border: isHovered 
            ? "1px solid var(--color-primary)" 
            : "1px solid rgba(var(--color-primary-rgb, 0, 200, 150), 0.5)",
        }}
        // Slowed down the hover expansion slightly to match the dreamy physics
        transition={{ type: "tween", duration: 0.3 }} 
      />
    </>
  );
};

export default CustomCursor;