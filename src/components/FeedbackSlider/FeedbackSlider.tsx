import style from "./feedbackslider.module.scss";
import { feedbackSliderItems } from "../../data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.css";
import { Navigation } from "swiper/modules";
import FeedBackSliderItem from "./FeedbackSliderItem";

const FeedbackSlider = () => {
  return (
    <div className={style.sliderContainer}>
      <img
        src="./image/home/slider-decor.png"
        alt="grey abstractive"
        className={style.decor}
      />
      <div className="feedback-slider-arrow-prev">
        <img src="./image/home/slider-arrow-left.svg" alt="arrow left" />
      </div>
      <div className={style.slider}>
        <Swiper
          slidesPerView={1}
          navigation={{
            nextEl: ".feedback-slider-arrow-next",
            prevEl: ".feedback-slider-arrow-prev",
          }}
          modules={[Navigation]}
        >
          {feedbackSliderItems.map((item) => (
            <SwiperSlide key={item.id}>
              <FeedBackSliderItem {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="feedback-slider-arrow-next">
        <img src="./image/home/slider-arrow-left.svg" alt="arrow left" />
      </div>
    </div>
  );
};

export default FeedbackSlider;
