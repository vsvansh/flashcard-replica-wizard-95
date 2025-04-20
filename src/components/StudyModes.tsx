
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const StudyModes = () => {
  const modes = [
    {
      title: 'Flashcards',
      color: 'bg-quizlet-blue',
      textColor: 'text-white',
      content: (
        <div className="relative h-64 bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="absolute inset-0 bg-quizlet-blue/10"></div>
          <div className="p-4 relative">
            <div className="bg-white rounded-lg shadow-md p-3 m-4 rotate-[-6deg] transform">
              <div className="text-sm text-gray-500 mb-1">TERM</div>
              <div className="text-xl font-medium">superior vena cava</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-3 m-4 rotate-[6deg] transform mt-12">
              <div className="text-sm text-gray-500 mb-1">DEFINITION</div>
              <div className="text-xl font-medium">vena cava</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Practice Tests',
      color: 'bg-quizlet-orange',
      textColor: 'text-quizlet-dark-gray',
      content: (
        <div className="relative h-64 bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="absolute inset-0 bg-quizlet-orange/10"></div>
          <div className="p-6 relative">
            <div className="grid grid-cols-3 gap-4 mb-4 text-quizlet-dark-gray">
              <div className="text-center">
                <div className="font-semibold text-xl">Score</div>
                <div className="text-2xl font-bold">84%</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-xl">Results</div>
                <div className="text-2xl font-bold">76/90</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-xl">Total time</div>
                <div className="text-2xl font-bold">70m</div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-md p-3 mt-2">
              <div className="flex items-center gap-2 mb-2">
                <div className="text-lg font-medium">1.</div>
                <div className="h-2 bg-gray-200 rounded-full flex-grow"></div>
              </div>
              <div className="flex items-center ml-6 my-2">
                <div className="text-red-500 mr-2">✕</div>
                <div className="bg-red-100 h-2 w-20 rounded-full"></div>
                <div className="ml-2">A.</div>
              </div>
              <div className="flex items-center ml-6 my-2">
                <div className="mr-2">○</div>
                <div className="bg-gray-200 h-2 w-16 rounded-full"></div>
                <div className="ml-2">B.</div>
              </div>
              <div className="flex items-center ml-6 my-2">
                <div className="text-green-500 mr-2">✓</div>
                <div className="bg-green-200 h-2 w-24 rounded-full"></div>
                <div className="ml-2">C.</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Expert Solutions',
      color: 'bg-quizlet-green',
      textColor: 'text-quizlet-dark-gray',
      content: (
        <div className="relative h-64 bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="absolute inset-0 bg-quizlet-green/10"></div>
          <div className="p-6 relative">
            <div className="flex items-start gap-4">
              <div className="bg-gray-800 rounded-md w-20 h-28 flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="text-sm">Calculus</div>
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-gray-200 h-3 w-full rounded-full mb-3"></div>
                <div className="bg-gray-200 h-3 w-5/6 rounded-full mb-3"></div>
                <div className="bg-gray-200 h-3 w-4/6 rounded-full mb-3"></div>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex items-center">
                <div className="font-medium text-lg">Solution</div>
                <div className="ml-2 px-2 py-1 bg-green-100 text-green-800 rounded-md text-xs flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-1"></span>
                  Verified
                </div>
              </div>
              <div className="mt-2">
                <div className="font-medium mb-1">Step 1</div>
                <div className="h-2 bg-gray-200 rounded-full w-full mb-2"></div>
                <div className="h-2 bg-gray-200 rounded-full w-full mb-2"></div>
                <div className="h-2 bg-gray-200 rounded-full w-5/6 mb-2"></div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Learn',
      color: 'bg-quizlet-blue',
      textColor: 'text-quizlet-dark-gray',
      content: (
        <div className="relative h-64 bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="absolute inset-0 bg-blue-100/50"></div>
          <div className="p-6 relative">
            <div className="flex justify-center">
              <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-xs">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-xl font-medium">Tree</div>
                  <img src="/lovable-uploads/c4f45616-d042-435c-b956-19afe26eee56.png" alt="Tree" className="h-16 w-16 object-contain" />
                </div>
                <div className="text-green-500 font-medium text-sm mb-3">Awesome!</div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="border border-gray-300 rounded-md p-2 text-center">Tierra</div>
                  <div className="border border-gray-300 rounded-md p-2 text-center">Hoja</div>
                  <div className="border border-gray-300 rounded-md p-2 text-center">Raiz</div>
                  <div className="border border-green-300 rounded-md p-2 text-center bg-green-50 flex items-center justify-center">
                    <span className="text-green-500 mr-1">✓</span> Árbol
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <input 
                type="text" 
                placeholder="Type the answer" 
                className="border-b-2 border-gray-300 focus:border-quizlet-blue bg-transparent text-center p-2 outline-none w-48"
              />
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="py-8 bg-white">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          {modes.map((mode, index) => (
            <div key={index} className={`rounded-t-lg overflow-hidden ${mode.color}`}>
              <div className={`p-4 font-semibold text-xl text-center ${mode.textColor}`}>
                {mode.title}
              </div>
              <div className="bg-white">
                {mode.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudyModes;
