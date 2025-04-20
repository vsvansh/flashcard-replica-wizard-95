
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";

interface FlashcardProps {
  term: string;
  definition: string;
}

const Flashcard: React.FC<FlashcardProps> = ({ term, definition }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { toast } = useToast();

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    toast({
      title: isFlipped ? "Showing Term" : "Showing Definition",
      description: "Click again to flip the card",
      duration: 1500,
    });
  };

  return (
    <div 
      className={`flashcard w-full h-64 cursor-pointer hover-scale ${isFlipped ? 'flipped' : ''}`} 
      onClick={handleFlip}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleFlip();
        }
      }}
    >
      <div className="flashcard-inner relative w-full h-full">
        <div className="flashcard-front absolute w-full h-full bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex items-center justify-center hover:shadow-md transition-shadow">
          <div className="text-center">
            <div className="text-xs text-quizlet-text-gray uppercase mb-2">TERM</div>
            <div className="text-2xl font-medium text-quizlet-dark-gray">{term}</div>
          </div>
        </div>
        <div className="flashcard-back absolute w-full h-full bg-quizlet-light-blue border border-gray-200 rounded-lg shadow-sm p-6 flex items-center justify-center hover:shadow-md transition-shadow">
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
