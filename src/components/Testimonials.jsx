import "../styles.css";

import { useState } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      quote: "This is the best product I have ever used!",
      author: "John Doe",
    },
    {
      quote: "I love this product!",
      author: "Jane Doe",
    },
    {
      quote: "I can't live without this product!",
      author: "Joe Doe",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex(
      (currentIndex + testimonials.length - 1) % testimonials.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  return (
    <div className="testimonials">
      <div className="testimonials-quote">
        {testimonials[currentIndex].quote}
      </div>
      <div className="testimonials-author">
        {testimonials[currentIndex].author}
      </div>

      <div className="testimonials-nav">
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>next</button>
      </div>
    </div>
  );
};

export default Testimonials;
