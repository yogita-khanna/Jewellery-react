import React from "react";
import Carousel from "react-multi-carousel";
import { motion } from "framer-motion";
import "react-multi-carousel/lib/styles.css";

function GoldCarousel() {
  const jewelryData = [
    { id: 1, name: "Royal Rajkumari Jewellery", description:"Opulent set with intricate gold necklaces and earrings.", imageUrl: "/jewellery-images/Gold/img1.jpg" },
    { id: 2, name: "Rajputi Heritage Haar", description:"Embrace the rich cultural heritage of Rajasthan.", imageUrl: "/jewellery-images/Gold/img2.jpg" },
    { id: 3, name: "Maharani Magnificence Ensemble", description:"Embellished with filigree work and dazzling gemstones.", imageUrl: "/jewellery-images/Gold/img3.jpg" },
    { id: 4, name: "Royal Rajputi Ranihaar Set", description:"Inspired by majestic necklaces worn by Rajputi queens.", imageUrl: "/jewellery-images/Gold/img4.jpg" },
    { id: 5, name: "Rajwada Royalty Necklace Set", description:"Elevates style with timeless elegance, inspired by grandeur of Rajputi palaces.", imageUrl: "/jewellery-images/Gold/img5.jpg" },
    { id: 6, name: "Rajputi Charm Choker Set", description:"Adds touch of Rajputi charm to ensemble.", imageUrl: "/jewellery-images/Gold/img6.jpg" },
    { id: 7, name: "Golden Rajputana Heirloom Ensemble", description:"Infused with splendor of Rajasthan's royal courts.", imageUrl: "/jewellery-images/Gold/img7.jpg" },
    { id: 8, name: "Rajasthani Ranihaar Ensemble", description:"Radiates with aura of Rajasthani royalty.", imageUrl: "/jewellery-images/Gold/img8.jpg" },
    { id: 9, name: "Rajputana Regalia Set", description:"Symbol of aristocratic charm and regal allure.", imageUrl: "/jewellery-images/Gold/img9.jpg" },
    { id: 10, name: "Golden Rajputi Tradition Set", description:"Revives splendor of Rajputi traditions.", imageUrl: "/jewellery-images/Gold/img10.jpg" },
  ];

  return (
    <div className="bg-gradient-to-b from-yellow-100 to-orange-200 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl text-green-900 font-bold mb-8 text-gray-800">Gold Rajputi Jewellery</h2>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className="bg-transparent"
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
          transitionDuration={500}
        >
          {jewelryData.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.05 }}
              className="jewelry-card bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
              style={{ height: "400px" }} // Set a fixed height for each card
            >
              <div
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL + item.imageUrl})` }}
              ></div>
              <div className="p-4 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default GoldCarousel;
