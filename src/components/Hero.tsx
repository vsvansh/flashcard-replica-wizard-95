
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="bg-quizlet-light-blue py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-quizlet-dark-gray mb-4">
            The best digital flashcards and study app
          </h1>
          <p className="text-xl md:text-2xl text-quizlet-text-gray mb-8">
            Join over 60 million students using Quizlet's science-backed flashcards, practice tests and expert solutions to improve their grades and reach their goals.
          </p>
          <Button className="bg-quizlet-blue hover:bg-quizlet-dark-blue text-white font-medium px-8 py-3 text-lg rounded-md">
            Sign up for free
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
