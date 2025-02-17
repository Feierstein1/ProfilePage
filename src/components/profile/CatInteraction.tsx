'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function InteractiveCat() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [headVisible, setHeadVisible] = useState(false);
  const [swipe, setSwipe] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
      
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const triggerZoneX = screenWidth - 400; 
      const triggerZoneYmin = screenHeight - 500;
      const triggerZoneYmax = screenHeight - 700;
      const followZone = screenWidth - 600; 
      const swipeZone = screenWidth - 200; 

      setHeadVisible((mouseX > triggerZoneX) && (mouseY < triggerZoneYmin && mouseY > triggerZoneYmax));

      if (mouseX > swipeZone && headVisible && !swipe) {
        setSwipe(true);
        setTimeout(() => setSwipe(false), 500);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX]);

  return (
    <div className="fixed right-0 w-64 overflow-visible h-[35rem] bottom-20 hidden lg:block">

    {/* Cat Arm */}
    {swipe && (
    <motion.img
        src="/cat-arm.png"
        alt="Cat Arm"
        width="400px"
        height="400px"
        className="absolute w-48" 
        initial={{ rotate: 0, x: '100%', y: '20%' }}
        animate={{ rotate: [0, -20, 0], x: ['50%', '75%', '95%'] }} 
        transition={{ duration: .25, ease: 'easeInOut' }}
    />
    )}
    {/* Cat Head */}
    <motion.img
        src="/cat-head.png"
        alt="Cat Head"
        className="absolute w-48" 
        width="400px"
        height="400px"
        initial={{ x: '120%' }}
        animate={{ 
            x: headVisible ? '85%' : '120%', 
            y: headVisible ? mouseY / 40 - 5 : 0, 
        }}
        transition={{ type: 'spring', stiffness: 100 }}
    />
    </div>
  );
}
