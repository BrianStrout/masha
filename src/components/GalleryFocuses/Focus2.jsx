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
import Blur1 from "../photoGallery/blur/blur1.jpg";
import Blur2 from "../photoGallery/blur/blur2.jpg";

export default function Focus2() {
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
            <img src={Blur1} alt="summer1" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={Blur2} alt="summer1" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
