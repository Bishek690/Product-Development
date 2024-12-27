import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Custom NavLink styles for active links
  const activeLinkStyle = "text-blue-600 border-b-2 border-blue-600";
  const normalLinkStyle =
    "text-gray-700 hover:text-blue-600 relative after:block after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-blue-600 after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full";

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/">
              <img src={Logo} alt="Logo" className="h-10 w-auto" />
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? activeLinkStyle : normalLinkStyle
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? activeLinkStyle : normalLinkStyle
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? activeLinkStyle : normalLinkStyle
              }
            >
              About US
            </NavLink>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive ? activeLinkStyle : normalLinkStyle
              }
            >
              Events
            </NavLink>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive ? activeLinkStyle : normalLinkStyle
              }
            >
              Blogs
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? activeLinkStyle : normalLinkStyle
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Contact Us Button */}
          <div className="hidden lg:block">
            <NavLink
              to="/contact"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-orange-500 transition duration-300"
            >
              Contact Us
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white border-t border-gray-200 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col items-center space-y-4 px-4 py-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeLinkStyle : normalLinkStyle
            }
            onClick={toggleMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? activeLinkStyle : normalLinkStyle
            }
            onClick={toggleMenu}
          >
            Services
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? activeLinkStyle : normalLinkStyle
            }
            onClick={toggleMenu}
          >
            About US
          </NavLink>
          <NavLink
            to="/events"
            className={({ isActive }) =>
              isActive ? activeLinkStyle : normalLinkStyle
            }
            onClick={toggleMenu}
          >
            Events
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              isActive ? activeLinkStyle : normalLinkStyle
            }
            onClick={toggleMenu}
          >
            Blogs
          </NavLink>
          <NavLink
            to="/contact"
            className="mt-2 px-4 py-2 bg-blue-600 text-white text-center rounded-md hover:bg-blue-700 transition duration-300"
            onClick={toggleMenu}
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
