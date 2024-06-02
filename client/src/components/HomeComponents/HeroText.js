import React from "react";
import { useMediaQuery } from "@react-hook/media-query";

const HeroText = () => {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  const isMediumScreen = useMediaQuery("(min-width: 768px)");
  if (isLargeScreen || isMediumScreen) {
    return (
      <div className="absolute top-[150px] left-0 w-full text-white text-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl lg:text-4xl font-bold mb-6">
            Welcome to BR SONS JEWELLERS
          </h1>
          <p className="text-lg lg:text-xl font-semibold mb-8">
            Discover timeless elegance and impeccable craftsmanship.
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl lg:text-4xl font-bold mb-6 text-center">
          Welcome to BR SONS JEWELLERS
        </h1>
        <p className="text-lg lg:text-xl font-semibold mb-8 text-center">
          Discover timeless elegance and impeccable craftsmanship.
        </p>
      </div>
    );
  }
};

export default HeroText;
