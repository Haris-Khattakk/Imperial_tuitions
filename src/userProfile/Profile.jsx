import React from "react";
import { Outlet } from "react-router-dom";
import Usersidebar from "./Usersidebar";

const ProfileLayout = () => {
  return (
    <div className="flex h-full w-full">
      {/* Sidebar */}
      <Usersidebar />

      {/* Dynamic Content */}
      <div className="flex-1 p-6 bg-gray-100 overflow-y-auto h-full">
        <Outlet /> {/* Renders child routes */}
      </div>
    </div>
  );
};

export default ProfileLayout;
