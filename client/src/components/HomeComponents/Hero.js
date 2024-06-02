import React, { useState, useEffect } from 'react';
import './Carousel.css';
import { Link } from "react-router-dom";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'jewellery-images/hero1.jpg',
    'jewellery-images/hero2.jpg',
    'jewellery-images/hero3.jpg',
    'jewellery-images/hero4.webp',
    'jewellery-images/hero5.webp'
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(intervalId); // Cleanup function to clear the interval on component unmount
  }, [currentIndex]); // Run effect whenever currentIndex changes

  return (
    <div className="carousel-container relative w-full h-[650px]">
      <div
        className="carousel-main-image absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/${images[currentIndex]})` }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="carousel-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-85 p-6 rounded-lg text-center z-10">
        <h2 className='text-black font-bold text-3xl mb-2'>Welcome to BR SONS JEWELLERS</h2>
        <p className='text-black text-lg font-semibold mb-4'>Aapka Apna Family Sunnar.</p>
        <Link to='/aboutus'><button className='text-white bg-blue-800 px-4 py-2 rounded-lg'>Read More</button></Link>
      </div>
      <div className="carousel-thumbnail absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((image, index) => (
          <img
            key={index}
            src={`${process.env.PUBLIC_URL}/${image}`}
            alt={`Slide ${index + 1}`}
            className={`w-20 h-auto sm:w-24 sm:h-auto md:w-28 md:h-auto lg:w-32 lg:h-auto xl:w-36 xl:h-auto object-cover rounded-lg cursor-pointer ${index === currentIndex ? 'border-4 border-blue-500' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 flex justify-between w-full px-4">
        <button className="carousel-prev text-3xl text-white bg-gray-800 bg-opacity-50 p-2 rounded-full hover:bg-opacity-75" onClick={handlePrev}>&#10094;</button>
        <button className="carousel-next text-3xl text-white bg-gray-800 bg-opacity-50 p-2 rounded-full hover:bg-opacity-75" onClick={handleNext}>&#10095;</button>
      </div>
    </div>
  );
};

export default Carousel;
