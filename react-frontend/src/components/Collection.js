import React from 'react';

// Importing images
import mellowManPerfume from '../assets/images/mellow-man-perfume1.jpg';
import img0677 from '../assets/images/IMG_0677.jpeg';
import perfumesMan from '../assets/images/perfumes-man.jpg';
import vision from '../assets/images/vision.png';
import professional from '../assets/images/sy_girl.jpg'; // Assuming this file exists

const Collection = () => {
  // Hardcoded image data
  const collections = [
    { url: mellowManPerfume, altText: 'Gift Set', title: 'Gift Set' },
    { url: img0677, altText: 'Professional', title: 'Professional' },
    { url: perfumesMan, altText: 'Deodorant', title: 'Deodorant' },
    { url: vision, altText: 'Attar', title: 'Attar' },
    { url: professional, altText: 'Professional', title: 'Professional' },
  ];

  return (
    <div className="collections-slide bg-[#001c25] text-white p-4">
      <h2 className="collections-title text-center mb-4">COLLECTIONS Shivam</h2>
      <div className="collections-container flex justify-between items-center">
        {collections.map((collection, index) => (
          <div key={index} className="collection-item text-center p-2">
            <img
              className="img-fluid carousel-image mb-2"
              src={collection.url}
              alt={collection.altText}
              style={{ width: '100%', height: 'auto', maxHeight: '200px', objectFit: 'cover' }} // Ensuring consistent image size
            />
            <h3 className="mt-2">{collection.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
