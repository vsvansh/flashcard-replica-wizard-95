
import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Quizlet has helped me improve my grades and understand concepts much better. It's my go-to study tool!",
      name: "Sarah K.",
      role: "College Student",
      stars: 5
    },
    {
      quote: "As a teacher, I love creating study sets for my students. It's made reviewing material so much more engaging.",
      name: "Mark T.",
      role: "High School Teacher",
      stars: 5
    },
    {
      quote: "The spaced repetition in Learn mode helped me ace my medical terminology exam. Couldn't have done it without Quizlet!",
      name: "James L.",
      role: "Medical Student",
      stars: 5
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center text-quizlet-dark-gray mb-12">
          What our users say
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-quizlet-light-gray p-6 rounded-lg">
              <div className="flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-quizlet-yellow fill-current" />
                ))}
              </div>
              <p className="text-quizlet-dark-gray mb-4 text-lg">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-quizlet-dark-gray">{testimonial.name}</p>
                <p className="text-quizlet-text-gray">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
