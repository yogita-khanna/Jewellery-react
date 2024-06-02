import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@react-hook/media-query";
import { IoHome, IoMail } from "react-icons/io5";
import { MdOutlineRoundaboutLeft } from "react-icons/md";

function Navbar({ onSearchChange }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    onSearchChange(e);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  const isMediumScreen = useMediaQuery("(min-width: 768px)");

  const navContent = (
    <>
      <Link to="/" onClick={scrollToTop} className="flex items-center">
        <div
          className="w-20 h-16 bg-white rounded-full overflow-hidden"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/jewellery-images/logo.jpg"
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          alt="Logo"
        ></div>
      </Link>
      <Link to="/" onClick={scrollToTop}><div className="font-bold text-xl">BR SONS JEWELLERS</div></Link>
      <input
        type="search"
        id="search"
        name="search"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="   Search Here !!!"
        className="ml-4 mr-1 text-black w-[60%] h-10 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
      />
      <Link to="/aboutus">
        <button className="ml-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md text-md font-medium transition duration-300 flex items-center space-x-2">
          <MdOutlineRoundaboutLeft />
          <span>About</span>
        </button>
      </Link>
      <Link to="/contactus">
        <button className="ml-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md text-md font-medium transition duration-300 flex items-center space-x-2">
          <IoMail />
          <span>Contact</span>
        </button>
      </Link>
    </>
  );

  return (
    <nav style={{zIndex:1001}} className="fixed top-0 z-20 h-20 bg-gray-900 flex justify-evenly items-center text-white shadow-lg w-full">
      {isLargeScreen || isMediumScreen ? navContent : (
        <>
          <Link to="/" onClick={scrollToTop} className="flex items-center">
            <div
              className="w-20 h-16 bg-white rounded-full overflow-hidden"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/jewellery-images/logo.jpg"
                })`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              alt="Logo"
            ></div>
          </Link>
          <Link to="/" onClick={scrollToTop}><div className="font-bold">BR SONS JEWELLERS</div></Link>
          <Link to="/aboutus">
            <button className="ml-2 bg-gray-800 hover:bg-gray-700 text-white px-1 py-1 rounded-md text-md font-medium transition duration-300 flex items-center space-x-2">
              <MdOutlineRoundaboutLeft />
              <span>About</span>
            </button>
          </Link>
          <Link to="/contactus">
            <button className="ml-2 mr-2 bg-gray-800 hover:bg-gray-700 text-white px-1 py-1 rounded-md text-md font-medium transition duration-300 flex items-center space-x-2">
              <IoMail />
              <span>Contact</span>
            </button>
          </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
