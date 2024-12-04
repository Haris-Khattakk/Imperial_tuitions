import React from "react";
// import BannerImage from "../../assets/img/person.png";
import GImage from "../../assets/img/growgreen.png";
import IMAGES from "../../../public/ImagesConfig";


const Banner = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col h-auto w-full md:justify-between justify-center items-center  bg- m-0">
        <div className=" lg:w-1/2 w-[90%] flex flex-col md:justify-center justify-start items-center md:items-end px-4 md:px-10">
          <p className="w-5/6 Bannerheadertxt -mt-5">
            <span
              className="bg-cover rounded-t inline-block"
              style={{ backgroundImage: `url(${GImage})` }}
            >
              G
            </span>
            row your skill{" "}
            <span className="bg-gradient-to-r from-red-500 via-yellow-500  to-yellow-300 w-28 h-2 md:inline-block hidden rounded-full mx-2"></span>
            and find perfect course for yourself.
          </p>
          <p className="w-5/6  py-7 Bannertxt">
            Welcome to our course website, your gateway to knowledge and skill
            enhancement! Explore a diverse range of courses tailored to suit
            your interests and career aspirations.
          </p>
        </div>

        <div className="md:w-1/2 w-full flex md:justify-end justify-center items-center">
          <img src={IMAGES.Banner} alt="" className="w-11/12" />
        </div>
      </div>
    </>
  );
};

export default Banner;
