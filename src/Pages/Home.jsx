import React from "react";
import { NavbarWithMegaMenu } from "../Components/Navbar";
import Banner from "../Components/Banner";
import Welcome from "../Components/Welcome";
import Footer from "../Components/Footer";
import Services from "../Components/Services ";
import Statistics from "../Components/Statistics ";
import TestimonialsWhyChooseUs from "../Components/TestimonialsWhyChooseUs ";
import Clients from "../Components/Clients";

const Home = () => {
  return (
    <div className="pt-5" id="banner">
      <NavbarWithMegaMenu />
      <div>
        <Banner />
      </div>
      <div id="welcome">
        <Welcome />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="statistics">
        <Statistics />
      </div>
      <div id="testimonials-why-choose-us">
        <TestimonialsWhyChooseUs />
      </div>
      <div id="clients">
        <Clients />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
