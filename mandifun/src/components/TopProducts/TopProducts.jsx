import React from "react";
import Img1 from "../../assets/shirt/shirt.jpg";
import Img2 from "../../assets/shirt/shirt2.jpg";
import Img3 from "../../assets/shirt/shirt3.jpg";
import Img4 from "../../assets/shirt/shirt4.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "good",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis vitae dolorem itaque officia possimus provident similique esse rerum reiciendis est vel ut aspernatur sequi, aut, asperiores qui. Consequuntur, minima. Neque.",
  },
  {
    id: 2,
    img: Img2,
    title: "better",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis vitae dolorem itaque officia possimus provident similique esse rerum reiciendis est vel ut aspernatur sequi, aut, asperiores qui. Consequuntur, minima. Neque.",
  },
  {
    id: 3,
    img: Img3,
    title: "best",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis vitae dolorem itaque officia possimus provident similique esse rerum reiciendis est vel ut aspernatur sequi, aut, asperiores qui. Consequuntur, minima. Neque.",
  },
];

const TopProducts = ({handleOrderPopup}) => {
  return (
    <div>
      <div className="container">
        {/* header section  */}
        <div className=" text-left mb-24 ">
          <p data-aos="fade-up" className=" text-sm text-primary">
            Top Rated Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
            illo sit, voluptatum voluptates fuga,nobis vitae laborum inventore
            in cum error, dolorum assumenda, ea ratione voluptatem. Cum incidunt
            rem quas
          </p>
        </div>
        {/* body section  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center ">
          {ProductsData.map((data) => (
            <div
            data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary
     hover:text-white relative shadow-xl duration-200 group 
     max-w-[300px]"
            >
              {/* image section  */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] block mx-auto
            transform-translate-y-20 group-hover:scale-105
            duration-300 drop-shadow-md "
                />
              </div>
              {/* details section  */}
              <div className="p-4 text-center">
                <div className="w-full flex items-center justify-center gap-1 ">
                  <FaStar className="text-yellow-500"></FaStar>
                  <FaStar className="text-yellow-500"></FaStar>
                  <FaStar className="text-yellow-500"></FaStar>
                  <FaStar className="text-yellow-500"></FaStar>
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p
                  className="text-gray-500 group-hover:text-white duration-300
            text-sm line-clamp-2"
                >
                  {data.description}
                </p>
                <button className="bg-primary hover:scale-105
                 duration-300 text-white py-1
                 px-4 rounded-full mt-4 group-hover:bg-white
                  group-hover:text-primary" onClick={handleOrderPopup}>
                    Buy Now
                 </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
