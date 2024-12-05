import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaStar, FaBookmark } from "react-icons/fa"; // Assuming you are using these icons
import DOMPurify from "dompurify"; // Assuming DOMPurify is being used
import IMAGES from "../../public/ImagesConfig";

function Card(props) {
  const [getcat, setGetcat] = useState(false);
  const course = props.course;
  const navigate = useNavigate();

  // Using useEffect to update getcat based on props.getCategoryNameById
  useEffect(() => {
    if (props.getCategoryNameById) {
      setGetcat(true);
    }
  }, [props.getCategoryNameById]); // Only rerun when getCategoryNameById changes

  const handleCardClick = (courseId) => {
    navigate(`/courses/${courseId}`); // Navigate to course details page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return ( 
    <>
      <div
        key={course._id}
        onClick={() => handleCardClick(course._id)}
        className="flex flex-col gap-4 py-5 shadow-lg bg-cardBg border-gray-500 rounded-lg px-4 shadow-black"
      >
        {/* Course Image */}
        <img
          src={IMAGES.courseImg}
          alt={course.course_name}
          className="w-full h-64 object-cover rounded-lg"
        />

        {/* Course Category */}
        {!getcat ? (
          <p className="font-urbanist text-red-500 text-2xl font-semibold">
            {course?.category_id.category_name}
          </p>
        ) : (
          <p className="font-urbanist text-red-500 text-2xl font-semibold">
            {props.getCategoryNameById(course.category_id)}
          </p>
        )}

        {/* Course Name */}
        <p className="font-poppins text-3xl py-4">{course.course_name}</p>

        {/* Course Description */}
        <p
          className="CourseCardDescription px-2 py-2"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(
              course.course_description.split(" ").slice(0, 20).join(" ") +
                (course.course_description.split(" ").length > 20 ? "..." : "")
            ),
          }}
        ></p>

        {/* Price and Rating */}
        <div className="flex justify-between py-4 mt-auto">
          {/* Left side: Rating and Bookmark */}
          <div className="flex gap-2">
            <p className="font-urbanist text-red-500 text-4xl">
              {course.price}£
            </p>
            <p className="self-end text-lg">per hour</p>
          </div>

          <div className="flex gap-2 items-center">
            <p className="font-urbanist text-3xl">{course.rating || "N/A"}</p>
            <FaStar className="text-yellow-500 text-3xl" />
            <FaBookmark className="text-3xl" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
