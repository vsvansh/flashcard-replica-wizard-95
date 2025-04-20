
import React from 'react';
import { Button } from "@/components/ui/button";

const FlashcardDemo = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="bg-purple-200 p-6 rounded-lg relative">
            <div className="h-96 flex items-center justify-center">
              <div className="transform rotate-[-3deg]">
                <div className="bg-white p-5 shadow-md rounded-md border border-gray-200 w-72">
                  <div className="font-bold text-lg mb-2">Biology 101 Class Notes</div>
                  <div className="text-sm mb-3">Chromosomes</div>
                  <div className="bg-red-100 text-xs p-1 rounded mb-2 w-24">Important</div>
                  <div className="text-sm text-gray-700 space-y-2">
                    <p>Found in the nucleus of eukaryotes</p>
                    <p>They are composed of DNA and associated proteins</p>
                    <p>Function is to carry the genetic material</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-6 right-6 bg-purple-300 text-purple-800 px-3 py-1 rounded-md font-semibold">
              Study Guides
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-quizlet-dark-gray mb-6">
              Make class material instantly studiable
            </h2>
            <p className="text-lg text-quizlet-text-gray mb-6">
              Turn your slides, videos, and notes into flashcard sets, practice tests, and study guides.
            </p>
            <Button className="bg-quizlet-blue hover:bg-quizlet-dark-blue text-white font-medium px-6 py-3 rounded-full">
              Try it out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashcardDemo;
