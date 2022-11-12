import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Orange1 from "../photoGallery/orange/orange1.jpg";
import Orange2 from "../photoGallery/orange/orange2.jpg";
import Orange3 from "../photoGallery/orange/orange3.jpg";

export default function Focus4() {
  return (
    <>
      <div className="Focused_Gallery">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={Orange1} alt="class1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Orange2} alt="class1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Orange3} alt="class1" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
