import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Card from "../../components/Card";
import API_URLS from "../../../config/Config";

const CoursesPage = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null); // No category selected by default
  const [selectedLevels, setSelectedLevels] = useState({
    beginner: false,
    intermediate: false,
    advanced: false,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage] = useState(6);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          API_URLS.Catagory_enabled,
          { params: { order: 1 } }
        );
        if (response.data) {
          const data = response.data.filter(
            (category) => category.courses && category.courses.length > 0
          );
          setCategories(data);
        } else {
          console.error("Failed to fetch categories");
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const handleCategoryChange = (cid) => {
    if (selectedCategory === cid) {
      setSelectedCategory(null); // Deselect the category if it's already selected
    } else {
      setSelectedCategory(cid); // Set the selected category
    }
    setSelectedLevels({
      beginner: false,
      intermediate: false,
      advanced: false,
    });
    setCurrentPage(1); // Reset to first page when category changes
  };

  const handleLevelChange = (level) => {
    setSelectedLevels({
      beginner: level === "beginner",
      intermediate: level === "intermediate",
      advanced: level === "advanced",
    });
  };


  // Get courses of the selected category (if a category is selected)
  const selectedCategoryCourses =
    selectedCategory === null
      ? categories.flatMap((category) => category.courses) // If no category selected, show all courses
      : categories.find((category) => category._id === selectedCategory)
          ?.courses || [];

  // Filter courses based on selected levels
  const filteredCourses = selectedCategoryCourses.filter((course) => {
    if (selectedLevels.beginner && course.course_level === "beginner")
      return true;
    if (selectedLevels.intermediate && course.course_level === "intermediate")
      return true;
    if (selectedLevels.advanced && course.course_level === "advanced")
      return true;
    if (
      !selectedLevels.beginner &&
      !selectedLevels.intermediate &&
      !selectedLevels.advanced
    )
      return true;
    return false;
  });

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );

  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

  const getCategoryNameById = useMemo(
    () => (categoryId) => {
      const category = categories.find((cat) => cat._id === categoryId);
      return category ? category.category_name : "Unknown Category";
    },
    [categories]
  );

  return (
    <>
      <div className="w-full">
        <div className="flex md:justify-start items-center justify-center gap-2 py-4 md:px-16 px-0 md:text-[20px] text-[12px]">
          <p className="font-urbanist font-bold">
            Elevate Your Learning Journey:
          </p>
          <p className="font-urbanist font-light">
            Explore Our Diverse Courses Today
          </p>
        </div>
      </div>
      <div className="w-full">
        <div className="flex md:flex-row flex-col md:justify-start">
          {/* Sidebar */}
          <div className=" lg:w-1/4 md:w-[30%] md:sticky top-0 z-30 md:h-screen w-[90%] md:px-0 px-6 shadow-lg bg-[#FFFFFF] border-gray-500 rounded-lg p-2 shadow-black transition-all">
            <div className="flex flex-col px-4 gap-2 ">
              <p className="font-poppins lg:text-[35px] md:text-[28px] text-[22px]">
                Categories
              </p>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category._id} className="border-b pb-2">
                    <div className="flex gap-10 items-center">
                      <label>
                        <input
                          type="checkbox"
                          onChange={() => handleCategoryChange(category._id)}
                          checked={selectedCategory === category._id}
                        />
                        <span className="text-[25px] font-urbanist ml-2 cursor-pointer">
                          {category.category_name}
                        </span>
                      </label>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col px-4 gap-2">
              <p className="font-poppins lg:text-[35px] md:text-[28px] text-[22px]">
                Level
              </p>
              <ul className="space-y-2">
                <li className="border-b pb-2">
                  <div className="flex gap-4 flex-col">
                    <label>
                      <input
                        type="checkbox"
                        onChange={() => handleLevelChange("beginner")}
                        checked={selectedLevels.beginner}
                      />
                      <span className="text-[25px] font-urbanist ml-2 cursor-pointer">
                        Beginner
                      </span>
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        onChange={() => handleLevelChange("intermediate")}
                        checked={selectedLevels.intermediate}
                      />
                      <span className="text-[25px] font-urbanist ml-2 cursor-pointer">
                        Intermediate
                      </span>
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        onChange={() => handleLevelChange("advanced")}
                        checked={selectedLevels.advanced}
                      />
                      <span className="text-[25px] font-urbanist ml-2 cursor-pointer">
                        Advanced
                      </span>
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full flex flex-col ">
            <div className="px-6 grid lg:grid-cols-3 gap-4 md:grid-cols-2 grid-cols-1 py-1">
              {filteredCourses.length === 0 ? (
                <div className="w-full  font-urbanist text-center tracking-wider py-10 text-xl font-light">
                  No courses available for the selected level(s)
                </div>
              ) : (
                currentCourses.map((course) => (
                  <Card
                    course={course}
                    getCategoryNameById={getCategoryNameById}
                  />
                ))
              )}
            </div>
          </div>
        </div>

        {/* Pagination */}
        {filteredCourses.length > 0 && (
          <div className="flex justify-center items-center py-10 my-20">
            <div className="flex items-center space-x-6 text-3xl md:text-4xl lg:text-5xl font-semibold">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`border-r-2 border-black h-16  px-3 ${
                    currentPage === index + 1
                      ? " text-black text-6xl"
                      : " text-gray-500 text-6xl"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CoursesPage;
