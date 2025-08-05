import React from 'react';
import Illustration from '../assets/Herosection.svg';

const Hero = () => {
  return (
    <>
      <div id='Hero'>
        <div className="bg-white px-6 py-10 md:py-20 flex flex-col md:flex-row md:items-center justify-between h-auto relative">
          
          {/* Left Section */}
          <div className="md:w-1/2 text-center md:text-left space-y-6 p-9 mb-10 md:mb-0">

            <div className="inline-flex items-center space-x-2 bg-white-100 text-blue-600 px-4 py-1 rounded-full text-sm border-2" role="status">
              <span aria-hidden="true">📦</span>
              <p>Helping 500+ users reconnect with their lost items</p>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Simplifying <span className="text-indigo-600">Lost & Found</span> Experiences
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-600">
              Our platform bridges the gap between people and their lost belongings. Post, search, and reclaim items in just a few clicks.
            </p>

            {/* Email Subscription */}
            <div className="flex flex-col md:flex-row items-center mt-6 space-y-4 md:space-y-0">
              <input
                type="email"
                className="border border-gray-300 px-4 py-3 rounded-lg w-full md:w-64 focus:outline-none"
                placeholder="Enter your email to stay updated"
              />
              <button className="bg-gray-900 text-white px-6 py-3 rounded-lg mt-2 md:mt-0 md:ml-4 hover:bg-gray-700 w-full md:w-auto">
                Notify Me
              </button>
            </div>

            {/* Icons Section */}
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center">
              {/* Trust & Safety */}
              <div className="flex items-center space-x-2">
                <span className="bg-white-200 text-gray-600 p-2 border-2 rounded-full">🔐</span>
                <div>
                  <p className="font-semibold text-gray-900">Secure Platform</p>
                  <p className="text-sm text-gray-600">Privacy-first reporting & claiming</p>
                </div>
              </div>
              {/* Verified Matches */}
              <div className="flex items-center space-x-2">
                <span className="bg-purple-100 text-purple-600 p-2 rounded-full">🔍</span>
                <div>
                  <p className="font-semibold text-gray-900">Verified Matches</p>
                  <p className="text-sm text-gray-600">Smart search with community validation</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Section */}
          <div className="md:w-2/5 flex items-center justify-center">
            <img
              src={Illustration}
              alt="Lost and found illustration"
              className="w-full h-auto max-w-full max-h-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
