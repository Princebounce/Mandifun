import React from "react";
import Banner from "../../assets/website/orange-pattern.jpeg";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-gray-100 dark:bg-gray-800 text-white"
      style={BannerImg}
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="max-w-xl mx-auto">
          <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold">Get Notified About New Products</h1>
          <div className="flex justify-center sm:justify-start items-center mt-5">
            <input
              data-aos="fade-up"
              placeholder="Enter your Email"
              type="text"
              className="w-full p-3 mr-2"
            />
            <button className="p-3 bg-blue-500 text-white rounded-md">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
