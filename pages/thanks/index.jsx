import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { fadeIn } from "../../variants";

const Thanks = () => {
  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px] text-center">
          {/* Success Icon */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-8"
          >
            <div className="w-24 h-24 mx-auto bg-accent/20 rounded-full flex items-center justify-center">
              <svg
                className="w-12 h-12 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </motion.div>

          {/* Thank You Message */}
          <motion.h2
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 mb-6"
          >
            ありがとうございます！
          </motion.h2>

          <motion.p
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto mb-8 text-lg"
          >
            お問い合わせありがとうございます。<br />
            メッセージを確認次第、<br />
            できるだけ早くご返信いたします。
          </motion.p>

          <motion.p
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-white/60 mb-12"
          >
            通常、24時間以内にご返信いたします。
          </motion.p>

          {/* Return Button */}
          <motion.div
            variants={fadeIn("up", 1.0)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <Link
              href="/"
              className="btn rounded-full border border-white/50 max-w-[200px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group mx-auto"
            >
              <BsArrowLeft
                className="mr-2 group-hover:-translate-x-1 transition-all duration-300"
                aria-hidden
              />
              <span>ホームに戻る</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Thanks; 