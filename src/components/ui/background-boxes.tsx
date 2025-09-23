"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const [gridSize, setGridSize] = useState({ rows: 120, cols: 80 });

  useEffect(() => {
    const calculateInitialGridSize = () => {
      const width = window.innerWidth;
      
      // Determine grid size based on screen resolution ranges
      let rows, cols;
      
      if (width >= 2560) {
        // 4K and ultra-wide monitors
        rows = 180;
        cols = 120;
      } else if (width >= 1920) {
        // Large desktop monitors (1080p+)
        rows = 150;
        cols = 100;
      } else if (width >= 1440) {
        // Medium desktop monitors
        rows = 130;
        cols = 85;
      } else if (width >= 1024) {
        // Small desktop/large tablet
        rows = 110;
        cols = 70;
      } else {
        // Mobile and small tablets
        rows = 90;
        cols = 55;
      }
      
      setGridSize({ rows, cols });
    };

    calculateInitialGridSize();
  }, []); // Only run once on mount

  // Grid arrays based on calculated size
  const rows = new Array(gridSize.rows).fill(1);
  const cols = new Array(gridSize.cols).fill(1);
  
  const colors = [
    "#93c5fd",
    "#f9a8d4", 
    "#86efac",
    "#fde047",
    "#fca5a5",
    "#d8b4fe",
    "#93c5fd",
    "#a5b4fc",
    "#c4b5fd",
  ];
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div
      style={{
        transform: `translate(-50%,-50%) skewX(-48deg) skewY(14deg) scale(0.8) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        "absolute top-1/2 left-1/2 z-10 flex h-[200vh] w-[200vw] p-4",
        className,
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row` + i}
          className="relative h-8 w-16 border-l border-slate-700"
        >
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: `${getRandomColor()}`,
                transition: { duration: 0 },
              }}
              whileTap={{
                backgroundColor: `${getRandomColor()}`,
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 2 },
              }}
              key={`col` + j}
              className="relative h-6 w-12 sm:h-8 sm:w-16 border-t border-r border-slate-700 cursor-pointer touch-manipulation"
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="pointer-events-none absolute -top-[14px] -left-[22px] h-6 w-10 stroke-[1px] text-slate-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);
