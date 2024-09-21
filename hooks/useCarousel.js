import { useState } from "react";

export function useCarousel(totalItems = 5) {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(currentIndex);

  const scrollNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems); // Loop back to start
  };

  const scrollPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - 1 : prevIndex - 1
    );
  };

  return {
    currentIndex,
    scrollNext,
    scrollPrev,
  };
}
