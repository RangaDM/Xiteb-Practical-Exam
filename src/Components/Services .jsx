import React from "react";
import "../Styles/Services.css";
import img1 from "../assets/services/1.png";

const Servlist = [
    {
        img: img1,
        title: "Air Freight",
        description: "We offer a full range of air logistics solutions."
    },
    {
        img: img1,
        title: "Ocean Freight",
        description: "We offer a full range of ocean logistics solutions."
    },
    {
        img: img1,
        title: "Road Freight",
        description: "We offer a full range of road logistics solutions."
    },
    {
        img: img1,
        title: "Warehousing",
        description: "We offer a full range of warehousing solutions."
    },
    {
        img: img1,
        title: "Supply Chain",
        description: "We offer a full range of supply chain solutions."
    },
    {
        img: img1,
        title: "Customs Brokerage",
        description: "We offer a full range of customs brokerage solutions."
    }
]

const Services = () => {
  return (
    <div className="pb-10 services-h-screen-sm flex justify-center items-center">
      <div className="service-section">
        <div className="grid grid-rows-2 items-center justify-center">
          <div className="flex items-center justify-center">
            <span className="services-highlight">
              Real Solution, Real Fast !
            </span>
          </div>
          <div className="flex items-center justify-center">
            <h1 className="services-main-title">
              Best Global Logistics Solutions.
            </h1>
          </div>
        </div>

        <div className="services-swp h-96">
            <div className="services-swp-container">
                {Servlist.map((item, index) => {
                return (
                    <div key={index} className="services-swp-item">
                    <div className="services-swp-item-content">
                        <img
                        className="services-swp-item-img"
                        src={item.img}
                        alt="service"
                        />
                        <h3 className="services-swp-item-title">{item.title}</h3>
                        <p className="services-swp-item-description">
                        {item.description}
                        </p>
                    </div>
                    </div>
                );
                })}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Services;