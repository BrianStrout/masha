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
import Summer1 from "../photoGallery/affair/summer1.jpg";
import Summer2 from "../photoGallery/affair/summer2.jpg";
import Summer3 from "../photoGallery/affair/summer3.jpg";
import Summer4 from "../photoGallery/affair/summer4.jpg";
import Summer5 from "../photoGallery/affair/summer5.jpg";
import Summer6 from "../photoGallery/affair/summer6.jpg";
import Summer7 from "../photoGallery/affair/summer7.jpg";
import Summer8 from "../photoGallery/affair/summer8.jpg";
import Summer9 from "../photoGallery/affair/summer9.jpg";
import Summer10 from "../photoGallery/affair/summer10.jpg";
import Summer11 from "../photoGallery/affair/summer11.jpg";
import Summer12 from "../photoGallery/affair/summer12.jpg";

export default function Focus() {
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
            <img src={Summer1} alt="summer1" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={Summer2} alt="summer1" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={Summer3} alt="summer1" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={Summer4} alt="summer1" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={Summer5} alt="summer1" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={Summer6} alt="summer1" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={Summer7} alt="summer1" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={Summer8} alt="summer1" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={Summer9} alt="summer1" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={Summer10} alt="summer1" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={Summer11} alt="summer1" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={Summer12} alt="summer1" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
