import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaHome, FaCalendarCheck, FaStar, FaSignOutAlt } from "react-icons/fa";
import { FaUserGear, FaCalendarDay, FaBars } from "react-icons/fa6"; 

import Logo from "../../assets/logo.png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const navigate = useNavigate(); // To navigate after logout

  // Toggle the sidebar on mobile
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Close the sidebar when clicking a nav item on mobile
  const handleNavClick = () => {
    if (window.innerWidth < 1024) {
      setIsOpen(false);
    }
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("admin/login");
  };

  return (
    <div>
      {/* Mobile sidebar toggle button */}
      <button
        className="lg:hidden p-2 text-black"
        onClick={toggleSidebar}
      >
        <FaBars />
      </button>

      <div
        className={`bg-blue-950 text-white h-screen w-64 p-4 lg:block ${isOpen ? "block" : "hidden"} lg:static`}
      >
        <div className="text-center mb-8">
          <img src={Logo} alt="Logo" className="w-24 mx-auto" />
        </div>
        <ul className="space-y-4">
          <li>
            <NavLink
              to="/admin/dashboard"
              activeClassName="bg-blue-700"
              className="flex items-center hover:bg-blue-700 p-2 rounded"
              onClick={handleNavClick} 
            >
              <FaHome className="mr-3 text-black" />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/events-post" 
              activeClassName="bg-blue-700"
              className="flex items-center hover:bg-blue-700 p-2 rounded"
              onClick={handleNavClick} 
            >
              <FaCalendarCheck className="mr-3 text-black" />
              Events Post
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/blogs-post" 
              activeClassName="bg-blue-700"
              className="flex items-center hover:bg-blue-700 p-2 rounded"
              onClick={handleNavClick} 
            >
              <FaCalendarDay className="mr-3 text-black" />
              Blogs Post
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/view-events" 
              activeClassName="bg-blue-700"
              className="flex items-center hover:bg-blue-700 p-2 rounded"
              onClick={handleNavClick} 
            >
              <FaCalendarCheck className="mr-3 text-black" />
              View Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/view-blogs" 
              activeClassName="bg-blue-700"
              className="flex items-center hover:bg-blue-700 p-2 rounded"
              onClick={handleNavClick}
            >
              <FaCalendarDay className="mr-3 text-black" />
              View Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/view-inquiries"
              activeClassName="bg-blue-700"
              className="flex items-center hover:bg-blue-700 p-2 rounded"
              onClick={handleNavClick} 
            >
              <FaUserGear className="mr-3 text-black" />
              View Inquiries
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/feedback" 
              activeClassName="bg-blue-700"
              className="flex items-center hover:bg-blue-700 p-2 rounded"
              onClick={handleNavClick} 
            >
              <FaStar className="mr-3" />
              Feedback & Ratings
            </NavLink>
          </li>
          <li>
            <button
              className="flex items-center hover:bg-blue-700 p-2 rounded w-full"
              onClick={handleLogout} 
            >
              <FaSignOutAlt className="mr-3 text-red-500" />
              Log Out
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
