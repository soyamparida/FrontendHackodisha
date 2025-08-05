import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How do I report a lost item?',
      answer: 'To report a lost item, simply create an account or log in, click on "Report Lost Item," and fill out the form with details such as item name, location, and description.',
    },
    {
      question: 'Can I report something I found?',
      answer: 'Absolutely! You can post found items by clicking "Report Found Item" and entering relevant details to help identify the rightful owner.',
    },
    {
      question: 'Is my personal information safe?',
      answer: 'Yes, we prioritize your privacy. Personal contact details are only shared after a match is verified and both parties consent to communicate.',
    },
    {
      question: 'How does the matching system work?',
      answer: 'Our smart matching system analyzes keywords, categories, and location data to suggest potential matches between lost and found listings.',
    },
    {
      question: 'What happens after a match is found?',
      answer: 'When a potential match is found, both users are notified and can initiate contact through a secure messaging system to confirm and reclaim the item.',
    },
    {
      question: 'Is the platform free to use?',
      answer: 'Yes, our platform is completely free to use for individuals. We aim to help as many people as possible reconnect with their belongings.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-12 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-4 md:p-6 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-left">{faq.question}</h3>
                <span className={`transition-transform ${openIndex === index ? 'transform rotate-180' : ''}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
              {openIndex === index && (
                <div className="p-4 md:p-6 text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
