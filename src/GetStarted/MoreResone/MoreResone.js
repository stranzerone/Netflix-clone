import React from 'react';
import { FaTv } from "react-icons/fa";
import './More.css';

const GradientDivsPage = () => {
  // Sample data to map over with additional fields for title, paragraph, and image
  const items = [
    { id: 1, title: 'Enjoy on your TV', para: 'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.', imgUrl: '/path/to/image1.jpg' },
    { id: 2, title: 'Download your shows to watch offline', para: 'Save your favourites easily and always have something to watch.', imgUrl: '/path/to/image2.jpg' },
    { id: 3, title: 'Watch everywhere', para: 'Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.', imgUrl: '/path/to/image3.jpg' },
    { id: 4, title: 'Create profiles for kids', para: 'Send kids on adventures with their favourite characters in a space made just for them — free with your membership.', imgUrl: '/path/to/image4.jpg' },
  ];

  return (
    <div className="p-4">
      <h1 className='ms-[4vw] text-2xl font-bold'>More Reasons To Join</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-10">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative w-full h-[40vh] border-none rounded-lg text-white text-start font-sans p-4"
            style={{
              background: 'linear-gradient(149deg, #192247 0%, #210e17 99.08%)', // Custom gradient background
              backgroundImage: 'linear-gradient(149deg, rgb(25, 34, 71) 0%, rgb(33, 14, 23) 99.08%)',
              backgroundPosition: 'initial',
              backgroundSize: 'initial',
              backgroundRepeat: 'initial',
              backgroundAttachment: 'initial',
              backgroundOrigin: 'initial',
              backgroundClip: 'initial',
              backgroundColor: 'initial',
            }}
          >
            <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
            <p className="mb-4 text-gray-400 text-md">{item.para}</p>

            {/* Positioning the FaTv icon at the bottom-right corner */}
          
          </div>
        ))}
      </div>
    </div>
  );
};

export default GradientDivsPage;

