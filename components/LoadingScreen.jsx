import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const LoadingScreen = ({ onComplete }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const words = [
    { text: "情熱", color: "text-red-500", glow: "drop-shadow-[0_0_30px_rgba(239,68,68,0.8)]", subtext: "Passion" },
    { text: "創造", color: "text-blue-600", glow: "drop-shadow-[0_0_30px_rgba(37,99,235,0.8)]", subtext: "Creation" },
    { text: "挑戦", color: "text-purple-600", glow: "drop-shadow-[0_0_30px_rgba(147,51,234,0.8)]", subtext: "Challenge" },
    { text: "成長", color: "text-emerald-600", glow: "drop-shadow-[0_0_30px_rgba(5,150,105,0.8)]", subtext: "Growth" },
    { text: "灯火", color: "text-orange-500", glow: "drop-shadow-[0_0_30px_rgba(249,115,22,0.8)]", subtext: "Light" },
    { text: "Fire 開発", color: "text-cyan-500", glow: "drop-shadow-[0_0_30px_rgba(6,182,212,0.8)]", subtext: "Portfolio" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWordIndex((prev) => {
        if (prev < words.length - 1) {
          return prev + 1;
        } else {
          clearInterval(timer);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(() => {
              onComplete();
            }, 600);
          }, 400);
          return prev;
        }
      });
    }, 400);

    return () => clearInterval(timer);
  }, [words.length, onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center"
        >
          <div className="text-center px-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentWordIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div className={`text-6xl md:text-8xl font-black tracking-widest ${words[currentWordIndex].color} ${words[currentWordIndex].glow} drop-shadow-[0_8px_32px_rgba(0,0,0,0.8)]`}>
                  {words[currentWordIndex].text}
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.2 }}
                  className="text-xl md:text-2xl text-white/90 font-medium tracking-wider uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
                >
                  {words[currentWordIndex].subtext}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen; 