import React from "react";

interface Testimonial {
  id: number;
  company: string;
  comment: string;
  rating: number;
  logo: string;
}

interface Props {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<Props> = ({ testimonial }) => {
  return (
    <div className="bg-card p-6 rounded-card shadow-card flex flex-col items-center text-center">
      <img src={testimonial.logo} alt={testimonial.company} className="w-20 h-20 mb-4 object-contain" />
      <p className="mb-2">{testimonial.comment}</p>
      <p className="font-bold">{testimonial.company}</p>
      <p>⭐ {testimonial.rating}</p>
    </div>
  );
};

export default TestimonialCard;
