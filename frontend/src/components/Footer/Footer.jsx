import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto py-8 px-6 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Logo and Description */}
        <div className="col-span-1">
          <Link to="/">
          <img src={Logo} alt="Logo" className="h-10 w-auto mb-4" />
          </Link>
          <p>Transforming businesses through AI solutions</p>
        </div>

        {/* Solutions Section */}
        <div>
          <h3 className="text-white font-semibold mb-4">Solutions</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="transition-all duration-300 hover:translate-x-2 hover:text-white"
              >
                Website Development
              </a>
            </li>
            <li>
              <a
                href="#"
                className="transition-all duration-300 hover:translate-x-2 hover:text-white"
              >
                Mobile App Development
              </a>
            </li>
            <li>
              <a
                href="#"
                className="transition-all duration-300 hover:translate-x-2 hover:text-white"
              >
                Data Analytics
              </a>
            </li>
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="about"
                className="transition-all duration-300 hover:translate-x-2 hover:text-white"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="events"
                className="transition-all duration-300 hover:translate-x-2 hover:text-white"
              >
                Events
              </a>
            </li>
            <li>
              <a
                href="contact"
                className="transition-all duration-300 hover:translate-x-2 hover:text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Connect Section */}
        <div>
          <h3 className="text-white font-semibold mb-4">Connect with Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/bishek.chaudhary/"
              className="transition-all duration-300 hover:text-white"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/bishek-chaudhary-176776306/"
              className="transition-all duration-300 hover:text-white"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/Bishek690"
              className="transition-all duration-300 hover:text-white"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 text-center py-4">
        <p>© 2024 <Link to="/"><span className="font-semibold text-white hover:text-orange-500">AI-Solution.</span></Link> All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
