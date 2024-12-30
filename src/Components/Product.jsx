import React from 'react';
import logo from '../assets/gift.jpg';
import logo1 from '../assets/hart.jpg';
import logo2 from '../assets/gift.jpg'; // Add new image
import logo3 from '../assets/gift.jpg'; // Add new image

export default function Product() {
  return (
    <div className="pt-16 bg-gray-100">
      {/* Main Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">PRODUCTS</h1>
      </div>

      {/* Content Section 1 */}
      <div className="flex flex-col md:flex-row items-center md:items-start p-6 bg-white rounded-lg shadow-md mx-4 md:mx-20">
        {/* Image Section */}
        <div className="w-full md:w-1/2 p-4">
          <img
            src={logo}
            alt="Personalized Gift Baskets"
            className="rounded-lg shadow-lg object-cover w-full max-w-xs md:max-w-md max-h-64 md:max-h-80"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Personalized Gift Baskets
          </h2>
          <p className="text-gray-600 text-lg">
            Our personalized gift baskets are the perfect way to show someone you care. Each basket is carefully curated with a selection of high-quality products tailored to the recipient's tastes and preferences. From gourmet snacks and indulgent treats to spa essentials and luxury items, our gift baskets are sure to impress. 
          </p>
          
        </div>
      </div>

      {/* Content Section 2 */}
      <div className="flex flex-col md:flex-row-reverse items-center md:items-start p-6 bg-white rounded-lg shadow-md mx-4 md:mx-20 mt-6">
        {/* Image Section */}
        <div className="w-full md:w-1/2 p-4">
          <img
            src={logo1}
            alt="Custom Engraved Jewelry"
            className="rounded-lg shadow-lg object-cover w-full max-w-xs md:max-w-md max-h-64 md:max-h-80"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Custom Engraved Jewelry
          </h2>
          <p className="text-gray-600 text-lg">
            Make a statement with our custom engraved jewelry. Each piece is meticulously crafted to perfection, using only the finest materials. Our expert artisans will engrave your chosen design, initials, or special message, creating a one-of-a-kind piece.
          </p>
         
        </div>
      </div>

      {/* Content Section 3 */}
      <div className="flex flex-col md:flex-row items-center md:items-start p-6 bg-white rounded-lg shadow-md mx-4 md:mx-20 mt-6">
        {/* Image Section */}
        <div className="w-full md:w-1/2 p-4">
          <img
            src={logo2}
            alt="Luxury Gift Boxes"
            className="rounded-lg shadow-lg object-cover w-full max-w-xs md:max-w-md max-h-64 md:max-h-80"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Luxury Gift Boxes
          </h2>
          <p className="text-gray-600 text-lg">
            Indulge in luxury with our exquisite gift boxes. Each box is elegantly designed and filled with a curated selection of luxurious items. From premium chocolates and fine wines to designer accessories and beauty products, our gift boxes are the epitome of sophistication. 
          </p>
         
        </div>
      </div>

      {/* Bottom Contact Us Section */}
      <div className="text-center mt-12">
        <button className="bg-slate-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-xl">
          Contact Us
        </button>
      </div>
    </div>
  );
}
