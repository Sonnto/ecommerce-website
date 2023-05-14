import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          {/* CAROUSEL BANNER AUTO-INFINITE LOOP */}
          <img loading="lazy" src="/images/banner1.jpg" alt="Hero banner" />
        </div>
        <div>
          <img loading="lazy" src="/images/banner2.jpg" alt="Hero banner" />
        </div>
        <div>
          <img loading="lazy" src="/images/banner3.jpg" alt="Hero banner" />
        </div>
        <div>
          <img loading="lazy" src="/images/banner4.jpg" alt="Hero banner" />
        </div>
        <div>
          <img loading="lazy" src="/images/banner5.jpg" alt="Hero banner" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
