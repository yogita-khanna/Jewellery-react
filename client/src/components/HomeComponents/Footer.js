import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoHome, IoMail } from "react-icons/io5";
import { FcAbout } from "react-icons/fc";
import { MdOutlineRoundaboutLeft } from "react-icons/md";
import { MdCopyright } from "react-icons/md";

function Footer() {
  return (
    <div>
      <footer className="bg-black flex flex-col md:flex-row justify-center items-center text-white py-4">
        <div
          className="p-2 rounded-lg m-3 overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/jewellery-images/logo.jpg"
            })`,
            width: "250px",
            height: "200px",
          }}
          alt="Logo"
        ></div>

        <div className="flex justify-center items-center space-x-4 p-3">
          <a href="#">
            <FaFacebookF className="text-3xl hover:text-blue-400" />
          </a>
          <a href="#">
            <FaInstagram className="text-3xl hover:text-pink-400" />
          </a>
          <a href="#">
            <FaTwitter className="text-3xl hover:text-blue-400" />
          </a>
          <a href="#">
            <FaYoutube className="text-3xl hover:text-red-400" />
          </a>
        </div>

        <div className="md:w-[22%] md:mt-0 flex flex-col items-center">
          <div className="text-white font-bold text-lg">BR SONS JEWELLERS</div>
          <p className="text-white mt-1 text-center">
            B R sons jewellers tonk phatak near Gandhi nagar railway station
            tonk road Jaipur
          </p>
        </div>

        <div className="md:w-[14%] mt-2 md:mt-0 flex flex-col items-center">
          <div className="text-white font-bold text-lg mb-1">Resources</div>
          <Link to="/" className="block hover:text-gray-400 text-center flex">
            <div className="pt-1 mr-1">
              <IoHome />
            </div>
            Home
          </Link>
          <Link
            to="/aboutus"
            className="block hover:text-gray-400 text-center flex"
          >
            <div className="pt-1 mr-1">
              {/* <FcAbout /> */}
              <MdOutlineRoundaboutLeft />
            </div>
            About Us
          </Link>
          <Link
            to="/contactus"
            className="block hover:text-gray-400 text-center flex"
          >
            <div className="pt-1 mr-1">
              <IoMail />
            </div>
            Contact Us
          </Link>
        </div>

        <div className="md:w-[22%] mt-2 md:mt-0 flex flex-col mb-2 items-center">
          <h4 className="text-white font-bold text-lg mb-3">
            Contact Information
          </h4>
          <p className="text-white text-center">
            Phone: <a href="https://wa.me/7014863105">7014863105</a>,{" "}
            <a href="https://wa.me/7568108383">7568108383</a>
          </p>
          <p className="text-white text-center">
            Email:{" "}
            <a href="https://mail.google.com/mail/u/1/#inbox?compose=CllgCJqSwFKBQxgrlFXdXlLGJPllDpCLbPkZXmBFwQXzqqRfVXHsrvfBhBSTsDVNjpvcpzbBTvB">
              brsonsjaipur@gmail.com
            </a>
          </p>
          <p className="text-white text-center"> </p>
        </div>
      </footer>
      <div className="bg-black flex flex-col md:flex-row justify-center items-center text-white text-center py-3 text-sm">
        <span className="flex items-center">
          Copyright <MdCopyright className="mx-1" /> 2024 All rights reserved |
        </span>
        <span className="flex items-center">
          Made by <span className="text-blue-700 ml-1">Softapper</span>
        </span>
      </div>
    </div>
  );
}

export default Footer;
