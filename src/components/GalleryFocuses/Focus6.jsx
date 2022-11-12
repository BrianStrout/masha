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
import { Summer1, Blur1, Class1, Orange1, Pinboard1 } from "../photoGallery";
import Techni1 from "../photoGallery/techni/techni1.jpg";
import Techni2 from "../photoGallery/techni/techni2.jpg";
import Techni3 from "../photoGallery/techni/techni3.jpg";

export default function Focus6(props) {
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
            <img src={Techni1} alt="class1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Techni2} alt="class1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Techni3} alt="class1" />
          </SwiperSlide>
        </Swiper>

        <div className="focus_tab_holder">
          <div
            className="focus_tab"
            id="Menu"
            onClick={props.update}
            style={{
              // backgroundImage: `url(${Orange1})`,
              backgroundSize: "cover",
            }}
          >
            Menu
          </div>
          <div
            className="focus_tab"
            id="Focus1"
            onClick={props.update}
            style={{
              backgroundImage: `url(${Summer1})`,
              backgroundSize: "cover",
            }}
          ></div>

          <div
            className="focus_tab"
            id="Focus2"
            onClick={props.update}
            style={{
              backgroundImage: `url(${Blur1})`,
              backgroundSize: "cover",
            }}
          ></div>

          <div
            className="focus_tab"
            id="Focus3"
            onClick={props.update}
            style={{
              backgroundImage: `url(${Class1})`,
              backgroundSize: "cover",
            }}
          ></div>

          <div
            className="focus_tab"
            id="Focus4"
            onClick={props.update}
            style={{
              backgroundImage: `url(${Orange1})`,
              backgroundSize: "cover",
            }}
          ></div>

          <div
            className="focus_tab"
            id="Focus5"
            onClick={props.update}
            style={{
              backgroundImage: `url(${Pinboard1})`,
              backgroundSize: "cover",
            }}
          ></div>

          <div
            className="focus_tab"
            id="Focus6"
            onClick={props.update}
            style={{
              backgroundImage: `url(${Techni1})`,
              backgroundSize: "cover",
            }}
          ></div>
        </div>
      </div>
    </>
  );
}
