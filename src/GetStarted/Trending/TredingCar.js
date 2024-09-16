import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";

const TredingCar = ({ items }) => {
  const [slidesToShow, setSlidesToShow] = useState(5); // Default number of slides
  const [currentSlide, setCurrentSlide] = useState(0);  // Track the current slide index
  const sliderRef = useRef(null); // Ref for accessing the slider methods

  // Function to update the number of slides based on the screen width
  const updateSlidesToShow = () => {
    const screenWidth = window.innerWidth;
    const cardWidth = screenWidth * 0.15; // Set card width as 15% of screen width for 5 cards on PC

    // Calculate the number of cards that can fit within the screen width
    const numberOfSlides = Math.floor(0.75 * screenWidth / cardWidth); // 75% of screen width used for cards
    setSlidesToShow(numberOfSlides);
  };

  useEffect(() => {
    // Update the slides to show on load and whenever the window is resized
    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateSlidesToShow);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: false,               // Disable infinite scrolling
    speed: 500,
    slidesToShow: slidesToShow,    // Dynamically set based on screen size
    slidesToScroll: 1,             // Scroll one card at a time
    autoplay: false,
    arrows: false,                 // Disable default arrows, we'll add custom buttons
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),  // Track slide index
  };

  return (
    <div className="relative flex items-center justify-center w-[80vw] mt-5 mx-auto">
      {/* Previous button - conditionally visible */}
      {currentSlide > 0 && (
        <button
          onClick={() => sliderRef.current.slickPrev()}  // Go to previous slide
          className="absolute left-[-4vw] top-1/2 transform -translate-y-1/2 w-[4vw] h-[20vh] bg-gray-800 text-white rounded-md transition-opacity duration-300 ease-in-out opacity-100 hover:bg-gray-700 hover:opacity-80 z-10"
        >
          <GrFormPrevious className="text-2xl" />
        </button>
      )}

      {/* Carousel container */}
      <div className="w-[100%]">
        <Slider ref={sliderRef} {...settings}>
          {items.map((item, index) => (
            <div key={index} className="carousel-card p-4">
              <div
                className="relative w-[13vw] h-[40vh] border-2  rounded-lg bg-gray-800 border-black text-white text-center font-sans mx-2"
                style={{
                  backgroundImage: `url(${item.imageUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              >
   <span
      className="absolute bottom-2 left-[-10%] text-black font-bold text-8xl"
      style={{
        textShadow: '0 0 5px white, 0 0 5px white, 0 0 5px white, 0 0 5px white, 0 0 5px white', // Clean white text border effect
      }}
    >
      {item.label}
    </span>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Next button - conditionally visible */}
      {currentSlide < items.length - slidesToShow && (
        <button
          onClick={() => sliderRef.current.slickNext()}  // Go to next slide
          className="absolute right-[-4vw] top-1/2 transform -translate-y-1/2 w-[4vw] h-[20vh] bg-gray-800 text-white rounded-md transition-opacity duration-300 ease-in-out opacity-100 hover:bg-gray-700 hover:opacity-80 z-10"
        >
          <MdNavigateNext className="text-2xl" />
        </button>
      )}
    </div>
  );
};

export default TredingCar;
