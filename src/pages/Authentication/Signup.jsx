import React, { useState } from "react";
import signImg from "../../assets/img/signup.png";
import axios from "axios";
import { IoIosStarOutline } from "react-icons/io";
import API_URLS from "../../../config/Config";
import IMAGES from "../../../public/ImagesConfig";
import { NavLink } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [preference, setPreference] = useState("");
  const [remember, setRemember] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State to manage error message visibility

  const handleSubmit = async (e) => {
    e.preventDefault();
    // check if passwords match
    if (password === rePassword) {
      const studentCreds = {
        email,
        name,
        password,
        preference,
        remember, // will be used while sending the JWT token (expiration will be 30 days)
      };

      try {
        const res = await axios.post(API_URLS.SignUp, studentCreds, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // Include cookies in the request
        });

        // Check if the response status is not 200 (success)
        if (res.status !== 200) {
          // Show message when the status is not 200 (indicating user already exists)
          setErrorMessage("User already exists!");
          setTimeout(() => {
            setErrorMessage(""); // Hide message after 5 seconds
          }, 5000);
        } else {
          console.log(res);
          // Handle successful signup (e.g., redirect to login page)
        }
      } catch (error) {
        console.log(error);
        // Handle error from API request
        setErrorMessage("User already exist!.");
        setTimeout(() => {
          setErrorMessage(""); // Hide message after 5 seconds
        }, 5000);
      }
    } else {
      // Show message for passwords not matching
      setErrorMessage("Passwords do not match.");
      setTimeout(() => {
        setErrorMessage(""); // Hide message after 5 seconds
      }, 3000);
    }
  };

  return (
    <div
      className="h-11/12 w-auto bg-cover font-urbanist bg-center"
      style={{ backgroundImage: `url(${signImg})` }}
    >
      {/* Error Message */}
      {errorMessage && (
        <div className="fixed top-0 left-0 w-full flex justify-center bg-red-500 text-white text-center py-3 px-4 rounded-lg shadow-lg z-10 transition-opacity opacity-100 animate-fadeOut">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01M4.93 4.93l14.14 14.14M19.07 4.93l-14.14 14.14"
              />
            </svg>
            <span>{errorMessage}</span>
          </div>
        </div>
      )}

      <div className="w-full h-auto">
        <div className="flex lg:flex-row flex-col-reverse lg:justify-start lg:items-end justify-center items-center h-full">
          {/* <!-- Text div (Hidden on small screens) --> */}
          <div className="lg:w-3/5 md:w-4/5 p-5 lg:p-10 md:p-7 text-left hidden md:flex ">
            <div className="flex flex-col justify-center items-center ">
              <div className="w-3/4 h-auto bg-slate-50 opacity-50 p-5 rounded-lg shadolg ">
                <p className="">
                  "Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Excepturi provident expedita neque obcaecati non at sed magnam
                  ex consectetur, illo dolore voluptates vitae ab veniam, quam
                  amet perferendis, deleniti ducimus."
                </p>
                <div className="flex flex-row justify-between items-center text-black  z-10 mt-10">
                  <div className="flex flex-col ">
                    <p>Ande Lane</p>
                    <div className="flex flex-row gap-1">
                      <IoIosStarOutline />
                      <IoIosStarOutline />
                      <IoIosStarOutline />
                      <IoIosStarOutline />
                      <IoIosStarOutline />
                    </div>
                  </div>
                  <div className="flex gap-3"></div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Form div --> */}
          <div className="w-full md:w-[80%] lg:w-[48%] p-4 lg:p-6">
            <div className="relative w-full lg:w-[90%] mx-auto shadow-lg rounded-lg border p-8">
              <form
                className="flex flex-col gap-5 justify-start items-center text-[12px] md:text-[15px]"
                id="signupForm"
                onSubmit={handleSubmit}
              >
                {/* <!-- Welcome Text --> */}
                <div className="text-center">
                  <p className="text-[32px] md:text-[35px] lg:text-[40px] font-bold z-10">
                    Welcome!
                  </p>
                  <p className="text-gray-500 z-10">
                    Please Enter Your Details
                  </p>
                </div>

                {/* <!-- Form Fields Container --> */}
                <div className="w-full opacity-100 text-black font-poppins">
                  <div className="w-full mb-4 z-10">
                    <input
                      type="text"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter Your Email Address"
                      className="w-full z-10 p-3 bg-transparent border-b-2 focus:outline-none focus:ring-2 border-black placeholder-black"
                    />
                  </div>

                  <div className="w-full mb-4 z-10">
                    <input
                      type="text"
                      name="name"
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter Your Name"
                      className="w-full z-10 p-3 bg-transparent border-b-2 focus:outline-none focus:ring-2 border-black placeholder-black"
                    />
                  </div>
                  <div className="w-full mb-4 z-10">
                    <input
                      type="password"
                      name="password"
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter Your Password"
                      className="w-full z-10 p-3 bg-transparent border-b-2 focus:outline-none focus:ring-2 border-black placeholder-black"
                    />
                  </div>
                  <div className="w-full mb-4 z-10">
                    <input
                      type="password"
                      name="rePassword"
                      onChange={(e) => setRePassword(e.target.value)}
                      placeholder="Re-enter Your password"
                      className="w-full z-10 p-3 bg-transparent border-b-2 focus:outline-none focus:ring-2 border-black placeholder-black"
                    />
                  </div>
                  <div className="w-full mb-4 z-10">
                    <input
                      type="text"
                      name="preference"
                      onChange={(e) => setPreference(e.target.value)}
                      placeholder="What Kind of Course Are You Looking For?"
                      className="w-full z-10 p-3 bg-transparent border-b-2 focus:outline-none focus:ring-2 border-black placeholder-black"
                    />
                  </div>
                </div>

                {/* <!-- Checkbox and Submit Buttons --> */}
                <div className="flex flex-col w-full gap-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="remember"
                      onChange={(e) => setRemember(e.target.value)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span>Remember Me For 30 Days</span>
                  </label>

                  {/* <!-- Submit Button --> */}
                  <button
                    type="submit"
                    className="bg-black rounded-lg py-2 text-white w-full text-center z-10"
                  >
                    Sign Up
                  </button>

                  {/* <!-- Google Signup Button --> */}
                  <button
                    type="button"
                    className="bg-gray-500 rounded-lg py-2 text-black w-full text-center flex items-center justify-center gap-2 z-10"
                  >
                    <span className="fab fa-google"></span>
                    {/* <!-- Google icon --> */}
                    Sign Up With Google
                  </button>
                </div>

                {/* <!-- Already Have Account --> */}
                <div>
                  <p className="font-light font-poppins z-10">
                    Already have an account?
                    <NavLink to="/signin" className="text-black font-semibold">
                      {"  "}
                      Sign in for free
                    </NavLink>
                  </p>
                  <div className="flex flex-row justify-between items-center">
                    {/* <img src="" alt=""> */}
                    <img
                      src={IMAGES.contactSignature}
                      className="w-40 h-4"
                      dir=""
                      alt=""
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
