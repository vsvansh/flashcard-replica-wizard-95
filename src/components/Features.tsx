
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Features = () => {
  const flashcardSets = [
    {
      title: 'Monster Guessing Game',
      terms: 64,
      user: {
        name: 'rguti',
        avatar: 'R',
        color: 'bg-orange-500',
      },
      image: '/lovable-uploads/ed37b215-dd06-4205-b53d-03cd3bb368d4.png'
    },
    {
      title: 'SEJPME II Module 7',
      terms: 31,
      user: {
        name: 'dwgeer13',
        avatar: 'D',
        color: 'bg-yellow-400',
      }
    },
    {
      title: 'ServSafe Alcohol Course',
      terms: 40,
      user: {
        name: 'superashleymoorhead',
        avatar: 'S',
        color: 'bg-blue-500',
      }
    },
    {
      title: 'Endocrine System Unit Quizlet',
      terms: 59,
      user: {
        name: 'MrSayedScience',
        avatar: 'M',
        color: 'bg-pink-500',
      }
    },
    {
      title: 'Unit 8 - AP Biology',
      terms: 33,
      user: {
        name: 'alainawahl',
        avatar: 'A',
        color: 'bg-purple-500',
      }
    },
    {
      title: 'RL/RI 7.1 Academic Vocabulary',
      terms: 8,
      user: {
        name: 'Maria_Xiong1',
        avatar: 'M',
        color: 'bg-gray-500',
      }
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center text-quizlet-dark-gray mb-12">
          Popular flashcard sets
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {flashcardSets.slice(0, 6).map((set, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-quizlet-dark-gray mb-3">{set.title}</h3>
                <div className="bg-gray-100 text-gray-600 text-sm inline-block px-2 py-1 rounded-full mb-4">
                  {set.terms} terms
                </div>
                <div className="flex items-center">
                  <div className={`w-8 h-8 rounded-full ${set.user.color} flex items-center justify-center text-white mr-2`}>
                    {set.user.avatar}
                  </div>
                  <span className="text-quizlet-text-gray">{set.user.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <div className="flex items-center space-x-4">
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-quizlet-text-gray hover:bg-gray-100 transition-colors">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="text-quizlet-text-gray font-medium">1/5</div>
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-quizlet-text-gray hover:bg-gray-100 transition-colors">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
