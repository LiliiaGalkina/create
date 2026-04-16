import style from "./feedbackslider.module.scss";
import { feedbackSliderItems } from "../../data";
import { Swiper, SwiperSlide } from "swiper/react";
import "./swiperstyles.scss";
import "swiper/swiper.css";
import { Navigation } from "swiper/modules";
import FeedBackSliderItem from "./FeedbackSliderItem";

const FeedbackSlider = () => {
  return (
    <div className={style.sliderContainer}>
        <img src="./image/home/slider-decor.png" alt="grey abstractive" className={style.decor}/>
      <Swiper slidesPerView={1} navigation={true} modules={[Navigation]}>
        {feedbackSliderItems.map((item) => (
          <SwiperSlide key={item.id}>
            <FeedBackSliderItem {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeedbackSlider;
