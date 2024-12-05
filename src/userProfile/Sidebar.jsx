import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./home/Home";
import Courses from "./courses/Courses";
import About from "./about_us/About";
import Messeges from "./messeges/Messeges";
import Contact_us from "./contact/Contact_us";

const Sidebar = () => {
  return (
    <Router>
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-1/5 bg-gray-800 text-white p-4">
          <h2 className="text-xl font-bold mb-4">Sidebar</h2>
          <nav className="space-y-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-2 px-4 rounded ${
                  isActive ? "bg-blue-600" : "hover:bg-blue-500"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                `block py-2 px-4 rounded ${
                  isActive ? "bg-blue-600" : "hover:bg-blue-500"
                }`
              }
            >
              Courses
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block py-2 px-4 rounded ${
                  isActive ? "bg-blue-600" : "hover:bg-blue-500"
                }`
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/messeges"
              className={({ isActive }) =>
                `block py-2 px-4 rounded ${
                  isActive ? "bg-blue-600" : "hover:bg-blue-500"
                }`
              }
            >
              Messages
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block py-2 px-4 rounded ${
                  isActive ? "bg-blue-600" : "hover:bg-blue-500"
                }`
              }
            >
              Contact Us
            </NavLink>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 bg-gray-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/about" element={<About />} />
            <Route path="/messeges" element={<Messeges />} />
            <Route path="/contact" element={<Contact_us />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Sidebar;
