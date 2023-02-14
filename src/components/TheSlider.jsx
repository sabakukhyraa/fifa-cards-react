import { Swiper, SwiperSlide } from "swiper/react";
import '../css/slider.css'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import BronzeBackground from "../assets/bg/bronze-slide.png"
import SilverBackground from "../assets/bg/silver-slide.png"
import GoldBackground from "../assets/bg/gold-slide.png"

import { Pagination, Navigation } from "swiper";

export default function TheSlider() {
  const slideDataList = [
    { title: "BRONZE CARDS", background: BronzeBackground },
    { title: "SILVER CARDS", background: SilverBackground },
    { title: "GOLD CARDS", background : GoldBackground },
  ];

  const slideList = slideDataList.map((slide, index) => (
    <SwiperSlide className="relative" key={index}>
      <img className="w-full" src={slide.background} alt={slide.title} />
      <div className="absolute font-bold text-white left-[335px] top-32 space-y-2">
        <h1 className="text-7xl">NEW</h1>
        <h1 className="text-[56px]">{slide.title}</h1>
      </div>
    </SwiperSlide>
  ));

  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mb-2.5"
    >
      {slideList}
    </Swiper>
  );
}
