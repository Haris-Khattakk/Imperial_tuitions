import React, { useEffect, useRef } from "react";
import { useState } from "react";
import axios from "axios";
import { IoIosStarOutline } from "react-icons/io";
import signImg from "../../assets/img/signup.png";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import API_URLS from "../../../config/Config";
import IMAGES from "../../../public/ImagesConfig";
import { usePrevRoute } from "./usePrevRoute";

const SignIn = () => {
  


  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState("");

  const navigate = useNavigate();
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    // check the email and reEmail

    const studentCreds = {
      email,
      name,
      password,
      remember, // will be used while sending the jwt token(expiration will be 30days)
    };
    try {
      const res = await axios.post(API_URLS.SignIn, studentCreds, {
        withCredentials: true, // Include cookies in the request
      });
      if (res.statusText === "OK") {
        navigate(-1)
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="h-11/12 w-auto font-urbanist bg-cover bg-center"
      style={{ backgroundImage: `url(${signImg})` }} // Apply the imported image as background
    >
      <div className="w-full h-auto">
        <div className="flex lg:flex-row flex-col-reverse lg:justify-start lg:items-end justify-center items-center h-full">
          {/* <!-- Text div (Hidden on small screens) --> */}
          <div className="lg:w-3/5 md:w-4/5 p-5 lg:p-10 md:p-7 text-left hidden md:flex">
            <div className="flex flex-col justify-center items-center">
              <div className="w-3/4 h-auto bg-slate-50 opacity-50 p-5 rounded-lg shadolg">
                <p className="">
                  "Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Excepturi provident expedita neque obcaecati non at sed magnam
                  ex consectetur, illo dolore voluptates vitae ab veniam, quam
                  amet perferendis, deleniti ducimus."
                </p>
                <div className="flex flex-row justify-between items-center text-black z-10 mt-10">
                  <div className="flex flex-col">
                    <p>Ande Lane</p>
                    <div className="flex flex-row gap-1 text-black">
                      <IoIosStarOutline />
                      <IoIosStarOutline />
                      <IoIosStarOutline />
                      <IoIosStarOutline />
                      <IoIosStarOutline />
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <p> &lt;</p>
                    <p>&gt;</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Form div --> */}
          <div className="w-full md:w-[80%] lg:w-[48%] p-4 lg:p-6">
            <div className="relative w-full lg:w-[90%] mx-auto shadow-lg rounded-lg border p-8">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5 justify-start items-center text-[12px] md:text-[15px]"
                id="signupForm"
              >
                {/* <!-- Welcome Text --> */}
                <div className="text-center">
                  <p className="text-[32px] md:text-[35px] lg:text-[40px] font-bold z-10">
                    Welcome Back!
                  </p>
                  <p className="text-gray-500 z-10">
                    Welcome back! Enter Your Details
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
                    Sign in
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
                  <p className=" font-light font-poppins z-10">
                    Don't have an account?
                    <NavLink to="/signup" className="text-black font-semibold ">
                      {"  "} Sign up for free
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

export default SignIn;
