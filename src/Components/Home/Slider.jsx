import React, { useState, useEffect } from "react";
import img from "../../assets/gift.jpg";
import img2 from "../../assets/gift.jpg";
import img3 from "../../assets/gift.jpg";
import Hero from "./Hero";
import Heading from "./Heading";

export default function Slider() {
  const slides = [
    {
      id: 1,
      image: img,
      heading: "The home should be the treasure chest of living",
    },
    {
      id: 2,
      image: img2,
      heading: "Colors are the smiles of nature",
    },
    {
      id: 3,
      image: img3,
      heading: "Design is thinking made visual",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [open, setOpen] = useState(false); // State for modal form visibility

  useEffect(() => {
    if (!open) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [slides.length, open]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className="relative font-sans">
      {/* Slider Section */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <div className="relative min-w-full" key={slide.id}>
              <img
                src={slide.image}
                alt={slide.heading}
                className="w-full h-screen sm:h-[80vh] lg:h-[90vh] object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center px-4">
                <h1 className="text-white font-playfair text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                  {slide.heading}
                </h1>
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="bg-red-900 text-white px-8 py-3 rounded-full text-lg sm:text-xl font-medium font-roboto shadow-lg hover:bg-red-800 hover:scale-105 hover:shadow-2xl transition-transform duration-300 ease-in-out"
                >
                  BOOK FREE CONSULTATION
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="absolute  left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${index === currentIndex
                ? "bg-yellow-500"
                : "bg-gray-300 hover:bg-gray-500"
              }`}
          ></button>
        ))}
      </div>

      
      <Hero/>
      <Heading/>
    </div>
  
  );
}
