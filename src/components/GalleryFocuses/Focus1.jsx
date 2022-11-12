import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import "../GalleryCase.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import {
  Summer1,
  Summer2,
  Summer3,
  Summer4,
  Summer5,
  Summer6,
  Summer7,
  Summer8,
  Summer9,
  Summer10,
  Summer11,
  Summer12,
  Blur1,
  Class1,
  Orange1,
  Pinboard1,
  Techni1,
} from "../photoGallery";

const Focus1 = (props) => {
  console.log(props);
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
            <img src={Summer2} alt="summer1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Summer3} alt="summer1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Summer4} alt="summer1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Summer5} alt="summer1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Summer6} alt="summer1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Summer7} alt="summer1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Summer8} alt="summer1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Summer9} alt="summer1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Summer10} alt="summer1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Summer11} alt="summer1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Summer12} alt="summer1" />
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
};

export default Focus1;
