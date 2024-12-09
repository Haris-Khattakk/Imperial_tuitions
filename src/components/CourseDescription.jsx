import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RelatedCourses from "../pages/coursesPage/RelatedCourses";
import { MdContentPasteSearch } from "react-icons/md";
import { BsFiletypePdf } from "react-icons/bs";
import { RiProfileLine } from "react-icons/ri";
import what_included from "../assets/img/what_included.png";
import html2pdf from "html2pdf.js";
import { NavLink } from "react-router-dom";
import DOMPurify from "dompurify";
import axios from "axios";
import API_URLS from "../../config/Config";
import IMAGES from "../../public/ImagesConfig";
import Loader from "../pages/Loader/Loader";

function CourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [totalDuration, setTotalDuration] = useState(0);
  const handleDownloadPdf = () => {
    const element = document.getElementById("contentToConvert");

    const options = {
      margin: 0,
      filename: "download.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 1 },
      jsPDF: { unit: "in", format: "letter", orientation: "landscape" },
    };

    html2pdf().from(element).set(options).save();
  };
  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await axios.get(API_URLS.Course_Description, {
          params: { id: id },
        });
        const data = response.data;
        setCourse(data);

        // Calculate total duration in hours from course contents

        if (data.course_details && data.course_details.course_contents) {
          const durationInMinutes = data.course_details.course_contents.reduce(
            (total, content) => total + (content.duration || 0),
            0
          );

          // Calculate total hours and remaining minutes
          const hours = Math.floor(durationInMinutes / 60);

          // Format the result as hours.minutes (e.g., 1.30 for 1 hour 30 minutes)
          const totalDuration = `${hours}`;
          setTotalDuration(totalDuration);
        }
      } catch (error) {
        console.error("Error fetching course details:", error);
      }
    };
    fetchCourseDetails();
  }, [id]);

  if (!course) return <Loader />;

  return (
    <div id="contentToConvert" className=" bg-bodyColor ">
      {course ? (
        <>
          {/* <!-- banner cards  --> */}
          <div className="w-full bg-descriptionBg h-full flex md:flex-row flex-col justify-center items-start gap-7 p-10 pt-20">
            {/* <!-- card  --> */}
            <div className="lg:w-[25%] md:w-[35%] w-full bg-black flex flex-col rounded-lg shadow-lg gap-2 h-[650px]">
              <img
                src={IMAGES.courseImg}
                className="w-auto h-[200px] font-semibold"
                alt={course.course_name}
              />
              <p className="lg:text-[32px] md:text-[25px] text-[20px] font-poppins text-gray-300 text-center">
                {course.course_name}
              </p>
              <p className="lg:text-[16px] md:text-[13px] text-[10px] text-gray-600 font-urbanist text-center">
                103 already enrolled
              </p>
              <div className="w-full h-1 bg-gray-500 px-3"></div>
              <div className="gap-5 flex flex-col p-5">
                <div className="flex flex-row justify-between items-center px-2">
                  <div className="flex flex-row gap-2">
                    <p className="flex gap-[2px] items-center font-urbanist lg:text-[20px] md:text-[21px] text-[18px] text-white">
                      {course.rating || "N/A"}{" "}
                    </p>
                  </div>
                  <div>
                    <p className="font-urbanist lg:text-[20px] md:text-[21px] text-[18px] text-white">
                      {course.price}£ Per Hour
                    </p>
                  </div>
                </div>
                <p className="font-urbanist lg:text-[20px] md:text-[21px] text-[18px] text-white">
                  {course.course_level}
                </p>
                <div className="flex flex-col gap-0">
                  <p className="font-urbanist lg:text-[20px] md:text-[21px] text-[18px] text-white">
                    Flexible Schedule
                  </p>
                  <p className="text-gray-500 font-poppins">
                    Learn at your pace
                  </p>
                </div>
                <div className="flex flex-row">
                  <p className="font-urbanist md:text-[18px] text-[13px] text-white">
                    {totalDuration} hours
                  </p>
                  <p className="text-gray-500"> (approximately)</p>
                </div>
                <div className="flex justify-between py-4 mt-auto">
                  <div className="relative group bg-slate-100 px-6 py-1 rounded-lg cursor-pointer">
                    <NavLink
                      to="/inquiry"
                      state={{ course, totalDuration }}
                      className="text-[36px]"
                    >
                      <MdContentPasteSearch className="" title="Inquire" />
                    </NavLink>
                  </div>
                  <div className="relative group bg-slate-100 px-6 py-1 rounded-lg cursor-pointer">
                    <NavLink
                      to="/enroll"
                      state={{ course, totalDuration }}
                      className="text-[36px]"
                    >
                      <RiProfileLine className=" " title="Enrollment" />
                    </NavLink>
                  </div>
                  <div
                    onClick={handleDownloadPdf}
                    className="relative group bg-slate-100 px-6 py-2 rounded-lg cursor-pointer"
                  >
                    <span className="text-[36px]">
                      <BsFiletypePdf className=" " title="PDF" />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- banner section 2  --> */}
            <div className="md:w-[60%]  w-full  px-5  flex flex-col gap-7 justify-start items-start h-[650px]">
              <div className="flex flex-row gap-3 lg:text-[50px] md:text-[38px] text-[27px] font-poppins">
                <p className="pt-8 text-5xl font-semibold">
                  {course.course_name}
                </p>
              </div>
              <div className="flex flex-row font-poppins text-[25px] gap-3">
                <p className="font-semibold text-xl">Categories:</p>
                <div>
                  {/* Dynamically render categories from course data */}
                  <p className="text-lg w-full">
                    {course.category_id.category_name || "Unknown Category"}
                  </p>
                </div>
              </div>
              <p
                className="CourseDescription "
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(course.course_description),
                }}
              ></p>
              {/* Prerequisites Section */}
              <div className="font-poppins text-xl font-semibold">
                <p className="font-semibold">
                  Courses to take before this one:
                </p>
                {course.course_details.prerequisites ? (
                  <p className=" text-lg font-normal py-1">
                    {course.course_details.prerequisites.map(
                      (prereq, index) => (
                        <span key={index}>{prereq + ","}</span>
                      )
                    )}
                  </p>
                ) : (
                  <p className="font-extralight">No prerequisites listed.</p>
                )}
              </div>

              {/* Prerequisites Section */}
              <div className="font-poppins md:text-[16px] text-[12px]">
                <p className="font-semibold text-lg">What's Include:</p>
                {course.course_details.course_includes ? (
                  <p className=" text-lg py-1">
                    {course.course_details.course_includes.map(
                      (prereq, index) => (
                        <span key={index}>{prereq + ","}</span>
                      )
                    )}
                  </p>
                ) : (
                  <p className="font-extralight">No prerequisites listed.</p>
                )}
              </div>
            </div>
          </div>

          {/* "What's Included" Section - Desktop */}
          <div
            style={{ backgroundImage: `url(${what_included})` }}
            className="bg-gray-500 flex-col lg:px-52 md:px-26 px-10 gap-10 h-auto w-full py-10 font-poppins hidden md:flex bg-no-repeat bg-center bg-cover"
          >
            <div className="font-poppins text-center flex flex-col items-center justify-center mb-10">
              <p className="text-5xl font-poppins">Course Content</p>
              <img
                src={IMAGES.courseSignature}
                className="w-72 h-4 mt-4 font-extrabold"
                alt="Course Content Line"
              />
            </div>

            {/* Render "What's Included" data */}
            <div className="flex flex-col gap-6">
              {course.course_details.course_contents
                .filter((item) => item.enabled_flag === true)
                .sort((a, b) => a.sort_value - b.sort_value)
                .map((item, index) => (
                  <div key={index} className="flex flex-col mb-6 gap-4">
                    {/* Card design with gradient background */}
                    <div className="bg-gradient-to-l from-[#FFF0C7] to-[#FFF6DE] p-6 rounded-lg shadow-lg">
                      {/* Card content */}
                      <div className="flex flex-row text-3xl items-center gap-2 mb-4">
                        <p className=" font-bold">{index + 1}.</p>
                        <p className=" font-bold tracking-widest text-black shadow-md">
                          {item.topic}
                        </p> 
                      </div>
                      <div className="font-poppins text-lg tracking-wider flex gap-3 mb-4">
                        <p className="underline">Duration:</p>
                        <p className="font-semibold">{item.duration} minutes</p>
                      </div>
                      <p
                        className="CourseDescription px-5 text-base tracking-wider"
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(item.content_description),
                        }}
                      ></p>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* "What's Included" Section - Mobile */}
          <div
            style={{ backgroundImage: `url(${what_included})` }}
            className=" flex flex-col lg:px-52 md:px-26 px-10 gap-6 h-auto w-full justify-center items-center py-10 font-poppins md:hidden"
          >
            <div className="font-poppins text-[22px] md:text-[35px] text-center text-black">
              <p>Course Content</p>
              <div className="flex flex-row justify-center mt-4">
                <img
                  src={IMAGES.contentSignature}
                  className="md:w-[180px] w-[130px] h-4"
                  alt=""
                />
              </div>
            </div>

            {course.course_details.course_contents.length > 0 ? (
              course.course_details.course_contents.map((item, index) => (
                <details
                  key={index}
                  className="flex flex-col gap-4 group w-full"
                >
                  <summary className="flex flex-row items-center gap-2 text-[16px] md:text-[18px] font-light cursor-pointer text-black">
                    <p>{index + 1} .</p>
                    <p className="underline">{item.topic}</p>
                    <span className="ml-auto transform transition-transform duration-200 group-open:rotate-180 text-black">
                      ⌄
                    </span>
                  </summary>

                  <div className="font-poppins text-[14px] md:text-[16px] text-black">
                    <p className="underline">Duration:</p>
                    <p>{item.duration} minutes</p>
                  </div>

                  <p
                    className="font-urbanist hidden group-open:block text-black text-[14px] md:text-[16px]"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(item.content_description),
                    }}
                  ></p>
                </details>
              ))
            ) : (
              <p className="text-white">No contents available.</p>
            )}
          </div>

          <RelatedCourses category_id={course.category_id} />
        </>
      ) : (
        "no course"
      )}
    </div>
  );
}

export default CourseDetails;
