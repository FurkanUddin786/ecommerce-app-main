import React, { useEffect, useState } from "react";
import "../index.css";

const images = [
  "http://localhost:5173/src/assets/img/contact_img.png",
  "http://localhost:5173/src/assets/img/about_img.png",
  "http://localhost:5173/src/assets/img/contact_img.png",
  "http://localhost:5173/src/assets/img/about_img.png",
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
        setCurrentIndex((prev) =>
            prev === images.length - 1 ? 0 : prev + 1
        );
    }, 5000)
    return () => clearInterval(interval);
  }, [])

  return (
    <div className="slider-container">
      <button className="arrow left" onClick={goToPrev}>❮</button>
      <div className="slider-wrapper">
        {images.map((img, index) => (
          <div
            key={index}
            className={`slide ${currentIndex === index ? "active" : ""}`}
          >
            <img src={img} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <button className="arrow right" onClick={goToNext}>❯</button>
    </div>
  );
}
