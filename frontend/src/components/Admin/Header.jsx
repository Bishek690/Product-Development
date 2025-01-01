import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FaUser, FaBell } from "react-icons/fa";

const Header = () => {
  const location = useLocation();

  const showTitle = location.pathname === "/admin/dashboard";

  return (
    <div className="flex justify-between items-center p-4 pr-8 bg-gray-100 shadow">
      {showTitle && (
        <h1 className="text-2xl pl-8 font-semibold">Dashboard Overview</h1>
      )}
      <div className="flex items-center space-x-4 ml-auto">
        <div className="text-green-500 text-xl">
          <FaBell />
        </div>
        <Link to={"/admin/dashboard"}>
        <div className="bg-gray-300 rounded-full h-12 w-12 flex items-center justify-center">
          <FaUser className="text-gray-700 text-2xl" />
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
