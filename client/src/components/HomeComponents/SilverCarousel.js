import React from "react";
import Carousel from "react-multi-carousel";
import { motion } from "framer-motion";
import "react-multi-carousel/lib/styles.css";

function SilverCarousel() {
  const jewelryData = [
    { id: 1, name: "Royal Rajputi Bangles Set", description:"Intricate designs, perfect for adding elegance.", imageUrl: "/jewellery-images/Silver/img1.jpg" },
    { id: 2, name: "Rajputi Regal Kada", description:"Rich heritage of Rajasthan, timeless piece.", imageUrl: "/jewellery-images/Silver/img2.jpg" },
    { id: 3, name: "Royal Rajputi Choker Bangle", description:"Elegant choker bangle with dazzling gemstones.", imageUrl: "/jewellery-images/Silver/img3.jpg" },
    { id: 4, name: "Rajputi Heritage Bangles", description:"Majestic bangles inspired by Rajputi queens.", imageUrl: "/jewellery-images/Silver/img4.jpg" },
    { id: 5, name: "Regal Hair Ornaments", description:"Grandeur of Rajputi palaces, elevate your style.", imageUrl: "/jewellery-images/Silver/img5.jpg" },
    { id: 6, name: "Maharani Hair Earrings", description:"Rajputi charm for your hair, intricate designs.", imageUrl: "/jewellery-images/Silver/img6.jpg" },
    { id: 7, name: "Radiant Rajputi Rings", description:"Splendor of Rajasthan's royal courts, elegant rings.", imageUrl: "/jewellery-images/Silver/img7.jpg" },
    { id: 8, name: "Rajputi Regalia Choker Set", description:"Aura of Rajasthani royalty, stunning choker set.", imageUrl: "/jewellery-images/Silver/img8.jpg" },
    { id: 9, name: "Rajputi Serenity Necklace Set", description:"Aristocratic charm and regal allure, sophisticated set.", imageUrl: "/jewellery-images/Silver/img9.jpg" },
    { id: 10, name: "Rajputana Anklet Adorn", description:"Revive Rajputi traditions, elegant anklet.", imageUrl: "/jewellery-images/Silver/img10.jpg" },
    { id: 11, name: "Rajputi Grace Choker Set", description:"Intricate designs, perfect for adding elegance.", imageUrl: "/jewellery-images/Silver/img11.jpg" },
    { id: 12, name: "Rajputi Heritage Haar", description:"Rich heritage of Rajasthan, timeless piece.", imageUrl: "/jewellery-images/Silver/img12.jpg" },
    { id: 13, name: "Maharani Magnificence Ensemble", description:"Elegant choker bangle with dazzling gemstones.", imageUrl: "/jewellery-images/Silver/img13.jpg" },
    { id: 14, name: "Anklet of Elegance", description:"Majestic bangles inspired by Rajputi queens.", imageUrl: "/jewellery-images/Silver/img14.jpg" },
    { id: 15, name: "Rajwada Silver Bangles Ensemble", description:"Grandeur of Rajputi palaces, elevate your style.", imageUrl: "/jewellery-images/Silver/img15.jpg" },
  ];

  return (
    <div className="bg-gradient-to-b from-yellow-100 to-orange-200 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl text-green-900 font-bold mb-8 text-gray-800">Silver Rajputi Jewellery</h2>
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

export default SilverCarousel;
