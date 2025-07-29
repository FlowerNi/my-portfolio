import Image from "next/image";
import { motion } from "framer-motion";

const FloatingLogo = () => (
  <motion.div
    initial={{ opacity: 0, y: -20, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    whileHover={{ scale: 1.04, filter: 'drop-shadow(0 0 24px #f13024aa)' }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="fixed z-50 top-20 left-44 flex items-center select-none"
    style={{ pointerEvents: 'none' }}
  >
    <Image
      src="/logo.png"
      alt="logo"
      width={80}
      height={80}
      className="object-contain drop-shadow-[0_4px_24px_rgba(241,48,36,0.25)]"
      priority
    />
    <span className="ml-5 flex flex-col justify-center">
      <span
        className="text-4xl md:text-5xl font-extrabold tracking-wide bg-gradient-to-r from-accent via-orange-400 to-yellow-300 bg-clip-text text-transparent drop-shadow-[0_2px_16px_rgba(241,48,36,0.25)]"
        style={{ fontFamily: 'Sora, sans-serif', letterSpacing: '0.04em' }}
      >
        Fire
      </span>
      <span
        className="-mt-1 text-1xl md:text-2xl font-semibold tracking-widest bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-200 bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(56,189,248,0.18)]"
        style={{ fontFamily: 'Sora, sans-serif', letterSpacing: '0.12em' }}
      >
        開発者
      </span>
    </span>
  </motion.div>
);

export default FloatingLogo; 