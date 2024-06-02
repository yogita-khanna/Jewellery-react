import React from "react";
import { motion } from "framer-motion";

const CustomerReview = ({ name, rating, review }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)" }} // Add hover animation
      className="overflow-x-hidden bg-gradient-to-r from-pink-100 to-pink-200 items-start justify-left rounded-lg shadow-md p-6 mb-4"
    >
      <div className="flex justify-left items-center">
        <div>
          <div className="flex items-start justify-left mb-4">
            {" "}
            {/* Align items to the start */}
            <h3 className="text-lg font-semibold mr-auto">{name}</h3>{" "}
            {/* Align text to the left */}
            <div className="flex justify-left items-center">
              <span className="mr-1 text-yellow-500">
                {[...Array(rating)].map((_, index) => (
                  <i key={index} className="fas fa-star"></i>
                ))}
              </span>
              <span className="text-gray-500">
                {[...Array(5 - rating)].map((_, index) => (
                  <i key={index} className="far fa-star"></i>
                ))}
              </span>
            </div>
          </div>
          <p className="text-gray-700">{review}</p>
        </div>
      </div>
    </motion.div>
  );
};

function CustomerReviews() {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      rating: 5,
      review: "Excellent quality and craftsmanship!",
    },
    {
      id: 2,
      name: "Jane Smith",
      rating: 4,
      review:
        "Beautiful designs, but delivery took a bit longer than expected.",
    },
    {
      id: 3,
      name: "Alice Johnson",
      rating: 5,
      review: "Absolutely stunning jewelry! I'm thrilled with my purchase.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-6 pb-6 bg-cover bg-center flex items-center justify-center font-sans text-gray-800"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/jewellery-images/review.avif)`,
          backgroundSize: "cover",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4">Customer Reviews</h2>
          {reviews.map((review) => (
            <CustomerReview key={review.id} {...review} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default CustomerReviews;
