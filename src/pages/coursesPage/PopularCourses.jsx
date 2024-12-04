import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../components/Card";
import API_URLS from "../../../config/Config";
import IMAGES from "../../../public/ImagesConfig";

function PopularCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getCourses = async () => {
      try {
        const response = await axios.get(
          API_URLS.Course_Popular_enabled,
          {
            params: { order: 1 },
          }
        );
        const data = response.data;

        setCourses(data.slice(0, 3)); // Set courses with only the top 3 items
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    getCourses(); // Fetch courses
  }, []);

  return (
    <>
      <div className="w-full h-[480px] bg-sectionBg flex flex-col justify-start items-center py-5">
        <p className=" sectionHeader pt-3">
          Popular Courses
        </p>
        <img src={IMAGES.courseSignature} className="w-52 h-8 mt-0 pt-0" alt="" />
      </div>

      <div className="w-full flex flex-col justify-center items-center mt-[-340px] mb-10 ">
        <div className="px-16 grid lg:grid-cols-3 gap-7 md:grid-cols-2 grid-cols-1 py-7">
          {courses.map((course) => (
            <Card course={course} />
          ))}
        </div>
      </div>
    </>
  );
}

export default PopularCourses;
