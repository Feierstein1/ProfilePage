'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { CatInterface } from "./catAssests";

interface CatInteractionProps {
  cat: CatInterface;
}

export default function CatInteraction({ cat }: CatInteractionProps) {
  const [headVisible, setHeadVisible] = useState(false);
  const [swipe, setSwipe] = useState(false);
  const [mouseY, setMouseY] = useState(0); // Restore mouseY state

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const newMouseY = e.clientY; 

      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      const triggerZoneX = cat.side === "right" 
        ? screenWidth - cat.triggerZoneX 
        : cat.triggerZoneX;

      const triggerZoneYmin = screenHeight - cat.triggerZoneYmin;
      const triggerZoneYmax = screenHeight - cat.triggerZoneYmax;

      const swipeZone = cat.side === "right"
        ? screenWidth - cat.swipeZone 
        : cat.swipeZone;

      const isHeadVisible = 
        (cat.side === "right" ? mouseX > triggerZoneX : mouseX < triggerZoneX) &&
        newMouseY < triggerZoneYmin && 
        newMouseY > triggerZoneYmax;

      if (isHeadVisible !== headVisible) {
        setHeadVisible(isHeadVisible);
      }

      // Swipe logic (combined for left and right)
      if ((cat.side === "right" ? mouseX > swipeZone : mouseX < swipeZone) && isHeadVisible && !swipe) {
        setSwipe(true);
        setTimeout(() => setSwipe(false), 500);
      }

      setMouseY(newMouseY); // Update mouseY state
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [swipe, cat]);

  return (
    <div className={cat.containerClass}>
      {/* Cat Arm */}
      {swipe && (
        <motion.img
          src={cat.catArm.src}
          alt="Cat Arm"
          width={cat.catArm.width}
          height={cat.catArm.height}
          className={cat.catArm.class}
          initial={cat.catArm.initial}
          animate={cat.catArm.animate}
          transition={cat.catArm.transition}
        />
      )}
      {/* Cat Head */}
      <motion.img
        src={cat.catHead.src}
        alt="Cat Head"
        width={cat.catHead.width}
        height={cat.catHead.height}
        className={cat.catHead.class}
        initial={cat.catHead.initial}
        animate={{ 
          x: headVisible ? cat.catHead.animate.x1 : cat.catHead.animate.x2, 
          y: headVisible ? mouseY / cat.catHead.animate.y1 - cat.catHead.animate.y2 : 50, 
        }}
        transition={cat.catHead.transition}
      />
    </div>
  );
}
