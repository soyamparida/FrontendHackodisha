import React from 'react';

const CallToAction = () => {
  return (
    <section className="bg-indigo-600 text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Lost Something or Found an Item?</h2>
        <p className="text-lg mb-8">
          Join our community to report lost items or help someone reclaim what they’ve misplaced.
        </p>
        
        <a
          href="/report" 
          className="bg-white text-indigo-600 font-semibold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105"
        >
          Report Now
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
