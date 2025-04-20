
import React, { useState } from 'react';

interface FlashcardProps {
  term: string;
  definition: string;
}

const Flashcard: React.FC<FlashcardProps> = ({ term, definition }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className={`flashcard w-full h-64 cursor-pointer ${isFlipped ? 'flipped' : ''}`} 
      onClick={handleFlip}
    >
      <div className="flashcard-inner relative w-full h-full">
        <div className="flashcard-front absolute w-full h-full bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex items-center justify-center">
          <div className="text-center">
            <div className="text-xs text-quizlet-text-gray uppercase mb-2">TERM</div>
            <div className="text-2xl font-medium text-quizlet-dark-gray">{term}</div>
          </div>
        </div>
        <div className="flashcard-back absolute w-full h-full bg-quizlet-light-blue border border-gray-200 rounded-lg shadow-sm p-6 flex items-center justify-center">
          <div className="text-center">
            <div className="text-xs text-quizlet-text-gray uppercase mb-2">DEFINITION</div>
            <div className="text-xl text-quizlet-dark-gray">{definition}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
