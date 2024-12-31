import React, { useState, useEffect } from "react";
import img1 from "../../assets/gift.jpg";
import img2 from "../../assets/gift.jpg";
import img3 from "../../assets/gift.jpg";
import Hero from "./Hero";
import Heading from "./Heading";
import Services from "./Services";
import About from "../About";

export default function Slider() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: img1,
      title: "Exclusive Gifts",
      description: "Find the perfect gift for your loved ones.",
    },
    {
      image: img2,
      title: "Amazing Offers",
      description: "Unwrap happiness with our special deals.",
    },
    {
      image: img3,
      title: "Celebrate Moments",
      description: "Capture memories with our unique products.",
    },
  ];

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };



  return (
    <div className="relative w-full font-sans pt-1">
      <div className="relative w-full h-[500px] bg-gray-200 overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            index === currentIndex ? "translate-x-0" : "translate-x-full"
          } ${index < currentIndex ? "-translate-x-full" : ""}`}
          style={{
            transform: `translateX(${(index - currentIndex) * 100}%)`,
          }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
            <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
            <p className="text-lg">{slide.description}</p>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex
                ? "bg-white"
                : "bg-gray-400 hover:bg-gray-200"
            }`}
          ></button>
        ))}
      </div>
    </div>

      {/* Additional Components */}
      <Hero />
      <Heading />
      <Services />
      <About />
    </div>
  );
}
