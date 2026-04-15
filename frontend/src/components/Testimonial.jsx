import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { testimonial } from "../data/data.js";

// Swiper configuration object for better maintainability
const swiperConfig = {
  className: "testimonial",
  modules: [Autoplay, Pagination],
  loop: true,
  pagination: { clickable: true },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
  },
  spaceBetween: 20,
  style: { maxWidth: "100%", margin: "auto" },
  // Uncomment to enable autoplay
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
};

// Testimonial card component for better separation of concerns
const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="testimonial_items">
      <div className="testimonial_review">
        <p className="mb-1">{testimonial.review}</p>
      </div>
      <div className="testimonial_bottom">
        <div className="testimonial_info">
          <h3 className="text-sm font-bold">{testimonial.name}</h3>
          <p className="text-sm font-bold">
            <span>{testimonial.location}</span>
          </p>
          <div className="testimonial_stars">{testimonial.stars}</div>
        </div>
        <div className="testimonial_img">
          <img src={testimonial.img} alt={testimonial.name} />
        </div>
      </div>
    </div>
  );
};

export default function Testimonial() {
  return (
    <Swiper {...swiperConfig}>
      {testimonial.map((item) => (
        <SwiperSlide key={item.id}>
          <TestimonialCard testimonial={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
