import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { TbLogout } from "react-icons/tb";
import { IoMdCloseCircle } from "react-icons/io";
import Cookies from "js-cookie";
import axios from "axios";
import API_URLS from "../../../config/Config";
import IMAGES from "../../../public/ImagesConfig";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [btns, setBtns] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const location = useLocation(); // Use this hook to detect route changes

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const handleResize = () => {
    if (window.innerWidth >= 767) {
      setMobileMenuOpen(false);
    }
  };

  const handleLogout = async () => {
    try {
      const res = await axios.post(
        API_URLS.LogOut,
        {},
        { withCredentials: true }
      );
      setBtns(false);
      setShowLogoutModal(false); // Close modal after logout
    } catch (error) {
      console.log(error);
    }
  };

  const checkSession = async () => {
    const res = await axios.get(API_URLS.Check_Session, {
      withCredentials: true,
    });
    // console.log(res.data)
    const expiration = res.data.decoded.exp;

    const expiryDate = new Date(expiration * 1000);
    const currentDate = new Date();

    if (currentDate < expiryDate) {
      setBtns(true);
      // set username and email in menu
      setName(res.data.user.student_name);
      setEmail(res.data.user.email);
    } else {
      setBtns(false);
    }
  };

  useEffect(() => {
    checkSession();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Re-run session check or any necessary updates on route changes
  useEffect(() => {
    checkSession();
  }, [location.pathname]);

  const handleView = () => {
    setMenu(!menu);
  };

  return (
    <nav className="flex flex-row w-full bg-bodyColor/80 h-auto justify-between md:px-16 md:py-7 px-4 py-4">
      <div className="flex flex-row md:justify-center justify-between md:gap-16 gap-4 items-center w-full md:w-auto">
        <NavLink to="/">
          <img
            src={IMAGES.Logo}
            alt="Logo"
            className="md:w-12 md:h-12 w-8 h-8"
          />
        </NavLink>

        {/* Desktop Search Bar */}
        <div className="relative hidden md:flex items-center w-3/4">
          <span className="absolute left-2 text-gray-500">
            <FaSearch className="h-5 w-5 mx-2" />
          </span>
          <input
            type="search"
            placeholder="Search For Courses"
            className="border-[2px] border-gray-300 rounded-full w-full md:w-72 p-1 pl-8 text-center"
          />
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden flex items-center" onClick={toggleMobileMenu}>
          <CiMenuFries className="h-5 w-5 text-2xl cursor-pointer" />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden z-50 flex flex-col  items-center w-full bg-white absolute top-0 left-0 right-0 py-6 px-4 rounded-b-lg">
          {/* Close Button */}
          <div
            className="absolute top-4 right-4 cursor-pointer z-50" // Adjusted z-index and right positioning
            onClick={() => setMobileMenuOpen(false)}
          >
            <IoMdCloseCircle className="h-6 w-6 text-black" />
          </div>
          {/* Mobile Menu Items */}
          <NavLink
            to="/courses"
            className="text-black hover:bg-[#427E41] duration-500 w-full py-3 text-xl text-center rounded-md my-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Courses
          </NavLink>
          <NavLink
            to="/about"
            className="text-black hover:bg-[#427E41] duration-500 w-full py-3 text-xl text-center rounded-md my-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/inquiry"
            className="text-black hover:bg-[#427E41] duration-500 w-full py-3 text-xl text-center rounded-md my-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Inquiry
          </NavLink>

          {/* Conditional Sign-In / Sign-Up or Logout */}
          {!btns ? (
            <>
              <NavLink
                to="/signin"
                className="text-black hover:bg-[#427E41] duration-500 w-full py-3 text-xl text-center rounded-md my-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign in
              </NavLink>
              <NavLink
                to="/signup"
                className="bg-black text-black hover:bg-[#427E41] duration-500 w-full py-3 text-xl text-center rounded-md my-2"
              >
                Sign Up
              </NavLink>
            </>
          ) : (
            <button
              onClick={() => setShowLogoutModal(true)} // Open modal on logout click
              className="bg-red-500 text-black hover:bg-red-600 duration-500 w-full py-3 text-xl text-center rounded-md my-2"
            >
              Logout
            </button>
          )}
        </div>
      )}

      {/* Desktop Menu */}
      <div className="hidden md:flex md:flex-row md:gap-4 mt-4 items-center">
        <NavLink
          to="/courses"
          className="hover:text-[#427E41] duration-500 p-1 text-xl"
          onClick={() => setMobileMenuOpen(false)}
        >
          Courses
        </NavLink>
        <NavLink
          to="/about"
          className="hover:text-[#427E41] duration-500 p-1 text-xl"
          onClick={() => setMobileMenuOpen(false)}
        >
          About
        </NavLink>
        <NavLink
          to="/inquiry"
          className="hover:text-[#427E41] duration-500 p-1 text-xl"
          onClick={() => setMobileMenuOpen(false)}
        >
          Inquiry
        </NavLink>

        {!btns ? (
          <>
            <NavLink
              to="/signin"
              className="hover:text-[#427E41] duration-500 p-1 text-xl"
              onClick={() => setMobileMenuOpen(false)}
              state={{ from: "/signin" }}
            >
              Sign in
            </NavLink>
            <NavLink
              to="/signup"
              className="hover:text-[#427E41] duration-500 rounded-md text-white bg-black px-5 py-2"
              state={{ from: "/signup" }}
            >
              Sign Up
            </NavLink>
          </>
        ) : (
          <div>
            <p
              className="font-bold text-[30px] cursor-pointer"
              onClick={handleView}
            >
              <CgProfile
                className={`${menu ? "text-red-500 " : " text-black"}`}
              />
            </p>
            {menu && (
              <div className="bg-white font-urbanist shadow-lg absolute h-auto w-64 right-8 top-20 flex flex-col items-center justify-between py-6 px-4 rounded-lg border border-gray-200">
                {/* Profile Picture */}
                <div className="pic bg-gray-300 w-20 h-20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-gray-500 text-sm">Your Pic</span>
                </div>

                {/* User Information */}
                <div className="email text-gray-700 text-sm font-medium mb-1">
                  {email || "No Email"}
                </div>
                <div className="name text-gray-900 text-lg font-semibold mb-4">
                  {name || "Guest User"}
                </div>

                {/* Buttons */}
                  <NavLink
                    onClick={handleView}
                  to="/profile"
                  className="w-full text-center hover:bg-gray-100 text-gray-700 border border-gray-300 py-2 rounded-md mb-2 transition duration-300"
                >
                  View Profile
                </NavLink>
                <button
                  onClick={() => setShowLogoutModal(true)} // Open modal on logout click
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md transition duration-300"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div
          className="fixed inset-0 font-urbanist bg-black/60 flex justify-center items-center z-50"
          role="dialog"
          aria-labelledby="logout-modal-title"
          aria-describedby="logout-modal-description"
        >
          <div className="bg-white p-7 rounded-lg shadow-2xl max-w-sm w-full">
            {/* Icon and Title */}
            <div className="flex items-center justify-center mb-6">
              <TbLogout className="w-12 h-12 text-red-500" />
            </div>
            <h2
              id="logout-modal-title"
              className="text-center text-2xl font-semibold text-gray-800 mb-4"
            >
              Confirm Logout
            </h2>
            <p
              id="logout-modal-description"
              className="text-center text-gray-600 mb-6"
            >
              Are you sure you want to log out? You will be redirected to the
              login page.
            </p>
            {/* Buttons */}
            <div className="flex justify-between gap-4">
              <button
                className="w-full bg-gray-200 text-gray-800 py-2 rounded-md hover:bg-gray-300 transition"
                onClick={() => setShowLogoutModal(false)} // Close modal
              >
                Cancel
              </button>
              <button
                className="w-full bg-red-500 text-black py-2 rounded-md hover:bg-red-600 transition"
                onClick={handleLogout} // Proceed with logout
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
