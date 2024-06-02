import React from "react";
import Carousel from "react-multi-carousel";
import { motion } from "framer-motion"; // Import motion from Framer Motion library for animations
import "react-multi-carousel/lib/styles.css";

function GoldNormalCarousel() {
  const jewelryData = [
    { id: 1, name: "Elegant Evening Gold Necklace Set", imageUrl: "/jewellery-images/GoldNormal/img1.jpg" },
    { id: 2, name: "Bohemian Bliss Necklace", imageUrl: "/jewellery-images/GoldNormal/img2.jpg" },
    { id: 3, name: "Mughal Splendor Gold Bangles", imageUrl: "/jewellery-images/GoldNormal/img3.jpg" },
    { id: 4, name: "Regal Royalty Gold Ensemble", imageUrl: "/jewellery-images/GoldNormal/img4.jpg" },
    { id: 5, name: "Sahara Sands Gold Necklace", imageUrl: "/jewellery-images/GoldNormal/img5.jpg" },
    { id: 6, name: "Maharani Gold Bangles", imageUrl: "/jewellery-images/GoldNormal/img6.jpg" },
    { id: 7, name: "Symphony Bangles and Necklace", imageUrl: "/jewellery-images/GoldNormal/img7.jpg" },
    { id: 8, name: "Fashionable Gold Bangle", imageUrl: "/jewellery-images/GoldNormal/img8.jpg" },
    { id: 9, name: "Venetian Dreams Gold Ensemble", imageUrl: "/jewellery-images/GoldNormal/img9.jpg" },
    { id: 10, name: "Graceful Sophia Gold Necklace Set", imageUrl: "/jewellery-images/GoldNormal/img10.jpg" },
    { id: 11, name: "Himalayan Horizon Necklace Set", imageUrl: "/jewellery-images/GoldNormal/img11.jpg" },
    { id: 12, name: "Extravagant Gold Brooch", imageUrl: "/jewellery-images/GoldNormal/img12.jpg" },
    { id: 13, name: "Sands Gold Necklace", imageUrl: "/jewellery-images/GoldNormal/img13.jpg" },
    { id: 14, name: "Radiant Gold Necklace", imageUrl: "/jewellery-images/GoldNormal/img14.jpg" },
    { id: 15, name: "Festive Fiesta Gold Bangles", imageUrl: "/jewellery-images/GoldNormal/img15.jpg" },
    { id: 16, name: "Everyday Elegance Gold Bangles", imageUrl: "/jewellery-images/GoldNormal/img16.jpg" },
  ];

  return (
    <div className="bg-gradient-to-b from-yellow-100 to-orange-200 py-12 "> {/* Added a gradient background */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl text-green-900 font-bold mb-8 text-gray-800 text-center">Discover Gold Jewellery</h2>
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

export default GoldNormalCarousel;