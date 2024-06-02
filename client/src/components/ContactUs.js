import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/HomeComponents/Navbar";
import Footer from "./HomeComponents/Footer";
import "../App.css";
import { FaWhatsapp } from "react-icons/fa";
import { FaCommentSms } from "react-icons/fa6";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import GoldNormalCarousel from "./HomeComponents/GoldNormalCarousel";
import GoldCarousel from "./HomeComponents/GoldCarousel";
import SilverNormalCarousel from "./HomeComponents/SilverNormalCarousel";
import SilverCarousel from "./HomeComponents/SilverCarousel";
import DiamondCarousel from "./HomeComponents/DiamondCarousel";
import KundanCarousel from "./HomeComponents/KundanCarousel";
import MeenaCarousel from "./HomeComponents/MeenaCarousel";
import { useInView } from "react-intersection-observer";
import WhatsappSms from "./WhatsappSms";

function ContactUs({ onSearchChange }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const AnimatedSection = ({ children }) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    );
  };

  const carousels = [
    {
      keys: ["gold", "Gold", "gold jewellery", "Gold Jewellery"],
      component: (
        <div className="mt-[70px] p-2">
          <GoldNormalCarousel />
          <GoldCarousel />
        </div>
      ),
    },
    {
      keys: ["silver", "Silver", "silver jewellery", "Silver Jewellery"],
      component: (
        <div className="mt-[70px] p-2">
          <SilverNormalCarousel />
          <SilverCarousel />
        </div>
      ),
    },
    {
      keys: ["silver rajputi", "rajputi", "Silver Rajputi", "Silver Rajputi Jewellery", "gold rajputi", "silver and gold rajputi", "Gold Rajputi", "Gold Rajputi Jewellery", "Silver and Gold Rajputi Jewellery"],
      component: (
        <div className="mt-[70px]">
          <GoldCarousel />
          <SilverCarousel />
        </div>
      ),
    },
    {
      keys: ["diamond", "Diamond", "diamond jewellery", "Diamond Jewellery"],
      component: (
        <div className="mt-[70px]">
          <DiamondCarousel />
        </div>
      ),
    },
    {
      keys: ["kundan", "Kundan", "kundan jewellery", "Kundan Jewellery"],
      component: (
        <div className="mt-[70px]">
          <KundanCarousel />
        </div>
      ),
    },
    {
      keys: ["meena", "Meena", "meena jewellery", "Meena Jewellery"],
      component: (
        <div className="mt-[70px]">
          <MeenaCarousel />
        </div>
      ),
    },
  ];

  const renderComponents = () => {
    const query = searchQuery.toLowerCase();
    const matchedCarousel = carousels.find((carousel) =>
      carousel.keys.includes(query)
    );

    return (
      <AnimatedSection>
        {matchedCarousel ? (
          matchedCarousel.component
        ) : (
          <div></div>
        )}
      </AnimatedSection>
    );
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation checks
    const phoneRegex = /^\d{10}$/; // Regex for 10 digits
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format regex

    if (!name || !email || !message || !phone) {
      alert("Please fill in all the fields.");
      return;
    }

    if (!phone.match(phoneRegex)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    if (!email.match(emailRegex)) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:4444/api/contact", {
        name,
        email,
        message,
        phone,
      });

      if (response.data.success) {
        setSuccessMessage(response.data.message);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        alert("We'll Contact You Soon");
        navigate("/");
      } else {
        setErrorMessage(response.data.message || "An error occurred.");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        alert("Email or Phone Number Already exists.");
        setErrorMessage(error.response.data.message || "An error occurred.");
      } else {
        alert("Something went wrong. Please try again later.");
        setErrorMessage("Something went wrong. Please try again later.");
      }
    }
  };

  return (
    <div className="font-thin flex flex-col">
      <WhatsappSms/>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        // className={{"font-thin"}}
        className="font-thin flex-grow pt-[90px] bg-cover p-8 bg-center flex items-center justify-center font-sans text-gray-800"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/jewellery-images/contact.jpg"
          })`,
        }}
      >
        <Navbar onSearchChange={handleSearchChange} />
        {renderComponents()}
        {!searchQuery && (<motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-lg w-full md:w-4/5 lg:w-3/4 xl:w-2/3 mx-auto px-4 sm:px-6 lg:px-8 bg-white p-6 rounded-lg shadow-md"

          // className="max-w-lg w-[100%] mx-auto px-4 sm:px-6 lg:px-8 bg-white p-6 rounded-lg shadow-md"
        >
          <h2 className="text-4xl font-bold mb-4 text-center">Contact Us</h2>
          <p className="text-sm mb-1 text-center">
            Need to get in touch? We are always here to assist you! Please don't
            hesitate to use the chat, give us a call, or send us an email.
          </p>
          <p className="text-sm mb-1 text-center font-semibold">
            Phone: <a href="https://wa.me/7014863105">7014863105</a>,{" "}
            <a href="https://wa.me/7568108383">7568108383</a>
          </p>
          <a href="https://mail.google.com/mail/u/1/#inbox?compose=CllgCJqSwFKBQxgrlFXdXlLGJPllDpCLbPkZXmBFwQXzqqRfVXHsrvfBhBSTsDVNjpvcpzbBTvB">
            <p className="text-sm mb-6 text-center font-semibold">
              Email: brsonsjaipur@gmail.com
            </p>
          </a>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="text-left block font-semibold text-lg"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block font-semibold text-lg text-left"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block font-semibold text-lg text-left"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter Phone Number"
                className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block font-semibold text-lg text-left"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="4"
                placeholder="Your message"
                className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              ></textarea>
            </div>
            <div className="text-center">
              <motion.button
                type="submit"
                className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition duration-300"
              >
                Send Message
              </motion.button>
            </div>
          </form>
        </motion.div>)}
      </motion.div>

      <Footer />
    </div>
  );
}

export default ContactUs;
