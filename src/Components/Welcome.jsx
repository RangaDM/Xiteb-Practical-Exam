import React from "react";
import "../Styles/Welcome.css";
import { Button } from "@material-tailwind/react";
import bgImage from "../assets/welcome.png";

const Welcome = () => {
  return (
    <div className="pb-10 welcome-h-screen-sm flex justify-center items-center">
      <div className="welcome-shipping-partner-section">
        <div className="welcome-image-content">
          <img
            className="welcome-w-full rounded-lg object-cover object-center"
            src={bgImage}
            alt="nature image"
          />
        </div>
        <div className="welcome-text-content">
          <h1 className="welcome-main-title">
            TransMax Logistics Around{" "}
            <span className="welcome-highlight">the World</span>
          </h1>
          <p className="welcome-description">
            Transmax is the world's driving worldwide coordinations supplier —
            we uphold industry and exchange the worldwide trade of merchandise
            through land transport.
          </p>

          <p className="welcome-description">
            Our worth added administrations guarantee the progression of
            products proceeds consistently and supply chains stay lean and
            streamlined for progress.
          </p>
          <Button className="welcome-cta-button" color="amber">
            MORE ABOUT US
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
