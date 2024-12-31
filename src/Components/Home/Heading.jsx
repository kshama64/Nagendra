import React from 'react';

export default function Heading() {
  return (
    <div className="w-full max-w-8xl mx-auto px-4 py-8">
      {/* Heading Section */}
      <div className="text-center mb-8 mt-10">
        <h1 className="text-3xl font-bold text-gray-800">Why We Stand Out</h1>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Section 1 */}
        <div className="p-4 border rounded-lg shadow-md bg-white">
          <h2 className="text-xl font-semibold text-black font-serif">Seamless Gifting Experience</h2>
          <p className="mt-2 text-gray-600">
            GiftDgift offers a seamless and hassle-free platform for all your gifting needs. With just a single click, you can easily collect funds, organize events, and send personalized presents, making the entire gifting process effortless.
          </p>
        </div>
        {/* Section 2 */}
        <div className="p-4 border rounded-lg shadow-md bg-white">
          <h2 className="text-xl font-semibold text-black font-serif">Secure and Reliable Payment Gateway</h2>
          <p className="mt-2 text-gray-600">
            With GiftDgift, you can trust that your payments are secure and reliable. Our innovative payment gateway ensures the safety of your transactions, giving you peace of mind when sending or receiving gifts.
          </p>
        </div>

        {/* Section 3 */}
        <div className="p-4 border rounded-lg shadow-md bg-white">
          <h2 className="text-xl font-semibold text-black font-serif">Convenience for Group Gifting</h2>
          <p className="mt-2 text-gray-600">
            GiftDgift simplifies the process of group gifting. Whether it's for a birthday, wedding, or any special occasion, our platform allows you to easily collect funds from multiple contributors and manage the entire process seamlessly, saving you time and effort.
          </p>
        </div>
      </div>
    </div>
  );
}
