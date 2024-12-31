import React from 'react';
import gift from "../assets/gift.webp"

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-10 px-5 md:px-10 mt-20 ">
      {/* First Section: About Us */}
      <div className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start mb-12">
    {/* Image Section */}
    <div className="w-full md:w-1/2 mb-8 md:mb-0 md:mr-8">
      <img
        src={gift}
        alt="About Us"
        className="rounded-xl border-4 border-gray-200 shadow-lg object-cover w-full h-80 md:h-full transition-transform duration-300 ease-in-out hover:scale-105"
      />
    </div>

    {/* Content Section */}
    <div className="w-full md:w-1/2">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
        Our Company
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed mt-20">
        At <span className="font-semibold text-gray-800 ">GiftDgift</span>, we believe in the power of giving. Our innovative payment gateway is designed to make the act of gifting as easy as a single click. Whether you're looking to collect funds for a group gift, organize a charity event, or simply send a personalized present, our platform is here to make the entire process smooth, secure, and hassle-free. With GiftDgift, you can bring joy to your loved ones and make a difference in the world, all at the same time.
      </p>
      <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
        Join us to explore exciting new ways to enjoy your time and connect with loved ones. Our mission is to bring joy and create unforgettable memories.
      </p>
    </div>
  </div>
</div>


      {/* Second Section: Our Services */}
      <div className="max-w-7xl mx-auto">
  {/* "Our Team" Heading */}
  {/* <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Our Team</h1> */}

  {/* Team Members */}
  {/* <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
    <div className="flex-1 bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
      <img
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
        alt="Team Member 1"
        className="rounded-lg object-cover h-60 w-full mb-6"
      />
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Sarah Johnson</h2>
      <p className="text-gray-600 leading-relaxed">
        Marketing Manager - Bringing creative ideas to life
      </p>
    </div>

    <div className="flex-1 bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
      <img
        src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39"
        alt="Team Member 2"
        className="rounded-lg object-cover h-60 w-full mb-6"
      />
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Emily Smith</h2>
      <p className="text-gray-600 leading-relaxed">
        Customer Support Specialist - Ensuring a seamless experience
      </p>
    </div>

    <div className="flex-1 bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
      <img
        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
        alt="Team Member 3"
        className="rounded-lg object-cover h-60 w-full mb-6"
      />
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Michael Davis</h2>
      <p className="text-gray-600 leading-relaxed">
        Software Engineer - Building the future of gifting
      </p>
    </div>
  </div> */}

  {/* Button */}
  {/* <div className="mt-10 flex justify-center">
    <button className="bg-slate-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-slate-800 transition-colors duration-300">
      CONTACT US
    </button>
  </div> */}
</div>

    </div>
  );
}
