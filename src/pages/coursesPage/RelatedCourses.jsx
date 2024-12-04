import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Card from "../../components/Card";
import API_URLS from "../../../config/Config";
import IMAGES from "../../../public/ImagesConfig";

function Courses(props) {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate(); //  useNavigate for another page

  useEffect(() => {
    const getCourses = async () => {
      try {
        const response = await axios.get(
          API_URLS.Course_Related_enabled,
          { params: { id: props.category_id, order: 1 } }
        );
        setCourses(response.data); // Set courses with only the top 3 items
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    // getCategories(); // Fetch categories
    getCourses(); // Fetch courses
  }, []);

  useEffect(() => {
    console.log(courses);
  }, [courses]);

  return (
    <div className="w-full flex flex-col justify-center items-center py-16">
      <div className="flex flex-col items-center">
        <p className="sectionHeader">
          Related Courses
        </p>
        <img src={IMAGES.courseSignature} className="w-52 h-8 mt-0 pt-0" alt="" />
      </div>
      <div className="px-16 grid lg:grid-cols-3 gap-7 md:grid-cols-2 grid-cols-1 py-7">
        {courses.map((course) => (
          <Card course={course} />
        ))}
      </div>
    </div>
  );
}

export default Courses;
