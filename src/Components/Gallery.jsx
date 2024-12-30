import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Gallery() {
  const images = [
    "https://img.freepik.com/free-photo/three-gift-boxes-with-red-ribbons-one-that-says-christmas-it_1340-25936.jpg",
    "https://img.freepik.com/free-photo/boxing-day-celebration-with-balloons_23-2151013706.jpg",
    "https://img.freepik.com/free-photo/boxing-day-celebration-with-balloons_23-2151013696.jpg",
    "https://img.freepik.com/free-photo/colorful-gift-box-creating-festive-joyful-atmosphere_1268-30654.jpg",
    "https://img.freepik.com/free-photo/children-celebrating-birthday_23-2148155318.jpg",
    "https://img.freepik.com/free-photo/my-best-friends-always-remember-about-my-birthday_329181-7590.jpg",
    "https://img.freepik.com/free-photo/portrait-festive-smiling-brunette-female-with-long-curly-hair-dressed-red-sweater-holds-christmas-gifts_613910-9982.jpg",
    "https://img.freepik.com/free-photo/anxious-pretty-young-girl-with-reindeer-headband-looks-dropped-popcorn-sitting-armchair-with-friend-christmas-time-home_141793-43490.jpg",
  ];

  const imageRefs = useRef([]);

  // GSAP animation on hover with advanced easing

  const animateImage = (index) => {
    gsap.to(imageRefs.current[index], {
      scale: 1.2,
      rotation: 10,
      duration: 0.6,
      ease: "elastic.out(1, 0.75)", // Advanced ease for bouncy effect
    });
  };

  const resetAnimation = (index) => {
    gsap.to(imageRefs.current[index], {
      scale: 1,
      rotation: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.75)",
    });
  };

  // Initial entry animation with staggered effect and responsive handling
  useEffect(() => {
    imageRefs.current.forEach((img, index) => {
      gsap.fromTo(
        img,
        { y: 100, opacity: 0 }, // Initial position and opacity
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: index * 0.2, // Staggered animation
          ease: "power3.out",
        }
      );
    });
  }, []);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 text-gray-800">Our Professional Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-md transition-all duration-300 ease-in-out"
              ref={(el) => (imageRefs.current[index] = el)} // Store reference
              onMouseEnter={() => animateImage(index)} // Animation on hover
              onMouseLeave={() => resetAnimation(index)} // Reset animation on leave
>
              <img
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-60 object-cover transition-transform duration-500 ease-in-out"/>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300 ease-in-out">
                <span className="text-white text-lg font-semibold transform scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out">
                  Image {index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
