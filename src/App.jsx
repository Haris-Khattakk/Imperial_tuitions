import React, { Suspense, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/Header/Header";
import Footer from "./pages/Footer/Footer";
import Loader from "./pages/Loader/Loader";
import NotFoundPage from "./pages/404Page/NotfoundPage";
import ProfileLayout from "./userProfile/Profile"
import { Layout } from "./pages/Layout";
import Home from "./userProfile/home/Home";
import Courses from "./userProfile/courses/Courses";
import About from "./userProfile/about_us/About";
import Messeges from "./userProfile/messeges/Messeges";
import Contact_us from "./userProfile/contact/Contact_us"; 
import Feedback from "./userProfile/courses/Feedback";

// Lazy load the pages/components
const Index = React.lazy(() => import("./pages/Index"));
const CoursesPage = React.lazy(() => import("./pages/Courses/CoursesPage"));
const CourseDescription = React.lazy(() =>
  import("./components/CourseDescription")
);
const Enrollment = React.lazy(() => import("./components/Enrollment"));
const Inquiry = React.lazy(() => import("./components/Inquiry"));
const SignIn = React.lazy(() => import("./pages/Authentication/SignIn"));
const Signup = React.lazy(() => import("./pages/Authentication/Signup"));

function App() {
  const [loading, setLoading] = useState(true);
  const [timeoutReached, setTimeoutReached] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeoutReached(true); // Set to true after 3 seconds (or your desired time)
    }, 3000); // Set your timeout duration here, e.g., 3000ms for 3 seconds

    return () => clearTimeout(timer); // Clear the timer on component unmount
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/:id" element={<CourseDescription />} />
            <Route path="/inquiry" element={<Inquiry />} />
            <Route path="/enroll" element={<Enrollment />} />
          </Route>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />

          {/* User Profile Section with Sidebar */}
          <Route path="/profile/*" element={<ProfileLayout />}>
            <Route path="homeuser" element={<Home />} />
            <Route path="coursesuser" element={<Courses />} />
            <Route path="aboutuser" element={<About />} />
            <Route path="messegesuser" element={<Messeges />} />
            <Route path="contactuser" element={<Contact_us />} />
            <Route path="feedback" element={<Feedback />} />
          </Route>
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
