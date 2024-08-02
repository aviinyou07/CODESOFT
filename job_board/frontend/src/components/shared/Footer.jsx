import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-2xl font-black mb-4">Job Connect</h3>
            <p className="text-gray-200 font-normal">
              Your one-stop solution for job hunting and recruitment.
            </p>
          </div>

          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li>
                <Link to="/" className="hover:text-gray-500 font-extrabold">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="hover:text-gray-500 font-extrabold">
                  Jobs
                </Link>
              </li>
              <li>
                <Link
                  to="/AboutUs"
                  className="hover:text-gray-500 font-extrabold"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg  font-extrabold  mb-4">Contact Us</h3>
            <p className="text-gray-300 font-semibold">222 Dhankot, Gurgaon</p>
            <p className="text-gray-300 font-semibold">
              Email: support@aviinyou.com
            </p>
            <p className="text-gray-300 font-semibold">Phone: +917027888321</p>
          </div>

          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-extrabold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 border-t border-gray-700 pt-4">
          <p className="text-gray-100 text-sm font-semibold">
            &copy; {new Date().getFullYear()} Job Connect . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
