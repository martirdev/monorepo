import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

import { cn } from "@/shared/lib/utils";

export const FlipWords = ({
  className,
  duration = 3000,
  words,
}: {
  words: string[];
  className?: string;
  duration?: number;
}) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  // thanks for the fix Julian - https://github.com/Julian-AT
  const startAnimation = useCallback(() => {
    const word = words[words.indexOf(currentWord) + 1] || words[0];
    setCurrentWord(word);
    setIsAnimating(true);
  }, [currentWord, words]);

  useEffect(() => {
    if (!isAnimating)
      setTimeout(() => {
        startAnimation();
      }, duration);
  }, [isAnimating, duration, startAnimation]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false);
      }}
    >
      <motion.span
        animate={{
          opacity: 1,
          y: 0,
        }}
        className={cn(
          "z-10 whitespace-nowrap text-left text-neutral-900 dark:text-neutral-100",
          className,
        )}
        exit={{
          filter: "blur(8px)",
          opacity: 0,
          position: "absolute",
          scale: 2,
          x: 40,
          y: -40,
        }}
        initial={{
          opacity: 0,
          y: 10,
        }}
        transition={{
          damping: 10,
          stiffness: 100,
          type: "spring",
        }}
        key={currentWord}
      >
        {currentWord.split("").map((letter, index) => (
          <motion.span
            animate={{
              filter: "blur(0px)",
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.08,
              duration: 0.4,
            }}
            className="inline-block"
            initial={{ filter: "blur(8px)", opacity: 0, y: 10 }}
            key={currentWord + index}
          >
            {letter}
          </motion.span>
        ))}
      </motion.span>
    </AnimatePresence>
  );
};
