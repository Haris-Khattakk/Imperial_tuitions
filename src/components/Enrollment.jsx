import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import API_URLS from "../../config/Config";
import IMAGES from "../../public/ImagesConfig";
import DOMPurify from "dompurify";
import Loader from "../pages/Loader/Loader";

function Enrollment() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAdress] = useState("");
  const [message, setMsg] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [isChecked, setIsChecked] = useState("");
  const [noUser, setNoUser] = useState(false);
  const [successMessage, setSuccessMessage] = useState(""); // State for success message
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const navigate = useNavigate();

  const location = useLocation();
  const course = location.state?.course;

  useEffect(() => {
    if (!noUser) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup when the component is unmounted
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [noUser]);

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
    console.log("Captcha value:", value); // You can verify this token in the backend.
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Check if any required field is empty
    if (
      !name ||
      !email ||
      !phone ||
      !address ||
      !message ||
      !preferredDate ||
      !preferredTime ||
      !isChecked
    ) {
      setErrorMessage("Please fill in all fields.");
      setSuccessMessage(""); // Clear success message if there's an error
      return; // Stop the form submission
    }

    const data = {
      applier: name,
      applier_email: email,
      applier_phone: phone,
      applier_Address: address,
      message: message,
      preferred_date: preferredDate,
      preferred_time: preferredTime,
      for_course: course._id,
    };
    try {
      const response = await axios.post(API_URLS.Enrollment_post, data, {
        withCredentials: true,
      });

      if (response.status === 200) {
        // Show success message and reset form fields
        setSuccessMessage("Enrollment successful!");
        setErrorMessage(""); // Clear any previous error messages

        // Reset form fields to initial state
        setName("");
        setEmail("");
        setPhone("");
        setAdress("");
        setMsg("");
        setPreferredDate("");
        setPreferredTime("");

        // Hide success message after 3 seconds
        setTimeout(() => {
          setSuccessMessage("");
          navigate(-1);
        }, 3000);
      } else {
        setErrorMessage("Failed to enroll. Please login first");
        setSuccessMessage(""); // Clear any previous success messages
      }
    } catch (error) {
      // Handle error and show an error message
      setErrorMessage("There was an error. Please try again later.");
      setSuccessMessage(""); // Clear any previous success messages
    }
  };

  // check if user is logged-in and get user-data
  const checkSession = async () => {
    const res = await axios.get(API_URLS.Check_Session, {
      withCredentials: true,
    });
    const expiration = res.data.exp;

    const expiryDate = new Date(expiration * 1000);
    const currentDate = new Date();

    if (currentDate < expiryDate) {
      setNoUser(false);
    } else {
      setNoUser(true);
    }
  };

  useEffect(() => {
    if (location.state?.loggedIn) {
      setNoUser(false); // Hide modal if coming back from login
    }
  }, [location.state]);

  useEffect(() => {
    checkSession();
  }, []);


  return (
    <div className="w-full h-auto ">
      <div className="flex w-full  flex-col md:flex-row ">
        {/* Enrollment form */}
        <div className="bg-[#FD706A]  font-urbanist md:w-1/2 w-full xl:px-16 2xl:px-20 md:px-12 lg:px-14 px-10 md:py-8 lg:py-10 py-7 xl:py-12 2xl:py-14 font-readex">
          <div className="flex flex-col gap-5 justify-start">
            <div>
              <div className="2xl:text-[90px] xl:text-[80px] lg:text-[70px] md:text-[60px] text-[50px] font-extrabold text-white">
                <p>Avail</p>
              </div>
            </div>

            {/* Form */}
            <div className="flex flex-col gap-5 justify-start text-white  ">
              <div className="">
                <input
                  type="text"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  className="w-full py-2 bg-transparent border-b-2 border-b-gray-500 focus:outline-none focus:ring-2 border-t-2 border-t-gray-50/50 border-r-2 border-r-gray-50/50 border-l-2 border-l-gray-50/50 rounded-sm px-3 text-white placeholder-white "
                  placeholder="Name"
                  value={name} // Controlled input
                  autoComplete="off"
                />
              </div>

              <div className="">
                <input
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full py-2 bg-transparent border-b-2 border-b-gray-500 focus:outline-none focus:ring-2 border-t-2 border-t-gray-50/50 border-r-2 border-r-gray-50/50 border-l-2 border-l-gray-50/50 rounded-sm px-3 text-white placeholder-white"
                  placeholder="Email"
                  value={email} // Controlled input
                  autoComplete="off"
                />
              </div>

              <div className="">
                <input
                  type="tel"
                  name="phone"
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full py-2 bg-transparent border-b-2 border-b-gray-500 focus:outline-none focus:ring-2 border-t-2 border-t-gray-50/50 border-r-2 border-r-gray-50/50 border-l-2 border-l-gray-50/50 rounded-sm px-3 text-white placeholder-white"
                  placeholder="Phone"
                  value={phone} // Controlled input
                  autoComplete="off"
                />
              </div>

              <div>
                <textarea
                  type="text"
                  name="address"
                  onChange={(e) => setAdress(e.target.value)}
                  className="w-full py-2 bg-transparent border-b-2 border-b-gray-500 focus:outline-none focus:ring-2 border-t-2 border-t-gray-50/50 border-r-2 border-r-gray-50/50 border-l-2 border-l-gray-50/50 rounded-sm px-3 text-white placeholder-white"
                  placeholder="Your Address"
                  value={address} // Controlled input
                  autoComplete="off"
                  rows="5"
                ></textarea>
              </div>

              <div className="">
                <textarea
                  type="text"
                  name="message"
                  onChange={(e) => setMsg(e.target.value)}
                  className="w-full py-2 bg-transparent border-b-2 border-b-gray-500 focus:outline-none focus:ring-2 border-t-2 border-t-gray-50/50 border-r-2 border-r-gray-50/50 border-l-2 border-l-gray-50/50 rounded-sm px-3 text-white placeholder-white"
                  placeholder="Enter Message"
                  value={message} // Controlled input
                  autoComplete="off"
                  rows="5"
                ></textarea>
              </div>

              <div className="">
                <p>Preferred Date</p>
                <input
                  type="date"
                  name="preferredDate"
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full py-2 bg-transparent border-b-2 border-b-gray-500 focus:outline-none focus:ring-2 border-t-2 border-t-gray-50/50 border-r-2 border-r-gray-50/50 border-l-2 border-l-gray-50/50 rounded-sm px-3 text-white placeholder-white"
                  value={preferredDate} // Controlled input
                  autoComplete="off"
                  aria-date-current="today"
                  min={new Date().toISOString().split("T")[0]} // Prevents previous dates
                />
              </div>

              <div className="">
                <p>Preferred Time</p>
                <input
                  type="time"
                  name="preferredTime"
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full py-2 bg-transparent border-b-2 border-b-gray-500 focus:outline-none focus:ring-2 border-t-2 border-t-gray-50/50 border-r-2 border-r-gray-50/50 border-l-2 border-l-gray-50/50 rounded-sm px-3 text-white placeholder-white"
                  value={preferredTime} // Controlled input
                  autoComplete="off"
                />
              </div>
            </div>

            {/* Consent checkbox */}
            <div className="flex gap-3 lg:text-[15px] md:text-[12px] text-[10px]">
              <span>
                {/* <input type="checkbox" name="" id="" required/> */}
                <input
                  type="checkbox"
                  id="consentCheckbox"
                  required
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)} // Toggle the checkbox state
                />
              </span>
              <p>
                By checking this box, you consent to collecting and storing the
                data provided in this form for the purpose of responding to your
                inquiry.
              </p>
            </div>

            {/* Google reCAPTCHA */}
            <div className="captcha-container mb-4">
              <ReCAPTCHA
                sitekey="6LelgYkqAAAAAJeA6csMwb-UelWCKBjDTmLYNp6_" // Replace with your Google reCAPTCHA site key
                onChange={handleCaptchaChange}
              />
            </div>

            {/* Submit button */}
            <div>
              <button
                onClick={handleSubmit}
                className="inline-block text-center self-start  py-2 px-4 bg-black hover:bg-gray-700 
                  rounded-lg text-slate-50 shadow-md duration-500 text-[12px] md:text-[14px] lg:text-[16px]"
              >
                Registration
              </button>
            </div>
          </div>

          {/* Success and Error Messages */}
          {successMessage && (
            <div className="bg-green-600 text-white text-center p-3 mt-3 rounded">
              {successMessage}
            </div>
          )}
          {errorMessage && (
            <div className="bg-red-600 text-white text-center p-3 mt-3 rounded">
              {errorMessage}
            </div>
          )}
        </div>

        {/* Contact us section */}
        <div
          className="flex md:w-1/2 w-full flex-col gap-2 font-urbanist font-readex xl:px-16 2xl:px-20 md:px-12
        lg:px-14 px-10 md:py-8 lg:py-10 py-7 xl:py-12 2xl:py-14"
        >
          <div className="flex justify-start">
            <div className="text-[35px] md:text-[25px] tracking-wider font-bold lg:text-[65px]">
              <p>{course.course_name}</p>
            </div>
          </div>
          <div className="lg:text-[30px] font-urbanist md:text-[25px] text-[25px] font-semibold">
            <p>{course.price}$/ hour</p>
          </div>

          <div className="flex justify-start">
            <p className="text-base">
              <span
                className="lg:text-[22px] md:text-[20px] text-[25px] font-readex"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(course.course_description),
                }}
              ></span>
            </p>
          </div>

          <div className="flex justify-center items-center">
            <img
              src={IMAGES.enrollmentIcon}
              alt="Enrollment"
              className="w-10/12 mx-auto"
            />
          </div>
        </div>
      </div>
      {!noUser && (
        <div className="fixed inset-0 font-urbanist bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/3 px-6 py-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-red-600 mb-4">
                Login Required
              </h2>
              <p className="text-gray-700">
                You need to log in to access this feature. Please log in to
                continue.
              </p>
            </div>

            <div className="flex justify-center mt-6">
              <button
                className="bg-red-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-700 transition duration-300"
                onClick={() => navigate("/signin")}
              >
                Log In
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Enrollment;
