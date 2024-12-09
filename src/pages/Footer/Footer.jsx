import React from 'react';
import { NavLink } from 'react-router-dom';
import IMAGES from "../../../public/ImagesConfig";

const Footer = () => {
  return (
    <>
      <div className="flex w-full py-5 bg-footerBg">
        <div className="w-11/12 flex flex-row justify-center items-center text-center gap-1 md:gap-5 md:text-[12px] text-[9px] font-poppins">
          <NavLink to="/">
            <img
              src={IMAGES.Logo}
              className="md:w-14 w-10 md:h-14 h-10"
              alt="Footer Logo"
            />
          </NavLink>
          <NavLink to="#find-passion" className="headerbtn">
            Find Passion
          </NavLink>
          <NavLink to="/courses" className="headerbtn">
            Categories
          </NavLink>
          <NavLink to="#customer" className="headerbtn">
            Customer
          </NavLink>
          <NavLink to="#skill" className="headerbtn">
            Skill
          </NavLink>
        </div>
      </div>
      <div className="w-full h-auto flex justify-center items-center bg-black ">
        <NavLink
          to="mailto:info@example.com"
          className="text-white font-poppins md:py-8 py-4 md: text-lg text-[9px]"
        >
          &copy; CopyWrite
        </NavLink>
      </div>
    </>
  );
}

export default Footer;
