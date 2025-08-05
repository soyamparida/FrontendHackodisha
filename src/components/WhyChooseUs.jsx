import React from 'react';
import { FaClock, FaStar, FaUsers, FaLaptopCode } from 'react-icons/fa';

const WhyChooseUs = () => {
  const differentiators = [
    {
      icon: <FaClock size={40} className="text-indigo-500" />,
      title: 'Quick Reporting & Response',
      description: 'Our platform enables users to report lost or found items swiftly with real-time visibility.',
    },
    {
      icon: <FaStar size={40} className="text-indigo-500" />,
      title: 'Verified Listings',
      description: 'We ensure authenticity by verifying posts to build a trustworthy environment for users.',
    },
    {
      icon: <FaUsers size={40} className="text-indigo-500" />,
      title: 'Community-Driven',
      description: 'Built around community support, our system helps people help each other find what’s lost.',
    },
    {
      icon: <FaLaptopCode size={40} className="text-indigo-500" />,
      title: 'Smart Matching Engine',
      description: 'We use intelligent filters and smart search to connect owners with the right finders quickly.',
    },
  ];

  return (
    <section id='whyus' className="bg-gray-50 py-16 px-7">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Why Choose Us?</h2>
        <p className="text-lg text-gray-600 mb-12">
          Here's what makes our Lost & Found platform reliable, secure, and effective.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-8 transition transform hover:scale-105"
            >
              <div className="flex justify-center mb-6">{item.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
