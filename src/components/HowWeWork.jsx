import React from 'react';
import { FaSearch, FaLaptopCode, FaRocket } from 'react-icons/fa';

const HowWeWork = () => {
  const steps = [
    {
      icon: <FaSearch size={40} className="text-indigo-600" />,
      title: 'Report or Search Items',
      description: 'Users can quickly report lost items or browse through found listings posted by others.',
    },
    {
      icon: <FaLaptopCode size={40} className="text-indigo-600" />,
      title: 'Smart Matching System',
      description: 'Our system intelligently matches lost and found items using keywords, categories, and locations.',
    },
    {
      icon: <FaRocket size={40} className="text-indigo-600" />,
      title: 'Connect & Reclaim',
      description: 'We facilitate a secure connection between the owner and finder to ensure successful item return.',
    },
  ];

  return (
    <section id='workflow' className="bg-gray-50 py-16 px-7">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl text-black-500 font-bold mb-8">How It Works</h2>
        <p className="text-lg text-gray-600 mb-12">
          Our Lost & Found system is designed to reunite people with their lost items in just a few simple steps.
        </p>
        <div className="flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-8 md:w-1/3 transition transform hover:scale-105"
            >
              <div className="flex justify-center mb-6">{step.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
