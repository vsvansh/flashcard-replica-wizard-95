
import React from 'react';
import { Button } from "@/components/ui/button";

const StudyModes = () => {
  const modes = [
    {
      title: 'Flashcards',
      description: 'Master concepts with easy-to-use digital flashcards',
      image: '/placeholder.svg',
      color: 'bg-quizlet-blue',
    },
    {
      title: 'Learn',
      description: 'Personalized with AI to help you learn faster',
      image: '/placeholder.svg',
      color: 'bg-quizlet-green',
    },
    {
      title: 'Test',
      description: 'Practice with auto-generated tests to check your knowledge',
      image: '/placeholder.svg',
      color: 'bg-quizlet-orange',
    },
    {
      title: 'Match',
      description: 'Race against the clock in this fast-paced game',
      image: '/placeholder.svg',
      color: 'bg-quizlet-yellow',
    },
  ];

  return (
    <div className="py-16 bg-quizlet-light-gray">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-quizlet-dark-gray mb-4">
            Multiple ways to study, all in one place
          </h2>
          <p className="text-xl text-quizlet-text-gray max-w-3xl mx-auto">
            No matter how you like to study, Quizlet has you covered with various study modes designed to help you learn effectively.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modes.map((mode, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className={`h-2 ${mode.color}`}></div>
              <div className="p-6">
                <div className="mb-4 bg-gray-200 rounded-lg h-40 flex items-center justify-center">
                  <img src={mode.image} alt={mode.title} className="max-h-full" />
                </div>
                <h3 className="text-xl font-semibold text-quizlet-dark-gray mb-2">{mode.title}</h3>
                <p className="text-quizlet-text-gray mb-4">{mode.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-quizlet-blue hover:bg-quizlet-dark-blue text-white font-medium px-6 py-3 rounded-md">
            Try it for free
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StudyModes;
