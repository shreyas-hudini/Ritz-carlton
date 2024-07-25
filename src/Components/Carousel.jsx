import React, { useState, useEffect } from "react";
import './coursel.css';
import {textItems} from './courselData.js';
 
 
const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
 
  useEffect(() => {
    const handleSlideChange = (event) => {
      if (event.clientX < window.innerWidth / 2) {
        setCurrentSlide(
          (currentSlide - 1 + textItems.length) % textItems.length
        );
      } else {
        setCurrentSlide((currentSlide + 1) % textItems.length);
      }
    };

    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % textItems.length);
    }, 3000);

    document.addEventListener("click", handleSlideChange);

    return () => {
      document.removeEventListener("click", handleSlideChange);
      clearInterval(interval);
    };
  }, [currentSlide, textItems.length]);
  
return ( 
  <div className="carousel">
  <div className="carousel-container">
    <video
      src="https://videos.pexels.com/video-files/4069480/4069480-uhd_2560_1440_25fps.mp4"
      autoPlay
      loop
      muted
    />
    <div className="img-txt">
      <h1 className="image-overlay-text">The Ritz-Carlton Kyoto</h1>
      <div className="scroll">
        <p className="image-overlay-desc">{textItems[currentSlide].description}</p>
      </div>
    </div>
  </div>
</div>
  );
};

export default Carousel;
