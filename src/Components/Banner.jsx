import React from "react";
import "../Styles/Banner.css";
import { Button } from "@material-tailwind/react";
import bgImage from "../assets/cargo-bg.jpg";

const Banner = () => {
  return (
    <div className="h-screen py-2">
      <section className="shipping-partner-section">
        <div className="text-content max-w-md">
          <h2 className="tagline">LOGISTIC</h2>
          <h1 className="main-title">
            Best Shipping <span className="highlight">Partner</span>
          </h1>
          <p className="description">
            Amet, tempus egestas facilisis volutpat viverra molestie lobortis
            posuere maecenas. molestie lobortis posuere maecenas. Eget sapien,
            gravida neque.
          </p>
          <Button className="cta-button" color="amber">
            DISCOVER MORE
          </Button>
        </div>
        <div className="image-content">
          <img
            className="h-96 w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
            src={bgImage}
            alt="nature image"
          />
        </div>
      </section>
    </div>
  );
};

export default Banner;
