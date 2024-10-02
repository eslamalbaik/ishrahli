import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { IoStarOutline } from "react-icons/io5"; // For empty star

const Rating = ({ rating, totalStars = 5 }) => {
  const fullStars = Math.floor(rating); // Number of full stars
  const hasHalfStar = rating % 1 !== 0; // Check if it's a half-star rating
  const emptyStars = totalStars - fullStars - (hasHalfStar ? 1 : 0); // Remaining stars

  return React.createElement(
    "div",
    { className: "flex space-x-1" },
    ...[...Array(fullStars)].map((_, index) =>
      React.createElement(FaStar, {
        key: index,
        className: "text-yellow-400",
        size: 24,
      })
    ),
    hasHalfStar
      ? React.createElement(FaStarHalfAlt, {
          className: "text-yellow-400",
          size: 24,
        })
      : null,
    ...[...Array(emptyStars)].map((_, index) =>
      React.createElement(IoStarOutline, {
        key: index,
        className: "text-gray-300",
        size: 24,
      })
    )
  );
};

export default Rating;
