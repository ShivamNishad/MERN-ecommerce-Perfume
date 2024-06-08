// src/TestimonialCard.js
import React from 'react';

const TestimonialsStar = ({ testimonial }) => {
  return (
    <div className="testimonial-card">
      <div className="stars">★★★★★</div>
      <p>{testimonial.text}</p>
      <div className="testimonial-author bg-[#dec27e;]">
        <img src={testimonial.image} alt={testimonial.name} />
        <div>
          <h3>{testimonial.name}</h3>
          <p>{testimonial.title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsStar;
