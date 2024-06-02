import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navbar from "./HomeComponents/Navbar";
import Hero from "./HomeComponents/Hero";
import DiamondCarousel from "./HomeComponents/DiamondCarousel";
import GoldCarousel from "./HomeComponents/GoldCarousel";
import SilverCarousel from "./HomeComponents/SilverCarousel";
import KundanCarousel from "./HomeComponents/KundanCarousel";
import MeenaCarousel from "./HomeComponents/MeenaCarousel";
import GoldNormalCarousel from "./HomeComponents/GoldNormalCarousel";
import SilverNormalCarousel from "./HomeComponents/SilverNormalCarousel";
import Footer from "./HomeComponents/Footer";
import AboutUs from "./AboutUs";
import Map from "./Map";
import CustomerReviews from "./CustomerReviews";
import "../App.css";
import WhatsappSms from "./WhatsappSms";

const Home = () => {
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
        <div className="mt-[70px]">
          <GoldNormalCarousel />
          <GoldCarousel />
        </div>
      ),
    },
    {
      keys: ["silver", "Silver", "silver jewellery", "Silver Jewellery"],
      component: (
        <div className="mt-[70px]">
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
          <div>
            <GoldNormalCarousel />
            <GoldCarousel />
            <SilverNormalCarousel />
            <SilverCarousel />
            <KundanCarousel />
            <DiamondCarousel />
            <MeenaCarousel />
          </div>
        )}
      </AnimatedSection>
    );
  };

  return (
    <div className="font-thin">
      <Navbar className="fixed font-thin" onSearchChange={handleSearchChange} />
      <WhatsappSms />
      {!searchQuery && (
        <AnimatedSection>
          <Hero className="mt-[70px]" />
        </AnimatedSection>
      )}
      {!searchQuery && (
        <AnimatedSection>
          <AboutUs />
        </AnimatedSection>
      )}
      {renderComponents()}
      {!searchQuery && (
        <AnimatedSection>
          <CustomerReviews />
        </AnimatedSection>
      )}
      {!searchQuery && (
        <AnimatedSection>
          <Map />
        </AnimatedSection>
      )}
      <Footer />
    </div>
  );
};

export default Home;
