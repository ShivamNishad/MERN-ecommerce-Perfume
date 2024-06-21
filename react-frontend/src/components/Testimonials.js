import React from 'react';
import Slider from 'react-slick';
import TestimonialCard from './TestimonialsStar'; // Correct import for TestimonialCard component

const testimonialsData = [
  {
    name: "Marvin McKinney",
    title: "CEO of Coca Soft",
    text: "It was a pleasure working with Saturn. They understood the brief correctly and delivered great designs exceeding the expectations.",
    image: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_15.png",
  },
  {
    name: "Kathryn Murphy",
    title: "Founder ABC Studio",
    text: "With Saturn the results are very satisfying. Wrapped with high quality and innovative design that makes a surge of visitors expectations.",
    image: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
  },
  {
    name: "Beby Aduhai",
    title: "CEO of Sans Design",
    text: "It was a pleasure working with Saturn. They understood the brief correctly and delivered great designs exceeding the expectations.",
    image: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_3.jpeg",
  },
  {
    name: "John Doe",
    title: "Manager at XYZ Corp",
    text: "It was a pleasure working with Saturn. They understood the brief correctly and delivered great designs exceeding the expectations.",
    image: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_2.jpeg",
  }
];

const TestimonialsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonials-section bg-[#001c25]">
      <h2 style={{ fontWeight: 400, fontSize: '3rem', fontFamily: 'Abril Fatface', color: '#dec27e' }}>TESTIMONIALS</h2>
      <Slider className="testimonials" {...settings}>
        {testimonialsData.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialsSection;
