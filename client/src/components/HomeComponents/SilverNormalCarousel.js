import React from "react";
import Carousel from "react-multi-carousel";
import { motion } from "framer-motion"; // Import motion from Framer Motion library for animations
import "react-multi-carousel/lib/styles.css";

function SilverNormalCarousel() {
  const jewelryData = [
    { id: 1, name: "Elegant Silver Jewellery", imageUrl: "/jewellery-images/SilverNormal/img1.jpg" },
    { id: 2, name: "Silver Serenity Set", imageUrl: "/jewellery-images/SilverNormal/img2.jpg" },
    { id: 3, name: "Celestial Symphony Collection", imageUrl: "/jewellery-images/SilverNormal/img3.jpg" },
    { id: 4, name: "Whispering Willow Collection", imageUrl: "/jewellery-images/SilverNormal/img4.jpg" },
    { id: 5, name: "Moonlit Mirage Ensemble", imageUrl: "/jewellery-images/SilverNormal/img5.jpg" },
    { id: 6, name: "Silver Moonbeam Earrings", imageUrl: "/jewellery-images/SilverNormal/img6.jpg" },
    { id: 7, name: "ilver Starlight Sparkle", imageUrl: "/jewellery-images/SilverNormal/img7.jpg" },
    { id: 8, name: "Starlight Sparkle Set", imageUrl: "/jewellery-images/SilverNormal/img8.jpg" },
    { id: 9, name: "Luminescent Lotus Collection", imageUrl: "/jewellery-images/SilverNormal/img9.jpg" },
    { id: 10, name: "Silver Stardust Adornments", imageUrl: "/jewellery-images/SilverNormal/img10.jpg" },
    { id: 11, name: "Twilight Tranquility Ensemble", imageUrl: "/jewellery-images/SilverNormal/img11.jpg" },
    { id: 12, name: "Celestial Serenade Set", imageUrl: "/jewellery-images/SilverNormal/img12.jpg" },
    { id: 13, name: "Serene Silver Symphony", imageUrl: "/jewellery-images/SilverNormal/img13.jpg" },
    { id: 14, name: "Ethereal Elegance Set", imageUrl: "/jewellery-images/SilverNormal/img14.jpg" },
    { id: 15, name: "Whispering Willow Drops", imageUrl: "/jewellery-images/SilverNormal/img15.jpg" },
    { id: 16, name: "Mesmerizing Silver Ring", imageUrl: "/jewellery-images/SilverNormal/img16.jpg" },
  ];

  return (
    <div className="bg-gradient-to-b from-yellow-100 to-orange-200 py-12 "> {/* Added a gradient background */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl text-green-900 font-bold mb-8 text-gray-800 text-center">Discover Silver Jewellery</h2>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          containerClass="carousel-container"
          draggable
          focusOnSelect={false}
          infinite
          itemClass="carousel-item"
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 4,
              slidesToSlide: 3,
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2,
              slidesToSlide: 2,
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1,
              slidesToSlide: 1,
            },
          }}
          showDots={false}
          sliderClass=""
          swipeable
        >
          {jewelryData.map((item) => (
            <motion.div key={item.id} whileHover={{ scale: 1.05 }} className="jewelry-card">
              <div
                className="p-4 rounded-lg h-72 overflow-hidden bg-cover bg-center shadow-md"
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL + item.imageUrl})` }}
              >
                <div className="bg-black bg-opacity-40 p-2 rounded-md absolute bottom-0 left-0 right-0">
                  <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default SilverNormalCarousel;