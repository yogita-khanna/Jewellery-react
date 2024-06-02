import React from "react";
import Carousel from "react-multi-carousel";
import { motion } from "framer-motion";
import "react-multi-carousel/lib/styles.css";

function DiamondCarousel() {
  const jewelryData = [
    { id: 1, name: "Moonlight Majesty Ring", description: "Elegance wrapped in moonlight.", imageUrl: "/jewellery-images/Diamond/img1.jpg" },
    { id: 2, name: "Luminescent Lotus Necklace", description: "Lotus elegance in moonlight.", imageUrl: "/jewellery-images/Diamond/img6.jpg" },
    { id: 3, name: "Starlight Symphony Bracelet", description: "Symphony of stars on your wrist.", imageUrl: "/jewellery-images/Diamond/img3.jpg" },
    { id: 4, name: "Diamond Dewdrop Necklace", description: "Dewdrops of brilliance adorn.", imageUrl: "/jewellery-images/Diamond/img4.jpg" },
    { id: 5, name: "Twilight Whisper Necklace", description: "Whispering elegance of twilight.", imageUrl: "/jewellery-images/Diamond/img5.jpg" },
    { id: 6, name: "Celestial Sparkle Necklace Set", description: "Sparkling stars embrace heritage.", imageUrl: "/jewellery-images/Diamond/img17.jpg" },
    { id: 7, name: "Twilight Brilliance Earrings", description: "Twilight's sparkle in your ears.", imageUrl: "/jewellery-images/Diamond/img7.jpg" },
    { id: 8, name: "Opulent Orion Necklace", description: "Celestial opulence personified.", imageUrl: "/jewellery-images/Diamond/img8.jpg" },
    { id: 9, name: "Constellation Charm Bangle", description: "Captivating charm of constellations.", imageUrl: "/jewellery-images/Diamond/img9.jpg" },
    { id: 10, name: "Radiant Rainfall Necklace", description: "Diamonds cascade like rainfall.", imageUrl: "/jewellery-images/Diamond/img10.jpg" },
    { id: 11, name: "Majestic Moonbeam Butterfly", description: "Majestic grace of moonlit butterflies.", imageUrl: "/jewellery-images/Diamond/img11.jpg" },
    { id: 12, name: "Celestial Solitaire Ring", description: "Celestial love captured in a ring.", imageUrl: "/jewellery-images/Diamond/img12.jpg" },
    { id: 13, name: "Ethereal Essence Diamond Ring", description: "Timeless essence in diamond form.", imageUrl: "/jewellery-images/Diamond/img13.jpg" },
    { id: 14, name: "Magnificent Monarch", description: "Regal magnificence encapsulated.", imageUrl: "/jewellery-images/Diamond/img14.jpg" },
    { id: 15, name: "Forever Yours Necklace", description: "Eternal bond symbolized necklace.", imageUrl: "/jewellery-images/Diamond/img15.jpg" },
  ];
  

  return (
    <div className="bg-gradient-to-b from-yellow-100 to-orange-200 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl text-green-900 font-bold mb-8 text-gray-800">Diamond Jewellery</h2>
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
              style={{ height: "370px" }} // Set a fixed height for each card
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

export default DiamondCarousel;
