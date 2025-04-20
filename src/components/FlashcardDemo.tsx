
import React, { useState } from 'react';
import Flashcard from './Flashcard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const FlashcardDemo = () => {
  const flashcards = [
    { term: 'Photosynthesis', definition: 'The process by which green plants and some other organisms use sunlight to synthesize foods with carbon dioxide and water.' },
    { term: 'Mitosis', definition: 'A type of cell division that results in two daughter cells each having the same number and kind of chromosomes as the parent nucleus.' },
    { term: 'Osmosis', definition: 'The process by which molecules of a solvent tend to pass through a semipermeable membrane from a less concentrated solution into a more concentrated one.' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length);
  };

  return (
    <div className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-quizlet-dark-gray mb-4">
            Try our flashcards
          </h2>
          <p className="text-xl text-quizlet-text-gray max-w-3xl mx-auto">
            Click on the card to flip it and see the definition. Use the arrows to navigate between cards.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <button 
              onClick={goToPrevious} 
              className="p-2 rounded-full hover:bg-quizlet-light-gray transition-colors"
              aria-label="Previous card"
            >
              <ChevronLeft className="h-6 w-6 text-quizlet-dark-gray" />
            </button>
            
            <div className="text-quizlet-text-gray">
              {currentIndex + 1} / {flashcards.length}
            </div>
            
            <button 
              onClick={goToNext} 
              className="p-2 rounded-full hover:bg-quizlet-light-gray transition-colors"
              aria-label="Next card"
            >
              <ChevronRight className="h-6 w-6 text-quizlet-dark-gray" />
            </button>
          </div>
          
          <Flashcard 
            term={flashcards[currentIndex].term} 
            definition={flashcards[currentIndex].definition} 
          />
          
          <div className="text-center mt-6 text-quizlet-text-gray">
            Click the card to flip it!
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashcardDemo;
