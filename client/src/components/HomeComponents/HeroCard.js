import React from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@react-hook/media-query";

const HeroCard = () => {
  // Define your screen size breakpoints
  const isXLargeScreen = useMediaQuery("(min-width: 1280px)");
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  const isMediumScreen = useMediaQuery("(min-width: 768px)");
  const isSmallScreen = useMediaQuery("(min-width: 640px)");
  const isExtraSmallScreen = useMediaQuery("(min-width: 480px)");

  // Render the HeroCard component conditionally based on screen sizes
  if (isLargeScreen || isMediumScreen) {
    return (
      <div className="overflow-x-hidden overflow-y-hidden">
        <div className="flex justify-evenly items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="max-w-xs rounded overflow-hidden shadow-xl" // Adjusted max-w-xs for smaller card size
          >
            <div className="flex">
              <img
                src="data:image/jpeg;base64,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"
                // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxy7TPB6pUhuvQ-KVBBni5u1r6gvCJS269YQ&s"
                alt="Card 2"
                className="w-[35%] object-cover" // Adjusted image size
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxy7TPB6pUhuvQ-KVBBni5u1r6gvCJS269YQ&s"
                alt="BR SONS JEWELLERS"
                className="w-full"
              />
            </div>

            <div className="px-4 py-2 bg-white">
              <div className="font-bold text-lg mb-2">BR SONS JEWELLERS</div>
              <p className="text-gray-700 text-base">
                With decades of expertise handed down through generations, each
                piece of jewelry is meticulously crafted with precision and
                passion
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="max-w-xs rounded overflow-hidden shadow-xl" // Adjusted max-w-xs for smaller card size
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXGLZBG8D-sdn4lXbiB0-4QSmEBz-H7C3qyQ&s"
              alt="BR SONS JEWELLERS"
              className="w-full"
            />
            <div className="px-4 py-2 bg-white">
              <div className="font-bold text-lg mb-2">
                Experience Unmatched Craftsmanship
              </div>
              <p className="text-gray-700 text-base">
                Where excellence is not just a standard but a way of life.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};
export default HeroCard;
