import style from "./clientscaseslider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "./swiperstyles.scss";
import "swiper/swiper.css";
import { Navigation } from "swiper/modules";
import { clientsCaseSliderItems } from "../../data";
import ClientsCaseSliderItem from "./clientsCaseSliderItem";


const ClientsCaseSlider = () => {
    return (
      <div className={style.slider}>
        <Swiper
          slidesPerView={3}
          spaceBetween={29}
          navigation={true}
          modules={[Navigation]}
        >
            {
                clientsCaseSliderItems.map((item) => (
                    <SwiperSlide key={item.id}>
                        <ClientsCaseSliderItem {...item}/>
                    </SwiperSlide>
                ))
            }
        </Swiper>
      </div>
    );
}
 
export default ClientsCaseSlider;