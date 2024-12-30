import React from 'react';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-16 px-5 md:px-10 mt-20">
      <div className="max-w-6xl w-full bg-white rounded-lg shadow-lg p-8 md:p-16">
        {/* Get In Touch Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Get In Touch</h1>

        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Address Section */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Address</h2>
            <p className="text-gray-600 mb-4">
              123 Gift Avenue,<br />
              Suite 456, Citytown,<br />
              Country, ZIP 78901
            </p>
            <p className="text-gray-600">
              Email: info@giftdgift.com<br />
              Phone: +123 456 7890
            </p>
          </div>

          {/* Contact Form Section */}
          <div className="flex-1">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Name */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Email"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="subject">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Subject"
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
