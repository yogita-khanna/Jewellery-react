// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { motion } from "framer-motion";
// import HeroCard from "./HeroCard";
// import HeroText from "./HeroText";

// const Carousel = () => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000, // Auto move every 3 seconds
//     pauseOnHover: true,
//   };

//   return (
//     <div className="relative mt-[50px] overflow-x-hidden overflow-y-hidden">
//       <Slider {...settings}>
//         {/* Slide 1 */}
//         <div className="relative">
//           <img
//             src="https://img.freepik.com/premium-photo/fashionable-pendant-jewelry-banner-with-shimmering-stone-generative-ai_753390-6088.jpg"
//             alt="Slide 2"
//             className="w-full h-[600px] object-cover"
//           />
//           <div className="absolute top-0 left-0 w-full h-full"></div>
//           <HeroText />
//         </div>

//         {/* Slide 2 */}
//         <div className="relative">
//           <img
//             src="https://bluenile-blog.r2net.com/wp-content/uploads/Gemstone-Trends-Hero-768x480.jpg"
//             alt="Slide 1"
//             className="w-full h-[600px] bg-black bg-opacity-70 object-cover"
//           />
//           <div className="absolute top-0 left-0 w-full h-full"></div>
//           <HeroText />
//         </div>
//         {/* Slide 3 */}
//         <div className="relative">
//           <img
//             src="https://img.freepik.com/free-vector/watercolor-burgundy-gold-background_23-2151091542.jpg"
//             alt="Slide 3"
//             className="w-full h-[600px] object-cover"
//           />
//           <div className="absolute top-0 left-0 w-full h-full"></div>
//           <HeroText />
//         </div>
//       </Slider>

//       {/* Position the HeroCard component at the bottom */}
//       <div className="absolute sm:hidden md:block bottom-5 left-0 right-0 flex justify-evenly items-center">
//         <HeroCard className="bg-white" />
//       </div>
//     </div>
//   );
// };

// export default Carousel;
