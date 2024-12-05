import React from "react";
import { NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa"; // Importing a profile icon from react-icons

const Usersidebar = () => {
  return (
    <div className="sticky left-0 top-0 w-1/5 bg-[#FFF0C7] text-black p-6 flex flex-col">
      {/* Profile Section */}
      <div className="flex items-center mb-6">
        <FaUserCircle size={40} className="text-gray-400 mr-4" />
        <div>
          <h3 className="text-lg font-semibold">John Doe</h3>
          <p className="text-lg text-gray-400">Dummy Username</p>
        </div>
      </div>

      {/* Sidebar Links */}

      <nav className="space-y-4  ">
        <NavLink
          to="/profile/homeuser"
          className={({ isActive }) =>
            `block py-2 px-4 rounded-lg text-lg ${
              isActive ? "bg-[#FFF6DE]" : "hover:bg-white"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/profile/coursesuser"
          className={({ isActive }) =>
            `block py-2 px-4 rounded-lg text-lg ${
              isActive ? "bg-[#FFF6DE]" : "hover:bg-white"
            }`
          }
        >
          Courses
        </NavLink>
        <NavLink
          to="/profile/aboutuser"
          className={({ isActive }) =>
            `block py-2 px-4 rounded-lg text-lg ${
              isActive ? "bg-[#FFF6DE]" : "hover:bg-white"
            }`
          }
        >
          About Us
        </NavLink>
        <NavLink
          to="/profile/messegesuser"
          className={({ isActive }) =>
            `block py-2 px-4 rounded-lg text-lg ${
              isActive ? "bg-[#FFF6DE]" : "hover:bg-white"
            }`
          }
        >
          Messages
        </NavLink>
        <NavLink
          to="/profile/contactuser"
          className={({ isActive }) =>
            `block py-2 px-4 rounded-lg text-lg ${
              isActive ? "bg-[#FFF6DE]" : "hover:bg-white"
            }`
          }
        >
          Contact Us
        </NavLink>
      </nav>
    </div>
  );
};

export default Usersidebar;
