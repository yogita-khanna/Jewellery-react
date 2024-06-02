import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./HomeComponents/Navbar";
import Footer from "./HomeComponents/Footer";
import GoldNormalCarousel from "./HomeComponents/GoldNormalCarousel";
import GoldCarousel from "./HomeComponents/GoldCarousel";
import SilverNormalCarousel from "./HomeComponents/SilverNormalCarousel";
import SilverCarousel from "./HomeComponents/SilverCarousel";
import DiamondCarousel from "./HomeComponents/DiamondCarousel";
import KundanCarousel from "./HomeComponents/KundanCarousel";
import MeenaCarousel from "./HomeComponents/MeenaCarousel";
import History from "./History";
import { useInView } from "react-intersection-observer";
import { FaWhatsapp } from "react-icons/fa";
import { FaCommentSms } from "react-icons/fa6";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import Mission from "./Mission";
import Team from "./Team";
import Values from "./Values";
import WhatsappSms from "./WhatsappSms";

const paragraphs = [
  {
    id: "1",
    content:
      "Discover the artistry of fine jewellery at BR Sons Jewellers. Founded with a vision to create exquisite pieces that transcend time, we take pride in our commitment to craftsmanship, quality, and customer satisfaction.",
  },
  {
    id: "2",
    content:
      "Our journey began with a passion for transforming precious metals and gemstones into captivating works of art. Each piece in our collection is meticulously crafted by skilled artisans, blending traditional techniques with contemporary design aesthetics.",
  },
  {
    id: "3",
    content:
      "From timeless classics to modern marvels, our diverse range of jewellery caters to every style and occasion. Whether you're seeking a dazzling diamond ring, an elegant necklace, or a statement bracelet, our collection offers something for everyone.",
  },
  {
    id: "4",
    content:
      "Explore our collection and embark on a journey of beauty, elegance, and sophistication with BR Sons Jewellers.",
  },
];

// Card component
const Card = ({ content, index }) => {
  return (
    <motion.div
      className="bg-gradient-to-r from-yellow-100 to-orange-100 text-black hover:text-green-900 font-semibold rounded-lg shadow-md p-4 mb-1"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <p className="text-lg">{content}</p>
    </motion.div>
  );
};

const About = ({ onSearchChange }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [cards, setCards] = useState(paragraphs);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(cards);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setCards(items);
  };

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
        <div className="mt-[0px]">
          <GoldNormalCarousel />
          <GoldCarousel />
        </div>
      ),
    },
    {
      keys: ["silver", "Silver", "silver jewellery", "Silver Jewellery"],
      component: (
        <div className="mt-[0px]">
          <SilverNormalCarousel />
          <SilverCarousel />
        </div>
      ),
    },
    {
      keys: ["silver rajputi", "rajputi", "Silver Rajputi", "Silver Rajputi Jewellery", "gold rajputi", "silver and gold rajputi", "Gold Rajputi", "Gold Rajputi Jewellery", "Silver and Gold Rajputi Jewellery"],
      component: (
        <div className="mt-[0px]">
          <GoldCarousel />
          <SilverCarousel />
        </div>
      ),
    },
    {
      keys: ["diamond", "Diamond", "diamond jewellery", "Diamond Jewellery"],
      component: (
        <div className="mt-[0px]">
          <DiamondCarousel />
        </div>
      ),
    },
    {
      keys: ["kundan", "Kundan", "kundan jewellery", "Kundan Jewellery"],
      component: (
        <div className="mt-[0px]">
          <KundanCarousel />
        </div>
      ),
    },
    {
      keys: ["meena", "Meena", "meena jewellery", "Meena Jewellery"],
      component: (
        <div className="mt-[0px]">
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

  return (
    <div className="font-thin">
      <div className="h-[50px]">
        <Navbar onSearchChange={handleSearchChange} />
      </div>
      {renderComponents()}
      <WhatsappSms />
      {!searchQuery && (
        <div>
          <AnimatedSection>
            <div className="flex flex-col font-thin">
              <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="about-section">
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className="relative bg-cover bg-center font-sans text-gray-800"
                      style={{
                        backgroundImage: `url(${process.env.PUBLIC_URL}/jewellery-images/about/about.webp)`,
                        height: "auto",
                      }}
                    >
                      <div className="backdrop-filter backdrop-brightness-50 w-full">
                        <div className=" max-w-4xl mx-auto px-4 py-8 text-white md:px-6 lg:px-8 xl:px-16 xl:py-12 overflow-y-auto">
                          <h1 className="text-4xl font-bold mb-4">ABOUT US</h1>
                          <div className="flex flex-col w-full">
                            {cards.map((paragraph, index) => (
                              <Draggable
                                key={paragraph.id}
                                draggableId={paragraph.id}
                                index={index}
                              >
                                {(provided) => (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    className="w-full"
                                  >
                                    <Card
                                      content={paragraph.content}
                                      index={index}
                                    />
                                  </div>
                                )}
                              </Draggable>
                            ))}
                          </div>
                          {provided.placeholder}
                        </div>
                      </div>
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
            </div>
          </AnimatedSection>

          <AnimatedSection
            className="py-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <History />
          </AnimatedSection>

          <AnimatedSection
            className="py-8 bg-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Mission />
          </AnimatedSection>

          <AnimatedSection
            className="py-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Team />
          </AnimatedSection>

          <AnimatedSection
            className="py-8 bg-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Values />
          </AnimatedSection>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default About;
