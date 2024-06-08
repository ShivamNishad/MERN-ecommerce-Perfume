import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import goldenPerfumeImage from '../assets/images/golden-perfume.webp';
import bluPerfumeImage from '../assets/images/blu-full-slide.webp';
import silverPerfumeImage from '../assets/images/siliverslider.webp';

const FullImageSection = () => {
  const images = [
    goldenPerfumeImage,
    bluPerfumeImage,
    silverPerfumeImage,
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
      slidesToSlide: 1,
      fixedWidth: 300, // Set a fixed width for the images on mobile
      height: 400, // Set a fixed height for the images on mobile
    },
  };

  return (
    <section className="section-container">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        showDots={false}
        draggable
        swipeable
        itemClass="carousel-item-padding-40-px"
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="full-image"
            style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'cover' }}
          />
        ))}
      </Carousel>
    </section>
  );
};

export default FullImageSection;
