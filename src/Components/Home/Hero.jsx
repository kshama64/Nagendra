import React, { useEffect, useRef } from "react";

export default function Hero() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const imageWidth = slider.firstChild.offsetWidth; // Get the width of one image
    let scrollAmount = 0;

    // Adjustable sliding speed (faster)
    const slideInterval = setInterval(() => {
      scrollAmount += imageWidth; // Scroll by one image width
      
      // Check if the slider has scrolled to the end
      if (scrollAmount >= slider.scrollWidth / 2) {
        // If it has, reset the scroll position to the start of the first set of images
        scrollAmount = 0;
      }

      slider.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }, 500); // 500ms for a faster sliding speed

    return () => clearInterval(slideInterval); // Cleanup on component unmount
  }, []);

  return (
    <>
      <div className="mt-10 w-full">
        <h1 className="text-center text-2xl font-bold">Some of our happy customers</h1>
      </div>
      <div
        ref={sliderRef}
        className="flex mt-6 w-full whitespace-nowrap overflow-hidden max-w-full mx-auto">
        {/* First Set of Images */}
        <img
          src="https://tse4.mm.bing.net/th?id=OIP.HxV79tFMPfBAIo0BBF-sOgHaEy&pid=Api&P=0&h=180"
          alt="Customer 1"
          className="rounded-lg w-60 h-40 object-cover mx-2"/>
        <img
          src="https://tse4.mm.bing.net/th?id=OIP.HxV79tFMPfBAIo0BBF-sOgHaEy&pid=Api&P=0&h=180"
          alt="Customer 2"
          className="rounded-lg w-60 h-40 object-cover mx-2"/>
        <img
          src="https://tse4.mm.bing.net/th?id=OIP.HxV79tFMPfBAIo0BBF-sOgHaEy&pid=Api&P=0&h=180"
          alt="Customer 3"
          className="rounded-lg w-60 h-40 object-cover mx-2"/>
        <img
          src="https://tse4.mm.bing.net/th?id=OIP.HxV79tFMPfBAIo0BBF-sOgHaEy&pid=Api&P=0&h=180"
          alt="Customer 4"
          className="rounded-lg w-60 h-40 object-cover mx-2"/>
        <img
          src="https://tse4.mm.bing.net/th?id=OIP.HxV79tFMPfBAIo0BBF-sOgHaEy&pid=Api&P=0&h=180"
          alt="Customer 5"
          className="rounded-lg w-60 h-40 object-cover mx-2"/>
        
        {/* Duplicate Set of Images for Continuous Scrolling */}
        <img
          src="https://tse4.mm.bing.net/th?id=OIP.HxV79tFMPfBAIo0BBF-sOgHaEy&pid=Api&P=0&h=180"
          alt="Customer 1"
          className="rounded-lg w-60 h-40 object-cover mx-2"/>
        <img
          src="https://tse4.mm.bing.net/th?id=OIP.HxV79tFMPfBAIo0BBF-sOgHaEy&pid=Api&P=0&h=180"
          alt="Customer 2"
          className="rounded-lg w-60 h-40 object-cover mx-2"/>
        <img
          src="https://tse4.mm.bing.net/th?id=OIP.HxV79tFMPfBAIo0BBF-sOgHaEy&pid=Api&P=0&h=180"
          alt="Customer 3"
          className="rounded-lg w-60 h-40 object-cover mx-2"/>
        <img
          src="https://tse4.mm.bing.net/th?id=OIP.HxV79tFMPfBAIo0BBF-sOgHaEy&pid=Api&P=0&h=180"
          alt="Customer 4"
          className="rounded-lg w-60 h-40 object-cover mx-2"/>
        <img
          src="https://tse4.mm.bing.net/th?id=OIP.HxV79tFMPfBAIo0BBF-sOgHaEy&pid=Api&P=0&h=180"
          alt="Customer 5"
          className="rounded-lg w-60 h-40 object-cover mx-2"/>
      </div>
    </>
  );
}
