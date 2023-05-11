import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          {/*FIRST SLIDE IN CAROUSEL BANNER AUTO-INFINITE LOOP*/}
          <img loading="lazy" src="https://links.papareact.com/6ff" alt="" />
        </div>
        <div>
          {/*SECOND SLIDE IN CAROUSEL BANNER AUTO-INFINITE LOOP*/}
          <img loading="lazy" src="https://links.papareact.com/gi1" alt="" />
        </div>
        <div>
          {/*THIRD SLIDE IN CAROUSEL BANNER AUTO-INFINITE LOOP*/}
          <img loading="lazy" src="https://links.papareact.com/7ma" alt="" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
