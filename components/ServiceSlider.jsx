import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const serviceData = [
  {
    Icon: RxCrop,
    title: "Web開発",
    description: "WordPress + Elementor を使用し、完全レスポンシブなビジネス向けサイトを構築します。UI/UXにも配慮し、閲覧者にとってストレスのない構成を実現します。",
  },
  {
    Icon: RxPencil2,
    title: "ブランディング",
    description: "FigmaやAdobe XDベースのモダンなUI設計や、要望に応じた配色・レイアウト設計を行います。美しく直感的なデザインで、ユーザー体験を向上させます。"
  },
  {
    Icon: RxDesktop,
    title: "モバイルアプリ開発",
    description: "React Native を用いた iOS / Android 両対応のアプリを開発します。UIデザインからストア公開まで一括対応可能。軽量・高速なネイティブ体験を実現します。",
  },
  {
    Icon: RxReader,
    title: "コピーライティング",
    description: "ヒアリング内容に基づき、ターゲットに響く魅力的な文章を作成します。キャッチコピーやサービス説明文など幅広く対応可能です。",
  },
  {
    Icon: RxRocket,
    title: "検索対策",
    description: "構造・見出し・キーワード配置など、Googleに評価されやすいサイト設計を行います。初歩的なSEO対策込みのサイト構築が可能です。",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      freeMode
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="h-full flex flex-col  bg-[rgba(65,47,123,0.15)] rounded-lg px-6 py-8 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            {/* icon */}
            <div className="text-4xl text-accent mb-4">
              <item.Icon aria-hidden />
            </div>

            {/* title & description */}
            <div className="mb-8">
              <div className="mb-2 text-lg">{item.title}</div>
              <p className="max-w-[350px] leading-normal">{item.description}</p>
            </div>

            {/* arrow */}
            {/* <div className="text-3xl">
              <RxArrowTopRight
                className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
                aria-hidden
              />
            </div> */}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
