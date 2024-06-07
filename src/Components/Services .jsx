import React from "react";
import "../Styles/Services.css";
import img1 from "../assets/services/1.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { FaCircleArrowRight } from "react-icons/fa6";

const Servlist = [
  {
    img: img1,
    title: "Air Freight",
    description: "We offer a full range of air logistics solutions.",
  },
  {
    img: img1,
    title: "Ocean Freight",
    description: "We offer a full range of ocean logistics solutions.",
  },
  {
    img: img1,
    title: "Road Freight",
    description: "We offer a full range of road logistics solutions.",
  },
  {
    img: img1,
    title: "Warehousing",
    description: "We offer a full range of warehousing solutions.",
  },
  {
    img: img1,
    title: "Supply Chain",
    description: "We offer a full range of supply chain solutions.",
  },
  {
    img: img1,
    title: "Customs Brokerage",
    description: "We offer a full range of customs brokerage solutions.",
  },
];

const Services = () => {
  return (
    <div className="h-screen items-center justify-center services-h-screen-sm">
      <div className="flex flex-col items-center justify-center services-div1">
        <div className="flex items-center justify-center">
          <span className="services-highlight">Real Solution, Real Fast !</span>
        </div>
        <div className="flex items-center justify-center">
          <h1 className="services-main-title">
            Best Global Logistics Solutions.
          </h1>
        </div>
      </div>

      <div className="w-full pt-10">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            el: ".services-pagination",
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
        >
          {Servlist.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row gap-5 items-center justify-center">
                <div className="flex items-center justify-center">
                  <img src={item.img} alt="service" className="w-full" />
                </div>
                <div className="items-start text-left space-y-3">
                  <h1 className="services-title py-2">{item.title}</h1>
                  <p className="services-description">{item.description}</p>
                  <a href="/" className="services-link">
                    <div className="flex items-center pt-3 gap-3">
                      <FaCircleArrowRight />
                      Learn More
                    </div>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="services-pagination"></div>

        <div className="services-title-container items-center justify-center grid gap-2">
          <div>
            <span>
              Logistic & Transport Solutions Saves Your Time. Find Your
              Solutions
            </span>
          </div>
          <div>
            <a href="/">
              <div className="services-btn">
                <span>Discover More</span>
                <FaCircleArrowRight className="services-btn-icon" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
