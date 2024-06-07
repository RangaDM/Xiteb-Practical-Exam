import React from "react";
import "../Styles/TestimonialsWhyChooseUs.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const testimonials = [
  {
    quote:
      "Integer congue elit non semper laoreet sed lectus orci posuere nisi tempor se felis ac mauris. Pellentesque inyd urna. Integer vitae felis vel magna posu du vestibulum. Nam rutrum congue diam. Aliquam malesuada maurs etug met Curabitur laoreet convallis nisl pellentesque bibendum.",
    author: "John Deo",
    position: "Managing Director",
  },
  {
    quote:
      "Pellentesque inyd urna. Integer vitae felis vel magna posu du vestibulum. Nam rutrum congue diam. Integer congue elit non semper laoreet sed lectus orci posuere nisi tempor se felis ac mauris. Aliquam malesuada maurs etug met Curabitur laoreet convallis nisl pellentesque bibendum.",
    author: "Natalie",
    position: "Director",
  },
];

const reasons = [
  "Dui ac hendrerit elementum quam ipsum auctor lorem",
  "Mauris vel magna a est lobortis volutpat",
  "Sed bibendum ornare lorem mauris feugiat suspendisse neque",
  "Nulla scelerisque dul hendrerit elementum quam",
];

const TestimonialsWhyChooseUs = () => {
  return (
    <div className="container">
      <div className="testimonials-section">
        <h2 className="font-bold" style={{ fontSize: "2rem" }}>
          Trusted Clients
        </h2>
        <p>Lorem ipsum dolor sit amet consectetur</p>
        <div>
          <Swiper
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Navigation, Pagination]}
            className="mySwiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial">
                  <p>{testimonial.quote}</p>
                  <h3>{testimonial.author}</h3>
                  <p className="position">{testimonial.position}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination"></div>
        </div>
      </div>
      <div className="why-choose-us-section">
        <h2 className="font-bold" style={{ fontSize: "2rem" }}>
          Why Choose Us
        </h2>
        <p>Lorem ipsum dolor sit amet consectetur</p>
        <ul>
          {reasons.map((reason, index) => (
            <li key={index}>
              {reason} <span>+</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TestimonialsWhyChooseUs;
