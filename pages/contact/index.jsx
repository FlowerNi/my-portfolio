import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { fadeIn } from "../../variants";

const Contact = () => {
  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          {/* 見出し */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            いつでもご相談ください。
          </motion.h2>

          {/* フォーム */}
          <motion.form
            action="https://formsubmit.co/flower.ni.hope@gmail.com"
            method="POST"
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            autoComplete="off"
            autoCapitalize="off"
          >
            {/* スパム対策 & リダイレクト */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://my-portfolio-aq3z.vercel.app/thanks"/>

            {/* 入力項目 */}
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                name="name"
                placeholder="お名前"
                className="input"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="メールアドレス"
                className="input"
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="ご用件の概要"
              className="input"
              required
            />
            <textarea
              name="message"
              placeholder="メッセージ内容"
              className="textarea"
              required
            />

            {/* 送信ボタン */}
            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                送信する
              </span>
              <BsArrowRight
                className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                aria-hidden
              />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
