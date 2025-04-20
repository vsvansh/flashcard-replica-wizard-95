
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="bg-white py-16 md:py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-quizlet-dark-gray mb-6">
            How do you want to study?
          </h1>
          <p className="text-xl md:text-2xl text-quizlet-dark-gray mb-8">
            Master whatever you're learning with Quizlet's interactive flashcards, practice tests, and study activities.
          </p>
          <div className="flex flex-col items-center space-y-4">
            <Button className="bg-quizlet-blue hover:bg-quizlet-dark-blue text-white font-medium px-8 py-3 text-lg rounded-full w-48">
              Sign up for free
            </Button>
            <Button variant="link" className="text-quizlet-blue hover:underline">
              I'm a teacher
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
