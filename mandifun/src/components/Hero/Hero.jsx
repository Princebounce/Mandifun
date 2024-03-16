import React from "react";
import Image1 from "../../assets/women.jpg";
import Image2 from "../../assets/shopping.jpg";
import Image3 from "../../assets/sales.jpg";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Up to 20% off on all Men's wear",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis vitae dolorem itaque officia possimus provident similique esse rerum reiciendis est vel ut aspernatur sequi, aut, asperiores qui. Consequuntur, minima. Neque.",
  },
  {
    id: 2,
    img: Image2,
    title: "Up to 18% off on all Men's wear",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis vitae dolorem itaque officia possimus provident similique esse rerum reiciendis est vel ut aspernatur sequi, aut, asperiores qui. Consequuntur, minima. Neque.",
  },
  {
    id: 3,
    img: Image3,
    title: "Up to 30% off on all kids wear",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis vitae dolorem itaque officia possimus provident similique esse rerum reiciendis est vel ut aspernatur sequi, aut, asperiores qui. Consequuntur, minima. Neque.",
  },
];

const Hero = ({handleOrderPopup}) => {
  var settings ={
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:  4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    paueOnFocus: true,
  };

  
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 dark:bg-gray-950 dark:text-white duration-200">
      {/* background pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 transform rotate-45 rounded-3xl -z-9"></div>
      
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings} >
          {ImageList.map((data) => (

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* text content section */}
            <div className="flex flex-col justify-center gap-4 pt-12 sm:text-left order-2 sm:order-1 relative z-10">
              <h1 data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                {data.title}
              </h1>
              <p data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="100"
              className="text-sm">{data.description}
              </p>
              <div data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="300">
                <button onClick={handleOrderPopup} className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                  Order Now
                </button>
              </div>
            </div>
            {/* image section */}
            <div className="order-1 sm:order-2">
              <div data-aos="zoom-in"
              data-aos-once="true"
               className="relative z-10">
                <img
                  src={data.img}
                  alt=""
                  className="w-[400px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-120 lg:scale-125 object-contain mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
        ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
