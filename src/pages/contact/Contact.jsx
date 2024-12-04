import React from "react";
import IMAGES from "../../../public/ImagesConfig";

const Contact = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row w-full h-auto gap-10 bg-red-500 bg-bodyColor py-10 px-5 md:px-32">
        {/* Left Section */}
        <div className="flex flex-col justify-start gap-5 w-full md:w-1/2">
          <div>
            <p className="sectionHeader text-center md:text-left ">Contact Us</p>
            <img
              src={IMAGES.contactSignature}
              className="w-48 h-6 md:w-60 md:h-8 my-4 mx-auto md:mx-0"
              alt="Signature"
            />
          </div>
          <div className="flex justify-center items-center">
            <p className="text-white text-center md:text-left py-3 text-sm md:text-base">
              You can contact us if you have a question about our courses, their
              price, timetable, reviews, or anything else. Feel free to reach
              out to us.
            </p>
          </div>
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-lg text-white">Phone</p>
              <p className="text-lg text-white">0025250222</p>
            </div>
            <div>
              <p className="font-semibold text-lg text-white">Email</p>
              <p className="text-lg text-white">Vlorem2345@gmail.com</p>
            </div>
            <div>
              <p className="font-semibold text-lg text-white">Address</p>
              <p className="text-lg text-white">Vlorem.com</p>
            </div>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="w-full md:w-1/2">
          <div className="w-full md:w-[80%] bg-[#FFF0C7] my-10 mx-auto md:mx-20 flex flex-col gap-7 items-start rounded-lg border shadow-lg p-4">
            <div>
              <p className="text-3xl md:text-5xl ml-3">Reach Out to Us</p>
            </div>
            <div className="w-full flex flex-col p-3">
              <form action="">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="focus:outline-none bg-[#FFF0C7] text-[20px] md:text-[23px] border-b-2 border-black pb-3 w-full mb-5"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email Address"
                  className="focus:outline-none bg-[#FFF0C7] text-[20px] md:text-[23px] border-b-2 border-black pb-3 w-full mb-5"
                  required
                />
                <button
                  type="submit"
                  className="text-white text-lg bg-black px-10 py-3 my-5 rounded-lg shadow-lg border"
                >
                  Get Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
