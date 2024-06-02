import React from "react";
import Carousel from "react-multi-carousel";
import { motion } from "framer-motion"; // Import motion from Framer Motion library for animations
import "react-multi-carousel/lib/styles.css";

function KundanCarousel() {
  const jewelryData = [
    
    { id: 1, name: "Royal Kundan Heritage Set", imageUrl: "/jewellery-images/Kundan/img12.jpg" },
    { id: 2, name: "Serene Kundan Dangles", imageUrl: "/jewellery-images/Kundan/img13.jpg" },
    { id: 3, name: "Elegant Kundan Charm Choker", imageUrl: "/jewellery-images/Kundan/img3.jpg" },
    { id: 4, name: "Opulent Kundan Ranihaar", imageUrl: "/jewellery-images/Kundan/img17.jpg" },
    { id: 5, name: "Majestic Kundan Ensemble", imageUrl: "/jewellery-images/Kundan/img5.jpg" },
    { id: 6, name: "Radiant Kundan Royalty Necklace", imageUrl: "/jewellery-images/Kundan/img6.jpg" },
    { id: 7, name: "Regal Kundan Tradition Set", imageUrl: "/jewellery-images/Kundan/img14.jpg" },
    { id: 8, name: "Exquisite Heirloom Collection", imageUrl: "/jewellery-images/Kundan/img8.jpg" },
    { id: 9, name: "Grand Kundan Rajputi Necklace", imageUrl: "/jewellery-images/Kundan/img15.jpg" },
    { id: 10, name: "Enchanting Kundan Ensemble", imageUrl: "/jewellery-images/Kundan/img10.webp" },
    { id: 11, name: "Magnificent Kundan Princess Set", imageUrl: "/jewellery-images/Kundan/img16.jpg" },
    { id: 12, name: "Luxurious Kundan Maharani Set", imageUrl: "/jewellery-images/Kundan/img18.jpg" },
    { id: 13, name: "Timeless Kundan Legacy Ensemble", imageUrl: "/jewellery-images/Kundan/img19.jpg" },
    { id: 14, name: "Divine Kundan Grace Collection", imageUrl: "/jewellery-images/Kundan/img20.jpg" },
    // { id: 15, name: "Mesmerizing Gold Toe Ring", imageUrl: "/jewellery-images/Kundan/img15.jpg" },
    // { id: 16, name: "Opulent Gold Belt", imageUrl: "/jewellery-images/Kundan/img16.jpg" },
  ];

  return (
    <div className="bg-gradient-to-b from-yellow-100 to-orange-200 py-12 "> {/* Added a gradient background */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl text-green-900 font-bold mb-8 text-gray-800 text-center">Discover Kundan Jewellery</h2>
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

export default KundanCarousel;