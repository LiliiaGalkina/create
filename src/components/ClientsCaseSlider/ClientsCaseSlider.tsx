import style from "./clientscaseslider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "./swiperstyles.scss";
import "swiper/swiper.css";
import { Navigation } from "swiper/modules";
import { clientsCaseSliderItems } from "../../data";
import ClientsCaseSliderItem from "./clientsCaseSliderItem";
import useResponsiveEvent from "../../useResponsiveEvent";


const ClientsCaseSlider = () => {
     const isTabletScreen = useResponsiveEvent(769);
     const isMobileScreen = useResponsiveEvent(481);

     let sliderLength = isMobileScreen ? 1 : isTabletScreen ? 2 : 3;
     let sliderSpace =  isTabletScreen ? 15 : 29;

  return (
    <div className={style.slider}>
      <Swiper
        slidesPerView={sliderLength}
        spaceBetween={sliderSpace}
        navigation={true}
        modules={[Navigation]}
      >
        {clientsCaseSliderItems.map((item) => (
          <SwiperSlide key={item.id}>
            <ClientsCaseSliderItem {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClientsCaseSlider;
