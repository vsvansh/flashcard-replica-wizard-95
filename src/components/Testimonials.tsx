
import React from 'react';
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-quizlet-dark-gray mb-6">
              Test prep for any subject
            </h2>
            <p className="text-lg text-quizlet-text-gray mb-6">
              Memorize anything with personalized practice tests and study sessions in Learn. 98% of students say Quizlet has improved their understanding.
            </p>
            <Button className="bg-quizlet-blue hover:bg-quizlet-dark-blue text-white font-medium px-6 py-3 rounded-full">
              Get started
            </Button>
          </div>

          <div className="bg-blue-100 p-6 rounded-lg">
            <div className="h-80 flex items-center justify-center">
              <div className="bg-white rounded-lg shadow-md p-5 w-80">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M15 8L9 14L6 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="ml-2 font-medium">Learn</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mb-6">
                  <div className="text-xl font-medium">Tree</div>
                  <img src="/lovable-uploads/c4f45616-d042-435c-b956-19afe26eee56.png" alt="Tree" className="h-16 w-16 object-contain" />
                </div>
                
                <div className="text-green-500 font-medium text-sm mb-4">Awesome!</div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="border border-gray-300 rounded-md p-2 text-center">Tierra</div>
                  <div className="border border-gray-300 rounded-md p-2 text-center">Hoja</div>
                  <div className="border border-gray-300 rounded-md p-2 text-center">Raiz</div>
                  <div className="border border-green-300 rounded-md p-2 text-center bg-green-50 flex items-center justify-center">
                    <span className="text-green-500 mr-1">✓</span> Árbol
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-10 right-10 bg-white rounded-lg shadow-md p-3">
              <div className="font-medium mb-2">Study Options</div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span>Multiple Choice</span>
                  <div className="w-12 h-6 bg-blue-500 rounded-full relative">
                    <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Written</span>
                  <div className="w-12 h-6 bg-gray-300 rounded-full relative">
                    <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Flashcards</span>
                  <div className="w-12 h-6 bg-gray-300 rounded-full relative">
                    <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
