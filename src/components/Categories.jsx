import React, { useEffect, useState } from "react";
import Slider from "react-slick"; // Import Slider from react-slick
import axios from "axios";
import "slick-carousel/slick/slick.css"; // Import slick CSS
import "slick-carousel/slick/slick-theme.css"; // Import slick theme CSS
import DOMPurify from "dompurify";
import API_URLS from "../../config/Config";
import IMAGES from "../../public/ImagesConfig";

function Categories() {
  const [categories, setCategories] = useState([]); // Store categories
  const [currentSlide, setCurrentSlide] = useState(0); // Track current slide
  const [totalSlides, setTotalSlides] = useState(0); // Track total slides

  // Fetch categories on mount
  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get(API_URLS.Catagory_enabled, {
          params: { order: 1 },
        });
        setCategories(response.data); // Store categories data
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    getCategories();
  }, []);

  // Slider settings
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite scroll
    speed: 500, // Animation speed
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll
    nextArrow: (
      <button
        className="slick-next text-2xl py-4 px-8 w-20 h-20 bg-black text-white rounded-full disabled:bg-gray-400 flex justify-center items-center"
        disabled={currentSlide === totalSlides - 1}
      >
        Next
      </button>
    ),
    prevArrow: (
      <button
        className="slick-prev text-2xl py-4 px-8 w-20 h-20 bg-black text-white rounded-full disabled:bg-gray-400 flex justify-center items-center"
        disabled={currentSlide === 0}
      >
        Previous
      </button>
    ),

    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex); // Update current slide index
    },
    afterChange: (index) => {
      setCurrentSlide(index); // Set the current slide after transition
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    onInit: () => {
      setTotalSlides(categories.length); // Set total slides when initialized
    },
    onReInit: () => {
      setTotalSlides(categories.length); // Recalculate total slides if categories change
    },
  };

  return (
    <>
      <div className="w-full h-[580px] bg-sectionBg flex flex-col justify-start items-center pt-6 ">
        <p className="sectionHeader pt-3">About Us</p>
        <img
          src={IMAGES.courseSignature}
          className="w-52 h-8 mt-0 pt-0"
          alt=""
        />
        <p className="w-[60%] py-8 SectionDesc">
          Welcome to our platform, your go-to destination for transformative
          learning experiences! We're dedicated to providing accessible and
          enriching educational opportunities for individuals worldwide. With a
          diverse array of courses led by industry experts, we're committed to
          helping you achieve your personal and professional goals.
        </p>
      </div>
      <div className="w-auto py-10 mt-[-270px] max-w-[1200px] mx-auto rounded-lg">
        {/* Check if categories are available */}
        {categories.length > 0 ? (
          <Slider {...settings}>
            {/* Loop through categories */}
            {categories.map((category) => (
              <div
                key={category._id}
                className="p-5 bg-cardBg border rounded-sm shadow-md text-center flex flex-col h-80" // Fixed height for all cards
              >
                {/* Category Image */}
                <img
                  src={IMAGES.catagoriesIcon}
                  alt="Category Icon"
                  className="w-16 h-16 mx-auto"
                />
                <div className="px-3 flex flex-col h-full">
                  {/* Category Name */}
                  <h2 className="text-xl font-semibold py-3">
                    {category.category_name}
                  </h2>

                  {/* Category Description */}
                  <div
                    className="text-gray-600 text-base flex-grow"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(
                        category.category_description
                          .split(" ")
                          .slice(0, 20)
                          .join(" ") +
                          (category.category_description.split(" ").length > 20
                            ? "..."
                            : "")
                      ),
                    }}
                  ></div>

                  {/* Button */}
                  <div className="mt-auto self-center mb-16">
                    <button className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800">
                      View Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <p>Loading categories...</p> // Show loading text while fetching data
        )}
      </div>
    </>
  );
}

export default Categories;
