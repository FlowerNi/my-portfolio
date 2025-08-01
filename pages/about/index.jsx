import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import CountUp from "react-countup";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaWordpress,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiFramer,
  SiNextdotjs,
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

//  data
export const aboutData = [
  {
    title: "スキル",
    info: [
      {
        title: "ウェブ開発",
        icons: [
          FaHtml5,
          FaCss3,
          FaJs,
          FaReact,
          SiNextdotjs,
          SiFramer,
          FaWordpress,
        ],
      },
      {
        title: "UI/UX デザイン",
        icons: [FaFigma, SiAdobexd, SiAdobephotoshop],
      },
    ],
  },
  {
    title: "学歴",
    info: [
      {
        title: "フィリピン・University of the East",
        stage: "2018 ~ 2022",
      }
    ],
  },
  {
    title: "しょう",
    info: [
      {
        title: "卒業制作で「Best Capstone Project」賞を受賞",
        stage: "2022",
      },
    ],
  },
  {
    title: "けいけん",
    info: [
      {
        title: "PixelLabs Web Solutions",
        stage: "2023.4 - 2024.6",
      }
    ],
  },
  
];

const About = () => {
  const [index, setIndex] = useState(0);
  const [showTopFade, setShowTopFade] = useState(false);
  const [showBottomFade, setShowBottomFade] = useState(true);
  const scrollRef = useRef(null);

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
      // Initial check
      handleScroll();
    }
    return () => {
      if (el) el.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute top-0 -left-[337px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            <span className="text-accent">灯火</span>の正体
          </motion.h2>
          {/* Elegant scrollable text container for user scroll */}
          <div
            className="relative max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 group overflow-hidden h-[220px]"
            style={{ WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)', maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)' }}
          >
            <motion.p
              ref={scrollRef}
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              animate="show"
              className="scrollable-text"
              style={{ overflowY: 'auto',  pointerEvents: 'auto', maxHeight: '220px' }}
            >
              誰かの「困った」を解きほぐしたい。<br />
              言葉にならない想いを、形にして届けたい。<br />
              そんな願いが、僕の情熱の根っこにあります。<br />
              <br />
              この道を選んだ理由は、単純な好奇心だった。<br />
              だけど続けてこれた理由は、「誰かのために」という小さな祈り。<br />
              <br />
              技術の奥にあるもの <br />
              コードを書くことは、単なる作業ではなく、<br />
              誰かの「こうなったらいいな」を叶える行為。<br />
              <br />
              画面の向こうにいる、まだ会ったことのない誰かを思いながら、<br />
              僕は今日も、ひとつひとつ丁寧にコードを紡いでいます。<br />
              <br />
              僕を動かすもの<br />
              共感：クライアントの想いに心から寄り添いたい<br />
              <br />
              誠実さ：見えないところこそ、丁寧に<br />
              <br />
              遊び心：ほんの少しの余白が、心を動かす<br />
              <br />
              それでもなお、進む理由<br />
              道に迷うこともある。<br />
              モチベーションが揺らぐ夜もある。<br />
              でも、不思議と「やめたい」とは思わなかった。<br />
              <br />
              それはたぶん、<br />
              この情熱——灯火の正体が、まだ僕の中で燃え続けているから。<br />
            </motion.p>
            {/* Subtle fade for elegance, only show when needed */}
            {showTopFade && (
              <div className="pointer-events-none absolute top-0 left-0 w-full h-6 bg-gradient-to-b from-primary/30 to-transparent z-10" />
            )}
            {showBottomFade && (
              <div className="pointer-events-none absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-primary/30 to-transparent z-10" />
            )}
          </div>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative text-center flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={7} duration={5} />
                </div>
                <div className="text-center text-xs uppercase tracking-[1px] leading-[1.4]">
                  年の経験
                </div>
              </div>

              {/* clients */}
              <div className="relative text-center flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={73} duration={5} />
                </div>
                <div className="text-center text-xs uppercase tracking-[1px] leading-[1.4]">
                  名の大切な <br />
                  クライアントとの <br />
                  出会い
                </div>
              </div>

              {/* projects */}
              <div className="relative text-center flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={87} duration={5} />
                </div>
                <div className="text-center text-xs uppercase tracking-[1px] leading-[1.4]">
                  の想いを <br />
                  形にしてきた日々
                </div>
              </div>

              {/* awards */}
              <div className="relative text-center flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={1} duration={5} />
                </div>
                <div className="text-center text-xs uppercase tracking-[1px] leading-[1.4]">
                  1つの小さな誇り <br />
                  （受賞歴）
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[44%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-center text-white/60"
              >
                {/* title */}
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>

                <div className="flex gap-x-4">
                  {/* icons */}
                  {item.icons?.map((Icon, iconI) => (
                    <div key={iconI} className="text-2xl text-white">
                      <Icon />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
