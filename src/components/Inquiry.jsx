import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import DOMPurify from "dompurify";
import API_URLS from "../../config/Config";
import IMAGES from "../../public/ImagesConfig";

function Inquiry() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMsg] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // State for success message
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const [isCourse, setIsCourse] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);
  const location = useLocation();
  const course = location.state?.course;
  const navigate = useNavigate();

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
    console.log("Captcha value:", value); // You can verify this token in the backend.
  };

  useEffect(() => {
    setIsCourse(!!course); // Set isCourse to true if course exists
  }, [course]);

  const handleContactForm = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!name || !email || !message || !isChecked || !captchaValue) {
      setErrorMessage("Please fill in all fields, including CAPTCHA.");
      return;
    }

    const inquiry_details = {
      name,
      email,
      message,
      course_id: course ? course._id : null,
      captcha: captchaValue, // Send CAPTCHA value to backend
    };

    try {
      // Sending data to the server
      const response = await axios.post(
        API_URLS.post_Inquiry,
        inquiry_details
      );

      // Check if response is successful (status code 200)
      if (response.status === 200) {
        setSuccessMessage("Inquiry sent successfully!");
        setErrorMessage(""); // Clear any previous error message
        setName("");
        setEmail("");
        setMsg("");
        setCaptchaValue(null); // Clear CAPTCHA after success
        setIsChecked(false); // Uncheck consent checkbox
      } else {
        setErrorMessage("Failed to send the Inquiry. Please try again.");
        setSuccessMessage(""); // Clear any previous success message
      }

      // Clear success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage("");
        navigate(-1);
      }, 3000);
    } catch (error) {
      // Handle error and show an error message
      console.error("Error during form submission:", error);
      setErrorMessage(
        "There was an error sending your message. Please try again."
      );
      setSuccessMessage(""); // Clear any previous success message
    }
  };

  return (
    <>
      <div className="w-full font-urbanist h-full flex bg-[#FD706A] flex-col lg:flex-row lg:justify-between justify-center">
        {/* Left Side - Form */}
        <div className="w-full lg:w-1/2 flex justify-start bg-[url('corse_des_images/inquiryform-bg.png')] p-5">
          <div className="w-11/12 mx-auto">
            <form
              onSubmit={handleContactForm}
              className="flex flex-col gap-5 text-[12px] md:text-[15px] p-8"
              id="signupForm"
            >
              {/* Welcome Text */}
              <div>
                <p className="text-[28px] md:text-[35px] lg:text-[40px] font-bold text-gray-100">
                  Have an Inquiry?
                </p>
              </div>

              {/* Form Fields */}
              <div className="w-full text-black font-poppins">
                <div className="w-full mb-4">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Your Email Address"
                    className="w-full py-2 bg-transparent border-b-2 border-b-gray-500 focus:outline-none focus:ring-2 border-t-2 border-t-gray-50/50 border-r-2 border-r-gray-50/50 border-l-2 border-l-gray-50/50 rounded-sm px-3 text-white placeholder-white"
                    aria-label="Email Address"
                  />
                </div>

                <div className="w-full mb-4">
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Your Name"
                    className="w-full py-2 bg-transparent border-b-2 border-b-gray-500 focus:outline-none focus:ring-2 border-t-2 border-t-gray-50/50 border-r-2 border-r-gray-50/50 border-l-2 border-l-gray-50/50 rounded-sm px-3 text-white placeholder-white"
                    aria-label="Name"
                  />
                </div>

                <div className="w-full mb-4">
                  <textarea
                    name="message"
                    value={message}
                    onChange={(e) => setMsg(e.target.value)}
                    placeholder="Enter Your Message"
                    className="w-full py-2 bg-transparent border-b-2 border-b-gray-500 focus:outline-none focus:ring-2 border-t-2 border-t-gray-50/50 border-r-2 border-r-gray-50/50 border-l-2 border-l-gray-50/50 rounded-sm px-3 text-white placeholder-white"
                    aria-label="Message"
                    rows={5}
                  />
                </div>
              </div>
              <div className="flex gap-3 lg:text-[15px] md:text-[12px] text-[10px]">
                <span>
                  <input
                    type="checkbox"
                    id="consentCheckbox"
                    required
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)} // Toggle the checkbox state
                  />
                </span>
                <p>
                  By checking this box, you consent to collecting and storing
                  the data provided in this form for the purpose of responding
                  to your inquiry. We respect your privacy and adhere to all
                  relevant data protection regulations. For more information,
                  please review our Privacy Policy.
                </p>
              </div>
              {/* Error and Success Messages */}
              {errorMessage && (
                <div className="bg-red-600 text-white text-center mb-4 py-3 rounded-lg">
                  {errorMessage}
                </div>
              )}
              {successMessage && (
                <div className="bg-green-600 text-white text-center mb-4 py-3 rounded-lg">
                  {successMessage}
                </div>
              )}
              {/* Google reCAPTCHA */}
              <div className="captcha-container mb-4">
                <ReCAPTCHA
                  sitekey="6LelgYkqAAAAAJeA6csMwb-UelWCKBjDTmLYNp6_" // Replace with your Google reCAPTCHA site key
                  onChange={handleCaptchaChange}
                />
              </div>
              {/* Submit Button */}
              <div className="flex justify-start">
                <button
                  type="submit"
                  className="bg-black rounded-lg py-2 text-white px-3"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right Side - Course Details or Image */}
        {isCourse ? (
          <div className="flex flex-col w-full md:w-1/2 gap-2 font-readex xl:px-16 2xl:px-20 md:px-12 lg:px-14 px-10 md:py-8 lg:py-10 py-7 xl:py-12 2xl:py-14 font-urbanist bg-white p-8">
            <div className="text-[35px] md:text-[25px] font-semibold lg:text-[60px]">
              <p>{course.course_name}</p>
            </div>
            <div className="lg:text-[22px] md:text-[20px] text-[25px] font-readex">
              <p className="font-semibold">{course.price}£/ hour</p>
            </div>
            <div className="lg:text-lg md:text-[20px] text-[25px] font-readex">
              <p
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(course.course_description),
                }}
              ></p>
            </div>

            <img
              src={IMAGES.inqueryIcon}
              alt="Inquiry Form Background"
              className="w-1/2 mx-auto"
            />
          </div>
        ) : (
          <div className="flex flex-col w-full md:w-1/2 gap-2 font-readex xl:px-16 2xl:px-20 md:px-12 lg:px-14 px-10 md:py-8 lg:py-10 py-7 xl:py-12 2xl:py-14 font-urbanist bg-white p-8">
            <h2 className="text-[35px] md:text-[25px] font-semibold lg:text-[60px]">
              Contact Us
            </h2>
            <p className="lg:text-lg md:text-[20px] text-[25px] font-readex">
              We're here to assist you every step of the way on your learning
              expedition. Whether you have questions about our courses, need
              guidance on selecting the right program, or simply want to learn
              more about how we can help you grow your skills, our dedicated
              team is ready to provide personalized support and expert advice.
              Feel free to reach out to us – we‘re committed to helping you
              achieve your goals.
            </p>
            <img
              src={IMAGES.inqueryIcon}
              alt="Inquiry Form Background"
              className="w-1/2 mx-auto"
            />
          </div>
        )}
      </div>
    </>
  );
}

export default Inquiry;
