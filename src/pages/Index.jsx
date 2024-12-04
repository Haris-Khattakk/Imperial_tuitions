import React from "react";
import Banner from "./Banner/Banner";
import Categories from "../components/Categories";
import Courses from "./coursesPage/Courses";
import PopularCourses from "./coursesPage/PopularCourses";
import IMAGES from "../../public/ImagesConfig";


const Index = () => {
  return (
    <div className=" bg-bodyColor ">
      <Banner />
      <Categories />
      <Courses title="Courses" img={IMAGES.courseImg} />
      <PopularCourses />
    </div>
  );
};

export default Index;
