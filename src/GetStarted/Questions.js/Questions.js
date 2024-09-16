import React, { useState } from 'react';
import { FaPlus, FaTimes } from 'react-icons/fa';

const FAQPage = () => {
  const [expanded, setExpanded] = useState(null);

  const faqs = [
    { id: 1, question: 'What is Netflix?', answer: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more.' },
    { id: 2, question: 'How much does Netflix cost?', answer: 'Netflix offers several subscription plans, ranging from basic to premium, with prices varying by country and plan type.' },
    { id: 3, question: 'Where can I watch?', answer: 'You can watch Netflix on various devices including smart TVs, tablets, smartphones, laptops, and streaming devices like Chromecast and Roku.' },
    { id: 4, question: 'How do I cancel?', answer: 'To cancel your Netflix subscription, go to your account settings and select "Cancel Membership". Follow the prompts to complete the cancellation process.' },
    { id: 5, question: 'What can I watch on Netflix?', answer: 'Netflix offers a diverse range of content including movies, TV series, documentaries, and original content produced by Netflix.' },
    { id: 6, question: 'Is Netflix good for kids?', answer: 'Netflix has a Kids section with content appropriate for children, and parental controls allow you to restrict content based on age.' },
  ];

  const handleToggle = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="p-6 min-h-screen  flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="space-y-4 w-[80vw]">
        {faqs.map((faq) => (
          <div key={faq.id} className="bg-[#2D2D2D] p-4 shadow-md">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => handleToggle(faq.id)}>
              <h2 className="text-xl font-semibold">{faq.question}</h2>
              {expanded === faq.id ? (
                <FaTimes className="text-red-500" />
              ) : (
                <FaPlus className="text-gray-600" />
              )}
            </div>
            {expanded === faq.id && (
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
