import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.png";
import AVTR2 from "../../assets/avatar2.png";
import AVTR3 from "../../assets/avatar3.png";
import AVTR4 from "../../assets/avatar4.png";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis optio maiores ea corrupti soluta.",
  },
  {
    avatar: AVTR2,
    name: "Tim Viljoen",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis optio maiores ea corrupti soluta.",
  },
  {
    avatar: AVTR3,
    name: "Sbu Nkosi",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis optio maiores ea corrupti soluta.",
  },
  {
    avatar: AVTR4,
    name: "Tshepo Maseremola",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis optio maiores ea corrupti soluta.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials_container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
