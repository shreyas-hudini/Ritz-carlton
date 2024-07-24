import React, { useState } from "react";
import './coursel.css';
import {images} from './courselData.js';
import HamburgerMenu from "./Hamburger.js";
 
 
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
 
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
 
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
 
  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };
 
  const handleImageClick = (e) => {
    const { offsetX, target } = e.nativeEvent;
    const clickPosition = offsetX / target.clientWidth;
    if (clickPosition < 0.5) {
      handlePrevious();
    } else {
      handleNext();
    }
  };
 
  const isVideo = (url) => {
    return url.match(/\.(mp4|webm|ogg)$/) !== null;
};
 
return ( 
  <div className="carousel">
    <div className="carousel-container">
      {/* <button className="carousel-button" onClick={handlePrevious}>
        {" "}
        ⮜{" "}
      </button> */}
 
      <div className="image-text-container">
        {isVideo(images[currentIndex].url) ? (
          <video
            muted
            className="carousel-video"
            src={images[currentIndex].url}
            autoPlay
            loop
            onClick={handleImageClick}
          />
        ) : (
          <img
            className="carousel-image"
            src={images[currentIndex].url}
            alt={images[currentIndex].heading}
            onClick={handleImageClick}
          />
        )}
        <div className="img-txt">
        <h2 className="image-overlay-text">{images[currentIndex].heading}</h2>
        <p className="image-overlay-desc">{images[currentIndex].description}</p> </div>
      </div>
 
      {/* <button className="carousel-button" onClick={handleNext}>
        {" "}
        ⮞{" "}
      </button> */}
    </div>
 
    {/* <div>
      {images.map((_, index) => (
        <button
          key={index}
          className={`carousel-indicator ${
            index === currentIndex ? "active" : ""
            }`}
            onClick={() => handleIndicatorClick(index)}
          ></button>
        ))}
      </div> */}
    </div>
  );
};

export default Carousel;
