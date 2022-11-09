import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

const data = [
  {
    avatar: AVTR1,
    name: "person 1",
    review: "great guy 1sy!",
  },
  {
    avatar: AVTR2,
    name: "person 2",
    review: "great guy 2!",
  },
  {
    avatar: AVTR3,
    name: "person 3",
    review: "great guy 3!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>reviews!</h5>
      <h2>testimonials</h2>

      <Swiper className="container testimonials__container">
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="lady" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
