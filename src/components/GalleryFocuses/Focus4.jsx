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
import { Summer1, Blur1, Class1, Pinboard1, Techni1 } from "../photoGallery";
import Orange1 from "../photoGallery/orange/orange1.jpg";
import Orange2 from "../photoGallery/orange/orange2.jpg";
import Orange3 from "../photoGallery/orange/orange3.jpg";

export default function Focus4(props) {
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
