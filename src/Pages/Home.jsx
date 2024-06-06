import React from "react";
import { NavbarWithMegaMenu } from "../Components/Navbar";
import Banner from "../Components/Banner";
import Welcome from "../Components/Welcome";
import Footer from "../Components/Footer";
import Services from "../Components/Services ";

const Home = () => {
  return (
    <div className="pt-5" id="banner">
      <NavbarWithMegaMenu />
      <div >
        <Banner />
      </div>
      <div id="welcome">
        <Welcome />
      </div>
      <div id="services">
        <Services />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
