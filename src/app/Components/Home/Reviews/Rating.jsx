import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { IoStarOutline } from "react-icons/io5"; 

const Rating = ({ rating, totalStars = 5 }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0; 
  const emptyStars = totalStars - fullStars - (hasHalfStar ? 1 : 0); 

  return (
    <div className="flex space-x-1">
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={index} className="text-yellow-400" size={24} />
      ))}
      {hasHalfStar && (
        <FaStarHalfAlt className="text-yellow-400" size={24} />
      )}
      {[...Array(emptyStars)].map((_, index) => (
        <IoStarOutline key={index} className="text-gray-300" size={24} />
      ))}
    </div>
  );
};

export default Rating;
