import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Card from "../../components/Card";
import API_URLS from "../../../config/Config";
import IMAGES from "../../../public/ImagesConfig";



function Courses({ title, img }) {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate(); //  useNavigate for another page

  useEffect(() => {
    // get courses details
    const all_courses = async () => {
      const response = await axios.get(
        API_URLS.Course_enabled,
        {
          params: { order: 1 },
        }
      );
      const data = response.data;
      // setCourses(response.data);
      setCourses(data.slice(0, 6)); // Set courses with only the top 3 items
    };
    all_courses();
  }, []);

  

  return (
    <div className="w-full flex flex-col justify-center items-center py-16 bg-bodyColor ">
      <div>
        <p className=" sectionHeader pt-3">{title}</p>
        {img && (
          <img src={IMAGES.courseSignature} alt="Section Line" className="w-52 h-8 mt-0 pt-0" />
        )}
      </div>
      <div className="px-16 grid lg:grid-cols-3 gap-14 md:grid-cols-2 grid-cols-1 py-7 ">
        {/* cards design */}
        {courses?.map((course) => (
          <Card course={course} />
        ))}
      </div>
    </div>
  );
}

export default Courses;
