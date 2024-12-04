import React, { useState } from "react";

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  // Function to toggle menus
  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-4">Sidebar</h2>
        <div className="space-y-4">
          <button
            className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded"
            onClick={() => toggleMenu("menu1")}
          >
            Open Menu 1
          </button>
          <button
            className="w-full py-2 px-4 bg-green-500 hover:bg-green-600 rounded"
            onClick={() => toggleMenu("menu2")}
          >
            Open Menu 2
          </button>
          <button
            className="w-full py-2 px-4 bg-red-500 hover:bg-red-600 rounded"
            onClick={() => toggleMenu("menu3")}
          >
            Open Menu 3
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100">
        {activeMenu === "menu1" && (
          <div className="bg-white shadow-md p-4 rounded">
            <h3 className="text-lg font-bold mb-2">Menu 1</h3>
            <p>This is the content for Menu 1.</p>
          </div>
        )}
        {activeMenu === "menu2" && (
          <div className="bg-white shadow-md p-4 rounded">
            <h3 className="text-lg font-bold mb-2">Menu 2</h3>
            <p>This is the content for Menu 2.</p>
          </div>
        )}
        {activeMenu === "menu3" && (
          <div className="bg-white shadow-md p-4 rounded">
            <h3 className="text-lg font-bold mb-2">Menu 3</h3>
            <p>This is the content for Menu 3.</p>
          </div>
        )}
        {!activeMenu && (
          <p className="text-gray-500">
            Select a menu from the sidebar to view content.
          </p>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
