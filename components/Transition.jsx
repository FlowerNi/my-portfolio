import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Transition = () => {
  const transitionVariants = {
    initial: { x: "100%", width: "100%" },
    animate: { x: "0%", width: "0%" },
    exit: { x: ["0%", "100%"], width: ["0%", "100%"] },
  };

  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(false), 500); // hide before last layer
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Transition Layer 1 - base */}
      <motion.div
        role="status"
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#1A1C2C]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.0, duration: 0.6, ease: "easeInOut" }}
        aria-hidden
      />

      {/* Transition Layer 2 - warm glow */}
      <motion.div
        role="status"
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-20"
        style={{
          background: "radial-gradient(circle at 30% 40%, rgba(255,140,66,0.15), transparent)",
        }}
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.1, duration: 0.7, ease: "easeInOut" }}
        aria-hidden
      />

      {/* Transition Layer 3 - golden mist */}
      <motion.div
        role="status"
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-10"
        style={{
          background: "radial-gradient(circle at 70% 60%, rgba(255,200,87,0.08), transparent)",
        }}
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
        aria-hidden
      />

      {/* Text (disappears before Layer 3 begins) */}
      {showText && (
        <motion.div
          className="fixed inset-0 z-40 flex items-center justify-center pointer-events-none"
          initial={{ opacity: 1, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ delay: 0.0, duration: 0.6, ease: "easeInOut" }}
          
        >
          <p className="text-white text-xl md:text-2xl tracking-wide font-light">
            少々お待ちください...
          </p>
        </motion.div>
      )}
    </>
  );
};

export default Transition;
