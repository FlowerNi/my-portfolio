import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import Image from "next/image";

import { fadeIn } from "../variants";

const Home = () => {
  const [showTopFade, setShowTopFade] = useState(false);
  const [showBottomFade, setShowBottomFade] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef(null);
  const scrollInterval = useRef(null);

  // Handle fades
  useEffect(() => {
    const handleScroll = () => {
      const el = scrollRef.current;
      if (!el) return;
      setShowTopFade(el.scrollTop > 2);
      setShowBottomFade(el.scrollTop + el.clientHeight < el.scrollHeight - 2);
    };
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll);
      handleScroll();
    }
    return () => {
      if (el) el.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Auto-scroll logic
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    if (!isHovered) {
      scrollInterval.current = setInterval(() => {
        if (el.scrollTop + el.clientHeight < el.scrollHeight) {
          el.scrollTop += 1;
        } else {
          // Optionally, reset to top for infinite loop
          // el.scrollTop = 0;
        }
      }, 30); // Adjust speed here
    } else {
      if (scrollInterval.current) clearInterval(scrollInterval.current);
    }
    return () => {
      if (scrollInterval.current) clearInterval(scrollInterval.current);
    };
  }, [isHovered]);

  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 flex items-center justify-center xl:justify-start gap-3"
          >
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="inline-block"
            >
              
            </motion.span>
            <span className="text-accent">灯火</span>のまま、進む。
          </motion.h1>

          {/* subtitle */}
          <div
            className="relative max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 group overflow-hidden h-[220px]"
            style={{ WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)', maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.p
              ref={scrollRef}
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="scrollable-text"
              style={{ overflowY: 'auto', pointerEvents: 'auto', maxHeight: '220px' }}
            >
              七年前、ただ情熱だけを頼りに、一歩を踏み出した。<br />
              何度もつまずき、時には心が折れそうになったけれど、<br />
              夢は、ずっとそこにあった。<br />
              <br />
              夜の中でも、希望の火は消えなかった。<br />
              コードの海を漂いながら、果てしない課題に向き合ってきた。<br />
              その過程は決して平坦ではなく、疲労と挫折を繰り返す日々だ。<br />
              <br />
              しかし、情熱という灯火が僕の指先を導き、<br />
              一行一行のコードに命を吹き込み、世界と繋げていく。<br />
              それは単なる技術ではなく、思いや願いを形にする創造の証だ。<br />
              <br />
              僕の技術が、誰かの悩みをそっとほどき、<br />
              あなたの優しさが、誰かの日々に光を灯すなら——<br />
              きっとこの世界は、ほんの少し、今よりも美しくなる。<br />
              <br />
              だから僕は今日も、静かに、でも確かに、前へ進む。<br />
              <br />
              夢を抱きしめ、心の声に耳を澄ませながら。<br />
              あなたも、自分の道を信じて進んでほしい。<br />
              朝焼けは必ず、歩み続ける者の視界いっぱいに広がるのだから。<br />
              この世界で、ただ一人のあなた自身として、<br />
              最高の人生を描いていってほしい――<br />
            </motion.p>
            {/* Subtle fade for elegance, only show when needed */}
            {showTopFade && (
              <div className="pointer-events-none absolute top-0 left-0 w-full h-6 bg-gradient-to-b from-primary/30 to-transparent z-10" />
            )}
            {showBottomFade && (
              <div className="pointer-events-none absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-primary/30 to-transparent z-10" />
            )}
          </div>

          {/* btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1280px] h-full absolute right-0 bottom-0">
        {/* bg img */}
        <div
          role="img"
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
          aria-hidden
        />

        {/* particles */}
        <ParticlesContainer />

        {/* avatar */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -top-10 lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
