import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/sd.png";
import img2 from "../assets/manonpC.jpg";
const Services = () => {
  return (
    <div className="services">
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        interval={5000}
        showThumbs={false}
      >
        <div>
          <img style={{ width: '100%', height: '100v' }} src={img1} alt="Item1"></img>
          <p className="legend">Cabinets</p>
        </div>
        <div>
          <img src={img2} alt="Item1"></img>
          <p className="legend">All Software Solutions</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
